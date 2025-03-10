import { useQuery } from '@tanstack/react-query'
import { useMemo } from 'react'
import { recipeService } from '../services/recipes.service'
import { modernizationRecipes } from './modernizationRecipes'

export const useGetRecipeById = (id: string) => {
  const { data, isLoading } = useQuery({
    queryKey: ['get recipe', id],
    queryFn: () => recipeService.getById(id),
  })

  const recipe = data ? modernizationRecipes([data])[0] : data

  return useMemo(() => ({ recipe, isLoading }), [recipe, isLoading])
}
