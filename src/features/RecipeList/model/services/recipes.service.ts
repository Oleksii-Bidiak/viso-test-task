import { IRecipe, IRecipesResponse } from '@/entities/Recipe'
import { $api } from '@/shared/api/api'

class RecipeService {
  async getBySearch(search: string): Promise<IRecipe[] | 'no data found'> {
    const { data } = await $api.get<IRecipesResponse>(`search.php?f=${search}`)

    return data.meals
  }

  async getAllRecipes(): Promise<IRecipe[]> {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
    let allRecipes: IRecipe[] = []

    for (const letter of alphabet) {
      try {
        const meals = await this.getBySearch(letter)

        if (meals !== 'no data found') {
          allRecipes = [...allRecipes, ...meals]
        }
      } catch (error) {
        console.error(`Error fetching recipes for letter "${letter}":`, error)
      }
    }

    return allRecipes
  }

  async getById(id: string): Promise<IRecipe | null> {
    const { data } = await $api.get<IRecipesResponse>(`lookup.php?i=${id}`)

    if (!data.meals) {
      return null
    }

    return data.meals[0]
  }
}

export const recipeService = new RecipeService()
