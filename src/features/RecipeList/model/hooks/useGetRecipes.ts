import { useQuery } from '@tanstack/react-query'
import { useMemo } from 'react'
import { recipeService } from '../services/recipes.service'
import { ProductsSortPerPage } from '@/shared/const'
import { modernizationRecipes } from './modernizationRecipes'

export const useGetRecipes = (
  search: string,
  category: string,
  itemsPerPage: ProductsSortPerPage,
) => {
  const { data: allRecipes, isLoading } = useQuery({
    queryKey: ['get all recipes', search],
    queryFn: () =>
      search !== ''
        ? recipeService.getBySearch(search)
        : recipeService.getAllRecipes(),
    staleTime: 1000 * 60 * 30,
  })

  const filteredRecipes = useMemo(() => {
    if (!allRecipes || allRecipes === 'no data found') return []

    const recipesWithFavorites = modernizationRecipes(allRecipes)

    return recipesWithFavorites.filter(
      recipe => category === 'All' || recipe.strCategory === category,
    )
  }, [allRecipes, search, category, itemsPerPage])

  return { recipes: filteredRecipes, isLoading }
}
