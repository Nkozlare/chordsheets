import React, { useState, useEffect } from "react";
import styled from 'styled-components';

const StyledWriteForm = styled.div`
  margin-top: 4rem;
  margin-bottom: 4rem;
  border-radius: 5px;;
  width: 80rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    color: #fcfbd6;
    font-size: 3.5rem;
  }
`
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  label {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 3rem;
  }
  input, textarea {
    padding: .5rem;
    background-color: transparent;
    border: 1px solid #fcfbd67b;
    border-radius: 5px;
    color: #fcfbd6;
    margintop: 1rem;
    text-align: right;
    font-size: 1rem;
  }
`
const StyledLabel = styled.div`
  font-size: 1.5rem;
`

const WriteButton = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem;
  background-color: #00000042;
  border: 0.1px solid #fcfbd689;
  border-radius: 5px;
  color: #85acb1;
  margin-left: 0rem;
  margin-top: 2rem;
  width: 20rem;
  font-size: 1.5rem;
  transition: 0.3s;
  cursor: pointer;
  margin-bottom: 2rem;
  &:hover {
    box-shadow: 0 0 20px rgba(196, 123, 211, 0.685);
    color: #fcfbd6;
  }
`

const Explanation = styled.div`
  font-size: 1rem;
`


export default function Write ({ setLyrics, lyrics, setLyricIndex, setPage }) {
  const [formData, setFormData] = useState({
    songName: '',
    artist: '',
    lyrics: '',
  })

  const handleChange = (e) => {
    e.preventDefault();
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const getLyrics = (e) => {
    e.preventDefault();
    var currentLyrics = {
      artist: formData.artist,
      songName: formData.songName,
      lyrics: formData.lyrics,
      album: `${formData.songName} Single`,
    }
    setLyrics(lyrics.concat(currentLyrics));
    setLyricIndex(lyrics.length);
    setPage({
      home: false,
      songList: false,
      lyricPage: true,
      loginPage: false,
      loading: false,
      library: false,
      write: false
    })
  }

  return (
    <StyledWriteForm>
      <h1>
        WRITE A SONG
      </h1>
      <StyledForm>
        <label>
          <StyledLabel>
            Track Name:
          </StyledLabel>
          <input type='text' name='songName' style={{width: '30rem'}} onChange={handleChange}></input>
        </label>
        <label>
          <StyledLabel>
            Artist Name:
          </StyledLabel>
          <input type='text' name='artist' style={{width: '30rem'}} onChange={handleChange}></input>
        </label>
        <label>
          <StyledLabel>
            Lyrics:
          </StyledLabel>
          <textarea name='lyrics' style={{width: '30rem', height: '30rem'}} onChange={handleChange}></textarea>
        </label>
        <WriteButton onClick={getLyrics}>Create Song</WriteButton>
      </StyledForm>
    </StyledWriteForm>
  )
}