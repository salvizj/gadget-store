import { Container, Typography, Stack, Button, Card, CardMedia, CardActions, CardContent, Box } from "@mui/material"
import { useParams } from "react-router";
import FeatureList from "../components/Products/FeatureList"
import { ProductImgPathFromTitle } from "../utils/productUtils";
import Specs from "../components/Products/Specs"
import useProduct from "../hooks/products/useProduct";

const Product = () => {
  const { id } = useParams()
  const { product, error, loading } = useProduct(id)

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

  if (!product) {
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
      <Container component="section" maxWidth="xl" sx={{ mb: 14, mt: 8 }}>
        <Card elevation={1} sx={{ px: 8, pb: 4, display: "flex", flexDirection: { xs: "column", md: "row-reverse" } }}>

          <CardMedia component="img" sx={{ maxHeight: "550px", width: "auto" }} image={ProductImgPathFromTitle(product.title)} alt={product.title} object-fit="contain" >
          </CardMedia>

          <CardContent sx={{
            display: "flex", flex: 1, flexDirection: "column", alignItems: "start", width: "50%"
          }}>
            <Stack direction="column" spacing={4}>
              <Typography variant="h4" gutterBottom>
                {product.title}
              </Typography>
              <Typography gutterBottom sx={{ color: "secondary.text", fontWeight: 400, fontSize: "1rem", lineHeight: 1.875, letterSpacing: "0.25px" }}>
                {product.long_description}
              </Typography>
              <Specs product={product} />
            </Stack>
            <FeatureList features={product.features} />
            <Typography variant="h5" gutterBottom>
              Price: {product.price}€
            </Typography>

            <CardActions sx={{ display: "flex", gap: 4, justifyContent: "start" }}>
              <Button variant="outlined">Menu</Button>
              <Button variant="contained">Add to Cart</Button>
            </CardActions>
          </CardContent>
        </Card >
      </Container >
    </>
  )
}

export default Product