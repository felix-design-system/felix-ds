import { ComponentProps } from 'react'

interface TextAreaProps extends ComponentProps<'textarea'> {
  prefix?: string
  fullWidth?: boolean
}

export function TextArea({ fullWidth, disabled, ...rest }: TextAreaProps) {
  return (
    <textarea
      disabled={disabled}
      className={`flex relative items-baseline bg-neutral-100 dark:bg-neutral-800 rounded-md border-2
        border-neutral-200 dark:border-neutral-700 resize-y min-h-[120px] outline-none
        px-4 py-3 focus:border-primary-600 dark:focus:border-primary-600 dark:text-neutral-200
        ${disabled && 'opacity-40 cursor-not-allowed'} ${
          fullWidth && 'w-full'
        }`}
      {...rest}
    />
  )
}

TextArea.displayName = 'TextArea'
