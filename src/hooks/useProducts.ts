import type { Product } from "../types/products"
import { useState, useEffect } from "react"
type UseProductsProps = {
	id?: string
}
const useProducts = ({ id }: UseProductsProps = {}) => {
	const url = import.meta.env.VITE_URL || "http://localhost:3000"
	const [products, setProducts] = useState<Product[]>([])
	const [product, setProduct] = useState<Product | null>(null)
	const [error, setError] = useState<string | null>(null)
	const [loading, setLoading] = useState<boolean>(true)

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				setLoading(true)
				if (id) {
					const response = await fetch(`${url}/products/${id}`)
					const product = await response.json()
					setProduct(product)
				} else {
					const response = await fetch(`${url}/products`)
					const products = await response.json()
					setProducts(products)
				}
			} catch (error) {
				console.error("Error fetching products:", error)
				setError("Failed to fetch products")
			} finally {
				setLoading(false)
			}
		}

		fetchProducts()
	}, [url, id])

	return { products, product, error, loading }
}

export default useProducts
