import { describe, it } from 'mocha'
import { expect } from 'chai'
import types from './types'

describe('linkTypes', () => {
  it('works', () => {
    expect(types.Query.fields.Organization.type === types.Organization).to.be
      .true
    expect(
      types.User.fields.Organizations.type.ofType ===
        types.OrganizationConnection
    ).to.be.true
    expect(types.OrganizationEdge.parents[0].name).to.equal('edges')
    expect(types.OrganizationEdge.parents[0].parent).to.equal(
      types.OrganizationConnection
    )
  })
})
