import { useParams, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/shared/ui/card'
import { Skeleton } from '@/shared/ui/skeleton'
import { useGetRecipeById } from '@/features/RecipeList'
import { RoutePaths } from '@/shared/config/routeConfig'

const RecipePage = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const { recipe, isLoading } = useGetRecipeById(id ?? '')

  useEffect(() => {
    if (recipe === null) {
      navigate(`${RoutePaths.not_found}`)
    }
  }, [recipe, navigate])

  if (isLoading) {
    return <Skeleton className="w-full h-[400px]" />
  }

  if (!recipe) {
    return <p>Recipe not found. Redirecting...</p>
  }

  const ingredients = Object.keys(recipe)
    .filter(
      key =>
        key.startsWith('strIngredient') && recipe[key as keyof typeof recipe],
    )
    .map((key, index) => {
      const ingredient = recipe[key as keyof typeof recipe]
      const measure = recipe[`strMeasure${index + 1}` as keyof typeof recipe]
      return { ingredient, measure }
    })

  return (
    <Card className="max-w-3xl mx-auto mt-10">
      <CardHeader>
        <CardTitle>{recipe.strMeal}</CardTitle>
      </CardHeader>
      <CardContent>
        {recipe.strMealThumb && (
          <img
            src={recipe.strMealThumb}
            alt={recipe.strMeal}
            className="w-full h-auto rounded-lg mb-4"
          />
        )}
        <p>
          <strong>Category:</strong> {recipe.strCategory}
        </p>
        <p>
          <strong>Area:</strong> {recipe.strArea}
        </p>
        <p>
          <strong>Instructions:</strong> {recipe.strInstructions}
        </p>
        <h3 className="mt-6 text-xl font-semibold">Ingredients:</h3>
        <ul>
          {ingredients.map((item, index) => (
            <li key={index}>
              <strong>{item.ingredient}:</strong> {item.measure}
            </li>
          ))}
        </ul>
        {recipe.strYoutube && (
          <div className="mt-4">
            <a
              href={recipe.strYoutube}
              target="_blank"
              rel="noopener noreferrer">
              Watch video tutorial
            </a>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

export default RecipePage
