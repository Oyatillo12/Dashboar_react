import React from 'react'

function UnSolved({item}) {
  return (
    <li className='flex items-center justify-between px-8 py-5 border-b-[#DFE0EB] border-b-[1px]'>
      <p className='text-[14px] leading-5 font-semibold text-[#252733]'>{item.title}</p>
      <span className='text-[14px] leading-5 font-semibold text-[#9FA2B4]'>{item.num}</span>
    </li>
  )
}

export default UnSolved
