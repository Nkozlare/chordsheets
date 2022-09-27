import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import Spinner from './spinner';

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
  justify-content: center;
  align-items: center;
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
export default function NavBar ({ setPage, loggedStatus }) {
  const goToLogin = (e) => {
    e.preventDefault()
    setPage({
      home: false,
      songList: false,
      lyricPage: false,
      loginPage: true,
      loading: false
    });
  }
  return (
    <StyledNavBar>
      <Icon>
        Prodi-G
      </Icon>
      <Links>
        {loggedStatus ? <p>MY SONGS</p> : <p onClick={goToLogin}>LOG IN</p>}
      </Links>
    </StyledNavBar>
  )
}