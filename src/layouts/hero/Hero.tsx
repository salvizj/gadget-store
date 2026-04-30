import { Box, Typography } from "@mui/material"
import HeroImage from "../../assets/images/hero_image.png"
import { Link } from "react-router"
import Button from "../../shared/components/Buttons/Button"
import styles from "./Hero.module.css"

const Hero = () => {
  return (
    <>
      <Box className={styles.wrapper}>
        <Box className={styles.innerWrapper}>
          <Box className={styles.contentWrapper}>
            <Box className={styles.textWrapper}>
              <Typography variant="h2">Experience the Future of Technology Today!</Typography>
              <Typography>
                Unleash your inner tech enthusiast with our wide range of gadgets. Become a pro expert within a moment.
              </Typography>
            </Box>

            <Box className={styles.actionWrapper}>
              <Button variant="outlined" component={Link} to="/contact-us" size="large">
                Contact Us
              </Button>
              <Button variant="contained" component={Link} to="/products" size="large">
                Shop Now
              </Button>
            </Box>
          </Box>

          <Box className={styles.imageWrapper}>
            <Box component="img" src={HeroImage} alt="Hero Image" className={styles.image} />
          </Box>
        </Box>
      </Box>
    </>
  )
}
export default Hero
