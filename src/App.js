import React from 'react';
import Container from 'react-bootstrap/Container';
import NavBar from './NavBar';
import logo from './assets/images/logo.png';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './App.css';

function App() {
  return (
    <Container fluid className='gx-0 grad'>
      <Row>
        <Col>
          <NavBar />
        </Col>
      </Row>
      <Row>
        <Col className="logo">
          <img src={logo} alt="Logo" />
        </Col>
      </Row>
      <Container className='farm'>
        <Row className="justify-content-center nft-container">
            <Col className="pod nft">
              <img src="https://img-cdn.magiceden.dev/rs:fill:640:640:0:0/plain/https://bafybeief7hpj5elx2zpnuljnf5thyemi4mln2bsixuknjibhwkg3vajo4y.ipfs.dweb.link/2665.png?ext=png" alt="NFT"></img>
            </Col>
            <Col className="pod nft">
              <img src="https://img-cdn.magiceden.dev/rs:fill:640:640:0:0/plain/https://bafybeicjadfy7vjxpvzjb3jdzcb2duvi7ojt2scaxpmxbaolw4st54ivk4.ipfs.dweb.link/618.png?ext=png" alt="NFT"></img>
            </Col>
            <Col className="pod nft">
              <img src="https://img-cdn.magiceden.dev/rs:fill:640:640:0:0/plain/https://bafybeifhninzk6cdgsfdxx2vi4matg5hs5aknpnia3f3zijkgio5ybpzfm.ipfs.dweb.link/2338.png?ext=png" alt="NFT"></img>
            </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default App;

