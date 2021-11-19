import { JSONSchemaType } from '../../common';

export const isPrimaryType = (type) => {
  return (
    type === JSONSchemaType.boolean ||
    type === JSONSchemaType.number ||
    type === JSONSchemaType.null ||
    type === JSONSchemaType.string
  );
};
