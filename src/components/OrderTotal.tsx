type OrderTotalProps = {
  totalAmount: number
}
const OrderTotal = ({ totalAmount }: OrderTotalProps) => {
  return (
    <div className="flex justify-between">
      <p className="text-slate-800 font-semibold text-sm">Order Total</p>
      <p className="text-xl font-bold">${totalAmount.toFixed(2) || 0}</p>
    </div>
  )
}

export default OrderTotal
