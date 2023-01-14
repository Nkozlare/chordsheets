import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import LyricLine from './lyricline';
import axios from 'axios';
import Metronome from '../metronome/Metronome.jsx'

const StyledLyrics = styled.div`
  color: #fcfbd6;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 1rem;
  margin-top: 2rem;
  font-weight: bold;
  margin-bottom: 5rem;
`
const StyledTrack = styled.h1`
  display: flex;
  justify-content: center;
  color: #85acb1;
  font-size: 4rem;
  width: 50rem;
  border-top: .1px solid #fcfbd6;
  border-bottom: .1px solid #fcfbd6;
  padding: 1rem;
  transition: 0.3s;
  &:hover {
    width: 60rem;
  }
`
const StyledArtist = styled.h2`
  color: #a48aa7;
  font-weight: bold;
  font-size: 3rem;
`
const StyledChordSheet = styled.div`
`
const AddSong = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem;
  background-color: #0000006a;
  border: 0.1px solid #fcfbd689;
  border-radius: 5px;
  color: #85acb1;
  margin-left: 0rem;
  margin-top: 2rem;
  width: 15rem;
  font-size: 1.5rem;
  transition: 0.3s;
  cursor: pointer;
  margin-bottom: 2rem;
  &:hover {
    box-shadow: 0 0 20px rgba(196, 123, 211, 0.685);
    color: #fcfbd6;
  }
`
const StyledButtons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
`

export default function Lyrics ({ lyrics, loggedStatus, currentUser }) {
  const lyricArray = lyrics.lyrics.split(/\r?\n/);
  const [added, setAdded] = useState('Add song to Library');
  const [tuner, setTuner] = useState(true)
  const [tunerText, setTunerText] = useState('Metronome Toggle');
  for (var i = 0; i < lyricArray.length; i ++) {
    if (!lyricArray[i]) {
      lyricArray.splice(i, 0);
    }
  }
  const lyricLines = lyricArray.map((line, index) => {
    return (
      <LyricLine key={index} line={line}/>
    )
  })
  const tunerToggle = (e) => {
    e.preventDefault();
    setTuner(!tuner);
  }
  const addLyricsToLibrary = (e) => {
    e.preventDefault();
    const goodLyrics = lyrics.lyrics.replace(/'/g, '');
    console.log(goodLyrics);
    axios.post('/createLyrics', {
      body: {
        lyrics: goodLyrics,
        artist: lyrics.artist,
        album: lyrics.album,
        username_id: currentUser,
        song: lyrics.songName
      }
    }).then((data) => {
      console.log(data);
      setAdded('Added');
    }).catch((err) => {
      console.log(err);
    })
  }
  return (
    <StyledLyrics>
      <StyledTrack>
        {lyrics.songName}
      </StyledTrack>
      <StyledButtons>
        {loggedStatus ? <AddSong onClick={addLyricsToLibrary} style={{fontSize: '1.3rem', width: '15rem', marginBottom: '0rem', marginTop: '0rem'}}>{added}</AddSong> : <span></span>}
      </StyledButtons>
      <StyledArtist>
        {lyrics.artist}
      </StyledArtist>
      {lyricLines}
      <StyledButtons>
        {loggedStatus ? <AddSong onClick={addLyricsToLibrary}>{added}</AddSong> : <span></span>}
        <AddSong onClick={tunerToggle}>{tunerText}</AddSong>
      </StyledButtons>
      {tuner ? <Metronome/> : <span></span>}
    </StyledLyrics>
  )
}