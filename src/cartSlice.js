
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items: [],
    total: 0,
}
const getItem = (state, id) => state.items.find(item => item.id === id);
 const total = (state) => {
    state.total = state.items.reduce((acc, item) => acc + item.price * item.quantity,0) || 0;
}
const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers: {
        addToCart(state, action){
            getItem(state, action.payload.id) ? getItem(state, action.payload.id).quantity += action.payload.quantity : state.items.push({...action.payload, quantity: action.payload.quantity})
            total(state)
            
        },
        removeFromCart(state, action){
           if (getItem(state, action.payload)){

               state.items = state.items.filter(item => item.id !== action.payload)
               total(state)
               
           }
            },
        addQuantity(state, action){
            getItem(state, action.payload) ? getItem(state, action.payload).quantity += 1 : null;
            total(state)
            
        },
        reduceQuantity(state, action){
            getItem(state, action.payload) ? getItem(state, action.payload).quantity -= 1 : null
            total(state)
            
        },
 
        
    }
})

export const { addToCart, removeFromCart, addQuantity, reduceQuantity } = cartSlice.actions

export default cartSlice.reducer