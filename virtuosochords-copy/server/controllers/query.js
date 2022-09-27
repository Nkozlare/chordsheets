import db from '../../database/db.js';

function addUser(info) {
  const query = `INSERT INTO users(username, password) VALUES ('${info.username}', '${info.password}')`;
  console.log(query);
  return db.query(query);
}

const addLyrics = (info) => {
  const query = `INSERT INTO lyrics(lyrics, artist, album, username_id) VALUES (${info.lyrics}, ${info.artist}, ${info.album}, ${info.username_id})`;
  return db.query(query);
}

function getUser(info) {
  const query = `SELECT * FROM users WHERE username='${info.username}' AND password = '${info.password}'`;
  console.log(query);
  return db.query(query);
}

function getLyrics(info) {
  const query = `SELECT * FROM lyrics WHERE username_id=${info.username_id}`
}
// index username and username_id

export { addUser, addLyrics, getUser, getLyrics };