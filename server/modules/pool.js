const pg = require('pg');
let pool;

// When our app is deployed to the internet we'll use the DATABASE_URL environment variable
// to set the connection info: web address, username/password, db name
// eg: DATABASE_URL=postgresql://jDoe354:secretPw123@some.db.com/prime_app
if (process.env.DATABASE_URL) {
    pool = new pg.Pool({
        connectionString: process.env.DATABASE_URL,
        ssl: {
            rejectUnauthorized: false
        }
    });
}
// When we're running this app on our own computer we'll connect to the postgres database that is also running on our computer (localhost)
else {
    pool = new pg.Pool({
        host: 'localhost',
        port: 5432,
        database: 'prime_feedback', 
    });
}

// the pool will log when it connects to the database
pool.on('connect', () => {
  console.log('Postgesql connected');
});

// the pool with emit an error on behalf of any idle clients
// it contains if a backend error or network partition happens
pool.on('error', (err) => {
  console.log('Unexpected error on idle client', err);
  process.exit(-1);
});

module.exports = pool;