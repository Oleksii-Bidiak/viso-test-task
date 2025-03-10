import { IRecipe, IRecipeWithFavorite } from '@/entities/Recipe'

export const modernizationRecipes = (
  recipes: IRecipe[],
): IRecipeWithFavorite[] => {
  try {
    const favoritesLocalStorage = localStorage.getItem('favorites')

    const favorites: string[] | null = favoritesLocalStorage
      ? JSON.parse(favoritesLocalStorage)
      : null

    const newRecipes: IRecipeWithFavorite[] = [...recipes].map(
      (recipe: IRecipe) => {
        return {
          ...recipe,
          favorite: favorites?.includes(recipe.idMeal) ? true : false,
        }
      },
    )

    return newRecipes
  } catch (e) {
    console.error(e)
    throw new Error('Error processing products')
  }
}
