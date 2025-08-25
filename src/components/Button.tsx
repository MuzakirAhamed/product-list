type ButtonProps = {
  variant: "primary" | "secondary",
  children: React.ReactNode,
  onClick?: () => void
}
const Button = ({ variant, children, onClick }: ButtonProps) => {
  return (
    <button className={`${variant == "primary" ? "bg-[hsl(14,86%,42%)]" : "bg-stone-50 border border-[hsl(14,86%,42%)] border-3"} rounded-full font-semibold py-3 text-white cursor-pointer px-3`} onClick={onClick}>{children}</button>
  )
}

export default Button
