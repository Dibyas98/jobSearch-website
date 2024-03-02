import React from 'react'

export default function Banner() {
  return (
    <div className='h-48  flex justify-center items-center relative' >
        <div className='banner h-40 w-11/12 rounded-xl flex justify-center items-center '>
           <h1 className='font-semibold text-4xl text-center text-white'>Hold Your Dream Jobs</h1>
        </div>
        <div className='absolute bottom-0  w-full flex justify-center gap-2'>
                <input type="text" className='w-3/5 h-10 focus:outline-none pl-2 rounded-md box' placeholder='🔎 search your job here' />
                <button className='search-btn'>Search</button>
            </div>
      
    </div>
  )
}
