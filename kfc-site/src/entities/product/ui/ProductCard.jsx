import { useTranslation } from 'react-i18next'

export default function ProductCard({ product, children, styles }) {
  const { t } = useTranslation()
  return (
    <article className={styles.products__item}>
      <div className={styles.products__imgWrap}>
        <div className={styles.products__background}>
          {product.image && (
            <img className={styles.products__productImage} src={product.image} alt={product.name}
              width="286" height="190"/>)}
        </div>
      </div>
      <div className={styles.products__infoZone}>
        <h3 className={styles.products__title}>{product.name}</h3>
        <p style={{ fontSize: '11px' }}>{product.description}</p>
        <div className={styles.products__priceLikeWrap}>
          <p style={{ marginTop: 'auto' }}> <strong>{product.price}</strong> {t("uah")}</p>
          <p className={styles.products__likesCount}><span>👍{product.likesCount}</span><span>👎{product.dislikesCount}</span></p>
        </div>
        {children}
      </div>
    </article>
  );
}
