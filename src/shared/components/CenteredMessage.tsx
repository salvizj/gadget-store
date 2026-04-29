import { Box, Typography } from "@mui/material"
import styles from "./CenteredMessage.module.css"

const CenteredMessage = ({ message }: { message: string }) => {
  return (
    <Box className={styles.wrapper}>
      <Typography variant="h2" component="h2">
        {message}
      </Typography>
    </Box>
  )
}
export default CenteredMessage
