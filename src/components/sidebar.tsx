import type { SideBarType } from '../types/sidebarTypes'
import { HomeIcon, GlobeAltIcon, CalendarIcon, ClipboardIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'

function SideBar({className}: SideBarType){
    const links = [
        { name: "Estado", href: "/", icon: HomeIcon },
        { name: "Países", href: "/paises", icon: GlobeAltIcon },
        { name: "Datas", href: "/date", icon: CalendarIcon },
        { name: "Formulário", href: "/form", icon: ClipboardIcon }
    ]
    return(
    <aside className={`fixed top-0 left-0 z-40 w-64 h-screen bg-neutral-primary-soft border-r border-default overflow-y-auto transition-transform ${className}`}>
      <div className="px-4 py-6">
        <ul className="space-y-2 font-medium">
          {links.map(link => {
            const Icon = link.icon
            return (
              <li key={link.name}>
                <Link to={link.href} className="flex items-center px-3 py-2 text-body rounded-md hover:bg-neutral-tertiary hover:text-fg-brand transition-colors">
                  <Icon className="w-5 h-5 text-gray-400 group-hover:text-fg-brand" />
                  <span className="ml-3">{link.name}</span>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </aside>
    )
}

export default SideBar