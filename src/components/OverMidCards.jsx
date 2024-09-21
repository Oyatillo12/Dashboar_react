import React from 'react'

function OverMidCards({item}) {
  return (
    <li className='flex flex-col items-center justify-center px-[64px] py-[25.2px] border-[#DFE0EB] border-l-[1px] border-b-[1px]  '>
      <strong className='text-[16px] mb-[6px] tracking-[0.3px] leading-[22px] font-semibold text-[#9FA2B4]'>{item.title}</strong>
      <span className='font-bold text-[24px] tracking-[0.3px] leading-[30px] text-[#252733] '>{item.num}</span>
    </li>
  )
}

export default OverMidCards
