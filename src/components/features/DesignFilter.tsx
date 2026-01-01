import type { DesignCategory } from '../../types/design'
import { designCategories } from '../../data'
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
            'rounded px-5 py-2.5 text-sm font-semibold transition-all duration-300',
            activeCategory === category.id
              ? 'bg-primary text-white shadow-card'
              : 'bg-white/15 backdrop-blur-sm text-accent hover:bg-white/25 border border-white/20 hover:border-primary'
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
