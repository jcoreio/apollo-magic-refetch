// @flow

import type { TypeMetadata } from './typesQuery'

export type RawField = {
  name: string,
  type: RawType,
}

export type RawType = {
  name: ?string,
  kind: string,
  ofType?: ?RawType,
  fields?: ?Array<RawField>,
}

export type Field = {
  name: string,
  type: Type,
  parent: Type,
}

export type Type = {
  name: ?string,
  kind: string,
  ofType?: ?Type,
  fields?: ?{ [name: string]: Field },
  parents?: Array<Field>,
}

export type Types = { [name: string]: Type }

function convertRawField({ name, type }: RawField): Field {
  return ({ name, type: convertRawType(type) }: any)
}

function convertRawFields(fields: Array<RawField>): { [name: string]: Field } {
  const convertedFields = {}
  for (let field of fields) {
    convertedFields[field.name] = (convertRawField(field): any)
  }
  return convertedFields
}

function convertRawType({ name, kind, ofType, fields }: RawType): Type {
  return {
    name,
    kind,
    ofType: ofType ? convertRawType(ofType) : null,
    fields: fields ? convertRawFields(fields) : null,
  }
}

export function linkTypes(rawTypes: Array<RawType>): Types {
  const types: Types = {}

  for (let rawType of rawTypes) {
    const { name } = rawType
    if (name) {
      types[name] = convertRawType(rawType)
    }
  }
  function resolveType(type: Type, parent: ?Field): Type {
    const { name, ofType } = type
    if (name && types[name]) type = types[name]
    if (ofType) type.ofType = resolveType(ofType, parent)
    if (parent) {
      let { parents } = type
      if (!parents) type.parents = parents = []
      parents.push(parent)
    }
    return type
  }
  for (let name in types) {
    const type = types[name]
    const { fields } = type
    if (fields) {
      for (let name in fields) {
        const field = fields[name]
        field.type = resolveType(field.type, field)
        field.parent = type
      }
    }
  }
  return types
}

export default async function getSchemaTypes(
  fetchTypeMetadata: () => Promise<TypeMetadata>
): Promise<Types> {
  const {
    data: {
      __schema: { types },
    },
  } = await fetchTypeMetadata()
  return linkTypes((types: any))
}
