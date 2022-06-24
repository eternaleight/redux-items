import { createSlice } from '@reduxjs/toolkit'
import cartItems from '../cartItems'

//買い物カゴの初期化
const initialState = {
  cartItems: cartItems,
  amount: 2,
  total: 1740 * 2,
}

// type Items = {
//   id: number
//   img: string
//   title: string
//   price: number
//   amount: number|undefined
// }

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
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== itemId
      )
    },
    increase: (state, action) => {
      const cartItem:any = state.cartItems.find(
        (item) => item.id === action.payload
      )
      cartItem.amount = cartItem.amount + 1
    },
    decrease: (state, action) => {
      const cartItem:any = state.cartItems.find(
        (item) => item.id === action.payload
      )
      cartItem.amount = cartItem.amount - 1
    },
  },
})

// console.log(cartSlice)

export const { clearCart, removeItem, increase, decrease } = cartSlice.actions
export default cartSlice.reducer
