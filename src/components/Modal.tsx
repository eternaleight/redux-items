import { useDispatch } from 'react-redux'
import { clearCart } from '../features/cartSlice'
import { closeModal } from '../features/modalSlice'

const Modal = () => {
  const dispatch = useDispatch()
  return (
    <aside className="modal-container">
      <div className="fixed z-10 w-full h-full bg-transparent"></div>
      <div className="fixed top-[calc(50%-80px)] left-[calc(50%-135px)] h-[80px] w-[270px] z-10 flex flex-col bg-[#33333333] items-center justify-center modal">
        <h4 className="mb-2">買い物かごを全て空にしますか？</h4>
        <div className="btn-container">
          <button
            onClick={() =>
              dispatch(clearCart()) && dispatch(closeModal())
            }
            className="px-1 mr-8 bg-gray-800 btn confirm-btn"
          >
            OK
          </button>
          <button
            onClick={() => dispatch(closeModal())}
            className="px-1 bg-gray-800 btn confirm-btn"
          >
            やめる
          </button>
        </div>
      </div>
    </aside>
  )
}
export default Modal
