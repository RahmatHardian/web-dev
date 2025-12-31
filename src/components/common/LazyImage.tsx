import { useState, useEffect, ImgHTMLAttributes } from 'react'
import { clsx } from 'clsx'

interface LazyImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string
  alt: string
  aspectRatio?: '1/1' | '4/3' | '16/9' | '3/4'
}

export const LazyImage = ({
  src,
  alt,
  aspectRatio,
  className,
  ...props
}: LazyImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    const img = new Image()
    img.src = src
    img.onload = () => setIsLoaded(true)
    img.onerror = () => setError(true)
  }, [src])

  const aspectRatioStyles = aspectRatio
    ? {
        '1/1': 'aspect-square',
        '4/3': 'aspect-[4/3]',
        '16/9': 'aspect-video',
        '3/4': 'aspect-[3/4]',
      }[aspectRatio]
    : ''

  return (
    <div
      className={clsx(
        'relative overflow-hidden bg-gray-100',
        aspectRatioStyles,
        className
      )}
    >
      {!isLoaded && !error && (
        <div className="absolute inset-0 skeleton" />
      )}
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-200 text-gray-400">
          <svg
            className="h-12 w-12"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        </div>
      )}
      {isLoaded && !error && (
        <img
          src={src}
          alt={alt}
          className={clsx(
            'h-full w-full object-cover transition-opacity duration-300',
            isLoaded ? 'opacity-100' : 'opacity-0'
          )}
          loading="lazy"
          {...props}
        />
      )}
    </div>
  )
}
