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
import Tabs from './components/tabs.jsx';
import Write from './components/write.jsx'

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
  overflow-x: hidden;
`

function App() {
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(0);
  const [page, setPage] = useState({
    home: true,
    songList: false,
    lyricPage: false,
    loginPage: false,
    loading: false,
    library: false,
    write: false,
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
  const [lyricIndex, setLyricIndex] = useState(0)
  const [lyrics, setLyrics] = useState([]);
  const [currentUser, setCurrentUser] = useState('nkozlare');
  const [loggedStatus, setLoggedStatus] = useState(false);


  if (page.home || (page.lyricPage && lyrics[lyricIndex] === undefined)) {
    return (
      <StyledApp>
        <NavBar setPage={setPage} loggedStatus={loggedStatus} currentUser={currentUser} setSongs={setSongs}/>
        <Tabs lyrics={lyrics} setLyricIndex={setLyricIndex} setPage={setPage} setLyrics={setLyrics} lyricIndex={lyricIndex} page={page}/>
        <SearchBar setSongs={setSongs} setPage={setPage}/>
      </StyledApp>
    )
  } else if (page.songList) {
    return (
      <StyledApp>
        <NavBarTwo setPage={setPage} loggedStatus={loggedStatus} currentUser={currentUser} setSongs={setSongs}/>
        <Tabs lyrics={lyrics} setLyricIndex={setLyricIndex} setPage={setPage} setLyrics={setLyrics} lyricIndex={lyricIndex} page={page}/>
        <SongList setPage={setPage}
          songs={songs}
          setLyrics={setLyrics}
          page={page}
          setLyricIndex={setLyricIndex}
          lyrics={lyrics}
          lyricIndex={lyricIndex}
          />
      </StyledApp>
    )
  } else if (page.lyricPage) {
    return (
      <StyledApp style={{backgroundColor: '#38363feb'}}>
        <NavBarTwo setPage={setPage} loggedStatus={loggedStatus} currentUser={currentUser} setSongs={setSongs}/>
        <Tabs lyrics={lyrics} setLyricIndex={setLyricIndex} setPage={setPage} setLyrics={setLyrics} lyricIndex={lyricIndex} page={page}/>
        <Lyrics lyrics={lyrics[lyricIndex]} loggedStatus={loggedStatus} currentUser={currentUser}/>
      </StyledApp>
    )
  } else if (page.loginPage) {
    return (
      <StyledApp>
          <NavBarThree setPage={setPage} loggedStatus={loggedStatus} page={page} currentUser={currentUser} setSongs={setSongs}/>
          <Tabs lyrics={lyrics} setLyricIndex={setLyricIndex} setPage={setPage} setLyrics={setLyrics} lyricIndex={lyricIndex} page={page}/>
          <Login setPage={setPage} setCurrentUser={setCurrentUser} setLoggedStatus={setLoggedStatus}/>
      </StyledApp>
    )
  } else if (page.library) {
    return (
      <StyledApp>
        <NavBarThree setPage={setPage} loggedStatus={loggedStatus} page={page} currentUser={currentUser} setSongs={setSongs}/>
        <Tabs lyrics={lyrics} setLyricIndex={setLyricIndex} setPage={setPage} setLyrics={setLyrics} lyricIndex={lyricIndex} page={page}/>
        <SongList setPage={setPage}
          songs={songs}
          setLyrics={setLyrics}
          page={page}
          setLyricIndex={setLyricIndex}
          lyrics={lyrics}
          lyricIndex={lyricIndex}/>
      </StyledApp>
    )
  } else if (page.write) {
    return (
      <StyledApp style={{backgroundColor: '#38363feb'}}>
        <NavBarTwo setPage={setPage} loggedStatus={loggedStatus} currentUser={currentUser} setSongs={setSongs}/>
        <Tabs lyrics={lyrics} setLyricIndex={setLyricIndex} setPage={setPage} setLyrics={setLyrics} lyricIndex={lyricIndex} page={page}/>
        <Write setLyrics={setLyrics} lyrics={lyrics} setLyricIndex={setLyricIndex} setPage={setPage}/>
      </StyledApp>
    )
  }
}

export default App
