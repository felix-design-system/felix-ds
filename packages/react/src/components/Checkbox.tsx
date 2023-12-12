'use client'

import { ComponentProps, ElementRef, forwardRef } from 'react'

import * as PrimitiveCheckbox from '@radix-ui/react-checkbox'

import { CheckIcon } from '../icons/CheckIcon'
import { Text } from './Text'

interface CheckboxProps extends ComponentProps<typeof PrimitiveCheckbox.Root> {
  label?: string
}

export const Checkbox = forwardRef<
  ElementRef<typeof PrimitiveCheckbox.Root>,
  CheckboxProps
>(({ label, ...props }, ref) => {
  return (
    <div className="flex gap-2">
      <PrimitiveCheckbox.Root
        ref={ref}
        className={`flex items-center justify-center box-border w-6 h-6
        rounded-md leading-none fill-white overflow-hidden border-2 border-neutral-200 dark:border-neutral-700
        dark:hover:border-primary-600 hover:border-primary-600
        data-[state=checked]:bg-primary-600 data-[state=checked]:border-primary-600
        dark:data-[state=checked]:bg-primary-600 dark:data-[state=checked]:border-primary-600
        disabled:opacity-40 disabled:cursor-not-allowed hover:disabled:border-neutral-200
        dark:hover:disabled:border-neutral-700 data-[state=checked]:disabled:border-primary-600
        dark:data-[state=checked]:disabled:border-primary-600`}
        {...props}
      >
        <PrimitiveCheckbox.Indicator
          className="text-white w-4 h-4"
          aria-labelledby={`${props.id}-label`}
        >
          <CheckIcon size={16} />
        </PrimitiveCheckbox.Indicator>
      </PrimitiveCheckbox.Root>
      <label
        id={`${props.id}-label`}
        htmlFor={props.id}
        className={`flex gap-2 ${
          props.disabled ? 'cursor-not-allowed' : 'cursor-pointer'
        }`}
      >
        {!!label && (
          <Text
            className={
              props.disabled
                ? 'text-neutral-500 dark:text-neutral-500'
                : 'text-neutral-950 dark:text-neutral-100'
            }
          >
            {label}
          </Text>
        )}
      </label>
    </div>
  )
})

Checkbox.displayName = 'Checkbox'
