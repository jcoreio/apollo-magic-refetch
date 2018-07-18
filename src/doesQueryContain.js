// @flow

import type {DocumentNode, SelectionSetNode, ASTKindToNode} from 'graphql'
import type {Type} from './getSchemaTypes'

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
  queryType: Type,
  typename: string,
  data?: any,
  ids?: ?Set<any>,
  idField?: string = 'id'
): boolean {
  function doesNodeContain(
    node: Node,
    data: any,
    type: Type,
  ): boolean {
    if (type.name === typename) {
      if (!ids) return true
      return data && ids.has(data[idField])
    }
    const {selectionSet} = node
    if (selectionSet) {
      for (let selection of selectionSet.selections) {
        const alias: ?Name = (selection: any).alias
        const name: ?Name = (selection: any).name
        if (!name) continue
        const {fields} = type
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
        if (ids && innerData == null) continue

        if (ids && list) {
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
    if (doesNodeContain((node: any), data, queryType)) {
      return true
    }
  }
  return false
}
