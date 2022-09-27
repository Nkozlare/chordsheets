import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import SongBox from './songbox.jsx';

const StyledSongList = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 3rem;
`

export default function SongListUser ({ songs, setLyrics, setHome, setLyricPage, setSongList }) {
  const listSongs = songs.map((song) => {
    <SongBox index={song.trackId}
    artist={song.artist}
    name={song.trackName}
    album={song.albumName}
    genre={song.genre}/>
  })
  return (
    <div>
    <StyledSongList>
      {songs.map((song) => {
        return (
            <SongBox key={song.trackId}
            index={song.trackId}
            artist={song.artist}
            name={song.trackName}
            album={song.albumName}
            genre={song.genre}
            setLyrics={setLyrics}
            setHome={setHome}
            setLyricPage={setLyricPage}
            setSongList={setSongList}/>
          )}
        )
      }
    </StyledSongList>
    </div>
  )
}