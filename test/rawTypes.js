export default [
  {
    "name": "Query",
    "kind": "OBJECT",
    "fields": [
      {
        "name": "CustomDashboard",
        "type": {
          "name": "CustomDashboard",
          "kind": "OBJECT",
          "ofType": null
        }
      },
      {
        "name": "CustomDashboards",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "CustomDashboardConnection",
            "kind": "OBJECT",
            "ofType": null
          }
        }
      },
      {
        "name": "Device",
        "type": {
          "name": "Device",
          "kind": "OBJECT",
          "ofType": null
        }
      },
      {
        "name": "Devices",
        "type": {
          "name": "DeviceConnection",
          "kind": "OBJECT",
          "ofType": null
        }
      },
      {
        "name": "userRolesInDevice",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "JSON",
            "kind": "SCALAR",
            "ofType": null
          }
        }
      },
      {
        "name": "userGroupRolesInDevice",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "JSON",
            "kind": "SCALAR",
            "ofType": null
          }
        }
      },
      {
        "name": "DeviceGroup",
        "type": {
          "name": "DeviceGroup",
          "kind": "OBJECT",
          "ofType": null
        }
      },
      {
        "name": "DeviceGroups",
        "type": {
          "name": "DeviceGroupConnection",
          "kind": "OBJECT",
          "ofType": null
        }
      },
      {
        "name": "userRolesInDeviceGroup",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "JSON",
            "kind": "SCALAR",
            "ofType": null
          }
        }
      },
      {
        "name": "userGroupRolesInDeviceGroup",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "JSON",
            "kind": "SCALAR",
            "ofType": null
          }
        }
      },
      {
        "name": "DevicesOrDeviceGroups",
        "type": {
          "name": "DeviceOrDeviceGroupConnection",
          "kind": "OBJECT",
          "ofType": null
        }
      },
      {
        "name": "MetadataItem",
        "type": {
          "name": "MetadataItem",
          "kind": "OBJECT",
          "ofType": null
        }
      },
      {
        "name": "Metadata",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "MetadataItemConnection",
            "kind": "OBJECT",
            "ofType": null
          }
        }
      },
      {
        "name": "MQTTDevice",
        "type": {
          "name": "MQTTDevice",
          "kind": "OBJECT",
          "ofType": null
        }
      },
      {
        "name": "MQTTDeviceChannel",
        "type": {
          "name": "MQTTDeviceChannel",
          "kind": "OBJECT",
          "ofType": null
        }
      },
      {
        "name": "MQTTDeviceChannelGroup",
        "type": {
          "name": "MQTTDeviceChannelGroup",
          "kind": "OBJECT",
          "ofType": null
        }
      },
      {
        "name": "Organization",
        "type": {
          "name": "Organization",
          "kind": "OBJECT",
          "ofType": null
        }
      },
      {
        "name": "Organizations",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "OrganizationConnection",
            "kind": "OBJECT",
            "ofType": null
          }
        }
      },
      {
        "name": "TagState",
        "type": {
          "name": "TagState",
          "kind": "OBJECT",
          "ofType": null
        }
      },
      {
        "name": "currentUser",
        "type": {
          "name": "User",
          "kind": "OBJECT",
          "ofType": null
        }
      },
      {
        "name": "User",
        "type": {
          "name": "User",
          "kind": "OBJECT",
          "ofType": null
        }
      },
      {
        "name": "Users",
        "type": {
          "name": "UserConnection",
          "kind": "OBJECT",
          "ofType": null
        }
      },
      {
        "name": "UserGroup",
        "type": {
          "name": "UserGroup",
          "kind": "OBJECT",
          "ofType": null
        }
      },
      {
        "name": "UserGroups",
        "type": {
          "name": "UserGroupConnection",
          "kind": "OBJECT",
          "ofType": null
        }
      },
      {
        "name": "UsersOrUserGroups",
        "type": {
          "name": "UserOrUserGroupConnection",
          "kind": "OBJECT",
          "ofType": null
        }
      }
    ]
  },
  {
    "name": "Int",
    "kind": "SCALAR",
    "fields": null
  },
  {
    "name": "CustomDashboard",
    "kind": "OBJECT",
    "fields": [
      {
        "name": "id",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "Int",
            "kind": "SCALAR",
            "ofType": null
          }
        }
      },
      {
        "name": "name",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "String",
            "kind": "SCALAR",
            "ofType": null
          }
        }
      },
      {
        "name": "config",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "JSON",
            "kind": "SCALAR",
            "ofType": null
          }
        }
      },
      {
        "name": "readOnly",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "Boolean",
            "kind": "SCALAR",
            "ofType": null
          }
        }
      }
    ]
  },
  {
    "name": "String",
    "kind": "SCALAR",
    "fields": null
  },
  {
    "name": "JSON",
    "kind": "SCALAR",
    "fields": null
  },
  {
    "name": "Boolean",
    "kind": "SCALAR",
    "fields": null
  },
  {
    "name": "CustomDashboardsOrderBy",
    "kind": "ENUM",
    "fields": null
  },
  {
    "name": "CustomDashboardConnection",
    "kind": "OBJECT",
    "fields": [
      {
        "name": "pageInfo",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "PageInfo",
            "kind": "OBJECT",
            "ofType": null
          }
        }
      },
      {
        "name": "fullCount",
        "type": {
          "name": "Int",
          "kind": "SCALAR",
          "ofType": null
        }
      },
      {
        "name": "edges",
        "type": {
          "name": null,
          "kind": "LIST",
          "ofType": {
            "name": "CustomDashboardEdge",
            "kind": "OBJECT",
            "ofType": null
          }
        }
      }
    ]
  },
  {
    "name": "PageInfo",
    "kind": "OBJECT",
    "fields": [
      {
        "name": "hasPreviousPage",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "Boolean",
            "kind": "SCALAR",
            "ofType": null
          }
        }
      },
      {
        "name": "hasNextPage",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "Boolean",
            "kind": "SCALAR",
            "ofType": null
          }
        }
      },
      {
        "name": "startCursor",
        "type": {
          "name": "String",
          "kind": "SCALAR",
          "ofType": null
        }
      },
      {
        "name": "endCursor",
        "type": {
          "name": "String",
          "kind": "SCALAR",
          "ofType": null
        }
      }
    ]
  },
  {
    "name": "CustomDashboardEdge",
    "kind": "OBJECT",
    "fields": [
      {
        "name": "cursor",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "String",
            "kind": "SCALAR",
            "ofType": null
          }
        }
      },
      {
        "name": "node",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "CustomDashboard",
            "kind": "OBJECT",
            "ofType": null
          }
        }
      }
    ]
  },
  {
    "name": "Device",
    "kind": "OBJECT",
    "fields": [
      {
        "name": "id",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "Int",
            "kind": "SCALAR",
            "ofType": null
          }
        }
      },
      {
        "name": "type",
        "type": {
          "name": "DeviceType",
          "kind": "ENUM",
          "ofType": null
        }
      },
      {
        "name": "name",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "String",
            "kind": "SCALAR",
            "ofType": null
          }
        }
      },
      {
        "name": "Organization",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "Organization",
            "kind": "OBJECT",
            "ofType": null
          }
        }
      },
      {
        "name": "MQTTDevice",
        "type": {
          "name": "MQTTDevice",
          "kind": "OBJECT",
          "ofType": null
        }
      },
      {
        "name": "Users",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "UserConnection",
            "kind": "OBJECT",
            "ofType": null
          }
        }
      },
      {
        "name": "UserGroups",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "UserGroupConnection",
            "kind": "OBJECT",
            "ofType": null
          }
        }
      },
      {
        "name": "DeviceGroups",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "DeviceGroupConnection",
            "kind": "OBJECT",
            "ofType": null
          }
        }
      },
      {
        "name": "MetadataFromDevice",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "MetadataItemConnection",
            "kind": "OBJECT",
            "ofType": null
          }
        }
      },
      {
        "name": "MetadataToDevice",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "MetadataItemConnection",
            "kind": "OBJECT",
            "ofType": null
          }
        }
      }
    ]
  },
  {
    "name": "DeviceType",
    "kind": "ENUM",
    "fields": null
  },
  {
    "name": "Organization",
    "kind": "OBJECT",
    "fields": [
      {
        "name": "id",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "Int",
            "kind": "SCALAR",
            "ofType": null
          }
        }
      },
      {
        "name": "name",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "String",
            "kind": "SCALAR",
            "ofType": null
          }
        }
      },
      {
        "name": "displayName",
        "type": {
          "name": "String",
          "kind": "SCALAR",
          "ofType": null
        }
      },
      {
        "name": "userRole",
        "type": {
          "name": "RoleInOrganization",
          "kind": "ENUM",
          "ofType": null
        }
      },
      {
        "name": "Users",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "UserConnection",
            "kind": "OBJECT",
            "ofType": null
          }
        }
      },
      {
        "name": "UserGroups",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "UserGroupConnection",
            "kind": "OBJECT",
            "ofType": null
          }
        }
      },
      {
        "name": "AllUsersGroup",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "UserGroup",
            "kind": "OBJECT",
            "ofType": null
          }
        }
      },
      {
        "name": "Devices",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "DeviceConnection",
            "kind": "OBJECT",
            "ofType": null
          }
        }
      },
      {
        "name": "DeviceGroups",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "DeviceGroupConnection",
            "kind": "OBJECT",
            "ofType": null
          }
        }
      },
      {
        "name": "AllDevicesGroup",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "DeviceGroup",
            "kind": "OBJECT",
            "ofType": null
          }
        }
      },
      {
        "name": "Metadata",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "MetadataItemConnection",
            "kind": "OBJECT",
            "ofType": null
          }
        }
      }
    ]
  },
  {
    "name": "RoleInOrganization",
    "kind": "ENUM",
    "fields": null
  },
  {
    "name": "UsersOrderBy",
    "kind": "ENUM",
    "fields": null
  },
  {
    "name": "UserConnection",
    "kind": "OBJECT",
    "fields": [
      {
        "name": "pageInfo",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "PageInfo",
            "kind": "OBJECT",
            "ofType": null
          }
        }
      },
      {
        "name": "fullCount",
        "type": {
          "name": "Int",
          "kind": "SCALAR",
          "ofType": null
        }
      },
      {
        "name": "edges",
        "type": {
          "name": null,
          "kind": "LIST",
          "ofType": {
            "name": "UserEdge",
            "kind": "OBJECT",
            "ofType": null
          }
        }
      }
    ]
  },
  {
    "name": "UserEdge",
    "kind": "OBJECT",
    "fields": [
      {
        "name": "cursor",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "String",
            "kind": "SCALAR",
            "ofType": null
          }
        }
      },
      {
        "name": "node",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "User",
            "kind": "OBJECT",
            "ofType": null
          }
        }
      }
    ]
  },
  {
    "name": "User",
    "kind": "OBJECT",
    "fields": [
      {
        "name": "id",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "Int",
            "kind": "SCALAR",
            "ofType": null
          }
        }
      },
      {
        "name": "name",
        "type": {
          "name": "String",
          "kind": "SCALAR",
          "ofType": null
        }
      },
      {
        "name": "username",
        "type": {
          "name": "String",
          "kind": "SCALAR",
          "ofType": null
        }
      },
      {
        "name": "roleInOrganization",
        "type": {
          "name": "RoleInOrganization",
          "kind": "ENUM",
          "ofType": null
        }
      },
      {
        "name": "rolesInDevice",
        "type": {
          "name": "JSON",
          "kind": "SCALAR",
          "ofType": null
        }
      },
      {
        "name": "rolesInDeviceGroup",
        "type": {
          "name": "JSON",
          "kind": "SCALAR",
          "ofType": null
        }
      },
      {
        "name": "roles",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "JSON",
            "kind": "SCALAR",
            "ofType": null
          }
        }
      },
      {
        "name": "Organizations",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "OrganizationConnection",
            "kind": "OBJECT",
            "ofType": null
          }
        }
      },
      {
        "name": "UserGroups",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "UserGroupConnection",
            "kind": "OBJECT",
            "ofType": null
          }
        }
      },
      {
        "name": "DeviceGroups",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "DeviceGroupConnection",
            "kind": "OBJECT",
            "ofType": null
          }
        }
      },
      {
        "name": "Devices",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "DeviceConnection",
            "kind": "OBJECT",
            "ofType": null
          }
        }
      }
    ]
  },
  {
    "name": "OrganizationsOrderBy",
    "kind": "ENUM",
    "fields": null
  },
  {
    "name": "OrganizationConnection",
    "kind": "OBJECT",
    "fields": [
      {
        "name": "pageInfo",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "PageInfo",
            "kind": "OBJECT",
            "ofType": null
          }
        }
      },
      {
        "name": "fullCount",
        "type": {
          "name": "Int",
          "kind": "SCALAR",
          "ofType": null
        }
      },
      {
        "name": "edges",
        "type": {
          "name": null,
          "kind": "LIST",
          "ofType": {
            "name": "OrganizationEdge",
            "kind": "OBJECT",
            "ofType": null
          }
        }
      }
    ]
  },
  {
    "name": "OrganizationEdge",
    "kind": "OBJECT",
    "fields": [
      {
        "name": "cursor",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "String",
            "kind": "SCALAR",
            "ofType": null
          }
        }
      },
      {
        "name": "node",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "Organization",
            "kind": "OBJECT",
            "ofType": null
          }
        }
      }
    ]
  },
  {
    "name": "UserGroupsOrderBy",
    "kind": "ENUM",
    "fields": null
  },
  {
    "name": "UserGroupConnection",
    "kind": "OBJECT",
    "fields": [
      {
        "name": "pageInfo",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "PageInfo",
            "kind": "OBJECT",
            "ofType": null
          }
        }
      },
      {
        "name": "fullCount",
        "type": {
          "name": "Int",
          "kind": "SCALAR",
          "ofType": null
        }
      },
      {
        "name": "edges",
        "type": {
          "name": null,
          "kind": "LIST",
          "ofType": {
            "name": "UserGroupEdge",
            "kind": "OBJECT",
            "ofType": null
          }
        }
      }
    ]
  },
  {
    "name": "UserGroupEdge",
    "kind": "OBJECT",
    "fields": [
      {
        "name": "cursor",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "String",
            "kind": "SCALAR",
            "ofType": null
          }
        }
      },
      {
        "name": "node",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "UserGroup",
            "kind": "OBJECT",
            "ofType": null
          }
        }
      }
    ]
  },
  {
    "name": "UserGroup",
    "kind": "OBJECT",
    "fields": [
      {
        "name": "id",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "Int",
            "kind": "SCALAR",
            "ofType": null
          }
        }
      },
      {
        "name": "name",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "String",
            "kind": "SCALAR",
            "ofType": null
          }
        }
      },
      {
        "name": "Organization",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "Organization",
            "kind": "OBJECT",
            "ofType": null
          }
        }
      },
      {
        "name": "rolesInDevice",
        "type": {
          "name": "JSON",
          "kind": "SCALAR",
          "ofType": null
        }
      },
      {
        "name": "rolesInDeviceGroup",
        "type": {
          "name": "JSON",
          "kind": "SCALAR",
          "ofType": null
        }
      },
      {
        "name": "Users",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "UserConnection",
            "kind": "OBJECT",
            "ofType": null
          }
        }
      },
      {
        "name": "DeviceGroups",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "DeviceGroupConnection",
            "kind": "OBJECT",
            "ofType": null
          }
        }
      },
      {
        "name": "Devices",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "DeviceConnection",
            "kind": "OBJECT",
            "ofType": null
          }
        }
      }
    ]
  },
  {
    "name": "DeviceGroupsOrderBy",
    "kind": "ENUM",
    "fields": null
  },
  {
    "name": "DeviceGroupConnection",
    "kind": "OBJECT",
    "fields": [
      {
        "name": "pageInfo",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "PageInfo",
            "kind": "OBJECT",
            "ofType": null
          }
        }
      },
      {
        "name": "fullCount",
        "type": {
          "name": "Int",
          "kind": "SCALAR",
          "ofType": null
        }
      },
      {
        "name": "edges",
        "type": {
          "name": null,
          "kind": "LIST",
          "ofType": {
            "name": "DeviceGroupEdge",
            "kind": "OBJECT",
            "ofType": null
          }
        }
      }
    ]
  },
  {
    "name": "DeviceGroupEdge",
    "kind": "OBJECT",
    "fields": [
      {
        "name": "cursor",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "String",
            "kind": "SCALAR",
            "ofType": null
          }
        }
      },
      {
        "name": "node",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "DeviceGroup",
            "kind": "OBJECT",
            "ofType": null
          }
        }
      }
    ]
  },
  {
    "name": "DeviceGroup",
    "kind": "OBJECT",
    "fields": [
      {
        "name": "id",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "Int",
            "kind": "SCALAR",
            "ofType": null
          }
        }
      },
      {
        "name": "name",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "String",
            "kind": "SCALAR",
            "ofType": null
          }
        }
      },
      {
        "name": "Organization",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "Organization",
            "kind": "OBJECT",
            "ofType": null
          }
        }
      },
      {
        "name": "Users",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "UserConnection",
            "kind": "OBJECT",
            "ofType": null
          }
        }
      },
      {
        "name": "UserGroups",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "UserGroupConnection",
            "kind": "OBJECT",
            "ofType": null
          }
        }
      },
      {
        "name": "Devices",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "DeviceConnection",
            "kind": "OBJECT",
            "ofType": null
          }
        }
      }
    ]
  },
  {
    "name": "DevicesOrderBy",
    "kind": "ENUM",
    "fields": null
  },
  {
    "name": "DeviceConnection",
    "kind": "OBJECT",
    "fields": [
      {
        "name": "pageInfo",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "PageInfo",
            "kind": "OBJECT",
            "ofType": null
          }
        }
      },
      {
        "name": "fullCount",
        "type": {
          "name": "Int",
          "kind": "SCALAR",
          "ofType": null
        }
      },
      {
        "name": "edges",
        "type": {
          "name": null,
          "kind": "LIST",
          "ofType": {
            "name": "DeviceEdge",
            "kind": "OBJECT",
            "ofType": null
          }
        }
      }
    ]
  },
  {
    "name": "DeviceEdge",
    "kind": "OBJECT",
    "fields": [
      {
        "name": "cursor",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "String",
            "kind": "SCALAR",
            "ofType": null
          }
        }
      },
      {
        "name": "node",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "Device",
            "kind": "OBJECT",
            "ofType": null
          }
        }
      }
    ]
  },
  {
    "name": "MetadataOrderBy",
    "kind": "ENUM",
    "fields": null
  },
  {
    "name": "MetadataItemConnection",
    "kind": "OBJECT",
    "fields": [
      {
        "name": "pageInfo",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "PageInfo",
            "kind": "OBJECT",
            "ofType": null
          }
        }
      },
      {
        "name": "fullCount",
        "type": {
          "name": "Int",
          "kind": "SCALAR",
          "ofType": null
        }
      },
      {
        "name": "edges",
        "type": {
          "name": null,
          "kind": "LIST",
          "ofType": {
            "name": "MetadataItemEdge",
            "kind": "OBJECT",
            "ofType": null
          }
        }
      }
    ]
  },
  {
    "name": "MetadataItemEdge",
    "kind": "OBJECT",
    "fields": [
      {
        "name": "cursor",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "String",
            "kind": "SCALAR",
            "ofType": null
          }
        }
      },
      {
        "name": "node",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "MetadataItem",
            "kind": "OBJECT",
            "ofType": null
          }
        }
      }
    ]
  },
  {
    "name": "MetadataItem",
    "kind": "OBJECT",
    "fields": [
      {
        "name": "tag",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "String",
            "kind": "SCALAR",
            "ofType": null
          }
        }
      },
      {
        "name": "organizationId",
        "type": {
          "name": "Int",
          "kind": "SCALAR",
          "ofType": null
        }
      },
      {
        "name": "tagInOrganization",
        "type": {
          "name": "String",
          "kind": "SCALAR",
          "ofType": null
        }
      },
      {
        "name": "name",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "String",
            "kind": "SCALAR",
            "ofType": null
          }
        }
      },
      {
        "name": "dataType",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "TagDataType",
            "kind": "ENUM",
            "ofType": null
          }
        }
      },
      {
        "name": "isDigital",
        "type": {
          "name": "Boolean",
          "kind": "SCALAR",
          "ofType": null
        }
      },
      {
        "name": "units",
        "type": {
          "name": "String",
          "kind": "SCALAR",
          "ofType": null
        }
      },
      {
        "name": "min",
        "type": {
          "name": "Float",
          "kind": "SCALAR",
          "ofType": null
        }
      },
      {
        "name": "max",
        "type": {
          "name": "Float",
          "kind": "SCALAR",
          "ofType": null
        }
      },
      {
        "name": "displayPrecision",
        "type": {
          "name": "Int",
          "kind": "SCALAR",
          "ofType": null
        }
      },
      {
        "name": "rounding",
        "type": {
          "name": "Float",
          "kind": "SCALAR",
          "ofType": null
        }
      },
      {
        "name": "TagState",
        "type": {
          "name": "TagState",
          "kind": "OBJECT",
          "ofType": null
        }
      },
      {
        "name": "Parent",
        "type": {
          "name": "MetadataItem",
          "kind": "OBJECT",
          "ofType": null
        }
      },
      {
        "name": "hasParent",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "Boolean",
            "kind": "SCALAR",
            "ofType": null
          }
        }
      },
      {
        "name": "Children",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "MetadataItemConnection",
            "kind": "OBJECT",
            "ofType": null
          }
        }
      },
      {
        "name": "hasAnyChildren",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "Boolean",
            "kind": "SCALAR",
            "ofType": null
          }
        }
      },
      {
        "name": "Organization",
        "type": {
          "name": "Organization",
          "kind": "OBJECT",
          "ofType": null
        }
      }
    ]
  },
  {
    "name": "TagDataType",
    "kind": "ENUM",
    "fields": null
  },
  {
    "name": "Float",
    "kind": "SCALAR",
    "fields": null
  },
  {
    "name": "TagState",
    "kind": "OBJECT",
    "fields": [
      {
        "name": "tag",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "String",
            "kind": "SCALAR",
            "ofType": null
          }
        }
      },
      {
        "name": "t",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "Float",
            "kind": "SCALAR",
            "ofType": null
          }
        }
      },
      {
        "name": "v",
        "type": {
          "name": "JSON",
          "kind": "SCALAR",
          "ofType": null
        }
      }
    ]
  },
  {
    "name": "MQTTDevice",
    "kind": "OBJECT",
    "fields": [
      {
        "name": "id",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "Int",
            "kind": "SCALAR",
            "ofType": null
          }
        }
      },
      {
        "name": "name",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "String",
            "kind": "SCALAR",
            "ofType": null
          }
        }
      },
      {
        "name": "organizationId",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "Int",
            "kind": "SCALAR",
            "ofType": null
          }
        }
      },
      {
        "name": "username",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "String",
            "kind": "SCALAR",
            "ofType": null
          }
        }
      },
      {
        "name": "password",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "String",
            "kind": "SCALAR",
            "ofType": null
          }
        }
      },
      {
        "name": "protocol",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "MQTTProtocol",
            "kind": "ENUM",
            "ofType": null
          }
        }
      },
      {
        "name": "Device",
        "type": {
          "name": "Device",
          "kind": "OBJECT",
          "ofType": null
        }
      },
      {
        "name": "ChannelsFromMQTT",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "MQTTDeviceChannelConnection",
            "kind": "OBJECT",
            "ofType": null
          }
        }
      },
      {
        "name": "ChannelsToMQTT",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "MQTTDeviceChannelConnection",
            "kind": "OBJECT",
            "ofType": null
          }
        }
      },
      {
        "name": "ChannelGroups",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": null,
            "kind": "LIST",
            "ofType": {
              "name": null,
              "kind": "NON_NULL"
            }
          }
        }
      }
    ]
  },
  {
    "name": "MQTTProtocol",
    "kind": "ENUM",
    "fields": null
  },
  {
    "name": "MQTTDeviceChannelsOrderBy",
    "kind": "ENUM",
    "fields": null
  },
  {
    "name": "MQTTDeviceChannelConnection",
    "kind": "OBJECT",
    "fields": [
      {
        "name": "pageInfo",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "PageInfo",
            "kind": "OBJECT",
            "ofType": null
          }
        }
      },
      {
        "name": "fullCount",
        "type": {
          "name": "Int",
          "kind": "SCALAR",
          "ofType": null
        }
      },
      {
        "name": "edges",
        "type": {
          "name": null,
          "kind": "LIST",
          "ofType": {
            "name": "MQTTDeviceChannelEdge",
            "kind": "OBJECT",
            "ofType": null
          }
        }
      }
    ]
  },
  {
    "name": "MQTTDeviceChannelEdge",
    "kind": "OBJECT",
    "fields": [
      {
        "name": "cursor",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "String",
            "kind": "SCALAR",
            "ofType": null
          }
        }
      },
      {
        "name": "node",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "MQTTDeviceChannel",
            "kind": "OBJECT",
            "ofType": null
          }
        }
      }
    ]
  },
  {
    "name": "MQTTDeviceChannel",
    "kind": "OBJECT",
    "fields": [
      {
        "name": "id",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "Int",
            "kind": "SCALAR",
            "ofType": null
          }
        }
      },
      {
        "name": "deviceId",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "Int",
            "kind": "SCALAR",
            "ofType": null
          }
        }
      },
      {
        "name": "channelGroupId",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "Int",
            "kind": "SCALAR",
            "ofType": null
          }
        }
      },
      {
        "name": "direction",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "DeviceDirection",
            "kind": "ENUM",
            "ofType": null
          }
        }
      },
      {
        "name": "type",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "DeviceType",
            "kind": "ENUM",
            "ofType": null
          }
        }
      },
      {
        "name": "tag",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "String",
            "kind": "SCALAR",
            "ofType": null
          }
        }
      },
      {
        "name": "tagInDevice",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "String",
            "kind": "SCALAR",
            "ofType": null
          }
        }
      },
      {
        "name": "mqttTag",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "String",
            "kind": "SCALAR",
            "ofType": null
          }
        }
      },
      {
        "name": "enabled",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "Boolean",
            "kind": "SCALAR",
            "ofType": null
          }
        }
      },
      {
        "name": "name",
        "type": {
          "name": "String",
          "kind": "SCALAR",
          "ofType": null
        }
      },
      {
        "name": "multiplier",
        "type": {
          "name": "Float",
          "kind": "SCALAR",
          "ofType": null
        }
      },
      {
        "name": "offset",
        "type": {
          "name": "Float",
          "kind": "SCALAR",
          "ofType": null
        }
      },
      {
        "name": "MQTTDevice",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "MQTTDevice",
            "kind": "OBJECT",
            "ofType": null
          }
        }
      },
      {
        "name": "MetadataItem",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "MetadataItem",
            "kind": "OBJECT",
            "ofType": null
          }
        }
      },
      {
        "name": "TagPrefixes",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "MQTTDeviceChannelGroupTagPrefix",
            "kind": "OBJECT",
            "ofType": null
          }
        }
      }
    ]
  },
  {
    "name": "DeviceDirection",
    "kind": "ENUM",
    "fields": null
  },
  {
    "name": "MQTTDeviceChannelGroupTagPrefix",
    "kind": "OBJECT",
    "fields": [
      {
        "name": "id",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "Int",
            "kind": "SCALAR",
            "ofType": null
          }
        }
      },
      {
        "name": "organizationTagPrefix",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "String",
            "kind": "SCALAR",
            "ofType": null
          }
        }
      },
      {
        "name": "deviceTagPrefix",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "String",
            "kind": "SCALAR",
            "ofType": null
          }
        }
      }
    ]
  },
  {
    "name": "MQTTDeviceChannelGroup",
    "kind": "OBJECT",
    "fields": [
      {
        "name": "id",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "Int",
            "kind": "SCALAR",
            "ofType": null
          }
        }
      },
      {
        "name": "deviceId",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "Int",
            "kind": "SCALAR",
            "ofType": null
          }
        }
      },
      {
        "name": "direction",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "DeviceDirection",
            "kind": "ENUM",
            "ofType": null
          }
        }
      },
      {
        "name": "automaticallyDetectAndAddTags",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "Boolean",
            "kind": "SCALAR",
            "ofType": null
          }
        }
      },
      {
        "name": "importUnitsAndRange",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "Boolean",
            "kind": "SCALAR",
            "ofType": null
          }
        }
      },
      {
        "name": "prefixTagsWith",
        "type": {
          "name": "MQTTDevicePrefixTagsWithOption",
          "kind": "ENUM",
          "ofType": null
        }
      },
      {
        "name": "customPrefix",
        "type": {
          "name": "String",
          "kind": "SCALAR",
          "ofType": null
        }
      },
      {
        "name": "minPublishIntervalEnabled",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "Boolean",
            "kind": "SCALAR",
            "ofType": null
          }
        }
      },
      {
        "name": "minPublishInterval",
        "type": {
          "name": "Int",
          "kind": "SCALAR",
          "ofType": null
        }
      },
      {
        "name": "resendIntervalEnabled",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "Boolean",
            "kind": "SCALAR",
            "ofType": null
          }
        }
      },
      {
        "name": "resendIntervalValue",
        "type": {
          "name": "Int",
          "kind": "SCALAR",
          "ofType": null
        }
      },
      {
        "name": "resendIntervalUnit",
        "type": {
          "name": "MQTTDeviceTimeUnit",
          "kind": "ENUM",
          "ofType": null
        }
      },
      {
        "name": "MQTTDevice",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "MQTTDevice",
            "kind": "OBJECT",
            "ofType": null
          }
        }
      },
      {
        "name": "Channels",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "MQTTDeviceChannelConnection",
            "kind": "OBJECT",
            "ofType": null
          }
        }
      },
      {
        "name": "TagPrefixes",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "MQTTDeviceChannelGroupTagPrefix",
            "kind": "OBJECT",
            "ofType": null
          }
        }
      }
    ]
  },
  {
    "name": "MQTTDevicePrefixTagsWithOption",
    "kind": "ENUM",
    "fields": null
  },
  {
    "name": "MQTTDeviceTimeUnit",
    "kind": "ENUM",
    "fields": null
  },
  {
    "name": "DevicesOrDeviceGroupsOrderBy",
    "kind": "ENUM",
    "fields": null
  },
  {
    "name": "DeviceOrDeviceGroupConnection",
    "kind": "OBJECT",
    "fields": [
      {
        "name": "pageInfo",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "PageInfo",
            "kind": "OBJECT",
            "ofType": null
          }
        }
      },
      {
        "name": "fullCount",
        "type": {
          "name": "Int",
          "kind": "SCALAR",
          "ofType": null
        }
      },
      {
        "name": "edges",
        "type": {
          "name": null,
          "kind": "LIST",
          "ofType": {
            "name": "DeviceOrDeviceGroupEdge",
            "kind": "OBJECT",
            "ofType": null
          }
        }
      }
    ]
  },
  {
    "name": "DeviceOrDeviceGroupEdge",
    "kind": "OBJECT",
    "fields": [
      {
        "name": "cursor",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "String",
            "kind": "SCALAR",
            "ofType": null
          }
        }
      },
      {
        "name": "node",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "DeviceOrDeviceGroup",
            "kind": "OBJECT",
            "ofType": null
          }
        }
      }
    ]
  },
  {
    "name": "DeviceOrDeviceGroup",
    "kind": "OBJECT",
    "fields": [
      {
        "name": "id",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "Int",
            "kind": "SCALAR",
            "ofType": null
          }
        }
      },
      {
        "name": "name",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "String",
            "kind": "SCALAR",
            "ofType": null
          }
        }
      },
      {
        "name": "roles",
        "type": {
          "name": "JSON",
          "kind": "SCALAR",
          "ofType": null
        }
      },
      {
        "name": "type",
        "type": {
          "name": "DeviceOrDeviceGroupType",
          "kind": "ENUM",
          "ofType": null
        }
      }
    ]
  },
  {
    "name": "DeviceOrDeviceGroupType",
    "kind": "ENUM",
    "fields": null
  },
  {
    "name": "UsersOrUserGroupsOrderBy",
    "kind": "ENUM",
    "fields": null
  },
  {
    "name": "UserOrUserGroupConnection",
    "kind": "OBJECT",
    "fields": [
      {
        "name": "pageInfo",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "PageInfo",
            "kind": "OBJECT",
            "ofType": null
          }
        }
      },
      {
        "name": "fullCount",
        "type": {
          "name": "Int",
          "kind": "SCALAR",
          "ofType": null
        }
      },
      {
        "name": "edges",
        "type": {
          "name": null,
          "kind": "LIST",
          "ofType": {
            "name": "UserOrUserGroupEdge",
            "kind": "OBJECT",
            "ofType": null
          }
        }
      }
    ]
  },
  {
    "name": "UserOrUserGroupEdge",
    "kind": "OBJECT",
    "fields": [
      {
        "name": "cursor",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "String",
            "kind": "SCALAR",
            "ofType": null
          }
        }
      },
      {
        "name": "node",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "UserOrUserGroup",
            "kind": "OBJECT",
            "ofType": null
          }
        }
      }
    ]
  },
  {
    "name": "UserOrUserGroup",
    "kind": "OBJECT",
    "fields": [
      {
        "name": "id",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "Int",
            "kind": "SCALAR",
            "ofType": null
          }
        }
      },
      {
        "name": "name",
        "type": {
          "name": "String",
          "kind": "SCALAR",
          "ofType": null
        }
      },
      {
        "name": "username",
        "type": {
          "name": "String",
          "kind": "SCALAR",
          "ofType": null
        }
      },
      {
        "name": "roles",
        "type": {
          "name": "JSON",
          "kind": "SCALAR",
          "ofType": null
        }
      },
      {
        "name": "type",
        "type": {
          "name": "UserOrUserGroupType",
          "kind": "ENUM",
          "ofType": null
        }
      }
    ]
  },
  {
    "name": "UserOrUserGroupType",
    "kind": "ENUM",
    "fields": null
  },
  {
    "name": "Mutation",
    "kind": "OBJECT",
    "fields": [
      {
        "name": "createCustomDashboard",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "CustomDashboard",
            "kind": "OBJECT",
            "ofType": null
          }
        }
      },
      {
        "name": "updateCustomDashboard",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "CustomDashboard",
            "kind": "OBJECT",
            "ofType": null
          }
        }
      },
      {
        "name": "destroyCustomDashboard",
        "type": {
          "name": "Boolean",
          "kind": "SCALAR",
          "ofType": null
        }
      },
      {
        "name": "createDevice",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "Device",
            "kind": "OBJECT",
            "ofType": null
          }
        }
      },
      {
        "name": "updateDevice",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "Device",
            "kind": "OBJECT",
            "ofType": null
          }
        }
      },
      {
        "name": "destroyDevice",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "DestroyDeviceResult",
            "kind": "OBJECT",
            "ofType": null
          }
        }
      },
      {
        "name": "destroyDevices",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "DestroyDevicesResult",
            "kind": "OBJECT",
            "ofType": null
          }
        }
      },
      {
        "name": "addUsersToDevice",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "AddUsersToDeviceResult",
            "kind": "OBJECT",
            "ofType": null
          }
        }
      },
      {
        "name": "setUsersRolesInDevice",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "SetUsersRolesInDeviceResult",
            "kind": "OBJECT",
            "ofType": null
          }
        }
      },
      {
        "name": "setUserRolesInDevice",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "SetUserRolesInDeviceResult",
            "kind": "OBJECT",
            "ofType": null
          }
        }
      },
      {
        "name": "removeUsersFromDevice",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "RemoveUsersFromDeviceResult",
            "kind": "OBJECT",
            "ofType": null
          }
        }
      },
      {
        "name": "addUserGroupsToDevice",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "AddUserGroupsToDeviceResult",
            "kind": "OBJECT",
            "ofType": null
          }
        }
      },
      {
        "name": "setUserGroupsRolesInDevice",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "SetUserGroupsRolesInDeviceResult",
            "kind": "OBJECT",
            "ofType": null
          }
        }
      },
      {
        "name": "setUserGroupRolesInDevice",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "SetUserGroupRolesInDeviceResult",
            "kind": "OBJECT",
            "ofType": null
          }
        }
      },
      {
        "name": "removeUserGroupsFromDevice",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "RemoveUserGroupsFromDeviceResult",
            "kind": "OBJECT",
            "ofType": null
          }
        }
      },
      {
        "name": "createDeviceGroup",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "DeviceGroup",
            "kind": "OBJECT",
            "ofType": null
          }
        }
      },
      {
        "name": "updateDeviceGroup",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "DeviceGroup",
            "kind": "OBJECT",
            "ofType": null
          }
        }
      },
      {
        "name": "destroyDeviceGroup",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "DestroyDeviceGroupResult",
            "kind": "OBJECT",
            "ofType": null
          }
        }
      },
      {
        "name": "addUsersToDeviceGroup",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "AddUsersToDeviceGroupResult",
            "kind": "OBJECT",
            "ofType": null
          }
        }
      },
      {
        "name": "setUsersRolesInDeviceGroup",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "SetUsersRolesInDeviceGroupResult",
            "kind": "OBJECT",
            "ofType": null
          }
        }
      },
      {
        "name": "setUserRolesInDeviceGroup",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "SetUserRolesInDeviceGroupResult",
            "kind": "OBJECT",
            "ofType": null
          }
        }
      },
      {
        "name": "removeUsersFromDeviceGroup",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "RemoveUsersFromDeviceGroupResult",
            "kind": "OBJECT",
            "ofType": null
          }
        }
      },
      {
        "name": "addUserGroupsToDeviceGroup",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "AddUserGroupsToDeviceGroupResult",
            "kind": "OBJECT",
            "ofType": null
          }
        }
      },
      {
        "name": "setUserGroupsRolesInDeviceGroup",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "SetUserGroupsRolesInDeviceGroupResult",
            "kind": "OBJECT",
            "ofType": null
          }
        }
      },
      {
        "name": "setUserGroupRolesInDeviceGroup",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "SetUserGroupRolesInDeviceGroupResult",
            "kind": "OBJECT",
            "ofType": null
          }
        }
      },
      {
        "name": "removeUserGroupsFromDeviceGroup",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "RemoveUserGroupsFromDeviceGroupResult",
            "kind": "OBJECT",
            "ofType": null
          }
        }
      },
      {
        "name": "addDevicesToDeviceGroup",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "AddDevicesToDeviceGroupResult",
            "kind": "OBJECT",
            "ofType": null
          }
        }
      },
      {
        "name": "setDevicesInDeviceGroup",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "SetDevicesInDeviceGroupResult",
            "kind": "OBJECT",
            "ofType": null
          }
        }
      },
      {
        "name": "removeDevicesFromDeviceGroup",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "RemoveDevicesFromDeviceGroupResult",
            "kind": "OBJECT",
            "ofType": null
          }
        }
      },
      {
        "name": "createMetadataItem",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "MetadataItem",
            "kind": "OBJECT",
            "ofType": null
          }
        }
      },
      {
        "name": "updateMetadataItem",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "MetadataItem",
            "kind": "OBJECT",
            "ofType": null
          }
        }
      },
      {
        "name": "upsertMetadataItem",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "MetadataItem",
            "kind": "OBJECT",
            "ofType": null
          }
        }
      },
      {
        "name": "createMQTTDevice",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "MQTTDevice",
            "kind": "OBJECT",
            "ofType": null
          }
        }
      },
      {
        "name": "updateMQTTDevice",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "MQTTDevice",
            "kind": "OBJECT",
            "ofType": null
          }
        }
      },
      {
        "name": "createMQTTDeviceChannel",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "MQTTDeviceChannel",
            "kind": "OBJECT",
            "ofType": null
          }
        }
      },
      {
        "name": "updateMQTTDeviceChannel",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "MQTTDeviceChannel",
            "kind": "OBJECT",
            "ofType": null
          }
        }
      },
      {
        "name": "destroyMQTTDeviceChannels",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "DestroyMQTTDeviceChannelsResult",
            "kind": "OBJECT",
            "ofType": null
          }
        }
      },
      {
        "name": "createOrganization",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "Organization",
            "kind": "OBJECT",
            "ofType": null
          }
        }
      },
      {
        "name": "updateOrganization",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "Organization",
            "kind": "OBJECT",
            "ofType": null
          }
        }
      },
      {
        "name": "destroyOrganization",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "DestroyOrganizationResult",
            "kind": "OBJECT",
            "ofType": null
          }
        }
      },
      {
        "name": "addUsersToOrganization",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "AddUsersToOrganizationResult",
            "kind": "OBJECT",
            "ofType": null
          }
        }
      },
      {
        "name": "setUsersRoleInOrganization",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "SetUsersRoleInOrganizationResult",
            "kind": "OBJECT",
            "ofType": null
          }
        }
      },
      {
        "name": "removeUsersFromOrganization",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "RemoveUsersFromOrganizationResult",
            "kind": "OBJECT",
            "ofType": null
          }
        }
      },
      {
        "name": "createUser",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "User",
            "kind": "OBJECT",
            "ofType": null
          }
        }
      },
      {
        "name": "updateUser",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "User",
            "kind": "OBJECT",
            "ofType": null
          }
        }
      },
      {
        "name": "destroyUser",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "DestroyUserResult",
            "kind": "OBJECT",
            "ofType": null
          }
        }
      },
      {
        "name": "createUserGroup",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "UserGroup",
            "kind": "OBJECT",
            "ofType": null
          }
        }
      },
      {
        "name": "updateUserGroup",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "UserGroup",
            "kind": "OBJECT",
            "ofType": null
          }
        }
      },
      {
        "name": "destroyUserGroup",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "DestroyUserGroupResult",
            "kind": "OBJECT",
            "ofType": null
          }
        }
      },
      {
        "name": "addUsersToUserGroup",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "AddUsersToUserGroupResult",
            "kind": "OBJECT",
            "ofType": null
          }
        }
      },
      {
        "name": "setUserGroupMembers",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "SetUserGroupMembersResult",
            "kind": "OBJECT",
            "ofType": null
          }
        }
      },
      {
        "name": "removeUsersFromUserGroup",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "RemoveUsersFromUserGroupResult",
            "kind": "OBJECT",
            "ofType": null
          }
        }
      }
    ]
  },
  {
    "name": "CreateCustomDashboard",
    "kind": "INPUT_OBJECT",
    "fields": null
  },
  {
    "name": "UpdateCustomDashboard",
    "kind": "INPUT_OBJECT",
    "fields": null
  },
  {
    "name": "CreateDevice",
    "kind": "INPUT_OBJECT",
    "fields": null
  },
  {
    "name": "UpdateDevice",
    "kind": "INPUT_OBJECT",
    "fields": null
  },
  {
    "name": "DestroyDeviceResult",
    "kind": "OBJECT",
    "fields": [
      {
        "name": "deviceId",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "Int",
            "kind": "SCALAR",
            "ofType": null
          }
        }
      }
    ]
  },
  {
    "name": "DestroyDevicesResult",
    "kind": "OBJECT",
    "fields": [
      {
        "name": "deviceIds",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": null,
            "kind": "LIST",
            "ofType": {
              "name": null,
              "kind": "NON_NULL"
            }
          }
        }
      }
    ]
  },
  {
    "name": "AddUsersToDeviceResult",
    "kind": "OBJECT",
    "fields": [
      {
        "name": "deviceId",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "Int",
            "kind": "SCALAR",
            "ofType": null
          }
        }
      },
      {
        "name": "userIds",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": null,
            "kind": "LIST",
            "ofType": {
              "name": null,
              "kind": "NON_NULL"
            }
          }
        }
      },
      {
        "name": "roles",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "JSON",
            "kind": "SCALAR",
            "ofType": null
          }
        }
      }
    ]
  },
  {
    "name": "SetUsersRolesInDeviceResult",
    "kind": "OBJECT",
    "fields": [
      {
        "name": "deviceId",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "Int",
            "kind": "SCALAR",
            "ofType": null
          }
        }
      },
      {
        "name": "userIds",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": null,
            "kind": "LIST",
            "ofType": {
              "name": null,
              "kind": "NON_NULL"
            }
          }
        }
      },
      {
        "name": "roles",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "JSON",
            "kind": "SCALAR",
            "ofType": null
          }
        }
      }
    ]
  },
  {
    "name": "SetUserRolesInDeviceResult",
    "kind": "OBJECT",
    "fields": [
      {
        "name": "deviceId",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "Int",
            "kind": "SCALAR",
            "ofType": null
          }
        }
      },
      {
        "name": "userId",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "Int",
            "kind": "SCALAR",
            "ofType": null
          }
        }
      },
      {
        "name": "roles",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "JSON",
            "kind": "SCALAR",
            "ofType": null
          }
        }
      }
    ]
  },
  {
    "name": "RemoveUsersFromDeviceResult",
    "kind": "OBJECT",
    "fields": [
      {
        "name": "deviceId",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "Int",
            "kind": "SCALAR",
            "ofType": null
          }
        }
      },
      {
        "name": "userIds",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": null,
            "kind": "LIST",
            "ofType": {
              "name": null,
              "kind": "NON_NULL"
            }
          }
        }
      }
    ]
  },
  {
    "name": "AddUserGroupsToDeviceResult",
    "kind": "OBJECT",
    "fields": [
      {
        "name": "deviceId",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "Int",
            "kind": "SCALAR",
            "ofType": null
          }
        }
      },
      {
        "name": "userGroupIds",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": null,
            "kind": "LIST",
            "ofType": {
              "name": null,
              "kind": "NON_NULL"
            }
          }
        }
      },
      {
        "name": "roles",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "JSON",
            "kind": "SCALAR",
            "ofType": null
          }
        }
      }
    ]
  },
  {
    "name": "SetUserGroupsRolesInDeviceResult",
    "kind": "OBJECT",
    "fields": [
      {
        "name": "deviceId",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "Int",
            "kind": "SCALAR",
            "ofType": null
          }
        }
      },
      {
        "name": "userGroupIds",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": null,
            "kind": "LIST",
            "ofType": {
              "name": null,
              "kind": "NON_NULL"
            }
          }
        }
      },
      {
        "name": "roles",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "JSON",
            "kind": "SCALAR",
            "ofType": null
          }
        }
      }
    ]
  },
  {
    "name": "SetUserGroupRolesInDeviceResult",
    "kind": "OBJECT",
    "fields": [
      {
        "name": "deviceId",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "Int",
            "kind": "SCALAR",
            "ofType": null
          }
        }
      },
      {
        "name": "userGroupId",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "Int",
            "kind": "SCALAR",
            "ofType": null
          }
        }
      },
      {
        "name": "roles",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "JSON",
            "kind": "SCALAR",
            "ofType": null
          }
        }
      }
    ]
  },
  {
    "name": "RemoveUserGroupsFromDeviceResult",
    "kind": "OBJECT",
    "fields": [
      {
        "name": "deviceId",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "Int",
            "kind": "SCALAR",
            "ofType": null
          }
        }
      },
      {
        "name": "userGroupIds",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": null,
            "kind": "LIST",
            "ofType": {
              "name": null,
              "kind": "NON_NULL"
            }
          }
        }
      }
    ]
  },
  {
    "name": "CreateDeviceGroup",
    "kind": "INPUT_OBJECT",
    "fields": null
  },
  {
    "name": "UpdateDeviceGroup",
    "kind": "INPUT_OBJECT",
    "fields": null
  },
  {
    "name": "DestroyDeviceGroupResult",
    "kind": "OBJECT",
    "fields": [
      {
        "name": "deviceGroupId",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "Int",
            "kind": "SCALAR",
            "ofType": null
          }
        }
      }
    ]
  },
  {
    "name": "AddUsersToDeviceGroupResult",
    "kind": "OBJECT",
    "fields": [
      {
        "name": "deviceGroupId",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "Int",
            "kind": "SCALAR",
            "ofType": null
          }
        }
      },
      {
        "name": "userIds",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": null,
            "kind": "LIST",
            "ofType": {
              "name": null,
              "kind": "NON_NULL"
            }
          }
        }
      },
      {
        "name": "roles",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "JSON",
            "kind": "SCALAR",
            "ofType": null
          }
        }
      }
    ]
  },
  {
    "name": "SetUsersRolesInDeviceGroupResult",
    "kind": "OBJECT",
    "fields": [
      {
        "name": "deviceGroupId",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "Int",
            "kind": "SCALAR",
            "ofType": null
          }
        }
      },
      {
        "name": "userIds",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": null,
            "kind": "LIST",
            "ofType": {
              "name": null,
              "kind": "NON_NULL"
            }
          }
        }
      },
      {
        "name": "roles",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "JSON",
            "kind": "SCALAR",
            "ofType": null
          }
        }
      }
    ]
  },
  {
    "name": "SetUserRolesInDeviceGroupResult",
    "kind": "OBJECT",
    "fields": [
      {
        "name": "deviceGroupId",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "Int",
            "kind": "SCALAR",
            "ofType": null
          }
        }
      },
      {
        "name": "userId",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "Int",
            "kind": "SCALAR",
            "ofType": null
          }
        }
      },
      {
        "name": "roles",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "JSON",
            "kind": "SCALAR",
            "ofType": null
          }
        }
      }
    ]
  },
  {
    "name": "RemoveUsersFromDeviceGroupResult",
    "kind": "OBJECT",
    "fields": [
      {
        "name": "deviceGroupId",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "Int",
            "kind": "SCALAR",
            "ofType": null
          }
        }
      },
      {
        "name": "userIds",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": null,
            "kind": "LIST",
            "ofType": {
              "name": null,
              "kind": "NON_NULL"
            }
          }
        }
      }
    ]
  },
  {
    "name": "AddUserGroupsToDeviceGroupResult",
    "kind": "OBJECT",
    "fields": [
      {
        "name": "deviceGroupId",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "Int",
            "kind": "SCALAR",
            "ofType": null
          }
        }
      },
      {
        "name": "userGroupIds",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": null,
            "kind": "LIST",
            "ofType": {
              "name": null,
              "kind": "NON_NULL"
            }
          }
        }
      },
      {
        "name": "roles",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "JSON",
            "kind": "SCALAR",
            "ofType": null
          }
        }
      }
    ]
  },
  {
    "name": "SetUserGroupsRolesInDeviceGroupResult",
    "kind": "OBJECT",
    "fields": [
      {
        "name": "deviceGroupId",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "Int",
            "kind": "SCALAR",
            "ofType": null
          }
        }
      },
      {
        "name": "userGroupIds",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": null,
            "kind": "LIST",
            "ofType": {
              "name": null,
              "kind": "NON_NULL"
            }
          }
        }
      },
      {
        "name": "roles",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "JSON",
            "kind": "SCALAR",
            "ofType": null
          }
        }
      }
    ]
  },
  {
    "name": "SetUserGroupRolesInDeviceGroupResult",
    "kind": "OBJECT",
    "fields": [
      {
        "name": "deviceGroupId",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "Int",
            "kind": "SCALAR",
            "ofType": null
          }
        }
      },
      {
        "name": "userGroupId",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "Int",
            "kind": "SCALAR",
            "ofType": null
          }
        }
      },
      {
        "name": "roles",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "JSON",
            "kind": "SCALAR",
            "ofType": null
          }
        }
      }
    ]
  },
  {
    "name": "RemoveUserGroupsFromDeviceGroupResult",
    "kind": "OBJECT",
    "fields": [
      {
        "name": "deviceGroupId",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "Int",
            "kind": "SCALAR",
            "ofType": null
          }
        }
      },
      {
        "name": "userGroupIds",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": null,
            "kind": "LIST",
            "ofType": {
              "name": null,
              "kind": "NON_NULL"
            }
          }
        }
      }
    ]
  },
  {
    "name": "AddDevicesToDeviceGroupResult",
    "kind": "OBJECT",
    "fields": [
      {
        "name": "deviceGroupId",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "Int",
            "kind": "SCALAR",
            "ofType": null
          }
        }
      },
      {
        "name": "deviceIds",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": null,
            "kind": "LIST",
            "ofType": {
              "name": null,
              "kind": "NON_NULL"
            }
          }
        }
      }
    ]
  },
  {
    "name": "SetDevicesInDeviceGroupResult",
    "kind": "OBJECT",
    "fields": [
      {
        "name": "deviceGroupId",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "Int",
            "kind": "SCALAR",
            "ofType": null
          }
        }
      },
      {
        "name": "deviceIds",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": null,
            "kind": "LIST",
            "ofType": {
              "name": null,
              "kind": "NON_NULL"
            }
          }
        }
      }
    ]
  },
  {
    "name": "RemoveDevicesFromDeviceGroupResult",
    "kind": "OBJECT",
    "fields": [
      {
        "name": "deviceGroupId",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "Int",
            "kind": "SCALAR",
            "ofType": null
          }
        }
      },
      {
        "name": "deviceIds",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": null,
            "kind": "LIST",
            "ofType": {
              "name": null,
              "kind": "NON_NULL"
            }
          }
        }
      }
    ]
  },
  {
    "name": "InputMetadataItem",
    "kind": "INPUT_OBJECT",
    "fields": null
  },
  {
    "name": "CreateMQTTDevice",
    "kind": "INPUT_OBJECT",
    "fields": null
  },
  {
    "name": "UpdateMQTTDevice",
    "kind": "INPUT_OBJECT",
    "fields": null
  },
  {
    "name": "UpsertMQTTDeviceChannelGroup",
    "kind": "INPUT_OBJECT",
    "fields": null
  },
  {
    "name": "CreateMQTTDeviceChannel",
    "kind": "INPUT_OBJECT",
    "fields": null
  },
  {
    "name": "UpdateMQTTDeviceChannel",
    "kind": "INPUT_OBJECT",
    "fields": null
  },
  {
    "name": "DestroyMQTTDeviceChannelsResult",
    "kind": "OBJECT",
    "fields": [
      {
        "name": "ids",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": null,
            "kind": "LIST",
            "ofType": {
              "name": null,
              "kind": "NON_NULL"
            }
          }
        }
      }
    ]
  },
  {
    "name": "CreateOrganization",
    "kind": "INPUT_OBJECT",
    "fields": null
  },
  {
    "name": "UpdateOrganization",
    "kind": "INPUT_OBJECT",
    "fields": null
  },
  {
    "name": "DestroyOrganizationResult",
    "kind": "OBJECT",
    "fields": [
      {
        "name": "organizationId",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "Int",
            "kind": "SCALAR",
            "ofType": null
          }
        }
      }
    ]
  },
  {
    "name": "AddUsersToOrganizationResult",
    "kind": "OBJECT",
    "fields": [
      {
        "name": "organizationId",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "Int",
            "kind": "SCALAR",
            "ofType": null
          }
        }
      },
      {
        "name": "userIds",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": null,
            "kind": "LIST",
            "ofType": {
              "name": null,
              "kind": "NON_NULL"
            }
          }
        }
      }
    ]
  },
  {
    "name": "SetUsersRoleInOrganizationResult",
    "kind": "OBJECT",
    "fields": [
      {
        "name": "organizationId",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "Int",
            "kind": "SCALAR",
            "ofType": null
          }
        }
      },
      {
        "name": "userIds",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": null,
            "kind": "LIST",
            "ofType": {
              "name": null,
              "kind": "NON_NULL"
            }
          }
        }
      },
      {
        "name": "role",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "RoleInOrganization",
            "kind": "ENUM",
            "ofType": null
          }
        }
      }
    ]
  },
  {
    "name": "RemoveUsersFromOrganizationResult",
    "kind": "OBJECT",
    "fields": [
      {
        "name": "organizationId",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "Int",
            "kind": "SCALAR",
            "ofType": null
          }
        }
      },
      {
        "name": "userIds",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": null,
            "kind": "LIST",
            "ofType": {
              "name": null,
              "kind": "NON_NULL"
            }
          }
        }
      }
    ]
  },
  {
    "name": "CreateUser",
    "kind": "INPUT_OBJECT",
    "fields": null
  },
  {
    "name": "UpdateUser",
    "kind": "INPUT_OBJECT",
    "fields": null
  },
  {
    "name": "DestroyUserResult",
    "kind": "OBJECT",
    "fields": [
      {
        "name": "userId",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "Int",
            "kind": "SCALAR",
            "ofType": null
          }
        }
      }
    ]
  },
  {
    "name": "CreateUserGroup",
    "kind": "INPUT_OBJECT",
    "fields": null
  },
  {
    "name": "UpdateUserGroup",
    "kind": "INPUT_OBJECT",
    "fields": null
  },
  {
    "name": "DestroyUserGroupResult",
    "kind": "OBJECT",
    "fields": [
      {
        "name": "userGroupId",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "Int",
            "kind": "SCALAR",
            "ofType": null
          }
        }
      }
    ]
  },
  {
    "name": "AddUsersToUserGroupResult",
    "kind": "OBJECT",
    "fields": [
      {
        "name": "userGroupId",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "Int",
            "kind": "SCALAR",
            "ofType": null
          }
        }
      },
      {
        "name": "userIds",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": null,
            "kind": "LIST",
            "ofType": {
              "name": null,
              "kind": "NON_NULL"
            }
          }
        }
      }
    ]
  },
  {
    "name": "SetUserGroupMembersResult",
    "kind": "OBJECT",
    "fields": [
      {
        "name": "userGroupId",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "Int",
            "kind": "SCALAR",
            "ofType": null
          }
        }
      },
      {
        "name": "userIds",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": null,
            "kind": "LIST",
            "ofType": {
              "name": null,
              "kind": "NON_NULL"
            }
          }
        }
      }
    ]
  },
  {
    "name": "RemoveUsersFromUserGroupResult",
    "kind": "OBJECT",
    "fields": [
      {
        "name": "userGroupId",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "Int",
            "kind": "SCALAR",
            "ofType": null
          }
        }
      },
      {
        "name": "userIds",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": null,
            "kind": "LIST",
            "ofType": {
              "name": null,
              "kind": "NON_NULL"
            }
          }
        }
      }
    ]
  },
  {
    "name": "Subscription",
    "kind": "OBJECT",
    "fields": [
      {
        "name": "HistoricalDataPage",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "TimeSeriesDataPageSubMessage",
            "kind": "OBJECT",
            "ofType": null
          }
        }
      },
      {
        "name": "Metadata",
        "type": {
          "name": "MetadataItem",
          "kind": "OBJECT",
          "ofType": null
        }
      },
      {
        "name": "TagState",
        "type": {
          "name": "TagState",
          "kind": "OBJECT",
          "ofType": null
        }
      }
    ]
  },
  {
    "name": "TimeSeriesDataPageSubRequest",
    "kind": "INPUT_OBJECT",
    "fields": null
  },
  {
    "name": "TimeSeriesDataPageSubMessage",
    "kind": "OBJECT",
    "fields": [
      {
        "name": "data",
        "type": {
          "name": "TimeSeriesDataPageSubData",
          "kind": "OBJECT",
          "ofType": null
        }
      },
      {
        "name": "ready",
        "type": {
          "name": "Boolean",
          "kind": "SCALAR",
          "ofType": null
        }
      },
      {
        "name": "error",
        "type": {
          "name": "String",
          "kind": "SCALAR",
          "ofType": null
        }
      }
    ]
  },
  {
    "name": "TimeSeriesDataPageSubData",
    "kind": "OBJECT",
    "fields": [
      {
        "name": "t",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "JSON",
            "kind": "SCALAR",
            "ofType": null
          }
        }
      },
      {
        "name": "v",
        "type": {
          "name": "JSON",
          "kind": "SCALAR",
          "ofType": null
        }
      },
      {
        "name": "min",
        "type": {
          "name": "JSON",
          "kind": "SCALAR",
          "ofType": null
        }
      },
      {
        "name": "max",
        "type": {
          "name": "JSON",
          "kind": "SCALAR",
          "ofType": null
        }
      },
      {
        "name": "modCount",
        "type": {
          "name": "Int",
          "kind": "SCALAR",
          "ofType": null
        }
      },
      {
        "name": "pageSize",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "Float",
            "kind": "SCALAR",
            "ofType": null
          }
        }
      },
      {
        "name": "channelId",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "String",
            "kind": "SCALAR",
            "ofType": null
          }
        }
      },
      {
        "name": "clear",
        "type": {
          "name": "Boolean",
          "kind": "SCALAR",
          "ofType": null
        }
      },
      {
        "name": "beginTime",
        "type": {
          "name": "Float",
          "kind": "SCALAR",
          "ofType": null
        }
      },
      {
        "name": "endTime",
        "type": {
          "name": "Float",
          "kind": "SCALAR",
          "ofType": null
        }
      }
    ]
  },
  {
    "name": "__Schema",
    "kind": "OBJECT",
    "fields": [
      {
        "name": "types",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": null,
            "kind": "LIST",
            "ofType": {
              "name": null,
              "kind": "NON_NULL"
            }
          }
        }
      },
      {
        "name": "queryType",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "__Type",
            "kind": "OBJECT",
            "ofType": null
          }
        }
      },
      {
        "name": "mutationType",
        "type": {
          "name": "__Type",
          "kind": "OBJECT",
          "ofType": null
        }
      },
      {
        "name": "subscriptionType",
        "type": {
          "name": "__Type",
          "kind": "OBJECT",
          "ofType": null
        }
      },
      {
        "name": "directives",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": null,
            "kind": "LIST",
            "ofType": {
              "name": null,
              "kind": "NON_NULL"
            }
          }
        }
      }
    ]
  },
  {
    "name": "__Type",
    "kind": "OBJECT",
    "fields": [
      {
        "name": "kind",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "__TypeKind",
            "kind": "ENUM",
            "ofType": null
          }
        }
      },
      {
        "name": "name",
        "type": {
          "name": "String",
          "kind": "SCALAR",
          "ofType": null
        }
      },
      {
        "name": "description",
        "type": {
          "name": "String",
          "kind": "SCALAR",
          "ofType": null
        }
      },
      {
        "name": "fields",
        "type": {
          "name": null,
          "kind": "LIST",
          "ofType": {
            "name": null,
            "kind": "NON_NULL",
            "ofType": {
              "name": "__Field",
              "kind": "OBJECT"
            }
          }
        }
      },
      {
        "name": "interfaces",
        "type": {
          "name": null,
          "kind": "LIST",
          "ofType": {
            "name": null,
            "kind": "NON_NULL",
            "ofType": {
              "name": "__Type",
              "kind": "OBJECT"
            }
          }
        }
      },
      {
        "name": "possibleTypes",
        "type": {
          "name": null,
          "kind": "LIST",
          "ofType": {
            "name": null,
            "kind": "NON_NULL",
            "ofType": {
              "name": "__Type",
              "kind": "OBJECT"
            }
          }
        }
      },
      {
        "name": "enumValues",
        "type": {
          "name": null,
          "kind": "LIST",
          "ofType": {
            "name": null,
            "kind": "NON_NULL",
            "ofType": {
              "name": "__EnumValue",
              "kind": "OBJECT"
            }
          }
        }
      },
      {
        "name": "inputFields",
        "type": {
          "name": null,
          "kind": "LIST",
          "ofType": {
            "name": null,
            "kind": "NON_NULL",
            "ofType": {
              "name": "__InputValue",
              "kind": "OBJECT"
            }
          }
        }
      },
      {
        "name": "ofType",
        "type": {
          "name": "__Type",
          "kind": "OBJECT",
          "ofType": null
        }
      }
    ]
  },
  {
    "name": "__TypeKind",
    "kind": "ENUM",
    "fields": null
  },
  {
    "name": "__Field",
    "kind": "OBJECT",
    "fields": [
      {
        "name": "name",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "String",
            "kind": "SCALAR",
            "ofType": null
          }
        }
      },
      {
        "name": "description",
        "type": {
          "name": "String",
          "kind": "SCALAR",
          "ofType": null
        }
      },
      {
        "name": "args",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": null,
            "kind": "LIST",
            "ofType": {
              "name": null,
              "kind": "NON_NULL"
            }
          }
        }
      },
      {
        "name": "type",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "__Type",
            "kind": "OBJECT",
            "ofType": null
          }
        }
      },
      {
        "name": "isDeprecated",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "Boolean",
            "kind": "SCALAR",
            "ofType": null
          }
        }
      },
      {
        "name": "deprecationReason",
        "type": {
          "name": "String",
          "kind": "SCALAR",
          "ofType": null
        }
      }
    ]
  },
  {
    "name": "__InputValue",
    "kind": "OBJECT",
    "fields": [
      {
        "name": "name",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "String",
            "kind": "SCALAR",
            "ofType": null
          }
        }
      },
      {
        "name": "description",
        "type": {
          "name": "String",
          "kind": "SCALAR",
          "ofType": null
        }
      },
      {
        "name": "type",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "__Type",
            "kind": "OBJECT",
            "ofType": null
          }
        }
      },
      {
        "name": "defaultValue",
        "type": {
          "name": "String",
          "kind": "SCALAR",
          "ofType": null
        }
      }
    ]
  },
  {
    "name": "__EnumValue",
    "kind": "OBJECT",
    "fields": [
      {
        "name": "name",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "String",
            "kind": "SCALAR",
            "ofType": null
          }
        }
      },
      {
        "name": "description",
        "type": {
          "name": "String",
          "kind": "SCALAR",
          "ofType": null
        }
      },
      {
        "name": "isDeprecated",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "Boolean",
            "kind": "SCALAR",
            "ofType": null
          }
        }
      },
      {
        "name": "deprecationReason",
        "type": {
          "name": "String",
          "kind": "SCALAR",
          "ofType": null
        }
      }
    ]
  },
  {
    "name": "__Directive",
    "kind": "OBJECT",
    "fields": [
      {
        "name": "name",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "String",
            "kind": "SCALAR",
            "ofType": null
          }
        }
      },
      {
        "name": "description",
        "type": {
          "name": "String",
          "kind": "SCALAR",
          "ofType": null
        }
      },
      {
        "name": "locations",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": null,
            "kind": "LIST",
            "ofType": {
              "name": null,
              "kind": "NON_NULL"
            }
          }
        }
      },
      {
        "name": "args",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": null,
            "kind": "LIST",
            "ofType": {
              "name": null,
              "kind": "NON_NULL"
            }
          }
        }
      }
    ]
  },
  {
    "name": "__DirectiveLocation",
    "kind": "ENUM",
    "fields": null
  },
  {
    "name": "TimeSeriesDataArrays",
    "kind": "OBJECT",
    "fields": [
      {
        "name": "t",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "JSON",
            "kind": "SCALAR",
            "ofType": null
          }
        }
      },
      {
        "name": "v",
        "type": {
          "name": "JSON",
          "kind": "SCALAR",
          "ofType": null
        }
      },
      {
        "name": "min",
        "type": {
          "name": "JSON",
          "kind": "SCALAR",
          "ofType": null
        }
      },
      {
        "name": "max",
        "type": {
          "name": "JSON",
          "kind": "SCALAR",
          "ofType": null
        }
      }
    ]
  },
  {
    "name": "TimeSeriesDataPage",
    "kind": "OBJECT",
    "fields": [
      {
        "name": "t",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "JSON",
            "kind": "SCALAR",
            "ofType": null
          }
        }
      },
      {
        "name": "v",
        "type": {
          "name": "JSON",
          "kind": "SCALAR",
          "ofType": null
        }
      },
      {
        "name": "min",
        "type": {
          "name": "JSON",
          "kind": "SCALAR",
          "ofType": null
        }
      },
      {
        "name": "max",
        "type": {
          "name": "JSON",
          "kind": "SCALAR",
          "ofType": null
        }
      },
      {
        "name": "modCount",
        "type": {
          "name": "Int",
          "kind": "SCALAR",
          "ofType": null
        }
      }
    ]
  },
  {
    "name": "MQTTDeviceEdge",
    "kind": "OBJECT",
    "fields": [
      {
        "name": "cursor",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "String",
            "kind": "SCALAR",
            "ofType": null
          }
        }
      },
      {
        "name": "node",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "MQTTDevice",
            "kind": "OBJECT",
            "ofType": null
          }
        }
      }
    ]
  },
  {
    "name": "MQTTDeviceConnection",
    "kind": "OBJECT",
    "fields": [
      {
        "name": "pageInfo",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "PageInfo",
            "kind": "OBJECT",
            "ofType": null
          }
        }
      },
      {
        "name": "fullCount",
        "type": {
          "name": "Int",
          "kind": "SCALAR",
          "ofType": null
        }
      },
      {
        "name": "edges",
        "type": {
          "name": null,
          "kind": "LIST",
          "ofType": {
            "name": "MQTTDeviceEdge",
            "kind": "OBJECT",
            "ofType": null
          }
        }
      }
    ]
  },
  {
    "name": "MQTTDevicesOrderBy",
    "kind": "ENUM",
    "fields": null
  },
  {
    "name": "MQTTDeviceChannelGroupEdge",
    "kind": "OBJECT",
    "fields": [
      {
        "name": "cursor",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "String",
            "kind": "SCALAR",
            "ofType": null
          }
        }
      },
      {
        "name": "node",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "MQTTDeviceChannelGroup",
            "kind": "OBJECT",
            "ofType": null
          }
        }
      }
    ]
  },
  {
    "name": "MQTTDeviceChannelGroupConnection",
    "kind": "OBJECT",
    "fields": [
      {
        "name": "pageInfo",
        "type": {
          "name": null,
          "kind": "NON_NULL",
          "ofType": {
            "name": "PageInfo",
            "kind": "OBJECT",
            "ofType": null
          }
        }
      },
      {
        "name": "fullCount",
        "type": {
          "name": "Int",
          "kind": "SCALAR",
          "ofType": null
        }
      },
      {
        "name": "edges",
        "type": {
          "name": null,
          "kind": "LIST",
          "ofType": {
            "name": "MQTTDeviceChannelGroupEdge",
            "kind": "OBJECT",
            "ofType": null
          }
        }
      }
    ]
  },
  {
    "name": "MQTTDeviceChannelGroupsOrderBy",
    "kind": "ENUM",
    "fields": null
  },
  {
    "name": "JSON",
    "kind": "SCALAR",
    "fields": null
  }
]
