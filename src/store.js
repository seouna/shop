import { configureStore, createSlice } from "@reduxjs/toolkit";

// ReduxStore state 보관
// createSlice() 로 state 만듬
// configureStore() 안에 등록
// createSlice() 와 useState()는 용도가 비슷
// state 등록은 configureStore() 안에 하면됨

let user = createSlice({
    name : 'user',
    initialState : 'kim'
})

let cart = createSlice({

    name : 'cart',
    initialState : [
        {id : 0, name  : 'White and Black', count : 2},
        {id : 2, name  : 'Grey Yordan', count : 1}
    ]
    
})

export default configureStore({
    reducer:{
       user : user.reducer,
       cart : cart.reducer
    }
})