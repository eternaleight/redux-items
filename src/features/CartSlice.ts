import { createSlice } from '@reduxjs/toolkit'
import cartItems from '../cartItems'

//買い物カゴの初期化
const initialState = {
  cartItems: cartItems,
  amount: 2,
  total: 1740 * 2,
}

// type State = typeof initialState

const cartItem =
  {
    id: 1,
    title: "neovim",
    price: 24000,
    img: "Gotham.jpeg",
    amount: 1
  }

type Item = typeof cartItem

// type Items = {
//   id: number
//   img: string
//   title: string
//   price: number
//   amount: number
// }

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = []
      state.amount = 0
      state.total = 0
      // return { cartItems: [], amount: 0, total: 0 }
    },

    removeItem: (state, action) => {
      console.log(action)
      const itemId = action.payload
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== itemId
      )
    },

    increase: (state, action) => {
      const cartItem:any  = state.cartItems.find(
        (item) => item.id === action.payload
      )
      cartItem.amount = cartItem.amount + 1
      console.log()
    },

    decrease: (state, action) => {
      const cartItem: any = state.cartItems.find(
        (item) => item.id === action.payload
      )
      cartItem.amount = cartItem.amount - 1
    },

    caluculateTotals: (state) => {
      let amount = 0
      let total = 0
      state.cartItems.forEach((item: Item) => {
        amount += item.amount
        total += item.amount * item.price
      })
      state.amount = amount
      state.total = total
    },
  },
})

// console.log(cartSlice)

export const { clearCart, removeItem, increase, decrease, caluculateTotals } =
  cartSlice.actions
export default cartSlice.reducer
