// @flow

import { describe, it } from 'mocha'
import { expect } from 'chai'
import types from './types'
import gql from 'graphql-tag'

import doesQueryContain from '../src/doesQueryContain'

describe(`doesQueryContain`, function() {
  it(`throws if type is not found`, function() {
    const document = gql`
      {
        Device(id: 1) {
          id
        }
      }
    `
    let error
    try {
      doesQueryContain(document, types, 'Deviceg')
    } catch (err) {
      error = err
    }
    expect(error).to.exist
  })
  it(`basic test`, function() {
    const document = gql`
      {
        Device(id: 1) {
          id
        }
      }
    `
    const data = {
      Device: {
        id: 1,
      },
    }
    expect(doesQueryContain(document, types, 'Device')).to.be.true
    expect(doesQueryContain(document, types, 'DeviceConnection')).to.be.false
    expect(doesQueryContain(document, types, 'Organization')).to.be.false
    expect(doesQueryContain(document, types, 'User')).to.be.false

    expect(doesQueryContain(document, types, 'Device', data, d => d.id === 1))
      .to.be.true
    expect(
      doesQueryContain(
        document,
        types,
        'Device',
        data,
        d => d.id === 1 || d.id === 2
      )
    ).to.be.true
    expect(doesQueryContain(document, types, 'Device', data, d => d.id === 2))
      .to.be.false
  })
  it(`connection test`, function() {
    const document = gql`
      {
        Devices {
          edges {
            node {
              id
            }
          }
        }
      }
    `
    const data = {
      Devices: {
        edges: [{ node: { id: 1 } }, { node: { id: 2 } }],
      },
    }
    expect(doesQueryContain(document, types, 'Device')).to.be.true
    expect(doesQueryContain(document, types, 'DeviceConnection')).to.be.true
    expect(doesQueryContain(document, types, 'DeviceEdge')).to.be.true
    expect(doesQueryContain(document, types, 'Organization')).to.be.false
    expect(doesQueryContain(document, types, 'OrganizationConnection')).to.be
      .false
    expect(doesQueryContain(document, types, 'User')).to.be.false

    expect(doesQueryContain(document, types, 'Device', data, d => d.id === 1))
      .to.be.true
    expect(doesQueryContain(document, types, 'Device', data, d => d.id === 2))
      .to.be.true
    expect(
      doesQueryContain(
        document,
        types,
        'Device',
        data,
        d => d.id === 1 || d.id === 2
      )
    ).to.be.true
    expect(doesQueryContain(document, types, 'Device', data, d => d.id === 3))
      .to.be.false
  })
  it(`more complex test`, function() {
    const document = gql`
      {
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
      }
    `
    const data = {
      Organizations: {
        edges: [
          {
            node: {
              id: 1,
              Devices: {
                edges: [{ node: { id: 1 } }, { node: { id: 2 } }],
              },
            },
          },
          {
            node: {
              id: 2,
              Devices: {
                edges: [{ node: { id: 3 } }, { node: { id: 4 } }],
              },
            },
          },
        ],
      },
    }
    expect(doesQueryContain(document, types, 'Device')).to.be.true
    expect(doesQueryContain(document, types, 'DeviceConnection')).to.be.true
    expect(doesQueryContain(document, types, 'DeviceEdge')).to.be.true
    expect(doesQueryContain(document, types, 'Organization')).to.be.true
    expect(doesQueryContain(document, types, 'OrganizationConnection')).to.be
      .true
    expect(doesQueryContain(document, types, 'User')).to.be.false

    expect(
      doesQueryContain(document, types, 'Organization', data, d => d.id === 1)
    ).to.be.true
    expect(
      doesQueryContain(
        document,
        types,
        'Organization',
        data,
        d => d.id === 1 || d.id === 2
      )
    ).to.be.true
    expect(
      doesQueryContain(document, types, 'Organization', data, d => d.id === 3)
    ).to.be.false

    expect(doesQueryContain(document, types, 'Device', data, d => d.id === 1))
      .to.be.true
    expect(doesQueryContain(document, types, 'Device', data, d => d.id === 2))
      .to.be.true
    expect(
      doesQueryContain(
        document,
        types,
        'Device',
        data,
        d => d.id === 1 || d.id === 2
      )
    ).to.be.true
    expect(doesQueryContain(document, types, 'Device', data, d => d.id === 3))
      .to.be.true
    expect(doesQueryContain(document, types, 'Device', data, d => d.id === 4))
      .to.be.true
    expect(doesQueryContain(document, types, 'Device', data, d => d.id === 5))
      .to.be.false
  })
  it(`recursive type test`, function() {
    const document = gql`
      {
        MetadataItem(tag: "foo/bar") {
          tag
          Parent {
            tag
            Parent {
              tag
            }
          }
        }
      }
    `
    const data = {
      MetadataItem: {
        tag: 'foo/bar',
        __typename: 'MetadataItem',
        Parent: {
          tag: 'foo',
          __typename: 'MetadataItem',
          Parent: null,
        },
      },
    }
    expect(doesQueryContain(document, types, 'MetadataItem')).to.be.true
    expect(
      doesQueryContain(
        document,
        types,
        'MetadataItem',
        data,
        i => i.tag === 'foo'
      )
    ).to.be.true
    expect(
      doesQueryContain(
        document,
        types,
        'MetadataItem',
        data,
        i => i.tag === 'foo/bar'
      )
    ).to.be.true
    expect(
      doesQueryContain(
        document,
        types,
        'MetadataItem',
        data,
        i => i.tag === 'foo/bar/baz'
      )
    ).to.be.false
  })
  it(`multi-step recursive type test`, function() {
    const document = gql`
      {
        Organization(id: 2) {
          id
          Users {
            edges {
              node {
                id
                Organizations {
                  edges {
                    node {
                      id
                    }
                  }
                }
              }
            }
          }
        }
      }
    `
    const data = {
      Organization: {
        id: 2,
        Users: {
          edges: [
            {
              node: {
                id: 3,
                Organizations: {
                  edges: [
                    {
                      node: {
                        id: 5,
                      },
                    },
                    {
                      node: {
                        id: 6,
                      },
                    },
                  ],
                },
              },
            },
            {
              node: {
                id: 4,
                Organizations: {
                  edges: [
                    {
                      node: {
                        id: 7,
                      },
                    },
                    {
                      node: {
                        id: 8,
                      },
                    },
                  ],
                },
              },
            },
          ],
        },
      },
    }

    expect(
      doesQueryContain(document, types, 'Organization', data, o => o.id === 7)
    ).to.be.true
    expect(
      doesQueryContain(document, types, 'Organization', data, o => o.id === 5)
    ).to.be.true
    expect(
      doesQueryContain(document, types, 'Organization', data, o => o.id === 8)
    ).to.be.true
    expect(
      doesQueryContain(document, types, 'Organization', data, o => o.id === 2)
    ).to.be.true
    expect(
      doesQueryContain(document, types, 'Organization', data, o => o.id === 3)
    ).to.be.false
  })
})
