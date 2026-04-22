import { Box } from "@mui/material"

type StoreMapProps = {
  mapEmbedUrl: string
}

const StoreMap = ({ mapEmbedUrl }: StoreMapProps) => {
  return (
    <Box
      component="iframe"
      src={mapEmbedUrl}
      sx={{
        border: "1px solid black",
        width: "100%",
        height: "100%",
        minHeight: 0,
        flex: 1,
        display: "block",
      }}
    />
  )
}

export default StoreMap
