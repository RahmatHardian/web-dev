import { DesignCategory } from '@types/design'
import { designCategories } from '@data'
import { clsx } from 'clsx'

interface DesignFilterProps {
  activeCategory: DesignCategory | 'all'
  onFilterChange: (category: DesignCategory | 'all') => void
}

export const DesignFilter = ({
  activeCategory,
  onFilterChange,
}: DesignFilterProps) => {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      {designCategories.map((category) => (
        <button
          key={category.id}
          onClick={() => onFilterChange(category.id as DesignCategory | 'all')}
          className={clsx(
            'rounded-lg px-5 py-2.5 text-sm font-medium transition-all',
            activeCategory === category.id
              ? 'bg-primary-500 text-white shadow-md'
              : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
          )}
        >
          {category.label}
          {category.count > 0 && (
            <span className="ml-2 opacity-70">({category.count})</span>
          )}
        </button>
      ))}
    </div>
  )
}
