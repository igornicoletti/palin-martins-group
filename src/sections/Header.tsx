import { headerData } from '@/data'
import { Popover, PopoverButton, PopoverGroup, PopoverPanel } from '@headlessui/react'
import { CaretDown } from '@phosphor-icons/react'

const PopoverMenu = ({ title, items, ariaLabel }: { title: string; items: string[]; ariaLabel: string }) => (
  <Popover>
    <PopoverButton
      className="group inline-flex items-center text-gray-500 hover:text-gray-900 focus:ring-2 focus:ring-indigo-500"
      aria-haspopup="true"
    >
      <span>{title}</span>
      <CaretDown className="ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500" />
    </PopoverButton>
    <PopoverPanel className="absolute inset-x-0 top-full bg-white shadow-lg md:block" aria-labelledby={ariaLabel}>
      <MenuList items={items} />
    </PopoverPanel>
  </Popover>
)

export default function Header() {
  return (
    <Popover className="relative bg-white">
      <div className="relative z-20 max-w-7xl mx-auto flex items-center justify-between px-6 py-5">
        <a href="#" className="flex">
          <span className="sr-only">Palin & Martins</span>
          <img src="/images/palin-martins-white.png" alt="Palin & Martins Logo" className="h-8 w-auto sm:h-10" />
        </a>
        <PopoverGroup as="nav" className="hidden md:flex space-x-10">
          {Object.keys(headerData).map((section) => (
            <PopoverMenu
              key={section}
              title={section.charAt(0).toUpperCase() + section.slice(1)}
              items={headerData[section]}
              ariaLabel={`${section}-menu`}
            />
          ))}
        </PopoverGroup>
      </div>
    </Popover>
  )
}
