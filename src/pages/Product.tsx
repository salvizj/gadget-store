import { Typography, Card, CardMedia, CardActions, CardContent, Box, ClickAwayListener } from "@mui/material"
import { useParams } from "react-router"
import FeatureList from "../features/products/components/ProductFeatureList"
import { ProductImgPathFromTitle } from "../utils/productUtils"
import useProduct from "../features/products/hooks/useProduct"
import { useState } from "react"
import Form from "../features/products/components/ProductForm"
import useUpdateProduct from "../features/products/hooks/useUpdateProduct"
import useDeleteProduct from "../features/products/hooks/useDeleteProduct"
import AddedToCartCard from "../features/products/components/AddedToCartDialog"
import PageContainer from "../layouts/PageContainer"
import CenteredMessage from "../shared/components/CenteredMessage"
import ProductSpecs from "../features/products/components/ProductSpecs"
import QuantityControl from "../shared/components/QuantityControl"
import ProductContextMenu from "../features/products/components/ProductContextMenu"
import Button from "../shared/components/Buttons/Button"
import useCartProduct from "../features/cart/hooks/useCartProduct"
import styles from "./Product.module.css"

const Product = () => {
  const { id } = useParams()
  const { product, error: productError, loading: productLoading, fetchProduct: refetch } = useProduct(id)

  const { updateProduct, loading: updateLoading, error: updateError } = useUpdateProduct(refetch)
  const { deleteProduct, loading: deleteLoading, error: deleteError } = useDeleteProduct(refetch)

  const { productAlreadyInCart, productInCartCount, addToCartClick, onIncrementClick, onDecrementClick } =
    useCartProduct(Number(id))

  const [menuOpen, setMenuOpen] = useState(false)
  const [isUpdateFormOpen, setIsUpdateFormOpen] = useState(false)
  const [isAddedToCartCardOpen, setIsAddedToCartCardOpen] = useState(false)

  if (productLoading || updateLoading || deleteLoading) {
    return <CenteredMessage message="Loading..." />
  }

  if (productError || updateError || deleteError) {
    return <CenteredMessage message={`Error: ${productError || updateError || deleteError}`} />
  }

  if (!product) {
    return <CenteredMessage message="Product not found" />
  }

  return (
    <>
      {isUpdateFormOpen && product && (
        <Form
          closeForm={() => setIsUpdateFormOpen(false)}
          actionBtnText="Update"
          onUpdate={updateProduct}
          product={product}
        />
      )}
      {isAddedToCartCardOpen && <AddedToCartCard closeWindow={() => setIsAddedToCartCardOpen(false)} />}

      <PageContainer className={styles.pageWrapper}>
        <Card elevation={1} className={styles.productCard}>
          <CardMedia
            component="img"
            className={styles.productImage}
            image={ProductImgPathFromTitle(product.title)}
            alt={product.title}
          />

          <CardContent className={styles.productContent}>
            <Box className={styles.detailsWrapper}>
              <Typography variant="h4" gutterBottom>
                {product.title}
              </Typography>
              <Typography gutterBottom className={styles.productDescription}>
                {product.long_description}
              </Typography>
              <ProductSpecs product={product} />
            </Box>

            <FeatureList features={product.features ?? []} />

            <Typography variant="h5" gutterBottom className={styles.price}>
              Price: {product.price}€
            </Typography>

            <Box className={styles.actionsContainer}>
              <CardActions className={styles.actions}>
                <Button variant="outlined" size="medium" onClick={() => setMenuOpen(true)}>
                  Menu
                </Button>

                {productAlreadyInCart ? (
                  <QuantityControl
                    productAlreadyInCart={productAlreadyInCart}
                    productInCartCount={productInCartCount}
                    onIncrementClick={() => onIncrementClick(Number(id))}
                    onDecrementClick={() => onDecrementClick(Number(id))}
                  />
                ) : (
                  <Button
                    variant="contained"
                    size="medium"
                    onClick={() => {
                      addToCartClick(product)
                      setIsAddedToCartCardOpen(true)
                    }}
                  >
                    Add to Cart
                  </Button>
                )}
              </CardActions>

              {menuOpen && (
                <ClickAwayListener onClickAway={() => setMenuOpen(false)}>
                  <Box className={styles.contextMenu}>
                    <ProductContextMenu
                      product={product}
                      onEditClick={() => setIsUpdateFormOpen(true)}
                      onDeleteClick={() => deleteProduct(id as string)}
                      closeMenu={() => setMenuOpen(false)}
                    />
                  </Box>
                </ClickAwayListener>
              )}
            </Box>
          </CardContent>
        </Card>
      </PageContainer>
    </>
  )
}

export default Product
