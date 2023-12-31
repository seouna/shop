import { useContext, useState } from "react"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import styled from "styled-components"
import Nav from 'react-bootstrap/Nav';
import '../css/sub.css';
import {Context1} from './../App.js';
  /* 
  
   컴포넌트의 Lifecycle
   -페이지에 장착 (mount)
   -업데이트 (update)
   -필요없으면제거 (unmount)

   중간중간 코드 실행가능 ( 갈고리 달아서 실행 )

  */


// 1. 옛날방식 갈고리 다는법
// class Detail2 extends React.Children {
//   componentDidMount(){
//   }
//   componentDidUpdate(){
//   }
//   componentWillUnmount(){
//   }
// }




// -------- styled-components -------------
//style 이 입혀진 컴포넌트 생성
// 2.여기서 쓴 CSS 는 다른 JS파일 간섭하지 않음
// 간섭방지하려면 컴포넌트명.module.css 파일생성해서 쓰기!
// 3.로딩시간 단축

//단점 
// js 복잡
// 중복스타일은 컴포넌트간 import 할텐데 css랑 다를게없음
// css 담당할사람이 없을때 상관없지만. . 협업할떄 이슈




let YellowBtn = styled.button`
  background : ${ props => props.bg };
  color : ${ props => props.bg == 'blue' ? 'white' : 'black'};
  padding : 5px 15px;
  margin-right : 10px;
  border : none;
  border-radius : 10px ;
`
// 오렌지색 버튼이 필요하다면 props 문법사용

let Box = styled.div`
  background : yellow;
  padding : 20px;
`

function Detail(props){
// useContext 사용
  let {inventory} = useContext(Context1);

  let [fade2,setFade2] = useState('');
    

  useEffect(()=>{
    // automatic batching 기능
    // state 변경이된뒤 동작 ( 한번에 동작하려고 하기 떄문에 )
    // setTimeout으로 시간차를 주고 사용

    //end 클래스 붙이기
    let a = setTimeout(()=>{setFade2('end');},100)
    return () => {
      clearTimeout(a)
      setFade2('');
    }
  },[])

  //동적UI
  let [timeAlert,setTimeAlert] = useState(true);
  let [count, setCount] = useState(0);
  let [amount,setAmount] = useState('');
  let [text,setText] = useState('');
  // 2. 갈고리 다는법!
  // mount, update시 코드 실행해주는 useEffect
  // 실행시점 : 렌더링이 완료된 후 동작
  useEffect(() => {

    // 시간이 오래걸리는 코드를 useEffect안에 작성
    // ---- useEffect 사용 ----
    // 1. 어려운 연산
    // 2. 서버에서 데이터 가져오는 작업
    // 3. 타이머 장착시
    // for(var i = 0; i < 10000; i++){
    //   console.log(1);  
    // }

    if (isNaN(amount) == true){
      alert('숫자만 입력해주세욧');
      setAmount('');
    }
    
    let a = setTimeout(() => { setTimeAlert(false) }, 2000)
    // return : useEffect 실행전에 사용
    // 타이머같은거 쓸때 기존타이머를 제거하고 사용
    return ()=>{
      clearTimeout(a);
     
    }

  
  },[amount]) 
  //dependency [ state,변수넣을수 있음]
  //mount, update 될때 실행되는데 dependency 추가하면 해당변수가 변경될때만 실행 
  // [] 1회만 사용하고싶을때


  let { id } = useParams();

  // find()는 array 뒤에 붙일수 있다. 
  // find() 콜백함수에 파라미터 넣으면 array 자료에 있던 자료를 의미
  // arrow function 에서 return 과 중괄호 동시에 생략가능
  let shoes = props.shoes.find((x) => x.id == id)
  
  


    return(
    <>
      {
        timeAlert == true 
          ? <Box clssName="alert alert-warning">
              2초이내 구매시 할인
            </Box>
          : null

      }
      
      <div className={'container start ' + fade2}>
        {/* <YellowBtn bg="yellow">버튼</YellowBtn>
        <YellowBtn bg="blue">버튼</YellowBtn> */}
        {count}<button onClick={()=>{ setCount(count+1) }}> 버튼 </button>
        <div className='row detail-con'>
          <div className='col-md-6'>
            <img src={ process.env.PUBLIC_URL + '/img/shoe' + (parseInt(id)+1) + '.jpg' }/>
          </div>
          <div className='col-md-6'>
            <h4 className='pt-5'>{ shoes.title }</h4>
            <p>{ shoes.content }</p>
            <p>{ shoes.price }</p>
            <p>수량 : <input placeholder="수량을 입력해주세요" onChange={(e)=>{setAmount(e.target.value)}} value={amount}></input></p>
            <button className='btn btn-danger'>주문하기</button>
          </div>
        </div>
        <DetailTab></DetailTab>
      </div>
    </>

    )
  }


  function DetailTab() {
    // let {inventory} = useContext(Context1);
    // context API 특징 ( 단점 )
    // state 변경시 쓸데없는것 까지 재렌더링
    // 나중에 컴포넌트 재사용이 어려워짐
    let [tab,setTab] = useState(0);

    return (
      <>
      <Nav fill variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link onClick={()=>{setTab(0)}} eventKey="link-0">버튼 0 </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={()=>{setTab(1)}} eventKey="link-1">버튼 1</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={()=>{setTab(2)}} eventKey="link-2">버튼 2</Nav.Link>
        </Nav.Item>
      </Nav>
      <TabContent tab={tab} />
      </>
     
    );
  }


  function TabContent({tab}){
    // if ( tab == 0 ){
    //   return <div>내용0</div>
    // }

    // if ( tab == 1 ){
    //   return <div>내용1</div>
    // }
    // if ( tab == 2 ){
    //   return <div>내용2</div>
    // }  
    let [fade,setFade] = useState('');
    

    useEffect(()=>{
      // automatic batching 기능
      // state 변경이된뒤 동작 ( 한번에 동작하려고 하기 떄문에 )
      // setTimeout으로 시간차를 주고 사용

      //end 클래스 붙이기
      let a = setTimeout(()=>{setFade('end');},100)
      return () => {
        clearTimeout(a)
        setFade('');
      }
    },[tab])

    return (<div className={'start ' + fade}>{
      [<div></div>,<div>내용1</div>,<div>내용2</div>][tab]
    }
    </div>)
  }
  // props 싫으면
  // 1. context API 
  // 2. Redux 외부 라이브러리

  export default Detail

  /*
    useEffect

    useEffect(() => { })      // 1. 재렌더링마다 코드를 실행할때
    useEffect(() => { }, [])  // 2.mount시 1회 코드실행하고싶을떄
    useEffect(() => {
      return () =>{
        //3. unmount시 1회 코드실행하고싶을떄
        //4. clean 
      }
    },[ 5. 특정 state변경시 실생])

  
  */