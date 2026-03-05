import { useParams } from 'react-router-dom'
import { Link, useNavigate } from 'react-router-dom'
import apiRoutes from '../../api/apiRoutes'
import Loader from '../../components/Loader'
import useFetch from '../../hooks/useFetch'
import ProductItem from './ProductItem'
import frontRoutes from '../../router/frontRoutes'

function ProductsList() {
    const { category } = useParams()
    const { data: products, isLoading, error } = useFetch(apiRoutes.productsList)
    
    // console.log( category );
    // console.log("API ROUTES:", apiRoutes)
    const filteredProducts = products?.filter(
        (item) => item.category === category
    ) || []
    // console.log("URL category:", category)
    // console.log(products);
    // console.log(filteredProducts);
    const navigate = useNavigate()
    function goHome() {
        navigate(frontRoutes.navigate.home)
    }

    return (
        <section className='products'>
            <h2>Список доступних {category}</h2>
            {!!isLoading && <Loader />}
            {!!error && (
                <div style={{ color: 'red' }}>
                    {error.message}
                </div>
            )}
            {filteredProducts.length > 0 && (
                <div className='products__wrapper'>
                    {/* <Link to={frontRoutes.navigate.addProduct}>+ Add product</Link> */}
                    <div className='products__list'>
                        {filteredProducts.map((prod) => (
                            <ProductItem
                                key={prod.id}
                                product={prod}
                            />
                        ))}
                    </div>
                </div>
            )}
            <button className='products__btn-home' onClick={goHome}>На головну</button>
        </section>
    )
}

export default ProductsList
