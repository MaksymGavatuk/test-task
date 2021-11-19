import { CQLType } from '../../common';

export const isNotPrimaryType = (type) => {
  return (
    type === CQLType.list ||
    type === CQLType.map ||
    type === CQLType.set ||
    type === CQLType.tuple ||
    type === CQLType.UDT
  );
};
