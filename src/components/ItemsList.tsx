import SmallButton from "./SmallButton"
type ItemsListprops = {
  price: number;
  quantity: number,
  name: string,
  onClick?: (id: number) => void,
  id?: number
}
const ItemsList = ({ price, quantity, name, onClick, id }: ItemsListprops) => {
  const singlePrice = price / quantity
  return (
    <div className="flex flex-col space-y-3">
      <p className="font-semibold">{name}</p>
      <div className="flex justify-between">
        <div className="flex space-x-3">
          <p className="font-bold text-[hsl(14,86%,42%)] text-sm">{quantity}x</p>
          <p className="text-gray-300 font-bold text-sm">@{singlePrice.toFixed(2)}</p>
          <p className="text-gray-400 font-bold text-sm">${price.toFixed(2)}</p>
        </div>
        <SmallButton onClick={() => id && onClick?.(id)} >
          <img src="./assets/images/icon-remove-item.svg" alt="No data Image" />
        </SmallButton>
      </div>
    </div>
  )
}

export default ItemsList
