import { useQuery } from '@tanstack/react-query'
import { useMemo } from 'react'
import { categoryService } from '@/entities/Category/model/services/categories.service'

export const useGetCategories = () => {
  const { data: categories, isLoading } = useQuery({
    queryKey: ['get categories'],
    queryFn: () => categoryService.getAll(),
    staleTime: Infinity,
  })

  return useMemo(() => ({ categories, isLoading }), [categories, isLoading])
}
