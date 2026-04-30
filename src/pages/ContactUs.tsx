import { Typography, Box } from "@mui/material"
import PageContainer from "../layouts/PageContainer"
import StoreMap from "../shared/components/StoreMap"
import { CONTACT_INFO, EMBEDDED_MAP_URL } from "../constants/contactInfo"
import InfoCard from "../shared/components/InforCard"
import styles from "./ContactUs.module.css"

const ContactUs = () => {
  return (
    <>
      <PageContainer className={styles.pageWrapper}>
        <Box className={styles.contentWrapper}>
          <Box className={styles.infoWrapper}>
            <Box className={styles.infoContentWrapper}>
              <Typography variant="h2">Contact us by Phone, Email, or Visit us in our Office</Typography>

              <Box className={styles.addressWrapper}>
                <Typography variant="body1">Our address: Station Nord 23456, Greenland</Typography>
                <Box className={styles.mapWrapper}>
                  <StoreMap mapEmbedUrl={EMBEDDED_MAP_URL} />
                </Box>
              </Box>
            </Box>
          </Box>

          <Box className={styles.cardsWrapper}>
            {CONTACT_INFO.map((info, index) => (
              <InfoCard key={index} icon={info.icon} title={info.title} description={info.description} />
            ))}
          </Box>
        </Box>
      </PageContainer>
    </>
  )
}

export default ContactUs
