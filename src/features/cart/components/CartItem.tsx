import { Card, CardContent, CardMedia, Stack, Typography } from "@mui/material"
import { ProductImgPathFromTitle } from "../../../utils/productUtils"
import type { CartItem, Product } from "../../../types/types"
import QuantityToggler from "../../../shared/components/QuantityControl"
import { useDispatch } from "react-redux"
import { decrementQuantity, incrementQuantity } from "../cartSlice"
import Specs from "./Specs"

type CartItemProps = {
  product: Product
  quantity: number
}

const CartItem = ({ product, quantity }: CartItemProps) => {
  const dispatch = useDispatch()

  return (
    <>
      <Card
        sx={{
          display: "flex",
          flexDirection: "row",
          px: 6,
        }}
      >
        <Stack direction="row" sx={{ flex: 1 }} spacing={-1}>
          <CardMedia
            component="img"
            sx={{
              height: "267px",
              width: "293px",
              objectFit: "contain",
            }}
            image={ProductImgPathFromTitle(product.title)}
            alt={product.title}
          />

          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              flex: 1,
              gap: 2,
            }}
          >
            <Typography variant="h4" gutterBottom>
              {product.title}
            </Typography>

            <Specs product={product} />
          </CardContent>
        </Stack>

        <Stack direction="row" spacing={20}>
          <QuantityToggler
            productAlreadyInCart={true}
            productInCartCount={quantity}
            onIncrementClick={() => dispatch(incrementQuantity({ productId: product.id }))}
            onDecrementClick={() => dispatch(decrementQuantity({ productId: product.id }))}
          />

          <CardContent
            sx={{
              display: "flex",
              alignItems: "center",
              flex: 1,
            }}
          >
            <Typography variant="h5" color="text.secondary" sx={{ whiteSpace: "nowrap" }}>
              Total: ${(product.price * quantity).toFixed(2)}
            </Typography>
          </CardContent>
        </Stack>
      </Card>
    </>
  )
}

export default CartItem
