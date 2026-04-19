import { Container, Typography, Stack, Button, Card, CardMedia, CardActions, CardContent, Box } from "@mui/material"
import { useParams } from "react-router";
import useProducts from "../hooks/useProducts";
import FeatureList from "../components/Products/FeatureList"
import { ProductImgPathFromTitle } from "../utils/productUtils";

const Product = () => {
  const { id } = useParams()
  const { product, error, loading } = useProducts({ id })

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
              <Typography variant="h6" gutterBottom sx={{ fontSize: "2.25rem", lineHeight: 0.67 }}>
                {product.title}
              </Typography>
              <Typography gutterBottom sx={{ color: "secondary.text", fontWeight: 400, fontSize: "1rem", lineHeight: 1.875, letterSpacing: "0.25px" }}>
                {product.long_description}
              </Typography>
              <Stack direction={{ xs: "column", md: "row" }} spacing={{ xs: 0, md: 4 }} sx={{ pb: 1 }}>
                <Typography variant="subtitle1" noWrap={true}>
                  Year:{product.year}
                </Typography>
                <Typography variant="subtitle1" noWrap={true}>
                  RAM Memory:{product.RAM}
                </Typography>
                <Typography variant="subtitle1" noWrap={true}>
                  Warrenty: {product.warranty_period}
                </Typography>
              </Stack>
            </Stack>
            <FeatureList features={product.features} />
            <Typography variant="subtitle1" gutterBottom>
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