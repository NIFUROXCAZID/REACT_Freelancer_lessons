import { useState } from 'react'
import { roles } from '@/shared/config/roles'
import { useTranslation } from 'react-i18next'

export function UserForm({ initialData = {}, onSubmit, isLoading, error, }) {
  const { t } = useTranslation()
  const [email, setEmail] = useState(initialData?.email || '')
  const [displayName, setDisplayName] = useState(
    initialData?.displayName || ''
  )
  const [role, setRole] = useState(initialData?.role || 'user')

  const isEdit = !!initialData?.id

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit({email, displayName, role,})
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={t('eamil')}
        disabled={isEdit}
        required
      />

      <input
        value={displayName}
        onChange={(e) => setDisplayName(e.target.value)}
        placeholder={t('name')}
        disabled={isEdit}
        required
      />

      <select value={role} onChange={(e) => setRole(e.target.value)}>
        {Object.entries(roles).map(([key, value]) => (
          <option key={key} value={value}>
            {value}
          </option>
        ))}
      </select>

      <button type="submit" disabled={isLoading}>
        {isEdit ? t('save') : t('add')}
      </button>

      {error && (
        <div style={{ color: 'red' }}>
          {error?.data?.message || t('error')}
        </div>
      )}
    </form>
  )
}