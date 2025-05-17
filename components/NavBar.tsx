import React from 'react'
import Image from 'next/image'
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'

const NavBar = () => {
  return (
    <div className='flex justify-between p-3 px-10 border-b-[1px] shadow-sm'>
      <div className='flex justify-start items-center gap-6'>
        <Image src='/logo.png' alt="company-logo" width={120} height={60}/>  
        <div className='hidden md:flex gap-6'>
          <h2 className='hover:bg-gray-100 p-2 rounded-md cursor-pointer transition-all'>Home</h2>
          <h2 className='hover:bg-gray-100 p-2 rounded-md cursor-pointer transition-all'>About</h2>
          <h2 className='hover:bg-gray-100 p-2 rounded-md cursor-pointer transition-all'>History</h2>
        </div>
      </div>
      <div className='flex gap-6'>
        <SignedOut>
          <SignInButton />
          <SignUpButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div> 
  )
}

export default NavBar
