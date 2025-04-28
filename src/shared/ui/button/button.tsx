import { Slot } from '@radix-ui/react-slot'
import { forwardRef } from 'react'

import { cn } from '@shared/lib/css'

import { buttonVariants } from './button.variants'
import type { ButtonProps } from './buttons.types'

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'

    return (
      <Comp
        ref={ref}
        data-slot="button"
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      />
    )
  },
)

export default Button
