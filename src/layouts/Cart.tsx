import { useDispatch, useSelector } from "react-redux"
import Button from "../components/Button"
import CarbonQuote from "../components/CarbonQuote"
import ItemsList from "../components/ItemsList"
import OrderTotal from "../components/OrderTotal"
import type { AppDispatch, RootState } from "../app/store"
import { removeCart } from "../features/cartSlice"
import { useState } from "react"
import Modal from "../components/Modal"

const Cart = () => {
  const cart = useSelector((state: RootState) => state.cart.cart)
  const [isOpen, setIsOpen] = useState(false)

  const dispatch = useDispatch<AppDispatch>()
  const totalCartQuantity = cart.reduce((acc, current) => {
    return acc + current.quantity
  }, 0)
  const totalPrice = cart.reduce((acc, current) => {
    return acc + current.price
  }, 0)

  const handleRemove = (id: number) => {
    dispatch(removeCart(id))
  }

  const handleModal = () => {
    setIsOpen(true)
  }

  const handleClose = () => setIsOpen(false)
  return (
    <div className="rounded-md bg-stone-50 p-3 h-fit flex flex-col gap-6">
      <p className="text-2xl font-bold tracking-wider text-[hsl(14,86%,42%)]">Your Cart({totalCartQuantity})</p>
      {(cart.length > 0) ? <>
        {cart?.map((item) => {
          return <>
            <ItemsList key={item.id} price={item.price} quantity={item.quantity} name={item.name} onClick={handleRemove} id={item.id} />
            <hr />
          </>
        })}

        <OrderTotal totalAmount={totalPrice} />
        <div className="mx-4">
          <CarbonQuote />
        </div>
        <Button variant="primary" onClick={handleModal}>Confirm Order</Button>
      </> : <div className="flex flex-col my-6 mx-3">
        <img src="./assets/images/illustration-empty-cart.svg" className="h-60" alt="No data Image" />
        <p className="font-semibold text-[hsl(12,20%,44%)] text-center">Your added items will appear here</p>
      </div>}
      {isOpen && <Modal isOpen={isOpen} handleClose={handleClose} />}

    </div>
  )
}

export default Cart
