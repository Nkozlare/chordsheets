import React, { useState, useEffect } from "react";
import styled from 'styled-components';

const StyledLine = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  color: #fcfbd6;
  padding: 0rem;
  font-weight: bold;
  word-spacing: .4rem;
  transition: 0.3s;
  font-size: 1.5rem;
`
const StyledLyric = styled.p`
  display: flex;
  justify-content: center;
  align-content: center;
`
const ChordLine = styled.form`
  display: flex;
  flex-direction: row;
  border-radius: 5px;
  input {
    background-color: #85acb116;
    border: .5px solid #fcfbd616;
    width: 3rem;
    height: 1.5rem;
    color: #fcfbd6;
    font-size: 1.5rem
  }
`

export default function LyricLine ({ line }) {
  useState
  if(line !== '') {
    return (
      <StyledLine>
        <ChordLine>
            <input type='text'></input>
            <input type='text'></input>
            <input type='text'></input>
            <input type='text'></input>
            <input type='text'></input>
            <input type='text'></input>
            <input type='text'></input>
            <input type='text'></input>
            <input type='text'></input>
            <input type='text'></input>
            <input type='text'></input>
            <input type='text'></input>
          </ChordLine>
        <StyledLyric>
          {line}
        </StyledLyric>
      </StyledLine>
    )
  } else {
    return (
      <ChordLine>
        <input type='text' style={{width: '7rem', marginBottom: '1rem'}}></input>
      </ChordLine>
    )
  }
}