import { useTranslation } from 'react-i18next'

import trashIcon from "@/assets/img/icons/trash.svg";

export function UserDeleteButton({ userId, onDeleted, styles }) {
  const { t } = useTranslation()
  const handleDelete = () => {
    const confirmed = window.confirm('Точно видалити користувача?')
    if (!confirmed) return
    onDeleted && onDeleted(userId)
  }
  return (
    <button className={styles.userDeleteBtn} onClick={handleDelete} title={t('deleteUser')}>
      <img src={trashIcon} width="44" height="44" alt="Delete user"/>
    </button>
  )
}
