type ButtonProps = {
	color?: "primary" | "secondary" | "error" | "info" | "success" | "warning"
	size?: "small" | "medium" | "large"
	iconStart?: React.ReactNode
	iconEnd?: React.ReactNode
	onClick?: () => void
	children: React.ReactNode
}

const ButtonOutlined = ({
	color,
	size,
	iconStart,
	iconEnd,
	onClick,
	children,
}: ButtonProps) => {
	return (
		<button className={`${variant} ${color} ${size}`} onClick={onClick}>
			{iconStart && <span className="icon-start">{iconStart}</span>}
			{children}
			{iconEnd && <span className="icon-end">{iconEnd}</span>}
		</button>
	)
}
export default ButtonOutlined
