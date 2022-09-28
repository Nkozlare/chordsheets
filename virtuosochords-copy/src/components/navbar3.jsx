import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import Spinner from './spinner';
import axios from 'axios';

const StyledNavBar = styled.div`
  background-color: black;
  height: 7rem;
  position: absolute;
  top: 0;
  width: 100vw;
  display: flex;
  align-items: center;
`

const Icon = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 5rem;
  color: #fcfbd6;
  margin: 1rem;
  font-family: 'Dancing Script', cursive;
`
const Links = styled.h2`
  display: flex;
  flex-direction: row;
  gap: 3rem;
  padding: 1rem;
  font-size: 2rem;
  color: #fcfbd6;
  position: absolute;
  right: 0;
  margin-right: 3rem;
  cursor: pointer;
  transition: 0.3s;
  p{
    transition: 0.3s;
      &:hover {
      color: #85acb1;
    }
  }
`
const StyledLoggedSpan = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
`

export default function NavBarThree ({setPage, loggedStatus, page, currentUser, setSongs }) {
  const goToLibrary = (e) => {
    const updateSongs = (songs) => {
      var songArray = [];
      for (var i = 0; i < songs.length; i ++) {
        var song = {
          trackName: songs[i].song,
          trackId: songs[i].lyrics_id,
          albumName: songs[i].album,
          artist: songs[i].artist,
          lyrics: songs[i].lyrics
        }
        songArray.push(song);
      }
      return songArray;
    }
    e.preventDefault();
    axios.get('/getLyrics', {
      params: {
        username: currentUser
      }
    }).then((data) => {
      console.log(data.data.rows);
      setSongs(updateSongs(data.data.rows))
      setPage({
        home: false,
        songList: false,
        lyricPage: false,
        loginPage: false,
        loading: false,
        library: true,
        write: false
      });
    }).catch((err) => {
      console.log(err);
    })
  }
  const goHome = (e) => {
    e.preventDefault();
    setPage({
      home: true,
      songList: false,
      lyricPage: false,
      loginPage: false,
      loading: false,
      library: false,
      write: false
    })
  }

  const goToWriteSong = (e) => {
    e.preventDefault()
    setPage({
      home: false,
      songList: false,
      lyricPage: false,
      loginPage: false,
      loading: false,
      library: false,
      write: true
    });
  }

  return (
    <StyledNavBar>
      <Icon>
        Prodi-G
      </Icon>
      <Links>
        <p onClick={goToWriteSong}>WRITE</p>
        {!loggedStatus ? <p onClick={goHome}>NEW SONG</p> :
        <StyledLoggedSpan>
          <p onClick={goHome}>NEW SONG</p>
          <p onClick={goToLibrary}>LIBRARY</p>
        </StyledLoggedSpan>
        }
      </Links>
    </StyledNavBar>
  )
}