import { useDispatch } from 'react-redux'
import { removeItem } from '../features/CartSlice'
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
    <div className="flex items-center justify-center">
      <div className="flex items-center ">
        <img
          className="mb-6 mx-4 w-[200px] h-[120px]"
          src={img}
          alt={title}
        />
      </div>
      <div className="w-[60%] mr-2">
        <div className="flex justify-between w-auto bg-gray-900">
          <h4 className=" text-[20px]">{title}</h4>

          <div className="">
            <PlusIcon />
            <br />
            <MinusIcon />
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
