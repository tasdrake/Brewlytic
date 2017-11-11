module.exports = {
  development: {
    client: 'pg',
    connection: {
      database: process.env.DATABASE_URL || 'brewlytic'
    }
  },
  production:{
    client: 'pg',
    connection: process.env.DATABASE_URL
  },
  test: {
    client: 'pg',
    connection: {
      database: process.env.DATABASE_URL || 'brewlytic-test'
    }
  }
};
