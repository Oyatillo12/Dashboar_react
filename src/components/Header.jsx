import React, { useContext } from 'react'
import { BellIcon, SearchIcon } from '../assets/images/icon'
import Avatar from '../assets/images/photo.svg'
import { Context } from '../context/Context'

function Header() {
  const {path} = useContext(Context)

  return (
    <div className='flex items-center justify-between'>
        <h2 className='font-bold text-[24px] leading-[30px]'>{path}</h2>
        <div className='flex items-center space-x-[64px] relative after:absolute after:left-[88px] after:h-[80%] after:top-0 after:bottom-0 after:my-auto after:w-[1.5px] after:bg-[#DFE0EB]'>
            <div className='flex items-center space-x-6'>
                <SearchIcon/>
                <BellIcon/>
            </div>
            <div className='flex items-center gap-[14px]'>
                <strong className='text-[14px] leading-5 font-semibold text-[#252733]'>Jones Ferdinand</strong>
                <img src={Avatar} alt="avatar icon"  width={44} height={44}/>
            </div>
        </div>
    </div>
  )
}

export default Header
