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
    <div className="flex items-center justify-center mb-4 font-noto">
      <div className="flex items-center">
        <img
          className="mx-4 w-[200px] h-[120px] object-[-0.3px]"
          src={img}
          alt={title}
        />
      </div>
      <div className="w-[60%] mr-2">
        <div className="flex justify-between h-[120px] w-auto bg-gray-900">

          <div className='flex-col justify-between max-md:flex'>
          <div>
          <h4 className="max-xxs:text-[13px] max-md:text-[15px] text-[18px]">
            {title}
          </h4>
            <h4 className="max-xxs:text-[12px] text-[14px]">¥{price}</h4>
          </div>

          <div>
            <h4 className="max-md:text-[12px] line-through text-[14px]">
              ¥{price * 12}
            </h4>
            <h4 className="max-md:text-[12px] text-[14px]">
              ¥{Math.floor((price / (price * 12)) * 1000)}%OFF
            </h4>
            <h4 className="max-md:text-[12px] text-[14px]">
              <span className='bg-[#224872ff] mr-1'>ベストセラー</span><span className='bg-[#226322aa]'>改訂</span>
            </h4>
          </div>
          </div>

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
