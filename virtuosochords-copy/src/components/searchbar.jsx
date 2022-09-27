import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import axios from 'axios';


const StyledSongSelect = styled.div`
  padding: 3rem;
  background-color: #00000094;
  color: #fcfbd6;
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 40vw;
  height: 25vh;
  border-radius: 0.5rem;
  border: .1px solid #fcfbd6;
  padding-bottom: 3rem;
  transition: 0.3s;
  margin-top: 15rem;
  form {
    display: flex;
    justify-content: flex-end;
    margin-top: -1rem;
  }
  h2 {
    color: #85acb1;
    font-size: 3rem;
    margin: auto;
    display: flex;
    justify-content: center;
    padding-bottom: .5rem;
    padding-top: .5rem;
    width: 100%;
    border-top: .1px solid #fcfbd6;
    border-bottom: .1px solid #fcfbd6;
    transition: 0.3s;
    &:hover {
      width: 80%;
      border-top: .1px solid #fcfbd6;
      border-bottom: .1px solid #fcfbd6;
    }
  }
  label {
    display: flex;
    justify-content: flex-end;
  }
  span {
    font-size: 1.2rem;
    margin-bottom: -2rem;
    padding: 1.3em;
  }
`

const StyledInput = styled.input`
  background-color: transparent;
  border: 2px solid white;
  border-radius: 5px;
`

export default function SearchBar ({ setPage, setSongs }) {
  const [artist, setArtist] = useState('');
  const [song, setSong] = useState('');
  const [lyrics, setLyrics] = useState('');
  const updateSongs = (songs) => {
    var songArray = [];
    for (var i = 0; i < songs.length; i ++) {
      var song = {
        trackName: songs[i].track.track_name,
        trackId: songs[i].track.track_id,
        albumName: songs[i].track.album_name,
        artist: songs[i].track.artist_name,
      }
      songArray.push(song);
    }
    return songArray;
  }

  const handleArtistChange = (e) => {
    e.preventDefault();
    setArtist(e.target.value);
  }
  const handleSongChange = (e) => {
    e.preventDefault();
    setSong(e.target.value);
  }
  const handleLyricsChange = (e) => {
    e.preventDefault();
    setLyrics(e.target.value);
  }
  const getSongsByArtist = (e) => {
    e.preventDefault();
    axios.get('/artist', {
      params: {
        artist: artist
      }
    })
      .then((data) => {
        setSongs(updateSongs(data.data.body.track_list))
        setPage({
          home: false,
          lyricPage: false,
          songList: true,
          loginPage: false,
          loading: false
        })
      }).catch((err) => {
        console.log(err);
      })
  }
  const getSongsBySong = (e) => {
    e.preventDefault();
    axios.get('/song', {
      params: {
        song: song
      }
    })
      .then((data) => {
        setSongs(updateSongs(data.data.body.track_list));
        setPage({
          home: false,
          lyricPage: false,
          songList: true,
          loginPage: false,
          loading: false
        })
      }).catch((err) => {
        console.log(err);
      })
  }
  const getSongsByLyrics = (e) => {
    e.preventDefault();
    axios.get('/lyrics', {
      params: {
        lyrics: lyrics
      }
    })
      .then((data) => {
        setSongs(updateSongs(data.data.body.track_list));
        setPage({
          home: false,
          lyricPage: false,
          songList: true,
          loginPage: false,
          loading: false
        })
      }).catch((err) => {
        console.log(err);
      })
  }

  return (
    <StyledSongSelect>
        <h2>
          FIND A SONG
        </h2>
          <span>
            Search by artist
          </span>
        <form onSubmit={getSongsByArtist}>
          <label>
            <input type='text' onChange={handleArtistChange}
            name='search-artist'
            placeholder='search for an artist'
            style={{
              padding: '.5rem',
              backgroundColor: 'transparent',
              border: '1px solid #fcfbd6',
              borderRadius: '5px',
              color: '#fcfbd686'
            }}></input>
          </label>
          <input className='search-submit'
            type='submit'
            value='Search'
            style={{
                padding: '.5rem',
                backgroundColor: 'transparent',
                border: '1px solid #fcfbd6',
                borderRadius: '5px',
                color: '#85acb1',
                marginLeft: '1rem'
              }}/>
        </form>
          <span>
            Search by song
          </span>
        <form onSubmit={getSongsBySong}>
          <label>
            <input type='text'
              name='search-track'
              onChange={handleSongChange}
              placeholder='search for an song'
              style={{
                padding: '.5rem',
                backgroundColor: 'transparent',
                border: '1px solid #fcfbd6',
                borderRadius: '5px',
                color: '#fcfbd686'
              }}>
            </input>
          </label>
          <input className='search-submit' type='submit' value='Search' style={{
              padding: '.5rem',
              backgroundColor: 'transparent',
              border: '1px solid #fcfbd6',
              borderRadius: '5px',
              color: '#85acb1',
              marginLeft: '1rem'
            }}/>
        </form>
          <span>
            Search by lyrics
          </span>
        <form onSubmit={getSongsByLyrics}>
          <label>
            <input type='text'
              name='search-lyrics'
              onChange={handleLyricsChange}
              placeholder='search by lyrics'
              style={{
                padding: '.5rem',
                backgroundColor: 'transparent',
                border: '1px solid #fcfbd6',
                borderRadius: '5px',
                color: '#fcfbd686'
              }}>
            </input>
          </label>
          <input className='search-submit' type='submit' value='Search' style={{
              padding: '.5rem',
              backgroundColor: 'transparent',
              border: '1px solid #fcfbd6',
              borderRadius: '5px',
              color: '#85acb1',
              marginLeft: '1rem'
            }}/>
        </form>
    </StyledSongSelect>
  )
}