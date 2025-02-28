import { Dispatch, SetStateAction } from 'react'

interface CategoryFilterProps {
  categories: string[]
  selectedFilter: string
  setSelectedFilter: Dispatch<SetStateAction<string>>
}

export const CategoryFilter = ({ categories, selectedFilter, setSelectedFilter }: CategoryFilterProps) => {
  return (
    <div className='hidden sm:flex flex-wrap items-center justify-center gap-2'>
      {categories.map((filter) => (
        <button
          key={filter}
          type='button'
          onClick={() => setSelectedFilter(filter)}
          className={`px-5 py-1.5 cursor-pointer rounded-full text-sm border border-background-typography/25 hover:border-palin hover:text-palin leading-tight font-light ${selectedFilter === filter ? 'text-palin border-palin font-normal' : 'text-background-typography'}`}>
          {filter}
        </button>
      ))}
    </div>
  )
}
