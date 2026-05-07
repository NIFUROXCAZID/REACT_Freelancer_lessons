import { useDeleteProductMutation } from '@/entities/product/api/productApi'
import { useTranslation } from 'react-i18next'

import trashIcon from "@/assets/img/icons/trash.svg";

export function ProductDeleteButton({ productId, onDeleted, styles }) {
  const { t } = useTranslation()
  const [deleteProduct] = useDeleteProductMutation()
  const handleDelete = async () => {
    await deleteProduct(productId)
    onDeleted && onDeleted()
  }
  return (
    <button className={styles.productActBtn} onClick={handleDelete} title={t('delete')}>
      <img src={trashIcon} width="44" height="44" alt="Delete product"/>
    </button>
  )
}
