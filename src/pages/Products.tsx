import { Typography, Grid, Container, Stack, Button, Box, ClickAwayListener } from "@mui/material"
import ProductCard from "../components/Products/ProductCard"
import useProducts from "../hooks/products/useProducts"
import { useState } from "react"
import Form from "../components/Products/Form"
import useCreateProduct from "../hooks/products/useCreateProduct"
import useUpdateProduct from "../hooks/products/useUpdateProduct"
import useDeleteProduct from "../hooks/products/useDeleteProduct"

const Products = () => {
  const [isCreateFormOpen, setIsCreateFormOpen] = useState(false)
  const [isUpdateFormOpen, setIsUpdateFormOpen] = useState(false)

  const { products, error: productsError, loading: productsLoading } = useProducts()
  const { createProduct, loading: createLoading, error: createError } = useCreateProduct()
  const { updateProduct, loading: updateLoading, error: updateError } = useUpdateProduct()
  const { deleteProduct, loading: deleteLoading, error: deleteError } = useDeleteProduct()


  if (productsLoading || createLoading || updateLoading || deleteLoading) {
    return (
      <>
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
          <Typography variant="h2">Loading...</Typography>
        </Box>
      </>
    )

  }

  if (productsError || createError || updateError || deleteError) {
    return (
      <>
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
          <Typography variant="h2">Error: {productsError} {createError} {updateError} {deleteError}</Typography>
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
      {isCreateFormOpen && (
        <Form closeForm={() => setIsCreateFormOpen(false)} actionBtnText="Add product" onCreate={createProduct} />
      )}
      {isUpdateFormOpen && (
        <Form closeForm={() => setIsUpdateFormOpen(false)} actionBtnText="Edit product" onUpdate={updateProduct} />
      )}

      <Container component="section" maxWidth="lg" sx={{ py: 12 }}>
        <Stack spacing={8} direction="column">
          <Box sx={{ display: "flex", justifyContent: "end", alignItems: "center" }}>
            <Button variant="contained" sx={{ mb: 4, textTransform: "uppercase" }} onClick={() => setIsCreateFormOpen(true)}> + Add new product</Button>
          </Box>
          <Grid container spacing={4} sx={{ display: "flex" }}>
            {products.map((product) => (
              <Grid size={{ xs: 12, sm: 4, md: 3, xl: 3 }} key={product.id} sx={{}}>
                <ProductCard product={product} onDeleteClick={() => deleteProduct(product.id as unknown as string)} onEditClick={() => setIsUpdateFormOpen(true)} />
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Container >
    </>
  )
}
export default Products
