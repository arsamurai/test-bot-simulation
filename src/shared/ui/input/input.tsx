import { forwardRef } from 'react'

import { cn } from '@shared/lib/css'

import type { InputProps } from './input.types'

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, startIcon, endIcon, ...props }, ref) => {
    return (
      <div className="relative">
        {startIcon && <div className="absolute top-2/4 left-1 -translate-y-2/4">{startIcon}</div>}
        <input
          ref={ref}
          type={type}
          data-slot="input"
          className={cn(
            'border-input file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
            'focus-visible:ring-ring/50 focus-visible:ring-[3px]',
            'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive',
            { 'pl-12': startIcon },
            { 'pr-12': endIcon },
            className,
          )}
          {...props}
        />
        {endIcon && <div className="absolute top-2/4 right-1 -translate-y-2/4">{endIcon}</div>}
      </div>
    )
  },
)

export default Input
