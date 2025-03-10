import { FavoriteRecipesPage } from '@/pages/FavoriteRecipesPage'
import { NotFoundPage } from '@/pages/NotFoundPage'
import { RecipePage } from '@/pages/RecipePage'
import { SearchPage } from '@/pages/SearchPage'
import { RouteProps } from 'react-router-dom'

export enum AppRoutes {
  SEARCH = 'search',
  RECIPE = 'recipe',
  FAVORITE_RECIPES = 'favorite_recipes',

  // last
  NOT_FOUND = 'not_found',
}

export const RoutePaths: Record<AppRoutes, string> = {
  [AppRoutes.SEARCH]: '/',
  [AppRoutes.RECIPE]: '/recipe/',
  [AppRoutes.FAVORITE_RECIPES]: '/favorite',

  [AppRoutes.NOT_FOUND]: '*',
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.SEARCH]: {
    path: RoutePaths.search,
    element: <SearchPage />,
  },
  [AppRoutes.RECIPE]: {
    path: `${RoutePaths.recipe}:id`,
    element: <RecipePage />,
  },
  [AppRoutes.FAVORITE_RECIPES]: {
    path: RoutePaths.favorite_recipes,
    element: <FavoriteRecipesPage />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePaths.not_found,
    element: <NotFoundPage />,
  },
}
