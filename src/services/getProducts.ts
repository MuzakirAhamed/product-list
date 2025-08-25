import axios from "axios"
import { type CardProps } from "../type/Product"

export const getProducts = async () => {
    const response = await axios.get<CardProps[]>("http://localhost:3000/items")
    return response.data
}