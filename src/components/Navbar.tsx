import { useSelector } from 'react-redux'
import { CartIcon } from '../heroIcons'

type Store = {
  cart: {
    cartItems: []
    amount: number
    total: number
  }
}

const Navbar = () => {
  const { amount } = useSelector((store: Store) => store.cart)
  return (
    <div>
      <div className="nav-center">
        <h3 className="text-center bg-gray-800 navCenter">
          <a
            className='cursor-pointer'
            href=""
            rel="noopener noreferrer"
          >
          Redux Shop
          </a>
        </h3>
        <div className="nav-container">
          <div className="relative ml-1 amount-continer">
            <div className="relative">
              <CartIcon />
              <p className="text-[12px] font-semibold text-bold w-5 h-5 absolute bg-white rounded-full text-black text-center left-[15px] top-[-14px] total-amount">
                <span className="relative top-[-0px]">{amount}</span>
              </p>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
