function Detail(){
    return(
      <div className='container'>
        <div className='row'>
          <div className='col-md-6'>
            <img src={ process.env.PUBLIC_URL + '/shoe1.jpg' }/>
          </div>
          <div className='col-md-6'>
            <h4 className='pt-5'>상품명</h4>
            <p>상품설명</p>
            <p>12000원</p>
            <button className='btn btn-danger'>주문하기</button>
          </div>
        </div>
      </div>
    )
  }

  export default Detail