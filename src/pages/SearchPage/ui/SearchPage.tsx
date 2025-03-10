import { Categories } from '@/entities/Category'
import { ChangeEvent, useCallback, useMemo, useState } from 'react'
import debounce from 'lodash.debounce'
import { Input } from '@/shared/ui/input'
import { RecipeList } from '@/features/RecipeList'
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectValue,
} from '@/shared/ui/select'
import { ProductsSortPerPage } from '@/shared/const'
import { SelectItem } from '@/shared/ui/select'
import { PaginationProducts } from '@/widgets/PaginationProducts'
import { useGetRecipes } from '@/features/RecipeList/model/hooks/useGetRecipes'

const SearchPage = () => {
  const [currentCategory, setCurrentCategory] = useState<string>('All')
  const [search, setSearch] = useState('')
  const [applaiedSearch, setApplaiedSearch] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState<ProductsSortPerPage>(
    ProductsSortPerPage.ALL,
  )
  const [totalPages, setTotalPages] = useState(1)
  const { recipes, isLoading } = useGetRecipes(
    applaiedSearch,
    currentCategory,
    itemsPerPage,
  )

  const onChangeCategoryHandler = (value: string) => {
    setCurrentCategory(value)
    setCurrentPage(1)
  }

  const onChangeItemsPerHandler = (value: ProductsSortPerPage) => {
    setCurrentPage(1)
    setItemsPerPage(value)
  }

  const debouncedSearch = useCallback(debounce(setApplaiedSearch, 500), [])

  const onChangeSearchHandler = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setSearch(e.target.value)
      debouncedSearch(e.target.value)
    },
    [],
  )

  const sortByCountItems = useMemo(() => {
    return (
      <>
        {Object.values(ProductsSortPerPage).map(key => (
          <SelectItem value={key} key={key}>
            {key}
          </SelectItem>
        ))}
      </>
    )
  }, [])

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  const currentRecipes = useMemo(() => {
    if (itemsPerPage !== ProductsSortPerPage.ALL && recipes.length !== 0) {
      const startIndex = (currentPage - 1) * +itemsPerPage

      setTotalPages(Math.ceil(recipes.length / +itemsPerPage))
      return recipes.slice(startIndex, startIndex + +itemsPerPage)
    } else {
      setTotalPages(1)
    }
  }, [recipes, currentPage])

  return (
    <div className="flex flex-col gap-y-3">
      <Input
        value={search}
        onChange={onChangeSearchHandler}
        placeholder="Search..."
      />
      <div className="flex gap-2">
        <Categories onChange={onChangeCategoryHandler} />

        <Select
          onValueChange={onChangeItemsPerHandler}
          defaultValue={itemsPerPage}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Per page" />
          </SelectTrigger>
          <SelectContent>{sortByCountItems}</SelectContent>
        </Select>
      </div>

      <RecipeList recipes={currentRecipes ?? recipes} isLoading={isLoading} />

      {totalPages > 1 && (
        <PaginationProducts
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  )
}

export default SearchPage
