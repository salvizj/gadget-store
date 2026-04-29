import { Stack, Typography } from "@mui/material"
import styles from "./ProductFeatureList.module.css"

const ProductFeatureList = ({ features }: { features: string[] }) => {
  return (
    <>
      <Typography variant="h5">Features:</Typography>
      <Stack component="ul" className={styles.wrapper}>
        {features.map((feature) => (
          <Typography key={feature} component="li" variant="body2">
            {feature}
          </Typography>
        ))}
      </Stack>
    </>
  )
}

export default ProductFeatureList
