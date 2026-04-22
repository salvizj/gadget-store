import { useCallback, useEffect, useState } from "react"
import type { Product } from "../../../types/types"

const useProduct = (id: string | undefined) => {
  const url = import.meta.env.VITE_URL || "http://localhost:3000"
  const [product, setProduct] = useState<Product | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  const fetchProduct = useCallback(async () => {
    try {
      setLoading(true)
      const response = await fetch(`${url}/products/${id}`)
      const product = await response.json()
      setProduct(product)
    } catch (error) {
      setError("Failed to fetch product")
      throw error
    } finally {
      setLoading(false)
    }
  }, [url, id])

  useEffect(() => {
    if (!id) {
      setError("Product ID is required")
      setLoading(false)
      return
    }
    fetchProduct()
  }, [url, id, fetchProduct])

  return { product, error, loading, fetchProduct }
}

export default useProduct
