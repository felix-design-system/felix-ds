import { ComponentProps, ElementRef, forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

interface TextInputProps extends ComponentProps<'input'> {
  prefix?: string
  fullWidth?: boolean
  icon?: JSX.Element
}

interface PrefixProps {
  children: string
}

function Prefix({ children }: PrefixProps) {
  return <div className="text-neutral-500">{children}</div>
}

export const TextInput = forwardRef<ElementRef<'input'>, TextInputProps>(
  ({ prefix, fullWidth, icon, className, ...props }, ref) => {
    return (
      <div
        className={twMerge(
          `flex relative items-baseline bg-neutral-100 dark:bg-neutral-800 rounded-md border-2
        border-neutral-200 dark:border-neutral-700 group
        py-3 focus-within:border-primary-600 dark:focus-within:border-primary-600 dark:text-neutral-200
        fill-neutral-500 focus-within:fill-primary-600
        ${props.disabled && 'opacity-40 cursor-not-allowed'}
        ${fullWidth && 'w-full'} ${icon ? 'pl-1.5 pr-4' : 'px-4'}`,
          className,
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
    )
  },
)

TextInput.displayName = 'TextInput'
