import { IRecipeWithFavorite } from '@/entities/Recipe'
import { useGetRecipeById } from './useGetRecipeById'
import { useLocalStorage } from '@/shared/hooks/useLocalStorage'

export const useGetRecipesByIds = () => {
  const [favoriteLocalStorage] = useLocalStorage<string[]>('favorites', [])
  const recipes: IRecipeWithFavorite[] = []
  if (favoriteLocalStorage.length === 0) {
    return []
  }

  for (const id of favoriteLocalStorage) {
    const { recipe } = useGetRecipeById(id)
    if (recipe) {
      recipes.push(recipe)
    }
  }

  return recipes
}
