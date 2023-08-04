import { useParams } from "react-router-dom"
import styled from "styled-components"

//style 이 입혀진 컴포넌트 생성
// 여기서 쓴 CSS 는 다른 JS파일 간섭하지 않음
let YellowBtn = styled.button`
  background : yellow;
  color : black;
  padding : 10px;
`

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
        <Box>
          <YellowBtn>버튼</YellowBtn>
        </Box>
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