import React from 'react'
import NotImg from '../assets/images/notfound.png'

function NorFound() {
    return (
        <div className='mx-auto mt-[80px]'>
            <img className='mx-auto' src={NotImg} alt="not founded img" width={300} />
            <h2 className='text-2xl mt-5 text-center'>This not the page you're looking for</h2>
        </div>
    )
}

export default NorFound
