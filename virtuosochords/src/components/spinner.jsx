// while the top ten tracks are not loaded in yet, render this spinner
import React, { useState, useEffect } from "react";
import styled from 'styled-components';

const StyledSpinner = styled.div`
  img {
    display: flex;
    border-radius: 50%;
    width: 5rem;
    height: auto;
    margin-left: 2rem;
  }
`

export default function Spinner () {
  return (
    <StyledSpinner>
      <img src={'https://i.gifer.com/44zG.gif'}/>
    </StyledSpinner>
  )
}