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
import { useState } from 'react';
import data from './data.js';


function App() {

  let [shoes] = useState(data);

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
      <div className="main-detail">
        <h4>WE HAVE EVERY DAY SHOES</h4>
        <p>
        210mm부터270mm까지 사이즈 걱정없이<br/>
        편안한 착화감의 트렌디한 슈즈를 만나보세요~♡
        </p>
      </div>
      <Container>
        <Row>
          {/* <Col sm> */}
          {/* public에 사진을 넣을경우 
            <img src={ process.env.PUBLIC_URL + '/logo192.png' }></img>
          
          */}
          
            {/* <img src={ shoe1 }></img>
            <h4>{shoes[0].title}</h4>
            <p>{shoes[0].content}<br/>
            </p>
          </Col>
          <Col sm>
            <img src={ shoe2 }></img>
            <h4>{shoes[1].title}</h4>
            <p>{shoes[1].content}</p>

          </Col>
          <Col sm>
            <img sr c={ shoe3 }></img>
            <h4>{shoes[2].title}</h4>
            <p>{shoes[2].content}</p>
          </Col> */}


          <Card src={shoe1} shoes={shoes[0]} i={1} />
          <Card src={shoe2} shoes={shoes[1]} i={2}/>
          <Card src={shoe3} shoes={shoes[2]} i={3}/>

        </Row>
      </Container>
          
  
    </div>
  );
}


function Card(props){
  return(
    <>
      <Col sm>
        <img src={props.src}></img>
        <h4>{props.shoes.title}</h4>
        <p>{props.shoes.price}</p>
      </Col>
    </>
  );
}

export default App;
