# apollo-magic-refetch

[![Build Status](https://travis-ci.org/jcoreio/apollo-magic-refetch.svg?branch=master)](https://travis-ci.org/jcoreio/apollo-magic-refetch)
[![Coverage Status](https://codecov.io/gh/jcoreio/apollo-magic-refetch/branch/master/graph/badge.svg)](https://codecov.io/gh/jcoreio/apollo-magic-refetch)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

Handling Apollo cache updates after creating and deleting objects remains a
[poorly solved problem](https://github.com/apollographql/apollo-client/issues/899).
`update` and `refetchQueries` props on `Mutation`s couple different areas of
your app in a way you probably don't want, and they don't scale well as you add
more queries over objects you may create/delete.

Truly solving the problem will probably require changes to the apollo client
and cache code.

Until that happens, this is probably your best bet!

## How it works

After you delete an object, you tell `apollo-magic-refetch` what `typename` and
`id` was deleted, and it refetches all active queries that contain that object
anywhere within their current data!

Similarly, after you create an object, you tell it the `typename` of the created
object and it refetches all active queries that contain an object of that type
in their selections.  This is a bit less efficient than handling deletes, but
way easier than anything else at the time of writing.

Since only active queries can be refetched, data in the cache for inactive
queries will remain out-of-date.  For that reason, I would recommend using the
`cache-and-network` policy on all queries you're not planning to `update` after
all pertinent mutations.

## Current limitations

Interfaces and union types are not supported yet.  This means if they are
anywhere in your results, this library may fail to refetch when it should.

Also, lists of lists are not supported, if for whatever reason you are using
lists of lists in your schema (I haven't even checked if this is possible).

## ES environment requirements

If you are building for legacy browsers with a bundler like Webpack, make sure
to add a rule to transpile this package to ES5.

If you are not using a bundler that supports the `modules.root` property in
`package.json`, make sure to install `babel-runtime`.

## Type metadata usage

`apollo-match-refetch` uses type metadata that it must fetch from GraphQL.
If your schema is large enough it may be a prohibitive amount of metadata.
`refetch` operations will be delayed until this metadata is fetched.
To prefetch this metadata, do:

```js
import client from './wherever/you/create/your/apollo/client'
import getSchemaTypes from 'apollo-magic-refetch/getSchemaTypes'

// initiate the prefetch
getSchemaTypes(client)
```

## Handling Deletions

In this example, the `__typename` of the object being deleted is `Device` and it
uses the standard `id` field.  If instead the field were called `tag`, for
instance, you would pass `'tag'` after `deviceId` in the call to `refetch`.

You may pass an array or `Set` of ids in place of a single `deviceId`.

```js
import * as React from 'react'
import gql from 'graphql-tag'
import refetch from 'apollo-magic-refetch'
import {Mutation, ApolloConsumer} from 'react-apollo'

const mutation = gql`
mutation destroyDevice($deviceId: Int!) {
  destroyDevice(deviceId: $deviceId)
}
`

const DestroyDeviceButton = ({deviceId}) => (
  <ApolloConsumer>
    {client => (
      <Mutation
        mutation={mutation}
        update={() => refetch(client, 'Device', deviceId)}
      />
        {destroyDevice => (
          <button onClick={destroyDevice({variables: {deviceId}})}
        )}
      </Mutation>
    )}
  </ApolloConsumer>
)
```

## Handling Creation

When you omit the id parameter, `refetch` refetches all active queries that
contain the requested `__typename` in their selections, regardless of what ids
are actually in their results.  This can be used after creating an object.

In this example, the `__typename` of the object being created is `Device`.

```js
import * as React from 'react'
import gql from 'graphql-tag'
import refetch from 'apollo-magic-refetch'
import {Mutation, ApolloConsumer} from 'react-apollo'
import CreateDeviceForm from './CreateDeviceForm'

const mutation = gql`
mutation createDevice($values: CreateDevice!) {
  createDevice(values: $values) {
    id
  }
}
`

const CreateDeviceFormContainer = () => (
  <ApolloConsumer>
    {client => (
      <Mutation
        mutation={mutation}
        update={() => refetch(client, 'Device')}
      />
        {createDevice => (
          <CreateDeviceForm
            onSubmit={(values) => createDevice({variables: {values}})}
          />
        )}
      </Mutation>
    )}
  </ApolloConsumer>
)
```

## API

### `refetch(client, typename, [ids], [idField])`

#### Arguments

##### `client: ApolloClient`

The `ApolloClient` in which to scan active queries.

##### `typename: string`

The `__typename` of the GraphQL type that was created or deleted.

##### `ids: any (*optional*)`

A single id, an array of ids, or a `Set` of ids that were deleted.  If given,
only active queries whose current result contains an object with the given
`typename` and `id` will be refetched.

##### `idField: string (*optional, default*: 'id')`

The name of the id field in the type that was deleted.
