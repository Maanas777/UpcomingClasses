
import React from 'react'
import {SidebarNavProps }from '../../../../types/components/sideNavbar'


const sidebarNav:React.FC<SidebarNavProps> = ({children}) => {
  return (
    <div className="flex flex-col justify-between flex-1 mt-6">
    <nav>{children}</nav>
  </div>
  )
}

export default sidebarNav