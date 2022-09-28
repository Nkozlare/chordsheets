import db from './db.js'

const createUsersTable = `CREATE TABLE IF NOT EXISTS users(
  user_id serial PRIMARY KEY,
  username VARCHAR ( 100 ) UNIQUE NOT NULL,
  password VARCHAR ( 100 ) NOT NULL
)`

const createLyricsTable = `CREATE TABLE IF NOT EXISTS lyrics(
  lyrics_id serial PRIMARY KEY,
  song VARCHAR ( 100 ) NOT NULL,
  lyrics VARCHAR ( 10000 ) NOT NULL,
  artist VARCHAR ( 100 ) NOT NULL,
  album VARCHAR ( 100 ) NOT NULL,
  username_id VARCHAR ( 100 ) NOT NULL
)`

db.query(createUsersTable)
  .then(() => {
    console.log('users table created');
    return db.query(createLyricsTable);
  }).then(() => {
    console.log('lyrics table created');
  }).catch((err) => {
    console.log(err);
  })