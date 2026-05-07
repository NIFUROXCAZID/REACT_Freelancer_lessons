import { roles } from '../roles'

export const frontRoutes = {
  pages: {
    // НазваСторінки: {
    //   file: "HomePage", jsx елемент
    //   path: 'шлях_у_роутері',
    //   navigationPath: 'шлях_для_програмної_навігації',
    //   meta: {
    //     title: 'заголовок_сторінки',
    //     isInMenu: чи треба у головному мені відповідний пункт,
    //     requireAuth: чи потребує авторизації,
    //     roles: [перелік ролей користувачів, які мають доступ],
    //   },
    // },
    // Сторінка ХОУМ
    HomePage: {
      file: "HomePage",
      path: "",
      navigationPath: "/",
      meta: {
        title: "homePageRouteTitle",
        isInMenu: true,
        requireAuth: false,
      },
    },
    // Сторінки як в хедері зліва направо в цілому
    AboutPage: {
      file: "AboutPage",
      path: "about",
      navigationPath: "/about",
      meta: {
        title: "aboutPageTitle",
        isInMenu: true,
        requireAuth: false,
      },
    },
    NewsPage: {
      file: "news/NewsPage",
      path: "news",
      navigationPath: "/news",
      meta: {
        title: "newsPageTitle",
        isInMenu: true,
        requireAuth: false,
      },
    },
    NewsEditPage: {
      file: "news/NewsEditPage",
      path: "news/edit/:id?",
      navigationPath: (id) => `/news/edit/${id ?? ""}`,
      meta: {
        title: "newsEditPageTitle",
        isInMenu: false,
        requireAuth: true,
        roles: [roles.admin, roles.manager],
      },
    },
    ContactsPage: {
      file: "ContactsPage",
      path: "contacts",
      navigationPath: "/contacts",
      meta: {
        title: "contactsPageTitle",
        isInMenu: true,
        requireAuth: false,
      },
    },
    RestaurantsPage: {
      file: "restaurants/RestaurantsPage",
      path: "restaurants",
      navigationPath: "/restaurants",
      meta: {
        title: "restaurantsPageTitle",
        isInMenu: true,
        requireAuth: false,
      },
    },
    ReviewsPage: {
      file: "reviews/ReviewsPage",
      path: "reviews",
      navigationPath: "/reviews",
      meta: {
        title: "reviewsPageTitle",
        isInMenu: true,
        requireAuth: false,
      },
    },
    ReviewsEditPage: {
      file: "reviews/ReviewsEditPage",
      path: "reviews/edit/:id?",
      navigationPath: (id) => `/reviews/edit/${id ?? ""}`,
      meta: {
        title: "reviewsEditPageTitle",
        isInMenu: false,
        requireAuth: true,
        roles: [roles.admin, roles.manager, roles.user],
      },
    },
    ProductsPage: {
      file: "products/ProductsPage",
      path: "products",
      navigationPath: "/products",
      meta: {
        title: "productsPageTitle",
        isInMenu: true,
        requireAuth: false,
      },
    },
    ProductEditPage: {
      file: "products/ProductEditPage",
      path: "products/edit/:id?",
      navigationPath: (id) => `/products/edit/${id ?? ""}`,
      meta: {
        title: "productEditPageTitle",
        isInMenu: false,
        requireAuth: true,
        roles: [roles.admin, roles.manager],
      },
    },
    ProductAddPage: {
      file: "ProductAddPage",
      path: "products/add",
      navigationPath: "/products/add",
      meta: {
        title: "productAddPageTitle",
        isInMenu: false,
        requireAuth: true,
        roles: [roles.admin, roles.manager],
      },
    },
    CartPage: {
      file: "cart/CartPage",
      path: "cart",
      navigationPath: "/cart",
      meta: {
        title: "cartPageTitle",
        isInMenu: true,
        requireAuth: true,
        roles: [roles.user],
      },
    },
    UsersPage: {
      file: "users/UsersPage",
      path: "users",
      navigationPath: "/users",
      meta: {
        title: "usersPageTitle",
        isInMenu: true,
        requireAuth: true,
        roles: [roles.admin],
      },
    },
    UserEditPage: {
      file: "users/UserEditPage",
      path: "users/edit/:id",
      navigationPath: (id) => `/users/edit/${id ?? ""}`,
      meta: {
        title: "userEditPageTitle",
        isInMenu: false,
        requireAuth: true,
        roles: [roles.admin],
      },
    },
    // Сторінки футеру
    PrivacyPage: {
      file: "footer/PrivacyPage",
      path: "privacy-policy",
      navigationPath: "/privacy-policy",
      meta: {
        title: "privacyPageTitle",
        isInMenu: false,
        requireAuth: false,
      },
    },
    TermsPage: {
      file: "footer/TermsPage",
      path: "terms-conditions",
      navigationPath: "/terms-conditions",
      meta: {
        title: "TermsPageTitle",
        isInMenu: false,
        requireAuth: false,
      },
    },
    DeliveryReturnPage: {
      file: "footer/DeliveryReturnPage",
      path: "return-delivery-policy",
      navigationPath: "/return-delivery-policy",
      meta: {
        title: "DeliveryReturnPageTitle",
        isInMenu: false,
        requireAuth: false,
      },
    },
    // Сторінки авторизації реєстрації
    LoginPage: {
      file: "LoginPage",
      path: "login",
      navigationPath: "/login",
      meta: {
        title: "loginPageTitle",
        isInMenu: false,
        requireAuth: false,
      },
    },
    // Сторінки технічні помилки
    NotFoundPage: {
      file: "errorPages/NotFoundPage",
      path: "*",
      meta: {
        title: "NotFoundPageTitle",
        isInMenu: false,
        requireAuth: false,
      },
    },
    ForbiddenPage: {
      file: "errorPages/ForbiddenPage",
      path: "forbidden",
      navigationPath: "/forbidden",
      meta: {
        title: "ForbiddenPageTitle",
        isInMenu: false,
        requireAuth: false,
      },
    },
  },
};

export function getPagesObjectList() {
  const pagesList = Object.keys(frontRoutes.pages)
  return pagesList.map((page) => frontRoutes.pages[page])
}
