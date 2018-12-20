// @flow

import gql from 'graphql-tag'

export default gql`
  {
    __schema {
      types {
        name
        fields {
          name
          type {
            name
            kind
            ofType {
              name
              kind
              ofType {
                name
                kind
                ofType {
                  name
                }
              }
            }
          }
        }
      }
    }
  }
`

type __TypeKind =
  | 'SCALAR'
  | 'OBJECT'
  | 'INTERFACE'
  | 'UNION'
  | 'ENUM'
  | 'INPUT_OBJECT'
  | 'LIST'
  | 'NON_NULL'

export type TypeMetadata = {
  data: {
    __schema: {
      types: Array<{
        name: ?string,
        fields: ?Array<{
          name: string,
          type: {
            name: ?string,
            kind: __TypeKind,
            ofType: ?{
              name: ?string,
              kind: __TypeKind,
              ofType: ?{
                name: ?string,
              },
            },
          },
        }>,
      }>,
    },
  },
}
