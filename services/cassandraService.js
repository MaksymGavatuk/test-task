import { DefaultCassandraColumnName } from '../common';

class CassandraService {
  constructor(repository) {
    this.repository = repository;
  }

  async getAllTablesNamesFromKeyspace(keyspaceName) {
    const dbResult = await this.repository.getColumnsFromKeyspace(
      DefaultCassandraColumnName.TABLE_NAME,
      keyspaceName
    );
    return dbResult.rows;
  }

  async getAllColumnsNameWithTypeFromTable(tableName) {
    const dbResult = await this.repository.getColumnsFromTable(
      `${DefaultCassandraColumnName.COLUMN_NAME}, ${DefaultCassandraColumnName.TYPE}`,
      tableName
    );
    return dbResult.rows;
  }

  async getFirstValueInTable(tableName) {
    const dbResult = await this.repository.getValueFromTable(
      DefaultCassandraColumnName.ALL,
      tableName,
      1
    );
    return dbResult.rows[0];
  }
}

export { CassandraService };
