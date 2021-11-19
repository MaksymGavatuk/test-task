export const getInitialSchema = (map, tableName, isGeneral) => {
  if (isGeneral)
    return new Map([
      ['title', tableName],
      ['type', 'object'],
      ['$schema', 'http://json-schema.org/draft-04/schema#'],
      ['properties', Object.fromEntries(map)]
    ]);
  else
    return new Map([
      ['title', tableName],
      ['type', 'object'],
      ['properties', Object.fromEntries(map)]
    ]);
};
