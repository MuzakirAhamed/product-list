import { MdAddShoppingCart } from "react-icons/md"
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci"
import Button from "./Button"
import SmallButton from "./SmallButton"

type AddToCartButtonProps = {
    onClick: () => void
}

const AddToCartButton = ({ onClick }: AddToCartButtonProps) => (
    <Button variant="secondary" onClick={onClick}>
        <div className="flex space-x-2 px-2 items-center">
            <MdAddShoppingCart color="hsl(14,86%,42%)" />
            <p className="text-stone-900 hover:text-[hsl(14,86%,42%)]">
                Add to Cart
            </p>
        </div>
    </Button>
)

type QuantityButtonProps = {
    quantity: number
    onIncrease: () => void
    onDecrease: () => void
}

const QuantityButton = ({ quantity, onIncrease, onDecrease }: QuantityButtonProps) => (
    <div className="flex items-center justify-between bg-[hsl(14,86%,42%)] rounded-full px-4 py-3 text-white">
        <SmallButton onClick={onDecrease}><CiCircleMinus color="white" /></SmallButton>
        <span className="text-slate-50">{quantity}</span>
        <SmallButton onClick={onIncrease}><CiCirclePlus color="white" /></SmallButton>
    </div>
);


export { AddToCartButton, QuantityButton }
