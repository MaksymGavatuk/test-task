import { CassandraService } from './cassandraService';
import { CassandraParser } from './cassandraParser';

export const initServices = ({ cassandraRepository }) => {
  const cassandraService = new CassandraService(cassandraRepository);

  return {
    cassandraService: cassandraService,
    cassandraParser: new CassandraParser(cassandraService)
  };
};
