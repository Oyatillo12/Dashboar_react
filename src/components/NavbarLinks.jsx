
import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { Context } from '../context/Context'


function NavbarLinks({path,icon,title}) {

  const {setPath} = useContext(Context)

  return (
    <NavLink onClick={() => setPath(title)} to={path} className='flex items-center relative py-[18px] space-x-6 pl-8 text-[#A4A6B3]'>
        {icon}
        <span className={'font-normal leading-5 text-[16px] '} >{title}</span>
    </NavLink>
  )
}

export default NavbarLinks
