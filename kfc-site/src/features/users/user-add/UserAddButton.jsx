import { useState } from 'react'
import { UserEditForm } from '@/features/users'

import { useTranslation } from 'react-i18next'

export function UserAddButton() {
  const { t } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button className='defaultButton' style={{ marginBottom: '20px' }} onClick={() => setIsOpen(true)}>
        {t('addUser')}
      </button>

      {isOpen && (
        <UserEditForm
          onSuccess={() => setIsOpen(false)}
        />
      )}
    </>
  )
}