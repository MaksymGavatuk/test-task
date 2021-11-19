import {
  isStringIsJSON,
  isNotPrimaryType,
  isObject,
  isPrimaryType,
  isDigit,
  isDate
} from '../checkers';
import { JSONSchemaType, CQLType } from '../../common';
import { convertType } from '../converters';

export const parseColumn = (type, value) => {
  const convertedType = convertType(type);
  if (isUUID(type)) {
    return {
      type: JSONSchemaType.string,
      format: CQLType.uuid
    };
  } else if (isDate(value) && isObject(value)) {
    return {
      type: JSONSchemaType.string,
      format: CQLType.timestamp
    };
  } else if (isJSON(value)) {
    const obj = JSON.parse(value);

    return deepParsing(obj);
  } else if (isTypePrime(type, value, convertedType)) {
    const finalType = convertedType ? convertedType : type;

    if (finalType !== typeof value) {
      return {
        type: typeof value
      };
    }

    return {
      type: finalType
    };
  } else if (isTypeNotPrime(type, value)) return arrayParse(value, true);
  else if (isValueObject(value)) return deepParsing(value);
};

export const deepParsing = (obj) => {
  const valuesMap = new Map();

  Object.entries(obj).map(([key, value]) =>
    valuesMap.set(key, parseColumn(typeof value, value))
  );

  const newMap = new Map([
    ['type', JSONSchemaType.object],
    ['properties', Object.fromEntries(valuesMap)]
  ]);

  return Object.fromEntries(newMap);
};

export const arrayParse = (obj) => {
  if (!obj || obj.lenth === 0) {
    return null;
  }

  const value = obj[0];

  return {
    type: JSONSchemaType.array,
    items: parseColumn(typeof value, value)
  };
};

const isJSON = (value) =>
  value &&
  !isDigit(value) &&
  typeof value !== 'number' &&
  isStringIsJSON(value);

const isTypePrime = (type, value, convertedType) =>
  isPrimaryType(type) || isPrimaryType(convertedType) || isDigit(value);

const isTypeNotPrime = (type, value) =>
  isNotPrimaryType(type) || Array.isArray(value);

const isValueObject = (value) => value && isObject(value);

const isUUID = (type) => type === CQLType.uuid;
