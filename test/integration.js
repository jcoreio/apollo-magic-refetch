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
      }],
      [4, {
        id: 4,
        username: 'saget',
        organizationIds: [],
      }],
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

  it(`throws when invalid typenameOrTerms is given`, async function (): Promise<void> {
    let error
    try {
      await refetch(client, (2: any))
    } catch (err) {
      error = err
    }
    expect(error).to.exist
  })

  it(`handles deleted User`, async function (): Promise<void> {
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
    const {data: {orgs}} = (observableQuery.currentResult(): any)
    expect(orgs.map(({id}) => id)).to.deep.equal([...Organizations.keys()])

    Users.delete(2)
    for (let org of Organizations.values()) {
      org.userIds = org.userIds.filter(id => id !== 2)
    }

    await refetch(client, 'User', [2])

    const {data: {orgs: finalOrgs}} = (observableQuery.currentResult(): any)

    expect(finalOrgs.map(({Users}) => Users.map(({id}) => id))).to.deep.equal([
      [1],
      [3],
    ])
  })
  it(`handles User removed from org`, async function (): Promise<void> {
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

    const usersQuery = gql`{
      Users {
        id
        username
      }
    }`

    const observableQuery = client.watchQuery({query})
    observableQuery.subscribe({})
    await observableQuery.refetch()

    const observableUsersQuery = client.watchQuery({query: usersQuery})
    observableUsersQuery.subscribe({})
    await observableUsersQuery.refetch()

    const {data: {orgs}} = (observableQuery.currentResult(): any)
    expect(orgs.map(({id}) => id)).to.deep.equal([...Organizations.keys()]);

    (Users.get(2): any).organizationIds = [1];
    (Organizations.get(2): any).userIds = [3]

    await refetch(client, [
      ['User', 2],
      ['Organization', 2],
    ])

    const {data: {orgs: finalOrgs}} = (observableQuery.currentResult(): any)

    expect(finalOrgs.map(({Users}) => Users.map(({id}) => id))).to.deep.equal([
      [1, 2],
      [3],
    ])
  })
  it(`handles User added to org`, async function (): Promise<void> {
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

    const usersQuery = gql`{
      Users {
        id
        username
      }
    }`

    const observableQuery = client.watchQuery({query})
    observableQuery.subscribe({})
    await observableQuery.refetch()

    const observableUsersQuery = client.watchQuery({query: usersQuery})
    observableUsersQuery.subscribe({})
    await observableUsersQuery.refetch()

    const {data: {orgs}} = (observableQuery.currentResult(): any)
    expect(orgs.map(({id}) => id)).to.deep.equal([...Organizations.keys()]);

    (Users.get(4): any).organizationIds.push(2);
    (Organizations.get(2): any).userIds.push(4)

    await refetch(client, [
      ['User'],
      ['Organization', new Set([2])],
    ])

    const {data: {orgs: finalOrgs}} = (observableQuery.currentResult(): any)

    expect(finalOrgs.map(({Users}) => Users.map(({id}) => id))).to.deep.equal([
      [1, 2],
      [2, 3, 4],
    ])
  })
})
