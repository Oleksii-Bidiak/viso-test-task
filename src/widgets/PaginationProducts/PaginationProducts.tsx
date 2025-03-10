import { Button } from '@/shared/ui/button'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { FC, useEffect, useState } from 'react'

interface Props {
  className?: string
  totalPages: number
  currentPage: number
  onPageChange: (page: number) => void
}

export const PaginationProducts: FC<Props> = ({
  onPageChange,
  totalPages,
  currentPage,
}) => {
  const [maxVisiblePages, setMaxVisiblePages] = useState(5)
  const [isSmallScreen, setIsSmallScreen] = useState(false)

  useEffect(() => {
    const updateMaxVisiblePages = () => {
      const width = window.innerWidth

      if (width < 400) {
        setIsSmallScreen(true)
        setMaxVisiblePages(3)
      } else if (width < 640) {
        setIsSmallScreen(false)
        setMaxVisiblePages(5)
      } else if (width < 1000) {
        setIsSmallScreen(false)
        setMaxVisiblePages(8)
      } else {
        setIsSmallScreen(false)
        setMaxVisiblePages(18)
      }
    }

    updateMaxVisiblePages()
    window.addEventListener('resize', updateMaxVisiblePages)

    return () => {
      window.removeEventListener('resize', updateMaxVisiblePages)
    }
  }, [])

  const getPaginationRange = () => {
    const totalNumbers = maxVisiblePages
    const halfTotalNumbers = Math.floor(totalNumbers / 2)

    let startPage = Math.max(2, currentPage - halfTotalNumbers)
    let endPage = Math.min(totalPages - 1, currentPage + halfTotalNumbers)

    if (isSmallScreen) {
      startPage = Math.max(2, currentPage - 1)
      endPage = Math.min(totalPages - 1, currentPage + 1)
    }

    if (endPage - startPage + 1 < totalNumbers && startPage > 2) {
      startPage = Math.max(2, endPage - totalNumbers + 1)
    }

    if (endPage - startPage + 1 < totalNumbers && endPage < totalPages - 1) {
      endPage = Math.min(totalPages - 1, startPage + totalNumbers - 1)
    }

    return Array.from(
      { length: endPage - startPage + 1 },
      (_, i) => startPage + i,
    )
  }

  const paginationRange = getPaginationRange()

  const onClickHandler = (item: number) => {
    if (item >= 1 && item <= totalPages) {
      onPageChange(item)
    }
  }

  return (
    <div className={`flex justify-center space-x-4 py-6 `}>
      <Button
        className="cursor-pointer"
        onClick={() => onClickHandler(currentPage - 1)}
        disabled={currentPage === 1}>
        {<ArrowLeft />}
      </Button>

      <div className="flex space-x-2">
        <Button
          className="cursor-pointer"
          variant={currentPage === 1 ? 'outline' : 'default'}
          onClick={() => onClickHandler(1)}>
          {1}
        </Button>

        {paginationRange[0] > 2 && !isSmallScreen && (
          <Button disabled>{'...'}</Button>
        )}

        {paginationRange.map(item => (
          <Button
            className="cursor-pointer"
            variant={currentPage === item ? 'outline' : 'default'}
            key={item}
            onClick={() => onClickHandler(item)}>
            {item}
          </Button>
        ))}

        {paginationRange[paginationRange.length - 1] < totalPages - 1 &&
          !isSmallScreen && <Button disabled>{'...'}</Button>}

        {totalPages > 1 && (
          <Button
            className="cursor-pointer"
            variant={currentPage === totalPages ? 'outline' : 'default'}
            onClick={() => onClickHandler(totalPages)}>
            {totalPages}
          </Button>
        )}
      </div>

      <Button
        className="cursor-pointer"
        onClick={() => onClickHandler(currentPage + 1)}
        disabled={currentPage === totalPages}>
        <ArrowRight />
      </Button>
    </div>
  )
}
