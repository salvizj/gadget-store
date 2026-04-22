import { Box, Typography } from "@mui/material"

const CenteredMessage = ({ message }: { message: string }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Typography variant="h2">{message}</Typography>
    </Box>
  )
}
export default CenteredMessage
