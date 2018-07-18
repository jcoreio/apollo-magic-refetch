// @flow

import {describe, it} from 'mocha'
import {expect} from 'chai'
import types from './types'
import gql from 'graphql-tag'

import doesQueryContain from '../src/doesQueryContain'

describe(`doesQueryContain`, function () {
  it(`basic test`, function () {
    const document = gql`{
      Device(id: 1) {
        id
      }
    }`
    const data = {
      Device: {
        id: 1
      }
    }
    expect(doesQueryContain(document, types.Query, 'Device')).to.be.true
    expect(doesQueryContain(document, types.Query, 'DeviceConnection')).to.be.false
    expect(doesQueryContain(document, types.Query, 'Organization')).to.be.false
    expect(doesQueryContain(document, types.Query, 'User')).to.be.false

    expect(doesQueryContain(document, types.Query, 'Device', data, new Set([1]))).to.be.true
    expect(doesQueryContain(document, types.Query, 'Device', data, new Set([1, 2]))).to.be.true
    expect(doesQueryContain(document, types.Query, 'Device', data, new Set([2]))).to.be.false
  })
  it(`connection test`, function () {
    const document = gql`{
      Devices {
        edges {
          node {
            id
          }
        }
      }
    }`
    const data = {
      Devices: {
        edges: [
          {node: {id: 1}},
          {node: {id: 2}},
        ]
      }
    }
    expect(doesQueryContain(document, types.Query, 'Device')).to.be.true
    expect(doesQueryContain(document, types.Query, 'DeviceConnection')).to.be.true
    expect(doesQueryContain(document, types.Query, 'DeviceEdge')).to.be.true
    expect(doesQueryContain(document, types.Query, 'Organization')).to.be.false
    expect(doesQueryContain(document, types.Query, 'OrganizationConnection')).to.be.false
    expect(doesQueryContain(document, types.Query, 'User')).to.be.false

    expect(doesQueryContain(document, types.Query, 'Device', data, new Set([1]))).to.be.true
    expect(doesQueryContain(document, types.Query, 'Device', data, new Set([2]))).to.be.true
    expect(doesQueryContain(document, types.Query, 'Device', data, new Set([1, 2]))).to.be.true
    expect(doesQueryContain(document, types.Query, 'Device', data, new Set([3]))).to.be.false
  })
  it(`more complex test`, function () {
    const document = gql`{
      Organizations {
        edges {
          node {
            id
            Devices {
              edges {
                node {
                  id
                }
              }
            }
          }
        }
      }
    }`
    const data = {
      Organizations: {
        edges: [
          {
            node: {
              id: 1,
              Devices: {
                edges: [
                  {node: {id: 1}},
                  {node: {id: 2}},
                ]
              }
            }
          },
          {
            node: {
              id: 2,
              Devices: {
                edges: [
                  {node: {id: 3}},
                  {node: {id: 4}},
                ]
              }
            }
          },
        ],
      }
    }
    expect(doesQueryContain(document, types.Query, 'Device')).to.be.true
    expect(doesQueryContain(document, types.Query, 'DeviceConnection')).to.be.true
    expect(doesQueryContain(document, types.Query, 'DeviceEdge')).to.be.true
    expect(doesQueryContain(document, types.Query, 'Organization')).to.be.true
    expect(doesQueryContain(document, types.Query, 'OrganizationConnection')).to.be.true
    expect(doesQueryContain(document, types.Query, 'User')).to.be.false

    expect(doesQueryContain(document, types.Query, 'Organization', data, new Set([1]))).to.be.true
    expect(doesQueryContain(document, types.Query, 'Organization', data, new Set([1, 2]))).to.be.true
    expect(doesQueryContain(document, types.Query, 'Organization', data, new Set([3]))).to.be.false

    expect(doesQueryContain(document, types.Query, 'Device', data, new Set([1]))).to.be.true
    expect(doesQueryContain(document, types.Query, 'Device', data, new Set([2]))).to.be.true
    expect(doesQueryContain(document, types.Query, 'Device', data, new Set([1, 2]))).to.be.true
    expect(doesQueryContain(document, types.Query, 'Device', data, new Set([3]))).to.be.true
    expect(doesQueryContain(document, types.Query, 'Device', data, new Set([4]))).to.be.true
    expect(doesQueryContain(document, types.Query, 'Device', data, new Set([5]))).to.be.false
  })
})
