// @flow

import type { Type } from './getSchemaTypes'

type Ancestor = {
  fields: Set<string>,
}

type Ancestors = Map<Type, Ancestor>

const cache: Map<Type, Ancestors> = new Map()

export default function getPotentialAncestors(type: Type): Ancestors {
  const added: Set<Type> = new Set()
  const cached = cache.get(type)
  if (cached) return cached
  const ancestors: Map<Type, Ancestor> = new Map()
  function addType(type: Type) {
    if (added.has(type)) return
    added.add(type)

    const { parents } = type
    if (parents) {
      for (let field of parents) {
        const { name, parent } = field
        let ancestor = ancestors.get(parent)
        if (!ancestor) {
          ancestor = {
            fields: new Set(),
          }
          ancestors.set(parent, ancestor)
        }
        ancestor.fields.add(name)
        addType(parent)
      }
    }
  }
  addType(type)
  cache.set(type, ancestors)
  return ancestors
}
