import axios from 'axios';
import * as dotenv from 'dotenv';
dotenv.config();

const getTopTen = () => {
  axios.get(`http://api.musixmatch.com/ws/1.1/chart.tracks.get?page=1&page_size=10&country=us&f_has_lyrics=1&apikey=${process.env.MUSICAPI}`)
}
// get top tracks in the us
//  http://api.musixmatch.com/ws/1.1/chart.tracks.get?page=1&page_size=10&country=us&f_has_lyrics=1&apikey=41e12ab4ec60591b2a44a8c09a5eac80;
//  might need to put https://cors-anywhere.herokuapp.com in front of the url in the get request.

// lyrics
// track.lyrics.get?track_id=
// `http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=111818074&apikey=41e12ab4ec60591b2a44a8c09a5eac80;`

const getLyrics = () => {
  axios.get(`http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${trackId}&apikey=${process.env.MUSICAPI}`);
}

// get songs by artist
// http://api.musixmatch.com/ws/1.1/track.search?q_artist=jon bellion&page_size=3&page=1&s_track_rating=desc&f_has_lyrics=1&apikey=41e12ab4ec60591b2a44a8c09a5eac80
//track id for all time low 111818074

const getSongsByArtist = () => {
  axios.get(`http://api.musixmatch.com/ws/1.1/track.search?q_artist=${artistName}&page_size=${count}&page=1&s_track_rating=desc&f_has_lyrics=1&apikey=${process.env.MUSICAPI}`)
}

const getSongsBySongName = () => {
  axios.get(`http://api.musixmatch.com/ws/1.1/track.search?q_track=${songName}&page_size=${count}&page=1&s_track_rating=desc&f_has_lyrics=1&apikey=${process.env.MUSICAPI}`)
}

const getSongsByLyrics = () => {
  axios.get(`http://api.musixmatch.com/ws/1.1/track.search?q_lyrics=${lyrics}&page_size=${count}&page=1&s_track_rating=desc&f_has_lyrics=1&apikey=${process.env.MUSICAPI}`)
}

export { getTopTen, getLyrics, getSongsByArtist, getSongsBySongName, getSongsByLyrics};