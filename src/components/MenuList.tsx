// Definindo a interface para o item do menu
export interface MenuItem {
  name: string
  description: string
  href: string
  icon: React.ElementType
}

export interface MenuItems {
  institucional: MenuItem[]
  serviços: MenuItem[]
}

interface MenuListProps {
  items: MenuItem[]
}

export const MenuList = ({ items }: MenuListProps) => {
  return (
    <div className="grid max-w-7xl mx-auto gap-6 p-6 sm:grid-cols-2">
      {items.map((item) => (
        <a key={item.name} href={item.href} className="flex p-3 hover:bg-gray-50 rounded-lg">
          <item.icon className="h-6 w-6 text-indigo-500" />
          <div className="ml-4">
            <p className="text-base font-medium text-gray-900">{item.name}</p>
            <p className="text-sm text-gray-500">{item.description}</p>
          </div>
        </a>
      ))}
    </div>
  )
}
