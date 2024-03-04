import { ApolloClient } from 'apollo-client'
import type { Types } from './getSchemaTypes'
import typesQuery, { TypeMetadata } from './typesQuery'
export { typesQuery }
export type { TypeMetadata }

type Term = [string, any, string | null | undefined] | [string, any] | [string]

declare const refetch: {
  (
    client: unknown,
    typenameOrTerms: string | ReadonlyArray<Term>,
    predicate?: any | null,
    idField?: string
  ): Promise<any>
  fetchTypeMetadata(client: ApolloClient<any>): Promise<Types>
  setTypeMetadata(metadata: Promise<TypeMetadata> | TypeMetadata): void
}

export default refetch
