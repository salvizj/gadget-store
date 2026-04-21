import { Stack, Typography, Card, Button, Box } from "@mui/material"
import { Link } from "react-router"

const EmptyCartCard = () => {
	return (
		<>
			<Box
				sx={{
					display: "flex",
					alignItems: "start",
				}}
			>
				<Typography variant="h4" gutterBottom>
					Shopping Cart
				</Typography>
			</Box>
			<Card
				sx={{
					mx: 22,
					mt: 20,
					pb: 16,
					pt: 10,
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<Stack direction="column" spacing={4} sx={{ alignItems: "center" }}>
					<Typography variant="h4" gutterBottom>
						Your shopping cart is empty
					</Typography>
					<Typography variant="h4" gutterBottom>
						Go to
						<Button component={Link} to="/products">
							<Typography
								component="span"
								variant="h4"
								gutterBottom
								sx={{
									textDecoration: "underline",
									textTransform: "capitalize",
									textUnderlineOffset: "2px",
								}}
							>
								Product Page
							</Typography>
						</Button>
					</Typography>
				</Stack>
			</Card>
		</>
	)
}
export default EmptyCartCard
