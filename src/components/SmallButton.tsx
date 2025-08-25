type SmallButtonProps = {
    children: React.ReactNode,
    onClick?: () => void
}
const SmallButton = ({ children, onClick }: SmallButtonProps) => {
    return (
        <button className="cursor-pointer" onClick={onClick}>
            {children}
        </button>
    )
}

export default SmallButton
