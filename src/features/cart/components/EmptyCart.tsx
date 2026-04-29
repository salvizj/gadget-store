import { Stack, Typography, Card, Button, Box } from "@mui/material"
import { Link } from "react-router"
import styles from "./EmptyCart.module.css"

const EmptyCart = () => {
  return (
    <>
      <Box className={styles.wrapper}>
        <Typography variant="h4" gutterBottom>
          Shopping Cart
        </Typography>
      </Box>
      <Card className={styles.innerWrapper}>
        <Stack className={styles.content}>
          <Typography variant="h4" gutterBottom>
            Your shopping cart is empty
          </Typography>
          <Typography variant="h4" gutterBottom>
            Go to
            <Button component={Link} to="/products">
              <Typography component="span" variant="h4" gutterBottom className={styles.linkText}>
                Product Page
              </Typography>
            </Button>
          </Typography>
        </Stack>
      </Card>
    </>
  )
}
export default EmptyCart
