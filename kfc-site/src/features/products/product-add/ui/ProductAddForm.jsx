import ProductForm from '@/entities/product/ui/ProductForm'
import { useAddProductMutation } from '@/entities/product/api/productApi'

export function ProductAddForm({ onSuccess, styles }) {
  const [addProduct] = useAddProductMutation()
  const handleSubmit = async ({ name, price, image, description, type, likesCount,
      dislikesCount}) => {
    await addProduct({ name, price, image, description, type, likesCount,
      dislikesCount })
    if (onSuccess) onSuccess()
  }
  return <ProductForm onSubmit={handleSubmit} styles={styles}/>
}
