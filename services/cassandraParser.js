import {
  mapTableName,
  mapColumnsNameWithType,
  parseColumn,
  writeFile,
  getInitialSchema
} from '../helpers';

class CassandraParser {
  constructor(cassandraService) {
    this.cassandraService = cassandraService;
  }

  async parse(keyspace) {
    const tableNamesMap = new Map();

    const tableNames = mapTableName(
      await this.cassandraService.getAllTablesNamesFromKeyspace(keyspace)
    );

    const data = await Promise.all(
      tableNames.map(async (el) => {
        const columnSchemaMap = new Map();

        const columnSchema = mapColumnsNameWithType(
          await this.cassandraService.getAllColumnsNameWithTypeFromTable(el)
        );
        const value = await this.cassandraService.getFirstValueInTable(el);

        columnSchema.forEach(({ columnName, type }) => {
          if (value && value.hasOwnProperty(columnName)) {
            columnSchemaMap.set(
              columnName,
              parseColumn(type, value[columnName])
            );
          } else {
            columnSchemaMap.set(columnName, parseColumn(type, null));
          }
        });

        // return Object.fromEntries(getTableInitialSchema(columnSchemaMap, el));
        // tableNamesMap.set(el, Object.fromEntries(columnSchemaMap));
        tableNamesMap.set(
          el,
          Object.fromEntries(getInitialSchema(columnSchemaMap, el))
        );
      })
    );
    return Object.fromEntries(getInitialSchema(tableNamesMap, keyspace, true));
  }

  async export(obj) {
    writeFile(JSON.stringify(obj));
  }
}

export { CassandraParser };
