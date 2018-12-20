// @flow

import type { DocumentNode, SelectionSetNode, ASTKindToNode } from 'graphql'
import type { Type, Types } from './getSchemaTypes'
import getPotentialAncestors from './getPotentialAncestors'

type NodeKind = $Keys<ASTKindToNode>

type Name = {
  +value: string,
}

type Node = {
  +name?: Name,
  +kind: NodeKind,
  +selectionSet: ?SelectionSetNode,
}

export default function doesQueryContain(
  document: DocumentNode,
  types: Types,
  typename: string,
  data?: any,
  predicate?: ?(data: any) => boolean
): boolean {
  const targetType = types[typename]
  if (!targetType) throw new Error(`type not found: ${typename}`)
  const potentialAncestors = getPotentialAncestors(targetType)

  function doesNodeContain(node: Node, data: any, type: Type): boolean {
    if (type === targetType) {
      if (!predicate || predicate(data)) return true
    }
    if (!type.name) return false
    const ancestorEntry = potentialAncestors.get(type)
    if (!ancestorEntry) return false
    const { selectionSet } = node
    if (selectionSet) {
      for (let selection of selectionSet.selections) {
        const alias: ?Name = (selection: any).alias
        const name: ?Name = (selection: any).name
        if (!name) continue
        if (!ancestorEntry.fields.has(name.value)) continue
        const { fields } = type
        if (!fields) continue
        let field = fields[name.value]
        if (!field) continue

        let innerType = field.type
        let list = false
        while (innerType.ofType) {
          if (innerType.kind === 'LIST') list = true
          innerType = innerType.ofType
        }
        let innerData = data ? data[alias ? alias.value : name.value] : null
        if (predicate && innerData == null) continue

        if (predicate && list) {
          if (!Array.isArray(innerData)) continue
          for (let element of innerData) {
            if (doesNodeContain((selection: any), element, innerType)) {
              return true
            }
          }
        } else {
          if (doesNodeContain((selection: any), innerData, innerType)) {
            return true
          }
        }
      }
    }
    return false
  }

  for (let node of document.definitions) {
    if (doesNodeContain((node: any), data, types.Query)) {
      return true
    }
  }
  return false
}
