// Це маршрути фронтенду
// Обєкт з записаними назвами маршрутів щоб не писати посилання вручну всюди
// Потім пропищеш ті що нам нада
export default {
    navigate: {
        home: `/`,
        shop: '/shop',
        rules: '/rules',
        contacts: '/contacts',
        // getProductDetail: (id) => `/product/${id}`,
        // addProduct: '/product/add',
        // getProductEdit: (id) => `/product/${id}/edit`,
    },
}
