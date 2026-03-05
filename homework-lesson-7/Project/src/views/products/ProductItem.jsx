import { Link } from 'react-router'
// import frontRoutes from '../../router/frontRoutes'
import { useNavigate } from 'react-router-dom'

function ProductItem({ product }) {
    const navigate = useNavigate()
    return (
        <div className='product'>
            {/* Створює лінк на продукт через отримання його id з frontRoutes */}
            {/* От робить посилання на продукт/detail */}
            {/* <Link to={frontRoutes.navigate.getProductDetail(product.id)}>{product.name}</Link> */}
            <div className='product__img-wrap'>
                <img src={product.imageUrl} alt="Image"/>
            </div>
            <div className='product__info-wrap'>
                <p className='product__name'>{product.name}</p>
                <p className='product__price'>Ціна: {product.price}</p>
                <button className='product__btn-home' onClick={() => navigate(-1)}>Назад</button>
                <button className='product__btn-buy' disabled>Придбати</button>
            </div>
        </div>
    )
}

export default ProductItem