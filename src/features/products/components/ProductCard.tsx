import { Typography, Card, CardMedia, CardContent, CardActions, ClickAwayListener, Box } from "@mui/material"
import { ProductImgPathFromTitle } from "../../../utils/productUtils"
import { Link } from "react-router"
import { useState } from "react"
import type { Product } from "../../../types/types"
import ProductContextMenu from "./ProductContextMenu"
import Button from "../../../shared/components/Buttons/Button"
import styles from "./ProductCard.module.css"

type ProductCardProps = {
  product: Product
  onEditClick: (product: Product) => void
  onDeleteClick: () => void
}
const ProductCard = ({ product, onEditClick, onDeleteClick }: ProductCardProps) => {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <>
      <Card className={styles.card}>
        <CardContent className={styles.cardContent}>
          <Typography variant="h6" component="h6">
            {product.title}
          </Typography>
          <Typography variant="subtitle2">Price: {product.price}&euro;</Typography>
        </CardContent>

        <CardMedia
          component="img"
          image={ProductImgPathFromTitle(product.title)}
          alt={product.title}
          className={styles.image}
        />
        <CardContent className={styles.cardContentDescription}>
          <Typography variant="body2">{product.short_description}</Typography>
        </CardContent>

        <CardActions className={styles.action}>
          <Button variant="outlined" size="small" component={Link} to={`/products/${product.id}`}>
            Details
          </Button>

          <Box className={styles.contextMenuBoxWrapper}>
            <Button variant="outlined" size="small" onClick={() => setMenuOpen(true)}>
              Menu
            </Button>

            {menuOpen && (
              <ClickAwayListener onClickAway={() => setMenuOpen(false)}>
                <Box className={styles.contextMenuBox}>
                  <Box className={styles.contextMenuBoxInner}>
                    <ProductContextMenu
                      product={product}
                      onEditClick={() => onEditClick(product)}
                      onDeleteClick={onDeleteClick}
                      closeMenu={() => setMenuOpen(false)}
                    />
                  </Box>
                </Box>
              </ClickAwayListener>
            )}
          </Box>
        </CardActions>
      </Card>
    </>
  )
}

export default ProductCard
