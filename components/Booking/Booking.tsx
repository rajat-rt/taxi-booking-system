import React from 'react'
import AutoCompleteAddress from './AutoCompleteAddress'

const Booking = () => {
  return (
    <div className='mx-2' >
      <h2 className='text-[24px] font-semibold'>Booking</h2>
      <div className='border-[1px] p-4 rounded-[6px]' style={{height: `calc(100vh - 180px)`}}>
        <AutoCompleteAddress/>
      </div>
    </div>
  )
}

export default Booking
