import { Card, CardHeader, CardTitle, CardContent } from '@/shared/ui/card'
import { IRecipeWithFavorite } from '../model/types'
import { useNavigate } from 'react-router-dom'
import { RoutePaths } from '@/shared/config/routeConfig'
import { Heart } from 'lucide-react'
import { Button } from '@/shared/ui/button'
import { memo, MouseEvent, useCallback, useState } from 'react'

interface RecipeCardProps {
  recipe: IRecipeWithFavorite
  toggleFavorite: (itemId: string) => void
  favorite: boolean
}

export const RecipeCard = memo(
  ({ recipe, toggleFavorite, favorite }: RecipeCardProps) => {
    const [isFavorite, setIsFavorite] = useState(favorite)
    const navigate = useNavigate()

    const onToggleFavorite = useCallback(
      (e: MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation()
        setIsFavorite(!isFavorite)
        toggleFavorite(recipe.idMeal)
      },
      [recipe.idMeal, toggleFavorite],
    )

    return (
      <Card
        className="overflow-hidden shadow-lg cursor-pointer"
        onClick={() => navigate(`${RoutePaths.recipe}${recipe.idMeal}`)}>
        <img
          src={recipe.strMealThumb}
          alt={recipe.strMeal}
          className="w-full h-[200px] object-cover"
        />
        <CardHeader>
          <CardTitle>{recipe.strMeal}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-700">
            Category: {recipe.strCategory}
          </p>
          <p className="text-sm text-gray-700">Area: {recipe.strArea}</p>
          <Button
            variant="ghost"
            className="top-2 text-red-500 cursor-pointer"
            onClick={onToggleFavorite}>
            {isFavorite ? (
              <Heart className="w-6 h-6 fill-[red]" />
            ) : (
              <Heart className="w-6 h-6" />
            )}
          </Button>
        </CardContent>
      </Card>
    )
  },
)
