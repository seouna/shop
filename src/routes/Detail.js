import { useParams } from "react-router-dom"
import styled from "styled-components"

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
  background : grey;
  padding : 20px;
`

function Detail(props){

  let { id } = useParams();

  // find()는 array 뒤에 붙일수 있다. 
  // find() 콜백함수에 파라미터 넣으면 array 자료에 있던 자료를 의미
  // arrow function 에서 return 과 중괄호 동시에 생략가능
  let shoes = props.shoes.find((x) => x.id == id)
    return(

      
      <div className='container'>
        {/* <YellowBtn bg="yellow">버튼</YellowBtn>
        <YellowBtn bg="blue">버튼</YellowBtn> */}
        <div className='row'>
          <div className='col-md-6'>
            <img src={ process.env.PUBLIC_URL + '/shoe' + (parseInt(id)+1) + '.jpg' }/>
          </div>
          <div className='col-md-6'>
            <h4 className='pt-5'>{ shoes.title }</h4>
            <p>{ shoes.content }</p>
            <p>{ shoes.price }</p>
            <button className='btn btn-danger'>주문하기</button>
          </div>
        </div>
      </div>
    )
  }

  export default Detail