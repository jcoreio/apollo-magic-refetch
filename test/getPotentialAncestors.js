import {describe, it} from 'mocha'
import {expect} from 'chai'

import types from './types'

import getPotentialAncestors from '../src/getPotentialAncestors'

describe(`getPotentialAncestors`, function () {
  it(`works`, function () {
    const ancestors = getPotentialAncestors(types.Device)
    expect(ancestors.get(types.DeviceGroup)).to.exist
    expect(ancestors.get(types.DeviceGroup).fields.has('Devices')).to.exist
    expect(ancestors.get(types.DeviceEdge)).to.exist
    expect(ancestors.get(types.DeviceEdge).fields.has('node')).to.be.true
    expect(ancestors.get(types.DeviceConnection)).to.exist
    expect(ancestors.get(types.DeviceConnection).fields.has('edges')).to.be.true
    expect(ancestors.get(types.DeviceConnection).fields.has('pageInfo')).to.be.false
    expect(ancestors.get(types.Organization)).to.exist
    expect(ancestors.get(types.Organization).fields.has('Devices')).to.be.true
    expect(ancestors.get(types.Organization).fields.has('DeviceGroups')).to.be.true
    expect(ancestors.get(types.Organization).fields.has('Users')).to.be.true
    expect(ancestors.get(types.Organization).fields.has('UserGroups')).to.be.true
    expect(ancestors.get(types.Organization).fields.has('id')).to.be.false
    expect(ancestors.get(types.Organization).fields.has('CustomDashboards')).to.be.false
    expect(ancestors.get(types.CustomDashboards)).not.to.exist
  })
})
