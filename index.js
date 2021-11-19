import { config } from './config';
import { initDB } from './db';
import { initRepositories } from './repositories';
import { initServices } from './services';
import { isValidConfig } from './helpers';

const main = async () => {
  try {
    if (!isValidConfig(config)) {
      console.log('Invalid config');
      return 1;
    }

    const db = initDB(config);
    const repositories = initRepositories(db);
    const services = initServices(repositories);
    const data = await services.cassandraParser.parse(config.keyspace);
    services.cassandraParser.export(data);
  } catch (err) {
    if (err.dbError) {
      console.log(err.dbError);
    } else {
      console.log('Something went wrong');
    }
  }
};

main();
