import express from "express";
import path from "path";
import morgan from 'morgan';
import axios from 'axios';
import {fileURLToPath} from 'url';
import cors from 'cors';
import bodyParser from 'body-parser';
import db from '../database/db.js';
import { addUser, addLyrics, getUser, getLyrics } from './controllers/query.js'
import * as dotenv from 'dotenv';
dotenv.config();

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

var app = express();
var port = 3000;

//middleware:
app.use(cors());
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../dist')))
app.use(express.json());

//requesthandlers:
app.get('/artist', function (req, res) {
  console.log(req.query);
  axios.get(`http://api.musixmatch.com/ws/1.1/track.search?q_artist=${req.query.artist}&page_size=5&page=1&s_track_rating=desc&f_has_lyrics=1&apikey=41e12ab4ec60591b2a44a8c09a5eac80`)
    .then((data) => {
      console.log(data.data.message);
      res.send(data.data.message);
    })
    .catch((err) => {
      res.send(err);
    });
})

app.get('/song', function (req, res) {
  console.log(req.query);
  axios.get(`http://api.musixmatch.com/ws/1.1/track.search?q_track=${req.query.song}&page_size=5&page=1&s_track_rating=desc&f_has_lyrics=1&apikey=41e12ab4ec60591b2a44a8c09a5eac80`)
    .then((data) => {
      console.log(data.data.message);
      res.send(data.data.message);
    })
    .catch((err) => {
      res.send(err);
    })
})


app.get('/lyrics', function (req, res) {
  console.log(req.query);
  axios.get(`http://api.musixmatch.com/ws/1.1/track.search?q_track=${req.query.lyrics}&page_size=5&page=1&s_track_rating=desc&f_has_lyrics=1&apikey=41e12ab4ec60591b2a44a8c09a5eac80`)
    .then((data) => {
      console.log(data.data.message);
      res.send(data.data.message);
    })
    .catch((err) => {
      res.send(err);
    })
});

app.get('/lyricFetch', function (req, res) {
  console.log(req.query.trackId);
  axios.get(`http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${req.query.trackId}&apikey=41e12ab4ec60591b2a44a8c09a5eac80`)
    .then((data) => {
      console.log(data.data.message.body);
      res.send(data.data.message.body);
    }).catch((err) => {
      console.log(err);
    })
})

app.post('/createUser', function (req, res) {
  console.log(req.body.body);
  addUser(req.body.body)
    .then((data) => {
      res.send(data);
    }).catch((err) => {
      res.send(err);
    })
})

app.post('/createLyrics', function (req, res) {
  console.log(req.body.body);
  addLyrics(req.body.body)
    .then((data) => {
      res.send(data);
    }).catch((err) => {
      res.send(err);
    })
})

app.get('/getUser', function (req, res) {
  console.log(req.query);
  getUser(req.query)
    .then((data) => {
      res.send(data);
    }).catch((err) => {
      res.send(err);
    })
})

app.get('/getLyrics', function (req, res) {
  console.log(req.query);
  getLyrics(req.query)
    .then((data) => {
      res.send(data);
    }).catch((err) => {
      res.send(err);
    });
})




app.listen(port);
console.log(`Listening at http://localhost:${port}`);