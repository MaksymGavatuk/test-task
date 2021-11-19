import { DefaultCassandraColumnName } from '../../common';

export const mapTableName = (rows) => {
  if (rows) {
    return rows.map((el) => el[DefaultCassandraColumnName.TABLE_NAME]);
  }

  return null;
};
