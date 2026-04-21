import {
	Typography,
	Stack,
	Button,
	Card,
	CardMedia,
	CardActions,
	CardContent,
	Box,
	ClickAwayListener,
} from "@mui/material"
import { useParams } from "react-router"
import FeatureList from "../components/Products/FeatureList"
import { ProductImgPathFromTitle } from "../utils/productUtils"
import Specs from "../components/Products/Specs"
import useProduct from "../hooks/products/useProduct"
import MenuCard from "../components/Products/MenuCard"
import { useState } from "react"
import Form from "../components/Products/Form"
import useUpdateProduct from "../hooks/products/useUpdateProduct"
import useDeleteProduct from "../hooks/products/useDeleteProduct"
import AddedToCartCard from "../components/Products/AddedToCartCard"
import QuantityToggler from "../components/Products/QuantityToggler"
import PageContainer from "../components/PageContainer"
import useCartProduct from "../hooks/cart/useCartProduct"
import CenteredMessage from "../components/CenteredMessage"

const Product = () => {
	const { id } = useParams()
	const {
		product,
		error: productError,
		loading: productLoading,
		fetchProduct: refetch,
	} = useProduct(id)

	const {
		updateProduct,
		loading: updateLoading,
		error: updateError,
	} = useUpdateProduct(refetch)
	const {
		deleteProduct,
		loading: deleteLoading,
		error: deleteError,
	} = useDeleteProduct(refetch)

	const {
		productAlreadyInCart,
		productInCartCount,
		addToCartClick,
		onIncrementClick,
		onDecrementClick,
	} = useCartProduct(Number(id))

	const [menuOpen, setMenuOpen] = useState(false)
	const [isUpdateFormOpen, setIsUpdateFormOpen] = useState(false)
	const [isAddedToCartCardOpen, setIsAddedToCartCardOpen] = useState(false)

	if (productLoading || updateLoading || deleteLoading) {
		return <CenteredMessage message="Loading..." />
	}

	if (productError || updateError || deleteError) {
		return (
			<CenteredMessage
				message={`Error: ${productError || updateError || deleteError}`}
			/>
		)
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
			{isAddedToCartCardOpen && (
				<AddedToCartCard closeWindow={() => setIsAddedToCartCardOpen(false)} />
			)}

			<PageContainer sx={{ mb: 14, mt: 8 }}>
				<Card
					elevation={1}
					sx={{
						px: { xs: 2, sm: 4, md: 6, lg: 10 },
						py: { xs: 3, md: 5 },
						display: "flex",
						flexDirection: { xs: "column", md: "row-reverse" },
						gap: { xs: 3, md: 0 },
					}}
				>
					<CardMedia
						component="img"
						sx={{
							maxWidth: { xs: "100%", md: "550px" },
							width: "40%",
							maxHeight: "550px",
							objectFit: "contain",
							alignSelf: "top",
						}}
						image={ProductImgPathFromTitle(product.title)}
						alt={product.title}
					/>

					<CardContent
						sx={{
							display: "flex",
							flex: 1,
							flexDirection: "column",
							alignItems: "start",
							width: { xs: "100%", xl: "50%" },
							p: { xs: 0, sm: 2 },
						}}
					>
						<Stack direction="column" spacing={5}>
							<Typography variant="h4" gutterBottom>
								{product.title}
							</Typography>
							<Typography
								gutterBottom
								sx={{
									color: "secondary.text",
									fontWeight: 400,
									fontSize: "1rem",
									lineHeight: 1.875,
									letterSpacing: "0.25px",
									maxWidth: { xs: "100%", md: "80%" },
								}}
							>
								{product.long_description}
							</Typography>
							<Specs product={product} />
						</Stack>
						<FeatureList features={product.features ?? []} />
						<Typography variant="h5" gutterBottom sx={{ py: 4 }}>
							Price: {product.price}€
						</Typography>

						<Box sx={{ position: "relative" }}>
							<CardActions
								sx={{
									display: "flex",
									gap: 2,
									p: 0,
									minHeight: "48px",
									height: "48px",
								}}
							>
								<Button variant="outlined" onClick={() => setMenuOpen(true)}>
									Menu
								</Button>

								{productAlreadyInCart ? (
									<QuantityToggler
										productAlreadyInCart={productAlreadyInCart}
										productInCartCount={productInCartCount}
										onIncrementClick={() => onIncrementClick(Number(id))}
										onDecrementClick={() => onDecrementClick(Number(id))}
									/>
								) : (
									<Button
										variant="contained"
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
									<Box
										sx={{
											position: "absolute",
											zIndex: 20,
											p: 2,
											bgcolor: "#ffffff",
											boxShadow: 2,
											top: 0,
										}}
									>
										<MenuCard
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
