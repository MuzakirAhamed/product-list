type Image = {
    thumbnail: string,
    desktop: string
}
export type CardProps = {
    id: number,
    image: Image,
    name: string,
    category: string,
    price: number
}

export type Cart = CardProps & {
    quantity: number
}


export type CartAction =
    | { type: "ADD_ITEM"; payload: Cart }
    | { type: "REMOVE_ITEM"; payload: { id: number } }
    | { type: "CLEAR_CART" }
    | { type: "INCREASE_QUANTITY"; payload: { id: number } }
    | { type: "DECREASE_QUANTITY"; payload: { id: number } }