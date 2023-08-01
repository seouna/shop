import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import shoe1 from './img/shoe1.jpg';
import shoe2 from './img/shoe2.jpg';
import shoe3 from './img/shoe3.jpg';



function App() {
  return (
    <div className="App">

      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">UNASHOP</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* <div className="main-bg" style={ {backgroundImage : 'url('+ bg +')' }}></div> */}
      <div className="main-bg"></div>

      <Container>
        <Row>
          <Col sm>
          {/* public에 사진을 넣을경우 */}
          <img src={ process.env.PUBLIC_URL + '/logo192.png' }></img>
            {/* <img src={ shoe1 }></img> */}
            <h4>상품명</h4>
            <p>상품 설명</p>
          </Col>
          <Col sm>
            <img src={ shoe2 }></img>
            <h4>상품명</h4>
            <p>상품 설명</p>

          </Col>
          <Col sm>
            <img src={ shoe3 }></img>
            <h4>상품명</h4>
            <p>상품 설명</p>
          </Col>
        </Row>
      </Container>

  
    </div>
  );
}


export default App;
