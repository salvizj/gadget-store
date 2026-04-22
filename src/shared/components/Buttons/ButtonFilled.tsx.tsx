type ButtonFilledProps = {
	color?: "primary" | "secondary" | "error" | "info" | "success" | "warning"
	size?: "xs" | "sm" | "md" | "lg" | "xl"
	iconStart?: React.ReactNode
	iconEnd?: React.ReactNode
	onClick?: () => void
	children: React.ReactNode
}

const ButtonFilled = ({
	color,
	size,
	onClick,
	children,
}: ButtonFilledProps) => {

type ButtonSize = "xs" | "sm" | "md" | "lg"
 
const buttonSizes = {
	xs: {
		borderRadius: "3.12px",
		padding: "4.67px 4.67px 4.67px 6.23px",
		height: "27px",
		width: "113px",
	},
	sm: {
		borderRadius: "3.19px",
		padding: "4.79px 4.79px 4.79px 6.38px",
		borderWidth: "0.8px",
		height: "30px",
	},
	md: {
		borderRadius: "5.4px",
		padding: "8.1px 8.1px 8.1px 10.8px",
		borderWidth: "1.38px",
		height: "48px",
	},
	lg: {
		borderRadius: "6.64px",
		padding: "9.97px 9.97px 9.97px 13.29px",
		height: "60px",
		width: "328px",
	},
}

	return (
		<Button
			onClick={onClick}
			color={color}
			variant="contained"
      sx={{
        textTransform: "capitalize",
        fontWeight: 500,
        {...buttonSizes[size as ButtonSize]}
        
       }}
		>
			{children}
		</Button>
	)
}
export default ButtonFilled
