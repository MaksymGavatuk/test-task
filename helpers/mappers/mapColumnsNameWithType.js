import { DefaultCassandraColumnName } from '../../common';

export const mapColumnsNameWithType = (rows) => {
  if (rows) {
    return rows.map((el) => ({
      columnName: el[DefaultCassandraColumnName.COLUMN_NAME],
      type: el[DefaultCassandraColumnName.TYPE]
    }));
  }

  return null;
};
