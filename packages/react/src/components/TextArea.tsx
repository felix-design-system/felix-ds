'use client'

import { ComponentProps, ElementRef, forwardRef, useState } from 'react'

import { Text } from './Text'

interface TextAreaProps extends ComponentProps<'textarea'> {
  prefix?: string
  fullWidth?: boolean
}

export const TextArea = forwardRef<ElementRef<'textarea'>, TextAreaProps>(
  (
    { fullWidth, disabled, minLength, maxLength, value, onChange, ...rest },
    ref,
  ) => {
    const [content, setContent] = useState('')

    return (
      <div className={fullWidth ? 'w-full' : ''}>
        <textarea
          ref={ref}
          disabled={disabled}
          minLength={minLength}
          maxLength={maxLength}
          value={value}
          onChange={e => {
            setContent(e.target.value)
            if (onChange) onChange(e)
          }}
          className={`flex relative items-baseline bg-neutral-100 dark:bg-neutral-800 rounded-md border-2
        border-neutral-200 dark:border-neutral-700 resize-y min-h-[120px] outline-none
        px-4 py-3 focus:border-primary-600 dark:focus:border-primary-600 dark:text-neutral-200
        placeholder:text-neutral-500
        ${disabled && 'opacity-40 cursor-not-allowed'} ${
          fullWidth ? 'w-full' : ''
        }`}
          {...rest}
        />
        {!!maxLength && (
          <Text
            size="sm"
            className="w-full text-right text-neutral-500 dark:text-neutral-500"
          >
            <span
              className={`
              ${
                content.length < (minLength ?? 0) &&
                'text-danger-400 dark:text-danger-700'
              }
            `}
            >
              {content.length}
            </span>
            /{maxLength}
          </Text>
        )}
      </div>
    )
  },
)

TextArea.displayName = 'TextArea'
