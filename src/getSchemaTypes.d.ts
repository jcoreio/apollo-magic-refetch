export type RawField = {
  name: string
  type: RawType
}
export type RawType = {
  name: string | null | undefined
  kind: string
  ofType?: RawType | null | undefined
  fields?: Array<RawField> | null | undefined
}
export type Field = {
  name: string
  type: Type
  parent: Type
}
export type Type = {
  name: string | null | undefined
  kind: string
  ofType?: Type | null | undefined
  fields?:
    | {
        [name: string]: Field
      }
    | null
    | undefined
  parents?: Array<Field>
}
export type Types = {
  [name: string]: Type
}
