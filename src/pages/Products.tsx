import { Typography, Grid, Container, Stack, Button, Box } from "@mui/material"
import ProductCard from "../components/Products/ProductCard"
import useProducts from "../hooks/useProducts"

const Products = () => {
  const { products, error, loading } = useProducts()

  if (loading) {
    return (
      <>
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
          <Typography variant="h2">Loading...</Typography>
        </Box>
      </>
    )

  }

  if (error) {
    return (
      <>
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
          <Typography variant="h2">Error: {error}</Typography>
        </Box>
      </>
    )
  }

  if (!products.length) {
    return (
      <>
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
          <Typography variant="h2">Product not found</Typography>
        </Box>
      </>
    )
  }

  return (
    <>
      <Container component="section" maxWidth="lg" sx={{ py: 12 }}>
        <Stack spacing={8} direction="column">
          <Box sx={{ display: "flex", justifyContent: "end", alignItems: "center" }}>
            <Button variant="contained" sx={{ mb: 4, textTransform: "uppercase" }}>+ Add new product</Button>
          </Box>
          <Grid container spacing={4} sx={{ display: "flex" }}>
            {products.map((product) => (
              <Grid size={{ xs: 12, sm: 4, md: 3, xl: 3 }} key={product.id} sx={{}}>
                <ProductCard product={product} />
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Container>
    </>
  )
}
export default Products
