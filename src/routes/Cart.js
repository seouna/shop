import { Table } from "react-bootstrap"
import '../css/sub.css';

function Cart(){

    // Redux 사용하면 컴포넌트들이 props 없이 state 공유가능


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
                    <td>1</td>
                    <td>가가가</td>
                    <td>가가가</td>
                    <td>@가가가</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

// Cart.js 내보내기
export default Cart