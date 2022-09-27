import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import axios from 'axios';

const StyledLoginSection = styled.div`
  padding: 3rem;
  background-color: #00000094;
  color: #fcfbd6;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 45vw;
  height: 40vh;
  border-radius: 0.5rem;
  border: .1px solid #fcfbd6;
  padding-bottom: 3rem;
  transition: 0.3s;
  margin-top: 15rem;
`
const StyledCreate = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  padding-left: 3rem;
  form {
    display: flex;
    flex-direction: column;
    justify-content: left;
  }
  h2 {
    font-size: 3rem;
  }
`
const StyledLogin = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 22rem;
  padding-right: 3rem;
  border-right: .1px solid #fcfbd6;
  form {
    display: flex;
    flex-direction: column;
    align-content: start;
  }
  h2 {
    display: flex;
    justify-content: end;
    font-size: 3rem;
  }
`
const StyledLoginFailure = styled.div`
  padding: 3rem;
  background-color: #00000094;
  color: #fcfbd6;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 30vw;
  height: 30vh;
  border-radius: 0.5rem;
  border: .1px solid #fcfbd6;
  padding-bottom: 3rem;
  transition: 0.3s;
  margin-top: 15rem;
  div {
    display: flex;
    justify-content: center;
    padding: 1rem;
    background-color: transparent;
    border: 0.1px solid #fcfbd689;
    border-radius: 5px;
    color: #85acb1;
    margin-left: 0rem;
    margin-top: 2rem;
    width: 20rem;
    font-size: 1.5rem;
  }
  p {
    font-size: 1.3rem;
  }
`


export default function Login ({ setPage, setCurrentUser, setLoggedStatus }) {
  const [createFail, setCreateFail] = useState(false);
  const [loginFail, setLoginFail] = useState(false);
  // const [createUser, setCreateUser] = useState('');
  // const [createPassword, setCreatePassword] = useState('');
  // const [loginUser, setLoginUser] = useState('');
  // const [loginPassword, setLoginPassword] = useState('');
  const [formData, setFormData] = useState({
    createUser: '',
    createPassword: '',
    loginUser: '',
    loginPassword: ''
  })
  const handleChange = (e) => {
    e.preventDefault();
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }
  const backToLogin = (e) => {
    setCreateFail(false);
    setLoginFail(false);
  }

  const handleCreate = (e) => {
    e.preventDefault();
    axios.post('/createUser', {
      body: {
        username: formData.createUser,
        password: formData.createPassword,
      }
    }).then((data) => {
      if (data.data.name === 'error') {
        setCreateFail(true);
      } else {
        setPage({
          home: false,
          songList: true,
          lyricPage: false,
          loginPage: false,
          loading: false
        })
        setCurrentUser(formData.createUser);
        setLoggedStatus(true);
      }
    }).catch((err) => {
      console.log('error: ', err);
    })
  }

  const handleLogin = (e) => {
    e.preventDefault();
    axios.get('/getUser', {
      params: {
        username: formData.loginUser,
        password: formData.loginPassword,
      }
    }).then((data) => {
      if (data.data.name === 'error') {
        setLoginFail(true);
      } else {
        setPage({
          home: false,
          songList: true,
          lyricPage: false,
          loginPage: false,
          loading: false
        })
        setCurrentUser(formData.loginUser);
        setLoggedStatus(true);
      }
    }).catch((err) => {
      console.log('error: ', err);
    })
  }
  if (!createFail && !loginFail) {
    return (
      <StyledLoginSection onChange={handleChange}>
        <StyledLogin>
          <h2>
            LOGIN
          </h2>
          <form onSubmit={handleLogin}>
            <label>
              <input type='text' placeholder='enter your username' name='loginUser' style={{
                padding: '.5rem',
                backgroundColor: 'transparent',
                border: '1px solid #fcfbd675',
                borderRadius: '5px',
                color: '#fcfbd686',
                marginTop: '1rem',
                textAlign: 'right',
                marginRight: '1rem'
              }}></input>
              USERNAME
            </label>
            <label>
              <input type='text' placeholder='enter your password' name='loginPassword' style={{
                padding: '.5rem',
                backgroundColor: 'transparent',
                border: '1px solid #fcfbd67b',
                borderRadius: '5px',
                color: '#fcfbd686',
                marginTop: '1rem',
                textAlign: 'right',
                marginRight: '1rem'
              }}></input>
              PASSWORD
            </label>
            <input className='search-submit' type='submit' value='Log in' style={{
                  padding: '.5rem',
                  backgroundColor: 'transparent',
                  border: '0.1px solid #fcfbd689',
                  borderRadius: '5px',
                  color: '#85acb1',
                  marginTop: '2rem',
                  width: '18.44rem'
                }}></input>
          </form>
        </StyledLogin>
        <StyledCreate>
          <h2>
            CREATE
          </h2>
          <form onSubmit={handleCreate}>
            <label>
              USERNAME
              <input type='text' placeholder='create a username' name='createUser' style={{
                padding: '.5rem',
                backgroundColor: 'transparent',
                border: '1px solid #fcfbd675',
                borderRadius: '5px',
                color: '#fcfbd686',
                marginTop: '1rem',
                marginLeft: '1rem'
              }}></input>
            </label>
            <label>
              PASSWORD
              <input type='text' placeholder='create a password' name='createPassword' style={{
                padding: '.5rem',
                backgroundColor: 'transparent',
                border: '1px solid #fcfbd67b',
                borderRadius: '5px',
                color: '#fcfbd686',
                marginTop: '1rem',
                marginLeft: '1rem'
              }}></input>
            </label>
            <input className='search-submit' type='submit' value='Create Account' style={{
                  padding: '.5rem',
                  backgroundColor: 'transparent',
                  border: '0.1px solid #fcfbd689',
                  borderRadius: '5px',
                  color: '#85acb1',
                  marginLeft: '0rem',
                  marginTop: '2rem',
                  width: '18.44rem'
                }}></input>
          </form>
        </StyledCreate>
      </StyledLoginSection>
    )
  } else if (loginFail) {
    return (
      <StyledLoginFailure>
        <p>
          Login information incorrect -- please try again
        </p>
        <div className='search-submit' onClick={backToLogin}>
          Back to login page
        </div>
      </StyledLoginFailure>
    )
  } else if (createFail) {
    return (
      <StyledLoginFailure>
        <p>
          Username already taken -- please try again
        </p>
        <div className='search-submit' onClick={backToLogin}>
          Back to account creation
        </div>
      </StyledLoginFailure>
    )
  }
}