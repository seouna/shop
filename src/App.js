import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import data from './data.js';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import Detail from './routes/Detail';
import styled from "styled-components"
import axios from 'axios';

let WhiteBtn = styled.button`
  background : 'white';
  color : 'black';
  padding : 5px 55px;
  margin-right : 10px;
  border : 1px solid #797979;
`

function App() {



  //훅 페이지 이동도와주는 함수
  let navigate = useNavigate();   
  let [shoes, setShoes] = useState(data);

  return (
    <div className="App">

    


      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">UNASHOP</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() =>{navigate('/')}}>Home</Nav.Link>
            <Nav.Link onClick={() =>{navigate('/detail')}}>Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>


      <Routes>
        <Route path="/" element = {<Main shoes={shoes} setShoes={setShoes}/>} />

        {/* URL파라미터 사용 */}
        <Route path="/detail/:id" element = { <Detail shoes={shoes}/>} />


        {/* <Route path="/about" element={<About/>} />
        <Route path="/about/member" element={<About/>} />
        <Route path="/about/loctation" element={<About/>} /> */}

        {/* nested routes 방식! 
          1. 간단해짐
          2. element2개가 보임 // 어디에 보여줄지 작성해야함
        */}
        <Route path="/about" element={<About/>} >
          <Route path="member" element={<div>member</div>} />
          <Route path="loctation" element={<About/>} />
        </Route>
        <Route path="*" element = { <div> <h1>없는 페이지</h1> </div>} />
      </Routes>

      {/* <div className="main-bg" style={ {backgroundImage : 'url('+ bg +')' }}></div> */}
     
     
  
    </div>
  );
}
// + props.i+1 + '.jpg'

// 페이지 나누는법 ( 리액트 ) - react-router-dom@6 라이브러리사용
// 1. 커포넌트 만들어서 상세페이지 내용채움
// 2. /detail 접속하면 그 컴포넌트 보여줌
function Card(props){
  return(
    <>
      <Col sm>
        <Link to={'/detail/'+props.i}>
          <img src={ process.env.PUBLIC_URL + '/img/shoe'+(props.i+1)+'.jpg'}></img>
          <h4>{props.shoes.title}</h4>
          <p>{props.shoes.price}</p>
        </Link>
      </Col>
    </>
  );
}
//메인 컴포넌트
function Main(props){

  let [count,setCount] = useState(0);
  let [visible,setVisible] = useState(true);
  return(
    <>
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

        {/*           
        <Card src={shoe1} shoes={shoes[0]} i={1} />
        <Card src={shoe2} shoes={shoes[1]} i={2}/>
        <Card src={shoe3} shoes={shoes[2]} i={3}/> 
        */}


        {
          props.shoes.map((shoe, i) => {
            if (i % 3 === 0) {
            return (
              <Row key={i}>
                <Card shoes={shoe} i={i} />
                {props.shoes[i + 1] && <Card shoes={props.shoes[i + 1]} i={i + 1} />}
                {props.shoes[i + 2] && <Card shoes={props.shoes[i + 2]} i={i + 2} />}
              </Row>
            );
          }
          return null;
        })}
      </Row>
      
    </Container>
    {

      count < 2 && (
        <WhiteBtn onClick={() => {

            let url = '/dummy/data2.json';
            if (count == 1) {
              url = '/dummy/data3.json';
            } 
            setCount(count + 1);
            console.log("눌렀을때" + count);

            setVisible(!visible);
            // 로딩중 UI 띄우기
            <Loding/>


            axios
              .get(url)
              .then((res) => {
                let copy = [...props.shoes, ...res.data];
                props.setShoes(copy);
                
                // 로딩중 UI 숨기기
              })
              .catch(() => {
                console.log('실패');
              });

              //post 요청
              // axios.post('/',{ : })


              //동시에 ajax 여러개
              // Promise.all([axios.get('/url'), axios.get('/url2')])
              // .then(() => {

              // })

              
              // get요청
              //fetch('/').then(data => {})

          }}
        >
          M O R E
        </WhiteBtn>
      )
    }

    {/*
    -- ajax 옵션3
    1. XMLHttpRequest
    2. fecth()
    3. axios ( npm install axios )
    
    */}
    </>
  )
}

function About(){
  return(
    <div>
      <h4>회사정보</h4>
    </div>
  )
}

function AlertMore(){
  return(
    <div>
      <h3>상품이 더 이상 존재하지 않습니다.</h3>
    </div>
  )
}

function Loding(){
  return(
    <div>
      <h1>Loding</h1>
    </div>
  )
}

export default App;
