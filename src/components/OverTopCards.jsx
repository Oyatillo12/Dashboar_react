import React from 'react'

function OverTopCards({item}) {
  return (
    <div className='w-[258px] topcards duration-300 cursor-pointer py-[24px] px-[32px] flex flex-col items-center justify-center border-[1px] border-[#DFE0EB] bg-white rounded-[8px]'>
      <strong className='text-[19px] leading-[23px] font-bold text-[#9FA2B4] mb-3'>{item.title} </strong>
      <span className='text-[#252733] text-[40px] leading-[50px] tracking-[1px]'>{item.num}</span>
    </div>
  )
}

export default OverTopCards
