const pages = import.meta.glob('../../pages/**/*.jsx', { eager: false })
import { frontRoutes } from '@/shared/config/routes/frontRoutes'

const pagesMap = Object.fromEntries(
  Object.entries(pages).map(([path, loader]) => {
    const key = path
      .replace('../../pages/', '')
      .replace('.jsx', '')

    return [key, loader]
  })
)

const pagesList = Object.keys(frontRoutes.pages)

export const appRouterRoutes = pagesList.map((page) => ({
  ...frontRoutes.pages[page],
  lazy: async () => {
    const loader = pagesMap[frontRoutes.pages[page].file]

    if (!loader) {
      throw new Error(`Page not found: ${frontRoutes.pages[page].file}`)
    }

    return { Component: (await loader()).default }
  },
}))
