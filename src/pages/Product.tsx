import { Container, Typography, Box, Stack, Button } from "@mui/material"
import { useParams } from "react-router";
import useProducts from "../hooks/useProducts";
import FeatureList from "../components/Products/FeatureList"
import { ProductImgPathFromTitle } from "../utils/productUtils";

const Product = () => {
  const { id } = useParams()
  const { product, error, loading } = useProducts({ id })

  if (loading) {
    return <Typography>Loading...</Typography>
  }

  if (error) {
    return <Typography>Error: {error}</Typography>
  }

  if (!product) {
    return <Typography>Product not found</Typography>
  }

  return (
    <>
      <Container component="section" maxWidth="lg" sx={{ py: 12 }}>
        <Stack spacing={4} direction="row">
          <Stack spacing={4} direction="column" sx={{ flex: 1 }}>
            <Typography variant="h2" gutterBottom>
              {product.title}
            </Typography>
            <Typography variant="h5">
              {product.long_description}
            </Typography>
            <FeatureList features={product.features} />
            <Typography>
              Price: {product.price}€
            </Typography>

            <Stack direction="row" spacing={2}>
              <Button variant="outlined">Menu</Button>
              <Button variant="contained">Add to Cart</Button>
            </Stack>
          </Stack>
        <Box>
          <img src={ProductImgPathFromTitle(product.title)} alt={product.title} style={{ width: "100%", maxWidth: "400px", marginTop: "2rem" }} />
        </Box>
        </Stack>
      </Container>
    </>
  )
}

export default Product