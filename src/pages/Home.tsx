import { Container, Typography, Stack } from "@mui/material"
import FeatureCard from "../shared/components/InforCard"
import Hero from "../layouts/hero/Hero"
import { HOME_INFO } from "../constants/homeInfo"

const Home = () => {
  return (
    <>
      <Hero />
      <Container component="section" maxWidth={false} sx={{ py: 8, maxWidth: "1000px" }}>
        <Stack spacing={10} direction="column">
          <Typography align="center" variant="h3">
            Why Choose Us?
          </Typography>

          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={8}
            sx={{
              justifyContent: "center",
              alignItems: { xs: "center", md: "stretch" },
            }}
          >
            {HOME_INFO.map((info, index) => (
              <FeatureCard key={index} icon={info.icon} title={info.title} description={info.description} />
            ))}
          </Stack>
        </Stack>
      </Container>
    </>
  )
}

export default Home
