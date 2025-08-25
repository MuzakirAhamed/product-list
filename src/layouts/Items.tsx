import { useSelector } from "react-redux";
import Card from "../components/Card"
import { useFetchProducts } from "../hooks/useFetchProducts"
import type { RootState } from "../app/store";

const Items = () => {
    const { data, isPending, isError, error } = useFetchProducts();
    const cart = useSelector((state: RootState) => state.cart.cart)
    if (isPending) {
        return <p>Loading...</p>
    }
    if (isError) {
        return <p>{error?.message}</p>
    }
    console.log(cart)

    return (
        <div className="flex flex-col space-y-5">
            <p className="text-3xl font-bold tracking-wider">Desserts</p>
            <div className="grid grid-cols-3 gap-4">
                {data?.map((item, index) => {
                    return <Card key={index} category={item.category} image={item.image} name={item.name} price={item.price} id={item.id} />
                })}
            </div>
        </div>
    )
}

export default Items
