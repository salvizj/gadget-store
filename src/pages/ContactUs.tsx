import { Typography, Stack, Box } from "@mui/material"
import PageContainer from "../layouts/PageContainer"
import StoreMap from "../shared/components/StoreMap"
import { CONTACT_INFO, EMBEDDED_MAP_URL } from "../constants/contactInfo"
import InfoCard from "../shared/components/InforCard"

const ContactUs = () => {
  return (
    <>
      <PageContainer
        sx={{
          py: 14,
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <Stack direction={{ xs: "column", md: "row" }} spacing={14}>
          <Box sx={{ maxWidth: "750px" }}>
            <Stack direction="column" spacing={12}>
              <Typography variant="h2">Contact us by Phone, Email, or Visit us in our Office</Typography>

              <Stack direction="column" spacing={4}>
                <Typography variant="body1">Our address: Station Nord 23456, Greenland</Typography>
                <Box sx={{ height: "320px" }}>
                  <StoreMap mapEmbedUrl={EMBEDDED_MAP_URL} />
                </Box>
              </Stack>
            </Stack>
          </Box>

          <Stack
            direction="column"
            spacing={4}
            sx={{
              alignItems: { xs: "center", md: "stretch" },
              justifyContent: "center",
            }}
          >
            {CONTACT_INFO.map((info, index) => (
              <InfoCard key={index} icon={info.icon} title={info.title} description={info.description} />
            ))}
          </Stack>
        </Stack>
      </PageContainer>
    </>
  )
}

export default ContactUs
