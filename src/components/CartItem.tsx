import { useDispatch } from 'react-redux'
import { removeItem, increase, decrease } from '../features/CartSlice'
import { MinusIcon, PlusIcon } from '../heroIcons'

type Items = {
  id: number
  img: string
  title: string
  price: number
  amount: number
}
const CartItem = ({ id, img, title, price, amount }: Items) => {
  const dispatch = useDispatch()

  return (
    <div className="flex items-center justify-center mb-4">
      <div className="flex items-center">
        <img
          className="mx-4 w-[200px] h-[120px]"
          src={img}
          alt={title}
        />
      </div>
      <div className="w-[60%] mr-2">
        <div className="flex justify-between h-[120px] w-auto bg-gray-900">
          <h4 className=" text-[20px]">{title}</h4>

          <div className="flex flex-col items-center justify-center">
            <button onClick={() => dispatch(increase(id))}>
              <PlusIcon />
            </button>
            {amount}
            <button
              onClick={() => {
                amount === 1
                  ? dispatch(removeItem(id))
                  : dispatch(decrease(id))
              }}
            >
              <MinusIcon />
            </button>
            <button
              onClick={() => dispatch(removeItem(id))}
              className="text-[12px]"
            >
              削除
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItem
