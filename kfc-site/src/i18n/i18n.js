import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import en from './locales/en.json'
import ua from './locales/ua.json'

// Приклад використання
// t("auth.login")
// t("auth.register")
// t("common.save")

// import enCommon from './locales/en/common.json'
// import enForm from './locales/en/form.json'
// import enRoutes from './locales/en/routes.json'
// import enProduct from './locales/en/product.json'
// import enHeaderAndFooter from './locales/en/headerSfooter.json'

// import uaCommon from './locales/ua/common.json'
// import uaForm from './locales/ua/form.json'
// import uaRoutes from './locales/ua/routes.json'
// import uaProduct from './locales/ua/product.json'
// import uaHeaderAndFooter from './locales/ua/headerSfooter.json'

const savedLang = localStorage.getItem('i18nextLng') || 'en'

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    ua: { translation: ua },
    // en: {
    //   translation: {
    //     common: enCommon,
    //     routes: enRoutes,
    //     form: enForm,
    //     products: enProduct,
    //     headerAndFooter: enHeaderAndFooter,
        
    //   }
    // },
    // ua: {
    //   translation: {
    //     common: uaCommon,
    //     routes: uaRoutes,
    //     form: uaForm,
    //     products: uaProduct,
    //     headerAndFooter: uaHeaderAndFooter,
        
    //   }
    // }
  },
  lng: savedLang,
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
  detection: {
    order: ['localStorage', 'navigator'],
    caches: ['localStorage'],
  },
})

export default i18n
