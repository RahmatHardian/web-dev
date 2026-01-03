import { Link } from 'react-router-dom'
import { Eye } from 'lucide-react'
import { LazyImage } from '../common'
import { Badge, Card } from '../ui'
import type { Design } from '../../types/design'

interface DesignCardProps {
  design: Design
  onPreview?: (designId: string) => void
}

export const DesignCard = ({ design, onPreview }: DesignCardProps) => {
  const handleClick = () => {
    if (!design.previewUrl) {
      onPreview?.(design.id)
    }
  }

  const CardContent = (
    <Card
      padding="none"
      variant="glass"
      hover
      onClick={handleClick}
      className="overflow-hidden card-hover relative group"
    >
      {/* Preview badge */}
      {design.previewUrl && (
        <div className="absolute top-3 right-3 z-10">
          <Badge
            variant="primary"
            size="sm"
            className="bg-primary text-white flex items-center gap-1 shadow-md"
          >
            <Eye className="w-3 h-3" />
            Preview
          </Badge>
        </div>
      )}

      <LazyImage
        src={design.thumbnail}
        alt={design.title}
        aspectRatio="3/4"
      />

      {/* Hover overlay for preview */}
      {design.previewUrl && (
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
          <span className="text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2">
            <Eye className="w-5 h-5" />
            Lihat Preview
          </span>
        </div>
      )}

      <div className="p-4">
        <div className="mb-2 flex items-center justify-between">
          <h3 className="font-semibold text-accent">{design.title}</h3>
          <Badge variant="primary" size="sm" className="bg-secondary text-white">
            {design.category}
          </Badge>
        </div>
        {design.tags && (
          <div className="flex flex-wrap gap-1">
            {design.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-xs text-text-gray"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </Card>
  )

  // Wrap in Link if previewUrl exists
  if (design.previewUrl) {
    return (
      <Link to={design.previewUrl} className="block">
        {CardContent}
      </Link>
    )
  }

  return CardContent
}
