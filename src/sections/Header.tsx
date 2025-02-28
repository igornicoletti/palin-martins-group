import { headerData } from '@/data'
import { Popover, PopoverButton, PopoverGroup, PopoverPanel } from '@headlessui/react'
import { CaretDown, List, X } from '@phosphor-icons/react'
import { useEffect, useState } from 'react'

const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('up')

  useEffect(() => {
    let lastScrollY = window.scrollY

    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setScrollDirection(currentScrollY > lastScrollY ? 'down' : 'up')
      lastScrollY = currentScrollY
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return scrollDirection
}

export const Header = () => {
  const scrollDirection = useScrollDirection()

  return (
    <Popover className={`fixed w-full top-0 bg-background z-10 left-0 shadow transition-transform duration-300 ${scrollDirection === 'down' ? '-translate-y-full' : 'translate-y-0'}`}>
      <div className='relative flex items-center justify-between px-6 py-2 max-w-7xl mx-auto w-full'>
        <a href='#' className='z-50'>
          <span className='sr-only'>Grupo Palin & Martins</span>
          <img alt='Logo' src='/images/palin-martins-white.png' className='h-16 w-auto sm:h-20' />
        </a>
        <div className='-my-2 -mr-2 md:hidden'>
          <PopoverButton className='relative inline-flex items-center justify-center rounded-md p-2 text-foreground-typography hover:text-palin focus:outline-hidden'>
            <span className='absolute -inset-0.5' />
            <span className='sr-only'>Open menu</span>
            <List aria-hidden='true' className='size-6' />
          </PopoverButton>
        </div>
        <div className='hidden md:flex'>
          <PopoverGroup as='nav' className='flex space-x-10'>
            <Popover className='relative'>
              <PopoverButton className='group inline-flex items-center rounded-md text-lg mt-1 uppercase font-light text-foreground-typography hover:text-palin focus:outline-hidden data-open:text-palin'>
                <span>Menu</span>
                <CaretDown aria-hidden='true' className='ml-2 size-6 text-foreground-typography hover:text-palin group-data-open:text-palin group-data-open:group-hover:text-palin' />
              </PopoverButton>
              <PopoverPanel transition className='absolute mt-3 right-0 w-screen max-w-md transform transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in lg:max-w-3xl'>
                <div className='overflow-hidden rounded-2xl shadow-lg'>
                  <div className='relative grid gap-6 bg-backfore px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2'>
                    {headerData.institucional.map((item) => (
                      <a key={item.name} href={item.href} className='-m-3 flex items-start rounded-lg p-2'>
                        <div className='flex shrink-0'>
                          <item.icon aria-hidden='true' className='size-6 text-palin' />
                        </div>
                        <div className='ml-2'>
                          <p className='text-lg font-light text-foreground-typography'>{item.name}</p>
                          <p className='mt-1 text-sm font-light text-foreground-typography/75 max-w-3xs'>{item.description}</p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </PopoverPanel>
            </Popover>
          </PopoverGroup>
        </div>
      </div>
      <PopoverPanel transition className='absolute inset-x-0 top-0 origin-top-right transform p-2 transition data-closed:scale-95 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-100 data-leave:ease-in md:hidden'>
        <div className='divide-y-2 divide-foreground-typography/10 rounded-lg bg-backfore'>
          <div className='px-5 pt-5 pb-6'>
            <div className='flex justify-end'>
              <div className='-my-2 -mr-2 pt-4'>
                <PopoverButton className='relative inline-flex items-center justify-center rounded-md p-2 text-foreground-typography hover:text-palin focus:outline-hidden'>
                  <span className='absolute -inset-0.5' />
                  <span className='sr-only'>Close menu</span>
                  <X aria-hidden='true' className='size-6' />
                </PopoverButton>
              </div>
            </div>
            <div className='mt-16'>
              <nav className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                {headerData.institucional.map((item) => (
                  <a key={item.name} href={item.href} className='-m-3 flex items-center rounded-lg p-3 hover:bg-foreground-typography/10'>
                    <div className='flex shrink-0 items-center justify-center rounded-md text-palin'>
                      <item.icon aria-hidden='true' className='size-6' />
                    </div>
                    <div className='ml-4 text-base font-light text-foreground-typography'>{item.name}</div>
                  </a>
                ))}
              </nav>
            </div>
          </div>
          <div className='px-5 py-6'>
            <div className='w-full flex items-center justify-center gap-8'>
              {headerData.resources.map((item, i) => (
                <a key={i} href={item.href} className='text-base font-medium text-foreground-typography hover:text-palin'>
                  <item.icon aria-hidden='true' className='size-6 text-palin' />
                </a>
              ))}
            </div>
          </div>
        </div>
      </PopoverPanel>
    </Popover>
  )
}
