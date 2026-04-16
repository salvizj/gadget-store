import { Box, Button, Typography, Stack } from "@mui/material"
import HeroImage from "../assets/images/hero_image.png"
import CardSection from "./CardSection"
const Hero = () => {
	return (
		<CardSection>
			<Stack component="section" direction="row" spacing={4}>
				<Stack spacing={2} direction="column">
					<Stack>
						<Typography variant="h4">
							Experience the Future of Technology Today!
						</Typography>
						<Typography variant="subtitle1">
							Unleash your inner tech enthusiast with our wide range of gadgets.
							Become a pro expert within a moment.
						</Typography>
					</Stack>

					<Stack spacing={2} direction="row">
						<Button
							variant="outlined"
							color="primary"
							sx={{ textTransform: "uppercase" }}
						>
							Contact Us
						</Button>
						<Button
							variant="contained"
							color="primary"
							sx={{ textTransform: "uppercase" }}
						>
							Shop Now
						</Button>
					</Stack>
				</Stack>

				<Box
					component="img"
					src={HeroImage}
					alt="Hero Image"
					sx={{
            width: "100%",
            maxWidth: "623px",
            maxHeight: "711px",
					}}
				/>
			</Stack>
		</CardSection>
	)
}
export default Hero
