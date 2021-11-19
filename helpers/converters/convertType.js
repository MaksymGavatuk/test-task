import { CQLType, JSONSchemaType } from '../../common';

// This is function convert CQL type into JSON Schema type
export const convertType = (type) => {
  switch (type) {
    case CQLType.ascii:
      return JSONSchemaType.string;
    case CQLType.bigint:
      return JSONSchemaType.number;
    case CQLType.blob:
      return JSONSchemaType.string;
    case CQLType.boolean:
      return JSONSchemaType.boolean;
    case CQLType.date:
      return JSONSchemaType.string;
    case CQLType.decimal:
      return JSONSchemaType.number;
    case CQLType.double:
      return JSONSchemaType.number;
    case CQLType.float:
      return JSONSchemaType.number;
    case CQLType.inet:
      return JSONSchemaType.string;
    case CQLType.int:
      return JSONSchemaType.number;
    case CQLType.smallint:
      return JSONSchemaType.number;
    case CQLType.text:
      return JSONSchemaType.string;
    case CQLType.time:
      return JSONSchemaType.string;
    case CQLType.timestamp:
      return JSONSchemaType.string;
    case CQLType.timeuuid:
      return JSONSchemaType.string;
    case CQLType.tinyint:
      return JSONSchemaType.number;
    case CQLType.uuid:
      return JSONSchemaType.string;
    case CQLType.varchar:
      return JSONSchemaType.string;
    case CQLType.varint:
      return JSONSchemaType.number;
  }
};
