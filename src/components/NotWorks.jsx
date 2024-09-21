import React from 'react'
import WorkImg from '../assets/images/working.png'

function NotWorks() {
  return (
    <div className='mx-auto mt-[80px]'>
      <h2 className='text-2xl mb-[60px] text-center'>I'm working on it</h2>
      <img className='mx-auto' src={WorkImg} alt="work img" width={400} />
    </div>
  )
}

export default NotWorks
