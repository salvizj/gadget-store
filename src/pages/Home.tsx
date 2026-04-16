import { Box, Typography, Stack} from "@mui/material"
import CardSection from "../components/CardSection"
import Hero from "../components/Hero"
import WifiIcon from '@mui/icons-material/Wifi';
const Home = () => {
  return (

    <>
      <Hero />
      <Box component="section" sx={{ p: 4, mt: 4 }}>
        <Typography variant="h4" align="center">
          Why Choose Us?
        </Typography>
        <Stack direction="row" spacing={4} mt={4} justifyContent="center">
          <CardSection>
            <Stack spacing={2} direction="column" alignItems="center">
              <WifiIcon sx={{ fontSize: 40 }} />
              <Typography variant="h6">
                Wireless Freedom
              </Typography>
              <Typography variant="body1" align="center">
                wireless gadgets that provide freedom of movement while using them
              </Typography>
            </Stack>

          </CardSection>
          <CardSection>
            <Stack spacing={2} direction="column" alignItems="center">
              <WifiIcon sx={{ fontSize: 40 }} />
              <Typography variant="h6">
                Wireless Freedom
              </Typography>
              <Typography variant="body1" align="center">
                wireless gadgets that provide freedom of movement while using them
              </Typography>
            </Stack>
          </CardSection>
          <CardSection>
            <Stack spacing={2} direction="column" alignItems="center">
              <WifiIcon sx={{ fontSize: 40 }} />
              <Typography variant="h6">
                Wireless Freedom
              </Typography>
              <Typography variant="body1" align="center">
                wireless gadgets that provide freedom of movement while using them
              </Typography>
            </Stack>
          </CardSection>
        </Stack>
      </Box>
    </>
  )
}

export default Home
