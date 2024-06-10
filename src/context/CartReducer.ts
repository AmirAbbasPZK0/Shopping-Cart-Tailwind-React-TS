import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { CartType , ProductData } from "../interfaces/data";

interface InitialState {
    cart : CartType
}

const initialState : InitialState = {
    cart : {}
}

export const CartReducer = createSlice({
    name : "cart",
    initialState,
    reducers : {
        addToCart : (state , action : PayloadAction<ProductData>) => {
            const product = action.payload
            if(state.cart[product.id]){
                state.cart[product.id].quantity += 1
            }else{
                state.cart[product.id] = {...product , quantity : 1}
            }
            localStorage.setItem("cart" , JSON.stringify(state.cart))
        },
        removeFromCart : (state , action : PayloadAction<ProductData>) => {
            const product = action.payload
            if(state.cart[product.id].quantity !== 1){
                state.cart[product.id].quantity -= 1
            }else{
                delete state.cart[product.id]
            }
            localStorage.setItem("cart" , JSON.stringify(state.cart))
        },
        deleteProductFromCart : (state , action : PayloadAction<ProductData>)=>{
            const product = action.payload
            delete state.cart[product.id]
            localStorage.setItem("cart" , JSON.stringify(state.cart))
        },
        cartRefreshHandler : (state , action) => {
            state.cart = action.payload 
        }
    }
})

export const {addToCart , cartRefreshHandler , deleteProductFromCart , removeFromCart} = CartReducer.actions
export default CartReducer.reducer