import { CassandraRepository } from './cassandraRepository';

export const initRepositories = (db) => ({
  cassandraRepository: new CassandraRepository(db)
});
