import { IRecipeWithFavorite, RecipeCard } from '@/entities/Recipe'
import { useToggleCardActions } from '../model/hooks/useToggleCardActions'
import { memo } from 'react'

interface Props {
  recipes: IRecipeWithFavorite[]
  isLoading: boolean
}

export const RecipeList = memo(({ recipes, isLoading }: Props) => {
  const [toggleFavorite] = useToggleCardActions()

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (recipes.length === 0) {
    return <p>No data found</p>
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 justify-between">
      {recipes.map(recipe => (
        <RecipeCard
          key={recipe.idMeal}
          recipe={recipe}
          toggleFavorite={toggleFavorite}
          favorite={recipe.favorite}
        />
      ))}
    </div>
  )
})
