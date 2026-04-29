import { Box, Typography } from "@mui/material"
import styles from "./Footer.module.css"

type FooterProps = {
  text: string
}

const Footer = ({ text }: FooterProps) => {
  return (
    <>
      <Box component="footer" className={styles.wrapper}>
        <Typography color="inherit" className={styles.text}>
          {text}
        </Typography>
      </Box>
    </>
  )
}

export default Footer
