import { Box, Typography } from "@mui/material"
import FeatureCard from "../shared/components/InforCard"
import Hero from "../layouts/hero/Hero"
import { HOME_INFO } from "../constants/homeInfo"
import styles from "./Home.module.css"

const Home = () => {
  return (
    <>
      <Hero />
      <Box component="section" className={styles.sectionWrapper}>
        <Box className={styles.contentWrapper}>
          <Typography variant="h3" className={styles.title}>
            Why Choose Us?
          </Typography>

          <Box className={styles.cardsWrapper}>
            {HOME_INFO.map((info, index) => (
              <FeatureCard key={index} icon={info.icon} title={info.title} description={info.description} />
            ))}
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default Home
