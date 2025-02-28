import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Minus, Plus } from '@phosphor-icons/react'

interface DisclosureFaqProps {
  question: string
  answer: string
}

export const DisclosureFaq = ({ question, answer }: DisclosureFaqProps) => {
  return (
    <Disclosure as='div' className='py-6 first:pt-0 last:pb-0'>
      {({ open }) => (
        <>
          <dt>
            <DisclosureButton className='group flex w-full items-start justify-between text-left text-foreground-typography'>
              <span className='text-base md:text-lg leading-relaxed tracking-wide font-light pr-16'>{question}</span>
              <span className='flex h-7 items-center text-palin'>
                <Plus aria-hidden='true' className={`size-4 transition ${open ? 'hidden' : 'block'}`} weight='duotone' />
                <Minus aria-hidden='true' className={`size-4 transition ${open ? 'block' : 'hidden'}`} />
              </span>
            </DisclosureButton>
          </dt>
          <DisclosurePanel as='dd' className='mt-4 pr-16'>
            <p className='text-sm md:text-base font-light leading-relaxed tracking-wide text-foreground-typography/75'>
              {answer}
            </p>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  )
}
