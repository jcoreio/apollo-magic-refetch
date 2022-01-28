// @flow

import { ApolloClient } from 'apollo-client'
import getSchemaTypes from './getSchemaTypes'
import type { Types } from './getSchemaTypes'
import doesQueryContain from './doesQueryContain'
import typesQuery, { type TypeMetadata } from './typesQuery'
export { typesQuery }
export type { TypeMetadata }

function normalizePredicate(
  predicate: any,
  idField: string
): (data: any) => boolean {
  if (typeof predicate === 'function') return predicate
  let ids = predicate
  if (Array.isArray(ids)) ids = new Set(ids)
  else if (!(ids instanceof Set)) ids = new Set([ids])
  return (data) => ids.has(data[idField])
}

type Term = [string, any, ?string] | [string, any] | [string]

function every<T>(
  array: $ReadOnlyArray<T>,
  predicate: (elem: T) => boolean
): boolean {
  for (let elem of array) {
    if (!predicate(elem)) return false
  }
  return true
}

let typesPromise: ?Promise<Types> = null

export default async function refetch(
  client: mixed,
  typenameOrTerms: string | $ReadOnlyArray<Term>,
  predicate?: ?any,
  idField?: string
): Promise<any> {
  if (!(client instanceof ApolloClient)) {
    throw new Error(
      `client must be an ApolloClient, instead got: ${String(client)}`
    )
  }
  const types: Types = await refetch.fetchTypeMetadata(client)

  let terms
  if (typeof typenameOrTerms === 'string') {
    terms = [[typenameOrTerms, predicate, idField]]
  } else if (Array.isArray(typenameOrTerms)) {
    terms = typenameOrTerms
  } else {
    throw new Error(`invalid typename or terms: ${typenameOrTerms}`)
  }

  const {
    queryManager: { queries },
  } = client
  let promises = []
  for (let query of queries.values()) {
    const { document, observableQuery } = query
    if (!observableQuery) continue
    if (observableQuery.options.fetchPolicy === 'cache-only') continue
    let data
    const currentResult = observableQuery.currentResult()
    if (currentResult) data = currentResult.data

    if (
      every(terms, ([typename, predicate, idField]: any) =>
        doesQueryContain(
          document,
          types,
          typename,
          data,
          predicate != null
            ? normalizePredicate(predicate, idField || 'id')
            : null
        )
      )
    ) {
      promises.push(observableQuery.refetch())
    }
  }
  await promises
}

refetch.fetchTypeMetadata = async function (
  client: ApolloClient<any>
): Promise<Types> {
  if (!typesPromise) {
    refetch.setTypeMetadata(client.query({ query: typesQuery }))
  }
  // istanbul ignore next
  if (!typesPromise) throw new Error('this should never happen')
  return await typesPromise
}

refetch.setTypeMetadata = (metadata: Promise<TypeMetadata> | TypeMetadata) => {
  typesPromise = getSchemaTypes(async () => await metadata)
}
