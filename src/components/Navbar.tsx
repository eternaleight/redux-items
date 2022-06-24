import React from 'react'
import { useSelector } from 'react-redux'
import { CartIcon,PlusIcon,MinusIcon } from '../heroIcons'

type Store = {
    cart: {
  cartItems: []
  amount: number,
  total: number,
  }
}

const Navbar = () => {
  const { amount } = useSelector((store:Store) => store.cart)
  return (
    <div>
      <div className="nav-center"></div>
      <h3 className="text-center bg-gray-800 navCenter">
        Redux Shopping
      </h3>
      <div className="nav-container">
        <div className="relative ml-1 amount-continer">
          <div className='relative'>
          <CartIcon/>
          <p className="w-5 h-5 absolute bg-white rounded-full text-black text-center left-[15px] top-[-20px] total-amount"><span className="relative top-[-2px]">{amount}</span></p>
          </div>
          <div>
          <div>
          <PlusIcon/>
          <MinusIcon/>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
