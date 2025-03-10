import { IRecipeWithFavorite } from '@/entities/Recipe'
import { RecipeList, useGetRecipesByIds } from '@/features/RecipeList'
import { useLocalStorage } from '@/shared/hooks/useLocalStorage'
import { Button } from '@/shared/ui/button'
import { useMemo } from 'react'

const FavoriteRecipesPage = () => {
  const [favoriteLocalStorage, setFavoriteLocalStorage] = useLocalStorage<
    string[]
  >('favorites', [])
  const recipes = useGetRecipesByIds()

  const combinedIngredients = useMemo(() => {
    if (favoriteLocalStorage.length === 0) {
      return []
    }

    const ingredientMap = new Map<string, string>()

    recipes.forEach(recipe => {
      for (let i = 1; i <= 20; i++) {
        const ingredientKey = `strIngredient${i}` as keyof IRecipeWithFavorite
        const measureKey = `strMeasure${i}` as keyof IRecipeWithFavorite

        const ingredient = recipe?.[ingredientKey]
        const measure = recipe?.[measureKey]

        if (
          typeof ingredient === 'string' &&
          ingredient.trim() &&
          typeof measure === 'string'
        ) {
          const existingMeasure = ingredientMap.get(ingredient) || ''
          ingredientMap.set(ingredient, `${existingMeasure} ${measure}`.trim())
        }
      }
    })

    return Array.from(ingredientMap.entries()).map(
      ([ingredient, measure]) => `${ingredient}: ${measure}`,
    )
  }, [favoriteLocalStorage, recipes])

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Favorite Recipes</h1>
      {favoriteLocalStorage?.length > 0 && (
        <Button
          variant={'destructive'}
          className="mb-4 cursor-pointer"
          onClick={() => setFavoriteLocalStorage([])}>
          Clear All
        </Button>
      )}

      {Array.isArray(recipes) && recipes.length > 0 && (
        <RecipeList
          recipes={favoriteLocalStorage.length > 0 ? recipes : []}
          isLoading={false}
        />
      )}

      {!!combinedIngredients && combinedIngredients?.length > 0 && (
        <div className="mt-8">
          <h2 className="text-xl font-bold mb-2">Combined Ingredients</h2>
          <ul className="list-disc pl-5">
            {combinedIngredients.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default FavoriteRecipesPage
