// @flow

import type {ApolloClient} from 'apollo-client'
import getSchemaTypes from './getSchemaTypes'
import type {Types} from './getSchemaTypes'
import doesQueryContain from './doesQueryContain'

function normalizeIds(ids: any): Set<any> {
  if (ids instanceof Set) return ids
  if (Array.isArray(ids)) return new Set(ids)
  return new Set([ids])
}

export default async function refetch(client: ApolloClient, typename: string, ids?: ?any, idField?: string = 'id'): Promise<any> {
  const types: Types = await getSchemaTypes(client)

  const finalIds = ids ? normalizeIds(ids) : null

  const {queryManager: {queries}} = client
  let promises = []
  for (let query of queries.values()) {
    const {document, observableQuery} = query
    if (!observableQuery) continue
    let data
    if (finalIds) {
      const currentResult = observableQuery.currentResult()
      if (currentResult) data = currentResult.data
    }
    if (doesQueryContain(document, types.Query, typename, data, finalIds, idField)) {
      promises.push(observableQuery.refetch())
    }
  }
  await promises
}
