import { useState, useEffect } from 'react'
import './App.css'
import NavBar from './components/navbar.jsx';
import NavBarTwo from './components/navbar2.jsx';
import NavBarThree from './components/navbar3.jsx';
import SearchBar from './components/searchbar.jsx'
import styled from 'styled-components';
import Spinner from './components/spinner.jsx';
import SongList from './components/songlist.jsx';
import Lyrics from './components/lyrics.jsx';
import Login from './components/login.jsx';

const StyledApp = styled.div`
  width: 90vw;
  min-height: 90vh;
  height: auto;
  background-color: #3b313bce;
  margin: auto;
  padding-top: 7rem;
  display: flex;
  justify-content: center;
  color: #fcfbd6;
`

function App() {
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(0);
  const [page, setPage] = useState({
    home: false,
    songList: true,
    lyricPage: false,
    loginPage: false,
    loading: false
  })
  const [songs, setSongs] = useState([
    {
      trackName: 'All Time Low',
      trackId: 33121631,
      albumName: 'The Human Condition',
      artist: 'Jon Bellion',
      genre: 'Pop',
    },
    {
      trackName: 'Gold',
      trackId: 123454,
      albumName: 'Let a Lover Drown you',
      artist: 'Penny and Sparrow',
      genre: 'folk',
    },
    {
      trackName: 'Look how Far We\'ve Come',
      trackId: 12345566,
      albumName: 'Change of Scenery II',
      artist: 'Quinn XCII',
      genre: '',
    },
    {
      trackName: 'Northern Attitude',
      trackId: 8357438,
      albumName: 'Stick Season',
      artist: 'Noah Kahan',
      genre: 'Indie',
    },
  ]);
  const [lyrics, setLyrics] = useState(
    {
      artist: 'Jon Bellion',
      songName: 'All Time Low',
      album: 'The Human Condition',
      lyrics: "I was the knight in shining armor in your movie\nWould put your lips on mine and love the aftertaste\nNow I'm a ghost, I call your name, you look right trough me\nYou're the reason I'm alone and concentrate\n\nI (I, I)\nI've been trying to fix my pride\nBut that poo's broken, that poo's broken\nLie (lie, lie)\nLie, lie, lie, I try to hide, but now you know it\nThat I'm at an all time\n\nLow, low, lo-lo-low, low, low, low, low\nLow, low, lo-lo-low, low, low, low, low\nLow, low, lo-lo-low, low, low, low, low\nLow, low, lo-lo-low, low, low, low, low\n\nLow, low, lo-lo-low, low, low, low, low\nLow, low, lo-lo-low, low, low, low, low\nLow, low, lo-lo-low, low, low, low, low\nLow, low, lo-lo-low, low, low, low, low (oh, woah, oh-oh)\n\nI was the prototype like three stacks on that CD\nAn example of the perfect candidate\nNow all your girlfriends say that you don't want to see me\n...\n\n******* This Lyrics is NOT for Commercial use *******\n(1409622796781)"
    }
  );
  const [currentUser, setCurrentUser] = useState('')
  const [loggedStatus, setLoggedStatus] = useState(true);

  if (page.home) {
    return (
      <StyledApp>
        <NavBar setPage={setPage} loggedStatus={loggedStatus}/>
        <SearchBar setSongs={setSongs} setPage={setPage}/>
      </StyledApp>
    )
  } else if (page.songList) {
    return (
      <StyledApp>
        <NavBarTwo setPage={setPage} loggedStatus={loggedStatus}/>
        <SongList setPage={setPage}
          songs={songs}
          setLyrics={setLyrics}/>
      </StyledApp>
    )
  } else if (page.lyricPage) {
    return (
      <StyledApp style={{backgroundColor: '#453c46ee'}}>
        <NavBarTwo setPage={setPage} loggedStatus={loggedStatus}/>
        <Lyrics lyrics={lyrics}/>
      </StyledApp>
    )
  } else if (page.loginPage) {
    return (
      <StyledApp>
          <NavBarThree setPage={setPage} loggedStatus={loggedStatus}/>
          <Login setPage={setPage} setCurrentUser={setCurrentUser} setLoggedStatus={setLoggedStatus}/>
      </StyledApp>
    )
  }
}

export default App
