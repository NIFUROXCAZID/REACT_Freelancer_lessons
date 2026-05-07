import ProductForm from '@/entities/product/ui/ProductForm'
import { useUpdateProductMutation } from '@/entities/product/api/productApi'

export function ProductEditForm({ product, onSuccess, styles }) {
  const [updateProduct] = useUpdateProductMutation()
  const handleSubmit = async ({ id, name, price, image, description, type }) => {
    await updateProduct({ id, data: { name, price, image, description, type } })
    if (onSuccess) onSuccess()
  }
  return <ProductForm product={product} onSubmit={handleSubmit} styles={styles}/>
}
