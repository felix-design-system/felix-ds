import { ComponentProps, ElementRef, forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

import { Text } from './Text'

interface TextInputProps extends ComponentProps<'input'> {
  prefix?: string
  fullWidth?: boolean
  icon?: JSX.Element
  helperText?: string
  error?: boolean
}

interface PrefixProps {
  children: string
}

function Prefix({ children }: PrefixProps) {
  return <div className="text-neutral-500">{children}</div>
}

export const TextInput = forwardRef<ElementRef<'input'>, TextInputProps>(
  (
    { prefix, fullWidth, icon, className, helperText, error, ...props },
    ref,
  ) => {
    return (
      <div className={fullWidth ? 'w-full' : ''}>
        <div
          className={twMerge(
            `flex relative items-baseline bg-neutral-100 dark:bg-neutral-800 rounded-md border-2
        border-neutral-200 dark:border-neutral-700 group
        py-3 focus-within:border-primary-600 dark:focus-within:border-primary-600 dark:text-neutral-200
        fill-neutral-500 focus-within:fill-primary-600
        ${props.disabled && 'opacity-40 cursor-not-allowed'}
         ${icon ? 'pl-1.5 pr-4' : 'px-4'}`,
            className,
            error
              ? 'border-danger-600 dark:border-danger-400 fill-danger-600 dark:fill-danger-400 focus-within:fill-primary-600 dark:focus-within:fill-primary-600'
              : '',
          )}
        >
          {!!icon && (
            <div className="absolute top-0 flex items-center justify-center w-7 h-[100%]">
              {icon}
            </div>
          )}
          {!!prefix && (
            <div className={`flex ${!!icon && 'pl-7'}`}>
              <Prefix>{prefix}</Prefix>
            </div>
          )}
          <input
            ref={ref}
            className={`bg-transparent outline-none disabled:cursor-not-allowed
            placeholder:text-neutral-500 w-full box-border
            ${!!icon && !prefix && 'pl-7'}`}
            disabled={props.disabled}
            {...props}
          />
        </div>
        <Text
          size="xs"
          className={`ml-1 leading-5
            ${
              error
                ? 'text-danger-600 dark:text-danger-400'
                : 'text-neutral-600 dark:text-neutral-400'
            }`}
        >
          {helperText || <>&nbsp;</>}
        </Text>
      </div>
    )
  },
)

TextInput.displayName = 'TextInput'
