import Booking from '@/components/Booking/Booking'
import Image from 'next/image'

export default function Home() {
  return (
    <div >
      <div className='grid grid-cols-1 md:grid-cols-3'>
        <div className='bg-blue-50'>
          <Booking></Booking>
        </div>
        <div className='col-span-2  bg-red-50'>Map</div>
      </div>
    </div>
  )
}
