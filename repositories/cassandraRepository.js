class CassandraRepository {
  constructor(db) {
    this.db = db;
  }

  async getColumnsFromKeyspace(columns, keyspaceName) {
    return this.db.execute(
      `SELECT ${columns} FROM system_schema.tables WHERE keyspace_name = '${keyspaceName}';`
    );
  }

  async getColumnsFromTable(columns, tableName) {
    return this.db.execute(
      `SELECT ${columns} FROM system_schema.columns WHERE table_name = '${tableName}' allow filtering;`
    );
  }

  async getValueFromTable(columns, tableName, quantity) {
    return this.db.execute(
      `SELECT ${columns} FROM ${tableName} LIMIT ${quantity};`
    )
  }
}

export { CassandraRepository };
