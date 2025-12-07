import React from 'react'
import { SidebarTrigger } from '@/components/ui/sidebar'

const TopBar = ({className}) => {
  return (
    <div className={`  w-full  flex justify-center items-center border-b border-[#C2C2C2] py-3 ${className}`}>
      <SidebarTrigger className={"mr-auto pl-10 hidden max-tab:block"}/>
      <img src="../assets/fahamlogo.webp" alt="logo" className='max-md:mr-auto'/>
    </div>
  )
}

export default TopBar