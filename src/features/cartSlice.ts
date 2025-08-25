import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Cart } from "../type/Product";

type CartValue = {
    cart: Cart[]
}
const initialValue: CartValue = {
    cart: []
}
type IncreaseQuantityPayload = {
    id: number;
    amount: number;
};


export const cartSlice = createSlice({
    name: "cart",
    initialState: initialValue,
    reducers: {
        addCart: (state, action: PayloadAction<Cart>) => {
            state.cart.push(action.payload)
        },
        removeCart: (state, action: PayloadAction<number>) => {
            state.cart = state.cart.filter((item) => item.id != action.payload)
        },
        increaseQuantity: (state, action: PayloadAction<IncreaseQuantityPayload>) => {
            state.cart = state.cart.map((item) => (
                (item.id == action.payload.id) ? { ...item, quantity: item.quantity + 1, price: item.price + action.payload.amount } : item
            ))
        },
        decreaseQuantity: (state, action: PayloadAction<IncreaseQuantityPayload>) => {
            state.cart = state.cart.map((item) => (
                (item.id == action.payload.id) ? { ...item, quantity: item.quantity - 1, price: item.price - action.payload.amount } : item
            ))
        }
    }
})

export const { addCart, increaseQuantity, decreaseQuantity, removeCart } = cartSlice.actions