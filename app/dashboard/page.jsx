import React from 'react'
import Image from 'next/image'
import ScheduleEmbed from '@/myComponents/sheets/Schedule'

const page = () => {
  return (
    <div className="content-wrapper mx-3">
      <div className='flex bg-[#1D4FCC] gap-8 justify-center items-center text-white rounded-xl px-20 py-10 drop-shadow-md'>
        <img src="../assets/student2.webp" alt="student picture" className='rounded-full border-5 border-[#1F50CC] w-42 h-42 object-cover' />
        <div className="text-container">
          <h1 className='font-semibold text-5xl'>Hello, Anonymous Student!</h1>
          <h2 className='font-semibold text-2xl text-[#D2D2D2]'>Good Evening</h2>
        </div>
      </div>
      <div className='challan-section'>
        <span className='flex justify-between bg-white rounded-xl  px-20 py-3 drop-shadow-md mt-4'>
          <span className="info flex gap-0.5 items-center whitespace-nowrap">
            <p className='w-full'>You have Dues Pending</p>
            <Image height={33} width={33} className='-mt-3' src="/assets/bulb.webp" alt="bulb" />
          </span>
          <button type="button" className='bg-[#28A745] text-white px-5 py-2 rounded-xl'>Generate Fee Chalan</button>
        </span>
      </div>
      <ScheduleEmbed className='mt-4' />
    </div>
  )
}

export default page