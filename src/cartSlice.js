
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items: [],
    total: 0,
    user: null
}
const getItem = (state, id) => state.items.find(item => item.id === id);

 const total = (state) => {
    state.total = state.items.reduce((acc, item) => acc + item.price * item.quantity,0) || 0;
}

export const getToken = (state) => state.user.token
export const getUser = (state) => state.user
export const isLoggedIn = (state) => state.user ? true : false

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
        saveUser(state, action){
            state.user = action.payload
        },
        logOut(state){
            state.user = null
        }
 
        
    }
})

export const { addToCart, removeFromCart, addQuantity, reduceQuantity, saveUser, logOut } = cartSlice.actions

export default cartSlice.reducer