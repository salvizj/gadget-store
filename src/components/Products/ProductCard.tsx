import { Typography, Card, CardMedia, CardContent, Stack, Button, CardActions } from "@mui/material"
import { ProductImgPathFromTitle } from "../../utils/productUtils";
import { Link } from "react-router"
import type { Product } from "../../types/products";

type ProductCardProps = {
  product: Product
}
const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <>
      <Card sx={{ height: "100%", width: "100%", display: "flex", flexDirection: "column", flex: 1, }}>
        <CardContent sx={{ p: 2 }}>
          <Stack>
            <Typography variant="h6" sx={{ color: "primary.main" }} >{product.title}</Typography>
            <Typography variant="subtitle2">
              Price: {product.price}&euro;
            </Typography>
          </Stack>
        </CardContent>

        <CardMedia
          component="img"
          object-fit="cotain"
          image={ProductImgPathFromTitle(product.title)}
          alt={product.title}
          sx={{ height: "auto", width: "100%", maxHeight: "310px" }}
        />

        <CardContent sx={{ flex: 1 }}>
          <Typography variant="body2" gutterBottom>
            {product.short_description}
          </Typography>
        </CardContent>

        <CardActions sx={{ display: "flex", justifyContent: "center", gap: 2, mb: 2 }}>
          <Button variant="outlined" size="small" component={Link} to={`/products/${product.id}`}>
            Details
          </Button>
          <Button variant="outlined" size="small">
            Menu
          </Button>
        </CardActions>
      </Card>
    </>
  )
}

export default ProductCard