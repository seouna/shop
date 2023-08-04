<h1>리액트study</h1>
<hr>
<h2>이미지 넣는법</h2>
<h4>1. css 파일에서 src 폴더안에 있는사진 사용 : ./이미지경로</h4> 
<h4>2. html 안에서 src 이미지 사용 : 이미지를 import 하고 사용</h4> 

* import <b>작명</b> from './이미지경로' <br>
* 이미지 경로가 필요한 곳에서 <b>작명</b> 사용<br>
   
```
import bg from './bg.png'

function App(){
  return (
    <div>
      <div className="main-bg" style={{ backgroundImage : 'url(' + bg + ')' }}></div>
    </div>
  )
}
```
<h2> public 폴더 </h2>

* 여러가지 소스코드는 src 폴더에 보관하면되는데 이미지같은 static 파일의 경우 public  폴더에 보관해도된다.<br>
* 리액트는 build 라는 작업을하는데 코드를 한 파일로 압축해주는 작업을 해준다 <br>
* src 폴더에 있던 코드와 파일은 다 압축이되는데 (파일명 바뀜) <br>
* public 폴더에있는 파일은 원본 그대로 보존이 됨.<br>
* 이미지,txt,json등 수정이 필요없는 파일의 경우 public 폴더에 보관해도됨<br>

<hr>
<h4> public 폴더에있는 이미지 사용 </h4>
< img src= process.env.PUBLIC_URL + "/파일명.확장자"/ >

<hr>

<h2> 리액트 라우터 사용</h2>
<h4>react-router-dom 설치</h4>
1. npm install react-router-dom@6 <br>
2. index.js에서 <BrowserRouter> <App /> </BrowserRouter> 추가해줌 <br>
3. App.js 에서 import {Routes, Route, Link } from 'react-router-dom'<br>
4. <Routes>만들고 <Route> 경로 보여줄내용 작성<br>
  
```
<Routes>
<Route path="/detail" element={ 내용 } />
<Route path="/about" element={ 내용 } />  
</Routes>
  
```
<h4> 페이지 이동 </h4>
```
<Link to="/">홈</Link>
```


