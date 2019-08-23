const path = require('path')

module.exports = {
  app: {
    defaultLang: 'en',
  },
  db: {
    client: 'mysql',
    connection: {
      host: '139.162.57.73',
      user: 'balideco_root',
      password: 'oK57jrCQ6$WM',
      database: 'balideco_db',
    },
    debug: true,
    pool: { min: 2, max: 100 },
    acquireConnectionTimeout: 10000,
    asyncStackTraces: true,
    seeds: { directory: path.join(__dirname, 'db/seeds') },
    migrations: { directory: path.join(__dirname, 'db/migrations') },
  },
}
