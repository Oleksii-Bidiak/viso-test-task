import { $api } from '@/shared/api/api'
import { ICategories, ICategory } from '../types'

class CategoryService {
  async getAll(): Promise<ICategory[]> {
    const { data } = await $api.get<ICategories>('list.php?c=list')

    data.meals?.unshift({ strCategory: 'All' })

    return data.meals
  }
}

export const categoryService = new CategoryService()
