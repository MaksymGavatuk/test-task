import cassandra from 'cassandra-driver';

export const initDB = ({ user, password, host, port, keyspace }) => {
  try {
    const authProvider = new cassandra.auth.PlainTextAuthProvider(
      user,
      password
    );
    const db = new cassandra.Client({
      contactPoints: [host],
      authProvider: authProvider,
      protocolOptions: { port: [port] },
      localDataCenter: 'datacenter1',
      keyspace: keyspace
    });
    return db;
  } catch (err) {
    err.dbError = 'Invalid credentials';
  }
};
