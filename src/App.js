import React from 'react';
import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
import NavBar from './NavBar'
import logo from './assets/images/logo.png'

import './App.css';

function App() {
  return (
    <Container fluid className='gx-0 grad'>
      <Stack gap={3}>
        <div className="App">
          <NavBar />
        </div>
        <div className="logo"><img src={logo} alt="Logo" /></div>
      </Stack>
    </Container>
  );
}

export default App;

