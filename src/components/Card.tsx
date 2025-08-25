import type { CardProps } from "../type/Product"
import { useState } from "react"
import { AddToCartButton, QuantityButton } from "./AddButton"
import { useDispatch } from "react-redux"
import { type AppDispatch} from "../app/store"
import { addCart, decreaseQuantity, increaseQuantity, removeCart } from "../features/cartSlice"

const Card = ({ image, name, category, price, id }: CardProps) => {
    const [isPrimary, setIsPrimary] = useState(true)
    const [count, setCount] = useState(1)
    const dispatch = useDispatch<AppDispatch>()
    const handleClick = (id: number) => {
        console.log(id)
        setIsPrimary(false)
        dispatch(addCart({
            id: id,
            name: name,
            category: category,
            image: image,
            price: price,
            quantity: 1
        }))
    }
    const handleIncrease = (id: number) => {
        setCount((prev) => prev + 1)
        dispatch(increaseQuantity({
            id: id,
            amount: price,
        }))
    }
    const handleDecrease = (id: number) => {
        if (count > 1) {
            setCount((prev) => prev - 1)
            dispatch(decreaseQuantity({
                id: id,
                amount: price,
            }))
        } else {
            setIsPrimary(true)
            dispatch(removeCart(id))
        }
    }
    return (
        <div className="flex flex-col space-y-6">
            <div className="relative">
                <img
                    src={image.desktop}
                    alt="Product Image"
                    className="w-full rounded-md"
                />

                <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 w-40">
                    {isPrimary ? (
                        <AddToCartButton onClick={() => handleClick(id)} />
                    ) : (
                        <QuantityButton
                            quantity={count}
                            onIncrease={() => handleIncrease(id)}
                            onDecrease={() => handleDecrease(id)}
                        />
                    )}
                </div>
            </div>

            {/* Product Info */}
            <div>
                <p className="text-gray-300 font-semibold text-sm">{category}</p>
                <p className="font-semibold">{name}</p>
                <p className="text-red-500 font-semibold">${price.toFixed(2)}</p>
            </div>
        </div >
    )

}

export default Card
