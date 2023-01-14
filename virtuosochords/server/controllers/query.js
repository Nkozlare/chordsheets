import db from '../../database/db.js';

function addUser(info) {
  const query = `INSERT INTO users(username, password) VALUES ('${info.username}', '${info.password}')`;
  return db.query(query);
}

const addLyrics = (info) => {
  console.log(info);
  const query = `INSERT INTO lyrics(lyrics, artist, album, song, username_id) VALUES ('${info.lyrics}', '${info.artist}', '${info.album}', '${info.song}', '${info.username_id}')`;
  console.log(query);
  return db.query(query);
}

function getUser(info) {
  const query = `SELECT * FROM users WHERE username='${info.username}' AND password = '${info.password}'`;
  return db.query(query);
}

function getLyrics(info) {
  console.log(info);
  const query = `SELECT * FROM lyrics WHERE username_id='${info.username}'`
  console.log(query);
  return db.query(query);
}
// index username and username_id

export { addUser, addLyrics, getUser, getLyrics };