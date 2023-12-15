import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'
import { tv } from 'tailwind-variants'

import { Spinner } from './Spinner'

interface ButtonProps extends ComponentProps<'button'> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'destructive'
  size?: 'sm' | 'md' | 'lg'
  loading?: boolean
}

export function Button({
  children,
  className,
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled,
  ...rest
}: ButtonProps) {
  const buttonVariants = (className?: string) =>
    tv({
      base: twMerge(
        `rounded-md font-medium text-center box-border flex border-2
        items-center justify-center gap-2 [&>svg]:w-4 [&>svg]:h-4 transition-colors`,
        className,
      ),
      variants: {
        variant: {
          primary: `bg-primary-600 border-primary-600 text-white hover:bg-primary-700 hover:border-primary-700`,
          secondary: `text-primary-600 hover:bg-primary-50 dark:hover:bg-primary-950
            bg-opacity-75 dark:hover:bg-opacity-50`,
          ghost: `text-primary-600 hover:bg-primary-50 dark:hover:bg-primary-950
            bg-opacity-75 dark:hover:bg-opacity-50 border-transparent`,
          destructive: `bg-danger-600 text-white hover:bg-danger-700 border-danger-600
            hover:border-danger-700`,
        },
        size: {
          sm: 'py-2 px-3 min-w-[100px] text-sm',
          md: 'py-3 px-4 min-w-[120px] text-md',
          lg: 'py-4 px-5 min-w-[150px] text-lg',
        },
        disabled: {
          true: '',
          false: '',
        },
      },
      compoundVariants: [
        {
          variant: 'primary',
          disabled: true,
          class: `bg-neutral-300 dark:bg-neutral-700 dark:text-neutral-400
            hover:bg-neutral-300 dark:hover:db-neutral-700
            border-neutral-300 dark:border-neutral-700 hover:border-neutral-300
            dark:hover:border-neutral-700`,
        },
        {
          variant: 'secondary',
          disabled: true,
          class: `border-neutral-300 text-neutral-400 dark:border-neutral-600
            dark:text-neutral-500 hover:bg-transparent dark:hover:bg-transparent`,
        },
        {
          variant: 'ghost',
          disabled: true,
          class: `text-neutral-400 dark:text-neutral-500 hover:bg-transparent
            dark:hover:bg-transparent`,
        },
        {
          variant: 'destructive',
          disabled: true,
          class: `bg-danger-300 dark:bg-opacity-25 text-neutral-100 dark:text-neutral-400
            hover:bg-danger-300 dark:hover:bg-opacity-25`,
        },
      ],
      defaultVariants: {
        variant: 'primary',
        size: 'md',
      },
    })

  return (
    <button
      {...rest}
      disabled={disabled || loading}
      className={buttonVariants(className)({
        variant,
        size,
        disabled,
      })}
    >
      {loading && (
        <span className="absolute">
          <Spinner
            variant={variant === 'destructive' ? 'destructive' : 'primary'}
          />
        </span>
      )}
      <span className={loading ? 'invisible' : ''}>{children}</span>
    </button>
  )
}

Button.displayName = 'Button'
