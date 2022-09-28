import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import SongBox from './songbox.jsx';
import SongBoxUser from './songboxuser.jsx';

const StyledSongList = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 3rem;
`

export default function SongList ({ songs, setLyrics, setPage, page, setLyricIndex, lyrics }) {
  const listSongs = songs.map((song) => {
    <SongBox index={song.trackId}
    artist={song.artist}
    name={song.trackName}
    album={song.albumName}
    genre={song.genre}/>
  })
  if (!page.library) {
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
              setPage={setPage}
              setLyricIndex={setLyricIndex}
              songsLength={songs.length}
              lyricsArray={lyrics}/>
            )}
          )
        }
      </StyledSongList>
      </div>
    )
  } else {
    return (
      <div>
      <StyledSongList>
        {songs.map((song) => {
          return (
              <SongBoxUser key={song.trackId}
              index={song.trackId}
              artist={song.artist}
              name={song.trackName}
              album={song.albumName}
              lyrics={song.lyrics}
              setLyrics={setLyrics}
              setPage={setPage}
              setLyricIndex={setLyricIndex}
              songsLength={songs.length}
              lyricsArray={lyrics}/>
            )}
          )
        }
      </StyledSongList>
      </div>
    )
  }
}