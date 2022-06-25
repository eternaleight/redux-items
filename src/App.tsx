import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './App.scss'
import CartContainer from './components/CartContainer'
import Earth from './components/Earth'
import Modal from './components/Modal'
import Navbar from './components/Navbar'
import { caluculateTotals } from './features/cartSlice'

type Cart = {
  cart: {
    cartItems: []
    amount: number
    total: number
  }
}

type Modal = {
  modal: {
    isOpen: boolean
  }
}

const App = () => {
  const dispatch = useDispatch()
  const { cartItems } = useSelector((state: Cart) => state.cart)
  const { isOpen } = useSelector((state: Modal) => state.modal)
  useEffect(() => {
    dispatch(caluculateTotals())
  }, [cartItems])

  return (
    <div>
      {isOpen && <Modal />}
      <Navbar />
      <CartContainer />
      <Earth />
    </div>
  )
}

export default App

// import './App.scss'
// import Earth from './components/Earth'
// import { useDispatch, useSelector } from 'react-redux'
// import { decrement, increment } from './reducers/counter'
// import { isLoginDispatch } from './reducers/isLogin'

// type ReducerType = {
//   counter: number
//   isLogin: boolean
// }

// const App = () => {
//   const dispatch = useDispatch()
//   const counter = useSelector((state: ReducerType) => state.counter)
//   const isLogin = useSelector((state: ReducerType) => state.isLogin)

//   return (
//     <div>
//       {isLogin ? (
//         <button
//           className="w-[120px] border-black border-[1px] m-1 bg-black"
//           onClick={() => dispatch(isLoginDispatch())}
//         >
//           Logout
//         </button>
//       ) : (
//         <button
//           className="w-[120px] text-black border-black border-[1px] m-1 bg-teal-300"
//           onClick={() => dispatch(isLoginDispatch())}
//         >
//           Login
//         </button>
//       )}
//       <button
//         className="w-[120px] text-black border-black border-[1px] m-1 bg-teal-300"
//         onClick={() => dispatch(increment(117))}
//       >
//         +
//       </button>
//       <button
//         className="w-[120px] text-black border-black border-[1px] m-1 bg-teal-300"
//         onClick={() => dispatch(decrement())}
//       >
//         -
//       </button>
//       <h3>カウント：{counter}</h3>
//       {isLogin ? <h3>ログインに成功！</h3> : <h3> ログインして下さい</h3>}
//       <Earth />
//     </div>
//   )
// }

// export default App
