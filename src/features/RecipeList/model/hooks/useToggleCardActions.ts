import { useLocalStorage } from '@/shared/hooks/useLocalStorage'
import { useCallback } from 'react'

type TypeReturn = (itemId: string) => void

export const useToggleCardActions = (): TypeReturn[] => {
  const [favoriteLocalStorage, setFavoriteLocalStorage] = useLocalStorage<
    string[]
  >('favorites', [])

  const toggleFavorite = useCallback(
    (itemId: string) => {
      const curerntFavoriteLocalStorage = [...favoriteLocalStorage]

      if (curerntFavoriteLocalStorage.includes(itemId)) {
        setFavoriteLocalStorage(
          curerntFavoriteLocalStorage.filter(item => item !== itemId),
        )
      } else {
        setFavoriteLocalStorage([...curerntFavoriteLocalStorage, itemId])
      }
    },
    [favoriteLocalStorage, setFavoriteLocalStorage],
  )

  return [toggleFavorite]
}
