import { Typography, Stack } from "@mui/material"
import type { Product } from "../../../types/types"
import styles from "./ProductSpecs.module.css"
const ProductSpecs = ({ product }: { product: Product }) => {
  return (
    <Stack className={styles.wrapper}>
      <Typography variant="h5" noWrap={true}>
        Year: {product.year}
      </Typography>
      <Typography variant="h5" noWrap={true}>
        RAM Memory: {product.RAM}
      </Typography>
      <Typography variant="h5" noWrap={true}>
        Warranty: {product.warranty_period}
      </Typography>
    </Stack>
  )
}
export default ProductSpecs
