import React from 'react'
import Logo from '../assets/images/logo.svg'
import NavbarLinks from './NavbarLinks'
import { OverviewIcon,AgentsIcon,ArticlesIson,ContactsIcon,IdeasIcons,SettingsIcon,SubscriptionIcon, TicketsIcons } from '../assets/images/icon'

function Navbar() {
  const navbraList = [
    {
      id:1,
      title:"Overview",
      icon: <OverviewIcon/>,
      path: "/",
    },
    {
      id:2,
      title:"Tickets",
      icon: <TicketsIcons/>,
      path: "/tickets",
    },
    {
      id:3,
      title:"Ideas",
      icon: <IdeasIcons/>,
      path: "/ideas",
    },
    {
      id:4,
      title:"Contacts",
      icon: <ContactsIcon/>,
      path: "/contacts",
    },
    {
      id:5,
      title:"Agents",
      icon: <AgentsIcon/>,
      path: "/agents",
    },
    {
      id:6,
      title:"Articles",
      icon: <ArticlesIson/>,
      path: "/articles",
    },
    {
      id:7,
      title:"Settings",
      icon: <SettingsIcon/>,
      path: "/settings",
    },
    {
      id:8,
      title:"Subcription",
      icon: <SubscriptionIcon/>,
      path: "/subcription",
    },
  ]
  return (
    <nav className='w-[20%] bg-[#363740] h-[100vh] pt-[37px]'>
        <div className='pl-8 mb-[63px] flex items-center space-x-3'>
            <img src={Logo} alt="logo" width={32} height={32} />
            <span className='text-[19px] leading-[23px] text-[#A4A6B3] opacity-70'>Dashboard Kit</span>
        </div>
        <div>
          {navbraList.map(item => <NavbarLinks key={item.id} icon={item.icon} title={item.title} path={item.path} /> ) }
        </div>
    </nav>
  )
}

export default Navbar
