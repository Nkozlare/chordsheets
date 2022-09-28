import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import Tab from './tab.jsx'

const StyledTabs = styled.div`
  width: 100vw;
  height: 2rem;
  background-color: #fcfbd63b;
  color: #030303;
  display: flex;
  flex-direction: row-reverse;
  align-items: start;
  position: absolute;
`

export default function Tabs ({ page, lyricIndex, lyrics, setLyricIndex, setPage, setLyrics }) {
  var tabList = lyrics.map((lyric, index) => {
    return (
      <Tab lyric={lyric} key={index} index={index} setLyricIndex={setLyricIndex} setPage={setPage} setLyrics={setLyrics} lyrics={lyrics} lyricIndex={lyricIndex} page={page}/>
    )
  })
  return (
    <StyledTabs>
      {tabList}
    </StyledTabs>
  )
}