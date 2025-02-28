import { IconProps } from '@phosphor-icons/react'

interface ButtonProps {
  href: string
  action: string
}

interface ContactCardProps {
  icon: React.ComponentType<IconProps>
  title: string
  description: string
  button: ButtonProps
}

export const ContactCard = ({ icon: Icon, title, description, button }: ContactCardProps) => {
  return (
    <article className='group flex flex-col items-start gap-4 p-6 sm:p-8 rounded-2xl shadow-lg shadow-background/5 hover:shadow-xl bg-foreground-typography transition-all'>
      <Icon className='size-6 text-palin/50' weight='duotone' />
      <h3 className='text-lg font-normal text-background-typography'>{title}</h3>
      <p className='font-light leading-relaxed tracking-wide text-background-typography'>
        {description}
      </p>
      <a href={button.href} className='mt-auto text-lg font-light text-palin transition-colors hover:underline'>
        {button.action}
      </a>
    </article>

  )
}
