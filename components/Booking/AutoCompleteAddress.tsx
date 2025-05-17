import React from 'react'

const AutoCompleteAddress = () => {
  return (
    <div className=''>
      <div className='flex flex-col'>
        <label className='text-gray-400'>Where From?</label>
        <input className='bg-white m-2 p-1 border-[1px] rounded-md outline-none focus:border-yellow-400' type="text"/>
      </div>
      <div className='flex flex-col mt-3'>
        <label className='text-gray-400'>Where To?</label>
        <input className='bg-white m-2 p-1 border-[1px] rounded-md outline-none focus:border-yellow-400' type="text"/>
      </div>
    </div>
  )
}

export default AutoCompleteAddress
