import { TextareaHTMLAttributes, forwardRef } from 'react'
import { clsx } from 'clsx'

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
  helperText?: string
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, helperText, className, ...props }, ref) => {
    const textareaStyles = clsx(
      'w-full rounded-lg border px-4 py-2.5 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 transition-colors resize-vertical',
      error
        ? 'border-red-300 focus:border-red-500 focus:ring-red-500/20'
        : 'border-gray-300 focus:border-primary-500 focus:ring-primary-500/20',
      props.disabled && 'bg-gray-50 cursor-not-allowed opacity-60',
      className
    )

    return (
      <div className="w-full">
        {label && (
          <label className="mb-1.5 block text-sm font-medium text-gray-700">
            {label}
            {props.required && <span className="ml-1 text-red-500">*</span>}
          </label>
        )}
        <textarea
          ref={ref}
          className={textareaStyles}
          rows={4}
          {...props}
        />
        {error && <p className="mt-1.5 text-sm text-red-600">{error}</p>}
        {helperText && !error && (
          <p className="mt-1.5 text-sm text-gray-500">{helperText}</p>
        )}
      </div>
    )
  }
)

Textarea.displayName = 'Textarea'
