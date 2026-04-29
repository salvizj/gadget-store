import { Stack, Typography } from "@mui/material"
import type { Product } from "../../../types/types"
import styles from "./ProductSpecs.module.css"

type ProductSpecsProps = {
  product: Product
}

const ProductSpecs = ({ product }: ProductSpecsProps) => {
  return (
    <Stack direction="column" spacing={1} className={styles.wrapper}>
      <Typography variant="body2">Year: {product.year}</Typography>
      <Typography variant="body2" noWrap>
        RAM Memory: {product.RAM}
      </Typography>
      <Typography variant="body2">Warranty: {product.warranty_period}</Typography>
      <Typography variant="body2">Price: {product.price} $</Typography>
    </Stack>
  )
}

export default ProductSpecs
