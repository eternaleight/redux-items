import { createSlice } from '@reduxjs/toolkit'
import cartItems from '../cartItems'

//買い物カゴの初期化
const initialState = {
  cartItems: cartItems,
  amount: 2,
  total: 1740*2,
}


const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearCart: () => {
      // state.cartItems = []
      return { cartItems: [], amount: 0, total: 0 }
    },
    removeItem: (state, action) => {
      console.log(action)
      const itemId = action.payload
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId) 
    },
  },
})

console.log(cartSlice)

export const { clearCart, removeItem } = cartSlice.actions
export default cartSlice.reducer
