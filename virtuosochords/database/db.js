import * as pg from 'pg'
const { Pool } = pg

const db = new pg.default.Pool({
  host: 'localhost',
  user: 'postgres',
  port: 5432,
  password: 'password',
  database: 'prodig'
});

db.connect()
  .then(() => {
    console.log(`Postgres listenning on port ${db.port}`);
  }).catch((err) => {
    console.log(err);
  })



export default db