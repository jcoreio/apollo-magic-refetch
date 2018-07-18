// @flow

import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { SchemaLink } from 'apollo-link-schema'
import { makeExecutableSchema } from 'graphql-tools'
import gql from 'graphql-tag'

import { describe, it } from 'mocha'
import { expect } from 'chai'

import refetch from '../src'

const typeDefs = `
  type Organization {
    id: Int!
    name: String!
    userIds: [Int!]!
    Users: [User!]!
  }

  type User {
    id: Int!
    username: String!
    organizationIds: [Int!]!
    Organizations: [Organization!]!
  }

  type Query {
    Organizations(ids: [Int!]): [Organization!]!
    Users(ids: [Int!]): [User!]!
  }
`

let Organizations
let Users

const OrganizationsResolver = (doc: any, {ids}: {ids: ?Array<number>}) => {
  if (ids) return ids.map(id => Organizations.get(id)).filter(Boolean)
  return [...Organizations.values()]
}

const UsersResolver = (doc: any, {ids}: {ids: ?Array<number>}) => {
  if (ids) return ids.map(id => Users.get(id)).filter(Boolean)
  return [...Users.values()]
}

const resolvers = {
  Query: {
    Organizations: OrganizationsResolver,
    Users: UsersResolver,
  },
  Organization: {
    Users: ({userIds}) => UsersResolver(null, {ids: userIds}),
  },
  User: {
    Organizations: ({organizationIds}) => OrganizationsResolver(null, {ids: organizationIds}),
  },
}

describe(`integration test`, function () {
  let client, cache

  beforeEach(() => {
    Organizations = new Map([
      [1, {
        id: 1,
        name: 'google',
        userIds: [1, 2],
      }],
      [2, {
        id: 2,
        name: 'apple',
        userIds: [2, 3],
      }]
    ])

    Users = new Map([
      [1, {
        id: 1,
        username: 'jim',
        organizationIds: [1],
      }],
      [2, {
        id: 2,
        username: 'bob',
        organizationIds: [1, 2],
      }],
      [3, {
        id: 3,
        username: 'bobilly',
        organizationIds: [2],
      }]
    ])

    const schema = makeExecutableSchema({
      typeDefs,
      resolvers,
    })

    cache = new InMemoryCache()

    client = new ApolloClient({
      cache,
      link: new SchemaLink({schema}),
    })
  })

  it(`basic test`, async function (): Promise<void> {
    const query = gql`{
      orgs: Organizations {
        id
        name
        Users {
          id
          username
        }
      }
    }`

    const observableQuery = client.watchQuery({query})
    observableQuery.subscribe({})
    await observableQuery.refetch()
    const {data: {orgs}} = await observableQuery.currentResult()
    expect(orgs.map(({id}) => id)).to.deep.equal([...Organizations.keys()])

    Users.delete(2)
    for (let org of Organizations.values()) {
      org.userIds = org.userIds.filter(id => id !== 2)
    }

    await refetch(client, 'User', 2)

    const {data: {orgs: finalOrgs}} = await observableQuery.currentResult()

    expect(finalOrgs.map(({Users}) => Users.map(({id}) => id))).to.deep.equal([
      [1],
      [3],
    ])
  })
})
