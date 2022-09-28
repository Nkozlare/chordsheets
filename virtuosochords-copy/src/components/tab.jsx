import React, { useState, useEffect } from "react";
import styled from 'styled-components';

const StyledTab = styled.div`
  display: flex;
  flex-direction: row;
  height: 1.8rem;
  width: 10rem;
  background-color: #85acb1a2;
  border-bottom-left-radius: 5px;
  border-right: 0.5px solid black;
  border-left: 0.5px solid black;
  border-bottom: 0.5px solid black;
  gap: 1rem;
  justify-content: right;
  margin-right: 1.5rem;
  align-items: center;
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    box-shadow: inset 0 0 20px rgba(196, 123, 211, 0.562);
  }
  p {
    font-weight: bold;
  }
`
const StyledX = styled.p`
  background-color: #00000090;
  color: #fcfbd6b9;
  border-radius: 50%;
  width: 1rem;
  height: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.3s;
  font-weight: bold;
  margin-right: 0.5rem;
  &:hover {
    background-color: #fcfbd6;
    color: #000000;
  }
`

export default function Tab ({lyric, key, setLyricIndex, setPage, setLyrics}) {
  return (
    <StyledTab>
      <p>{lyric.songName}</p>
      <StyledX>x</StyledX>
    </StyledTab>
  )
}