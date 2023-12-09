'use client'

import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

import * as PrimitiveAvatar from '@radix-ui/react-avatar'

import { UserIcon } from '../icons/UserIcon'

interface AvatarImageProps
  extends ComponentProps<typeof PrimitiveAvatar.Image> {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  className?: string
}

type AvatarFallbackProps = ComponentProps<typeof PrimitiveAvatar.Fallback>

const AvatarRoot = ({ children, size = 'md', className }: AvatarImageProps) => {
  const avatarSizes = {
    xs: 'w-8 h-8',
    sm: 'w-12 h-12',
    md: 'w-16 h-16',
    lg: 'w-20 h-20',
    xl: 'w-32 h-32',
  }

  return (
    <PrimitiveAvatar.Root
      className={twMerge(
        'rounded-full inline-block overflow-hidden',
        avatarSizes[size],
        className,
      )}
    >
      {children}
    </PrimitiveAvatar.Root>
  )
}

const AvatarImage = ({ ...rest }: AvatarImageProps) => {
  return (
    <PrimitiveAvatar.Image
      className="w-full h-full object-cover rounded-full"
      {...rest}
    />
  )
}

const AvatarFallback = ({ children }: AvatarFallbackProps) => {
  return (
    <PrimitiveAvatar.Fallback className="w-full h-full flex items-center justify-center bg-neutral-300 dark:bg-neutral-400 text-neutral-700 dark:text-neutral-800">
      {children}
    </PrimitiveAvatar.Fallback>
  )
}

export function Avatar({ className, size, ...rest }: AvatarImageProps) {
  const iconSizes = {
    xs: 18,
    sm: 26,
    md: 32,
    lg: 36,
    xl: 60,
  }

  return (
    <AvatarRoot className={className} size={size}>
      <AvatarImage {...rest} />
      <AvatarFallback delayMs={600}>
        <UserIcon size={iconSizes[size ?? 'md']} />
      </AvatarFallback>
    </AvatarRoot>
  )
}

Avatar.displayName = 'Avatar'
