import { Box } from "@mui/material"
import styles from "./StoreMap.module.css"
type StoreMapProps = {
  mapEmbedUrl: string
}

const StoreMap = ({ mapEmbedUrl }: StoreMapProps) => {
  return <Box component="iframe" src={mapEmbedUrl} className={styles.map} />
}

export default StoreMap
