import { Stack, Typography } from "@mui/material"
import { useSelector } from "react-redux"
import type { RootState } from "../store/store"
import PageContainer from "../layouts/PageContainer"
import EmptyCartCard from "../features/cart/components/EmptyCart"
import CartItem from "../features/cart/components/CartItem"

const Cart = () => {
  const totalSum = useSelector((state: RootState) =>
    state.cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0).toFixed(2),
  )

  const itemCount = useSelector((state: RootState) => state.cart.reduce((total, item) => total + item.quantity, 0))

  const itemsInCart = useSelector((state: RootState) => state.cart)

  if (itemCount === 0) {
    return (
      <PageContainer
        sx={{
          py: 14,
        }}
      >
        <EmptyCartCard />
      </PageContainer>
    )
  }

  return (
    <>
      <PageContainer sx={{ pt: 4, pb: 36 }}>
        <Stack direction="row" sx={{ justifyContent: "space-between", alignItems: "center", py: 10 }}>
          <Typography variant="h4" gutterBottom>
            Shopping Cart
          </Typography>
          {itemCount > 0 && (
            <Typography variant="h4" gutterBottom>
              Total: ${totalSum}
            </Typography>
          )}
        </Stack>

        <Stack direction="column" sx={{ gap: 6 }}>
          {itemsInCart.map((item) => (
            <CartItem key={item.product.id} product={item.product} quantity={item.quantity} />
          ))}
        </Stack>
      </PageContainer>
    </>
  )
}
export default Cart
