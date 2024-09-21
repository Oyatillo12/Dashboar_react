import React from 'react'
import OverTopCards from '../components/OverTopCards'
import OverMidCards from '../components/OverMidCards'
import UnSolved from '../components/UnSolved'
import OverForm from '../components/OverForm'
import List from '../components/List'

function Overview() {


  const topCardsOver = [
    {
      id: 1,
      title: "Unresolved",
      num: "60",
    },
    {
      id: 2,
      title: "Overdue",
      num: "16",
    },
    {
      id: 3,
      title: "Open",
      num: "43",
    },
    {
      id: 4,
      title: "On hold",
      num: "64",
    }
  ]
  const midCardsOver = [
    {
      id: 1,
      title: "Resolved",
      num: "449",
    },
    {
      id: 2,
      title: "Received",
      num: "426",
    },
    {
      id: 3,
      title: "Average first response time",
      num: "33m",
    },
    {
      id: 4,
      title: "Average response time",
      num: "3h 8m",
    },
    {
      id: 5,
      title: "Resolution within SLA",
      num: "94%",
    }
  ]
  const endCardsOver = [
    {
      id: 1,
      title: "Waiting on Feature Request",
      num: "4238",
    },
    {
      id: 2,
      title: "Awaiting Customer Response",
      num: "1005",
    },
    {
      id: 3,
      title: "Awaiting Developer Fix",
      num: "914",
    },
    {
      id: 4,
      title: "Pending",
      num: "281",
    },
  ]
  return (
    <>
      <div className='flex items-center justify-between mt-[54px] mb-[30px]'>
        {topCardsOver.map(item => <OverTopCards key={item.id} item={item} />)}
      </div>
      <div className='w-full overflow-hidden pl-[32px] mb-[30px] border flex justify-between border-[#DFE0EB] bg-white rounded-[8px]'>
        <div className='mt-8'>
          <h3 className='font-bold text-[19px] tracking-[0.4px] leading-[23px] mb-2 text-[#252733]'>Today’s trends</h3>
          <p className='text-[#9FA2B4] text-[12px] tracking-[0.1px] leading-[16px]'>as of 25 May 2019, 09:41 PM</p>
        </div>
        <div className='flex items-start gap-[32px]'>
          <div className='flex mt-[64px] items-center gap-[56px]'>
            <span className='text-[12px] relative before:absolute before:w-[16px] before:left-[-24px] before:inset-y-0 before:my-auto before:h-[2px] before:bg-[#3751FF] leading-[15px] text-[#9FA2B4] font-semibold'>Today</span>
            <span className='text-[12px] leading-[15px] text-[#9FA2B4] font-semibold relative before:absolute before:w-[16px] before:left-[-24px] before:inset-y-0 before:my-auto before:h-[2px] before:bg-[#DFE0EB]'>Yesterday</span>
          </div>
          <ul>
            {midCardsOver.map(item => <OverMidCards key={item.id} item={item} />)}
          </ul>
        </div>
      </div>
      <div className='flex items-center justify-between'>
        <div className='w-[546px] h-[323px] pt-[32px] border border-[#DFE0EB] bg-white rounded-[8px]'>
          <div className='flex items-center overflow-hidden justify-between px-[32px] mb-2'>
            <h3 className='text-[19px] font-bold text-[#252733] leading-[23px]'>Unresolved tickets</h3>
            <button className='text-[14px] font-semibold text-[#3751FF] leading-[20px]'>View details</button>
          </div>
          <p className='pl-8 text-[12px] leading-[16px] font-semibold text-[#9FA2B4]'>Group: <strong className='text-[#252733] font-normal'>Support</strong></p>
          <ul>
            {endCardsOver.map(item => <UnSolved key={item.id} item={item} />)}
          </ul>
        </div>
        
          <div className='w-[546px] h-[323px] overflow-hidden pt-[32px] border border-[#DFE0EB] bg-white rounded-[8px]'>
            <div className='flex tasks items-center overflow-hidden justify-between px-[32px] mb-2'>
              <h3 className='text-[19px] font-bold text-[#252733] leading-[23px]'>Tasks</h3>
              <button className='text-[14px] font-semibold text-[#3751FF] leading-[20px]'>View all</button>
            </div>
            <p className='pl-8 text-[12px] leading-[16px] font-semibold text-[#9FA2B4]'>Today</p>
            <OverForm />
            <List />
          </div>

      </div>
    </>
  )
}

export default Overview
