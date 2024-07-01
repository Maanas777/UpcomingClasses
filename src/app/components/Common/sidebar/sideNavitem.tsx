import React from 'react'
import { SidebarNavItemProps } from '@/types/components/sideNavbar'

const sideNavitem:React.FC<SidebarNavItemProps> = ({href,icon,text}) => {
  return (
  
        <div>
          <a
            className="flex items-center px-4 py-2 mt-5 text-gray-800 hover:text-blue-700"
            href={href}
          >
            {icon}
            <span className="mx-4 font-medium text-xs">{text}</span>
          </a>
        </div>
      );
  
}

export default sideNavitem