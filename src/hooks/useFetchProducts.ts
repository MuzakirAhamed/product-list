import { useQuery } from "@tanstack/react-query"
import { getProducts } from "../services/getProducts"

export const useFetchProducts = () => {
    return useQuery({
        queryKey: ["items"],
        queryFn: getProducts
    })
}