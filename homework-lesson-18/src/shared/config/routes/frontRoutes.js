import { roles } from '../roles'



export const frontRoutes = {
  pages: {
    // НазваСторінки: {
    //   path: 'шлях_у_роутері',
    //   navigationPath: 'шлях_для_програмної_навігації',
    //   meta: {
    //     title: 'заголовок_сторінки',
    //     isInMenu: чи треба у головному мені відповідний пункт,
    //     requireAuth: чи потребує авторизації,
    //     roles: [перелік ролей користувачів, які мають доступ],
    //   },
    // },
    HomePage: {
      path: '',
      navigationPath: '/',
      meta: {
        title: 'homePageRouteTitle',
        isInMenu: true,
        requireAuth: false,
      },
    },
    LoginPage: {
      path: 'login',
      navigationPath: '/login',
      meta: {
        title: 'loginPageTitle',
        isInMenu: false,
        requireAuth: false,
      },
    },
    UsersPage: {
      path: 'users',
      navigationPath: '/users',
      meta: {
        title: 'usersPageTitle',
        isInMenu: true,
        requireAuth: true,
        roles: [roles.admin],
      },
    },
    UserEditPage: {
      path: 'users/edit/:id',
      navigationPath: (id) => `/users/edit/${id ?? ''}`,
      meta: {
        title: 'userEditPageTitle',
        isInMenu: false,
        requireAuth: true,
        roles: [roles.admin],
      },
    },
    ProductsPage: {
      path: 'products',
      navigationPath: '/products',
      meta: {
        title: 'productsPageTitle',
        isInMenu: true,
        requireAuth: false,
      },
    },
    ProductEditPage: {
      path: 'products/edit/:id?',
      navigationPath: (id) => `/products/edit/${id ?? ''}`,
      meta: {
        title: 'productEditPageTitle',
        isInMenu: false,
        requireAuth: true,
        roles: [roles.admin, roles.manager],
      },
    },
    ProductAddPage: {
      path: 'products/add',
      navigationPath: '/products/add',
      meta: {
        title: 'productAddPageTitle',
        isInMenu: false,
        requireAuth: true,
        roles: [roles.admin, roles.manager],
      },
    },
    CartPage: {
      path: 'cart',
      navigationPath: '/cart',
      meta: {
        title: 'cartPageTitle',
        isInMenu: true,
        requireAuth: true,
        roles: [roles.user],
      },
    },
    NotFoundPage: {
      path: '*',
      meta: {
        title: 'NotFoundPageTitle',
        isInMenu: false,
        requireAuth: false,
      },
    },
    ForbiddenPage: {
      path: 'forbidden',
      navigationPath: '/forbidden',
      meta: {
        title: 'ForbiddenPageTitle',
        isInMenu: false,
        requireAuth: false,
      },
    },
  },
}

export function getPagesObjectList() {
  const pagesList = Object.keys(frontRoutes.pages)
  return pagesList.map((page) => frontRoutes.pages[page])
}
