import { DocumentNode } from 'graphql'
declare const typesQuery: DocumentNode
export default typesQuery

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
        name: string | null | undefined
        fields: Array<{
          name: string
          type:
            | {
                name: string | null | undefined
                kind: __TypeKind
                ofType:
                  | {
                      name: string | null | undefined
                      kind: __TypeKind
                      ofType:
                        | {
                            name: string | null | undefined
                          }
                        | null
                        | undefined
                    }
                  | null
                  | undefined
              }
            | null
            | undefined
        }>
      }>
    }
  }
}
