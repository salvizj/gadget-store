import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material"
import { ProductImgPathFromTitle } from "../../../utils/productUtils"
import type { CartItem, Product } from "../../../types/types"
import QuantityToggler from "../../../shared/components/QuantityControl"
import { useDispatch } from "react-redux"
import { decrementQuantity, incrementQuantity } from "../cartSlice"
import ProductSpecs from "./ProductSpecs"
import styles from "./CartItem.module.css"

type CartItemProps = {
  product: Product
  quantity: number
}

const CartItem = ({ product, quantity }: CartItemProps) => {
  const dispatch = useDispatch()

  return (
    <>
      <Card className={styles.wrapper}>
        <Box className={styles.productInfoWrapper}>
          <CardMedia
            component="img"
            image={ProductImgPathFromTitle(product.title)}
            alt={product.title}
            className={styles.image}
          />

          <CardContent className={styles.productDetailsWrapper}>
            <Typography variant="h4" gutterBottom>
              {product.title}
            </Typography>

            <ProductSpecs product={product} />
          </CardContent>
        </Box>

        <Box className={styles.quantityAndPriceWrapper}>
          <QuantityToggler
            productAlreadyInCart={true}
            productInCartCount={quantity}
            onIncrementClick={() => dispatch(incrementQuantity({ productId: product.id }))}
            onDecrementClick={() => dispatch(decrementQuantity({ productId: product.id }))}
          />

          <CardContent className={styles.totalPriceWrapper}>
            <Typography variant="h5" color="text.secondary" className={styles.totalPrice}>
              Total: ${(product.price * quantity).toFixed(2)}
            </Typography>
          </CardContent>
        </Box>
      </Card>
    </>
  )
}

export default CartItem
