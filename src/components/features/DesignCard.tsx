import { LazyImage } from '../common'
import { Badge, Card } from '../ui'
import type { Design } from '../../types/design'

interface DesignCardProps {
  design: Design
  onPreview?: (designId: string) => void
}

export const DesignCard = ({ design, onPreview }: DesignCardProps) => {
  return (
    <Card
      padding="none"
      hover
      onClick={() => onPreview?.(design.id)}
      className="overflow-hidden"
    >
      <LazyImage
        src={design.thumbnail}
        alt={design.title}
        aspectRatio="3/4"
      />
      <div className="p-4">
        <div className="mb-2 flex items-center justify-between">
          <h3 className="font-semibold text-gray-900">{design.title}</h3>
          <Badge variant="primary" size="sm">
            {design.category}
          </Badge>
        </div>
        {design.tags && (
          <div className="flex flex-wrap gap-1">
            {design.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-xs text-gray-500"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </Card>
  )
}
