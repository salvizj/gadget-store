import { Typography, Card, CardMedia, CardContent, Stack, Button } from "@mui/material"
import { ProductImgPathFromTitle } from "../../utils/productUtils";
import type { Product } from "../types/products"
import { Link } from "react-router"

type ProductCardProps = {
  product: Product
}
const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <>
      <Card sx={{ flexDirection: "column", height: "100%", display: "flex" }}>
        <CardContent>
          <Stack>
            <Typography variant="h6" sx={{ color: "primary.main" }} >{product.title}</Typography>
            <Typography>{product.price}&euro;</Typography>
          </Stack>
        </CardContent>
        
        <CardMedia
          component="img"
          height="194"
          width="310"
          image={ProductImgPathFromTitle(product.title)}
          alt={product.title}
        />

        <CardContent sx={{ p: 4, flex: 1}}>
          <Typography variant="body2">
            {product.short_description}
          </Typography>
        </CardContent>

        <Stack direction="row" spacing={4} sx={{ px: 2, pb: 2, justifyContent: "center" }}>
          <Button variant="outlined" component={Link} to={`/products/${product.id}`}>
            Details
          </Button>
          <Button variant="outlined">Menu</Button>
        </Stack>
      </Card>
    </>
  )
}

export default ProductCard