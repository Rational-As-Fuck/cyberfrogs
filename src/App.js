import React from 'react';
import Container from 'react-bootstrap/Container';
import NavBar from './NavBar';
import logo from './assets/images/logo.png';
import staked from './assets/images/staked_nft.png';
import unstaked from './assets/images/unstaked_nft.png';
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
        <Row>
          <Col className="farmButtons">
            <img src={staked} alt="staked" />
            <img src={unstaked} alt="unstaked" />
          </Col>
        </Row>
        <Row className="justify-content-center nft-container">
          <Col>
            <Row className="justify-content-center">
              <Col className="pod nft">
                <img src="https://img-cdn.magiceden.dev/rs:fill:640:640:0:0/plain/https://bafybeief7hpj5elx2zpnuljnf5thyemi4mln2bsixuknjibhwkg3vajo4y.ipfs.dweb.link/2665.png?ext=png" alt="NFT"></img>
              </Col>
              <Col className="pod nft">
                <img src="https://img-cdn.magiceden.dev/rs:fill:640:640:0:0/plain/https://bafybeicjadfy7vjxpvzjb3jdzcb2duvi7ojt2scaxpmxbaolw4st54ivk4.ipfs.dweb.link/618.png?ext=png" alt="NFT"></img>
              </Col>
              <Col className="pod nft">
                <img src="https://img-cdn.magiceden.dev/rs:fill:640:640:0:0/plain/https://bafybeifhninzk6cdgsfdxx2vi4matg5hs5aknpnia3f3zijkgio5ybpzfm.ipfs.dweb.link/2338.png?ext=png" alt="NFT"></img>
              </Col>
              <Col className="pod nft">
                <img src="https://img-cdn.magiceden.dev/rs:fill:640:640:0:0/plain/https://bafybeifmi5cjdt4n4zx4fbhqiv3jbeq6bstxvz2ljdl3i5vkfoofblr2da.ipfs.dweb.link/2295.png?ext=png" alt="NFT"></img>
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col className="pod nft">
                <img src="https://img-cdn.magiceden.dev/rs:fill:640:640:0:0/plain/https://bafybeief7hpj5elx2zpnuljnf5thyemi4mln2bsixuknjibhwkg3vajo4y.ipfs.dweb.link/2665.png?ext=png" alt="NFT"></img>
              </Col>
              <Col className="pod nft">
                <img src="https://img-cdn.magiceden.dev/rs:fill:640:640:0:0/plain/https://bafybeicjadfy7vjxpvzjb3jdzcb2duvi7ojt2scaxpmxbaolw4st54ivk4.ipfs.dweb.link/618.png?ext=png" alt="NFT"></img>
              </Col>
              <Col className="pod nft">
                <img src="https://img-cdn.magiceden.dev/rs:fill:640:640:0:0/plain/https://bafybeifhninzk6cdgsfdxx2vi4matg5hs5aknpnia3f3zijkgio5ybpzfm.ipfs.dweb.link/2338.png?ext=png" alt="NFT"></img>
              </Col>
              <Col className="pod nft">
                <img src="https://img-cdn.magiceden.dev/rs:fill:640:640:0:0/plain/https://bafybeifmi5cjdt4n4zx4fbhqiv3jbeq6bstxvz2ljdl3i5vkfoofblr2da.ipfs.dweb.link/2295.png?ext=png" alt="NFT"></img>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default App;

