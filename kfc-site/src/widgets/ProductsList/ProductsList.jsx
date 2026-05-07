import { useGetAllProductsQuery } from '@/entities/product/api/productApi'
import { ProductCardWithActions } from '../ProductCardWithActions'
import { productTypes } from '@/shared/config/productTypes'
import { useTranslation } from 'react-i18next'
import { useEffect, useState } from 'react'
import clsx from "clsx";


export default function ProductsList({ user, role, styles }) {
  const { t } = useTranslation()
  const { data: products = [], isLoading } = useGetAllProductsQuery()
  const userId = user?.id

  const [search, setSearch] = useState("")
  const [activeType, setActiveType] = useState(null)
  const [onlyFavorites, setOnlyFavorites] = useState(false)
  const [favoritesFirst, setFavoritesFirst] = useState(false)

  const TYPE_ORDER = Object.values(productTypes)

  const finalProducts = [...products]
    // 👉 2. фільтри
    .filter((p) =>
      p.name.toLowerCase().includes(search.toLowerCase())
    )
    .filter((p) =>
      activeType ? p.type === activeType : true
    )
    .filter((p) =>
      userId && onlyFavorites ? p.isFavorite : true
    )
    // 👉 3. сортування
    .sort((a, b) => {
      // ⭐ favorites зверху (опційно)
      if (userId && favoritesFirst && a.isFavorite !== b.isFavorite) {
        return a.isFavorite ? -1 : 1
      }
      // 📦 групування по type
      return TYPE_ORDER.indexOf(a.type) - TYPE_ORDER.indexOf(b.type)
    })
  
  useEffect(() => {
    if (!userId) {
      setOnlyFavorites(false)
      setFavoritesFirst(false)
    }
  }, [userId])

  if (isLoading)
    return (
      <p>
        {t('loading')}
      </p>
    )

    // Тестувать error boundry
    // if (Math.random() > 0.5) {
    //   let data
    //   data.wrongFunc()
    // }
  
  return (
    <>
      <div className={styles.sort}>
        <div className={styles.sort__inputWrap}>
          <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder={t('search')} />
        </div>
        <div className={styles.sort__typeBtnsWrap}>
          {TYPE_ORDER.map((type) => (
            <button key={type} onClick={() => setActiveType(type)}
              className={clsx(styles.sort__btn,activeType === type && styles["sort__btn--active"])}>
              {t(type)}
            </button>
          ))}
          <button className={clsx(styles.sort__btn, activeType === null && styles["sort__btn--active"])} onClick={() => setActiveType(null)}>{t('all')}</button>
        </div>
        <div className={styles.sort__loveBtnsWrap}>
          {user && role === "user" && (<>
            <button onClick={() => setOnlyFavorites((prev) => !prev)}>
              {onlyFavorites ? t('showAll') : t('onlyFavorite')}
            </button>
            <button onClick={() => setFavoritesFirst((prev) => !prev)}>
              {favoritesFirst ? t('commonOrder') : t('favoriteAll')}
            </button>
          </>
          )}
        </div>
      </div>
      <div className={styles.products__wrapper}>
        {finalProducts.map((p) => (
          <ProductCardWithActions
            key={p.id}
            product={p}
            user={user}
            role={role}
            styles={styles}
          />
        ))}
        </div>
    </>
  )
}
