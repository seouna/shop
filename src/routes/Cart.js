import { Table } from "react-bootstrap"
import '../css/sub.css';
import { useSelector } from "react-redux"

function Cart(){

    // Redux 사용하면 컴포넌트들이 props 없이 state 공유가능

    // Redux props 없이 state를 공유할수 있게 도와주는 라이브러리
    // npm install @reduxjs/toolkit react-redux
    // 간단한거 만들때 (컴포넌트 몇개없을때는 ) props 쓰는게 더 간소함

    let  a = useSelector((state) => { return state })
    console.log(a)
    return (
        <div className="cart-table">
            <h1>CART</h1>
            <Table striped bordered hover >
                <thead>
                    <tr>
                    <th>#</th>
                    <th>상품명</th>
                    <th>수량</th>
                    <th>변경하기</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>a</td>
                    <td>a</td>
                    <td>a</td>
                    <td>a</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

// Cart.js 내보내기
export default Cart