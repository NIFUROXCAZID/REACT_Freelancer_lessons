import { Link } from 'react-router-dom'

function Shop() {
    return (
        <section className="shop">
            <h2>Список товарів:</h2>
            <ul>
                <Link to="/shop/tv">Телевізори</Link>
                <Link to="/shop/laptops">Ноутбуки</Link>
                <Link to="/shop/phones">Телефони</Link>
                <Link to="/shop/monitors">Монітори</Link>
            </ul>
        </section>
    )
}

export default Shop