import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import LyricLine from './lyricline';


const StyledLyrics = styled.div`
  color: #fcfbd6;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 1rem;
  margin-top: 2rem;
  font-weight: bold;
`
const StyledTrack = styled.h1`
  display: flex;
  justify-content: center;
  color: #85acb1;
  font-size: 4rem;
  width: 40rem;
  border-top: .1px solid #fcfbd6;
  border-bottom: .1px solid #fcfbd6;
  padding: 1rem;
  transition: 0.3s;
  &:hover {
    width: 30rem;
  }
`
const StyledArtist = styled.h2`
  color: #a48aa7;
  font-weight: bold;
  font-size: 3rem;
`
const StyledChordSheet = styled.div`
`

export default function Lyrics ({ lyrics }) {
  const lyricArray = lyrics.lyrics.split(/\r?\n/);
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
  return (
    <StyledLyrics>
      <StyledTrack>
        {lyrics.songName}
      </StyledTrack>
      <StyledArtist>
        {lyrics.artist}
      </StyledArtist>
      {lyricLines}
    </StyledLyrics>
  )
}