import { useSelector } from 'react-redux'
import CartItems from './CartItems'

type Items = {
  id: number
  img: string
  title: string
  price: number
  amount: number
}

type Store = {
  cart: {
    cartItems: []
    amount: number
    total: number
  }
}

const CartContainer = () => {
  const { amount, cartItems, total } = useSelector(
    (store: Store) => store.cart
  )

  if (amount < 1) {
    return (
      <section>
        <header>
          <h2>買い物カゴ</h2>
          <h4 className="empty-cart">{amount}個:何も入ってません</h4>
        </header>
      </section>
    )
  }

  return (
    <section>
      <header>
        <h2>買い物カゴ</h2>
        <h4 className="empty-cart">{amount}個</h4>
      </header>
      <div>
        {cartItems.map((item, id) => {
          return <CartItems key={id} {...(item as Items)} />
        })}
      </div>
      <footer>
        <hr />
        <div className="flex flex-col items-end cart-total">
          <h4>
            <span className="inline-block text-black bg-white h-22 w-22">
              合計{total}円
            </span>
          </h4>
          <button className="btn creal-btn">全削除</button>
        </div>
      </footer>
    </section>
  )
}
export default CartContainer
