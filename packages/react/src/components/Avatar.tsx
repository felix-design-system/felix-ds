import { User } from 'phosphor-react'
import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

import * as PrimitiveAvatar from '@radix-ui/react-avatar'

interface AvatarImageProps
  extends ComponentProps<typeof PrimitiveAvatar.Image> {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
}

type AvatarFallbackProps = ComponentProps<typeof PrimitiveAvatar.Fallback>

const AvatarRoot = ({ children, size = 'md' }: AvatarImageProps) => {
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
      )}
    >
      {children}
    </PrimitiveAvatar.Root>
  )
}

const AvatarImage = ({ className, ...rest }: AvatarImageProps) => {
  return (
    <PrimitiveAvatar.Image
      className={twMerge('w-full h-full object-cover rounded-full', className)}
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

export function Avatar(props: AvatarImageProps) {
  const iconSizes = {
    xs: 18,
    sm: 26,
    md: 32,
    lg: 36,
    xl: 60,
  }

  return (
    <AvatarRoot size={props.size}>
      <AvatarImage {...props} />
      <AvatarFallback delayMs={600}>
        <User size={iconSizes[props.size ?? 'md']} />
      </AvatarFallback>
    </AvatarRoot>
  )
}

Avatar.displayName = 'Avatar'
