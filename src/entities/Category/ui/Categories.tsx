import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/shared/ui/select'
import { useGetCategories } from '../model/hooks/useGetCategories'
import { memo, useCallback, useMemo } from 'react'

interface Props {
  onChange: (value: string) => void
}

export const Categories = memo(({ onChange }: Props) => {
  const { categories, isLoading } = useGetCategories()

  const items = useMemo(() => {
    return (
      <>
        {categories?.map(({ strCategory }) => (
          <SelectItem value={strCategory} key={strCategory}>
            {strCategory}
          </SelectItem>
        ))}
      </>
    )
  }, [isLoading])

  const onChangeHandler = useCallback(
    (value: string) => {
      onChange(value)
    },
    [onChange],
  )

  if (isLoading) {
    return 'loading...'
  }

  return (
    <Select onValueChange={onChangeHandler} defaultValue="All">
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Category" />
      </SelectTrigger>
      <SelectContent>{items}</SelectContent>
    </Select>
  )
})
