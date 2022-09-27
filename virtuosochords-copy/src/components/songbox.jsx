import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import axios from 'axios';

const StyledSongBox = styled.div`
  padding: 2rem;
  padding-top: 1rem;
  background-color: #00000094;
  color: #fcfbd6;
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 40vw;
  border-radius: 0.5rem;
  border: .1px solid #fcfbd6;
  transition: 0.3s;
  margin: 1rem;
  cursor: pointer;
  h2 {
    margin-bottom: 2.5rem;
  }
  p {
    margin-top: 0.5px;
    display: flex;
    justify-content: end;
  }
  &:hover{
    box-shadow: 0 0 40px rgba(166, 113, 177, 0.479);
  }
`

export default function SongBox ({artist, name, album, index, setLyrics, setHome, setLyricPage, setSongList}) {
  const getLyrics = (e) => {
    e.preventDefault();
    axios.get('/lyricFetch', {
      params: {
        trackId: index
      }
    })
      .then((data) => {
        var lyrics = {
          artist: artist,
          songName: name,
          lyrics: data.data.lyrics.lyrics_body,
        }
        setLyrics(lyrics);
        setSongList(false);
        setLyricPage(true);
      }).catch((err) => {
        console.log(err);
      })
  }
  return (
    <StyledSongBox onClick={getLyrics}>
      <h2>
        {name}
      </h2>
      <p>
        Artist: {artist}<br></br>
      </p>
      <p>
        Album: {album}<br></br>
      </p>
    </StyledSongBox>
  )
}