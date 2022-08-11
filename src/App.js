import React from 'react';
import Container from 'react-bootstrap/Container';
import logo from './assets/images/logo.png';
import staked from './assets/images/staked_nft.png';
import unstaked from './assets/images/unstaked_nft.png';
import walletButton from './assets/images/select_wallet.png';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './App.css';

function App() {
  return (
    <Container fluid className='gx-0'>
      <Row className='gx-0 grad h-25'>
        <Col className="logo">
          <img src={logo} className="img-fluid" alt="Logo" />
        </Col>
      </Row>
      <Row className='gx-0 p-5'>
        <Col className="farmButtons">
          <img src={staked} alt="staked" />
          <img src={unstaked} alt="unstaked" />
        </Col>
      </Row>
      <Row className='gx-0'>
        <Col className="button">
          <img src={walletButton} alt="wallet" />
        </Col>
      </Row>
    </Container>
  );
}

export default App;

