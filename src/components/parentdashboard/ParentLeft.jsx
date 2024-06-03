import React from 'react'

import child1 from '../../assets/child1.png'

function ParentLeft() {
  return (
    <div className='w-[75%] px-10'>
      <div className='text-6xl tracking-tighter'>Dashboard</div>

      {/* Children Details */}
      <div className='flex justify-between'>
        <div className='bg-blue-200 p-5 rounded-lg my-5'>
            <div className='flex gap-10'>
                <div>
                    <img src={child1} alt="" className='h-16 w-16 object-cover rounded-xl' />
                </div>
                <div>
                    <p className='text-lg'>Aryan Raj</p>
                    <p>6 years 8 months</p>
                </div>
            </div>
            <div className='flex gap-14 my-5'>
                <div className='max-w-[60px] text-center'>
                    <p className='font-semibold text-lg '>12</p>
                    <p className='leading-4'>Tasks Done</p>
                </div>

                <div className='max-w-[60px] text-center'>
                    <p className='font-semibold text-lg '>5</p>
                    <p className='leading-4'>Games Played</p>
                </div>

                <div className='max-w-[60px] text-center'>
                    <p className='font-semibold text-lg '>8</p>
                    <p className='leading-4'>Stories Listened</p>
                </div>
            </div>
            <div className='flex gap-5'>
                <button className='px-3 py-1 bg-blue-600 text-white rounded-3xl'>Download Report</button>
                <button className='px-3 py-1 bg-blue-600 text-white  rounded-3xl'>View Details</button>
            </div>
        </div>

        <div className='bg-purple-200 p-5 rounded-lg my-5'>
            <div className='flex gap-10'>
                <div>
                    <img src={child1} alt="" className='h-16 w-16 object-cover rounded-xl' />
                </div>
                <div>
                    <p className='text-lg'>Aryan Raj</p>
                    <p>6 years 8 months</p>
                </div>
            </div>
            <div className='flex gap-14 my-5'>
                <div className='max-w-[60px] text-center'>
                    <p className='font-semibold text-lg '>12</p>
                    <p className='leading-4'>Tasks Done</p>
                </div>

                <div className='max-w-[60px] text-center'>
                    <p className='font-semibold text-lg '>5</p>
                    <p className='leading-4'>Games Played</p>
                </div>

                <div className='max-w-[60px] text-center'>
                    <p className='font-semibold text-lg '>8</p>
                    <p className='leading-4'>Stories Listened</p>
                </div>
            </div>
            <div className='flex gap-5'>
                <button className='px-3 bg-purple-600 text-white font-medium rounded-3xl'>Download Report</button>
                <button className='px-3 py-1 bg-purple-600 text-white  rounded-3xl'>View Details</button>
            </div>
        </div>

        <div className='bg-violet-200 p-5 rounded-lg my-5'>
            <div className='flex gap-10'>
                <div>
                    <img src={child1} alt="" className='h-16 w-16 object-cover rounded-xl' />
                </div>
                <div>
                    <p className='text-lg'>Aryan Raj</p>
                    <p>6 years 8 months</p>
                </div>
            </div>
            <div className='flex gap-14 my-5'>
                <div className='max-w-[60px] text-center'>
                    <p className='font-semibold text-lg '>12</p>
                    <p className='leading-4'>Tasks Done</p>
                </div>

                <div className='max-w-[60px] text-center'>
                    <p className='font-semibold text-lg '>5</p>
                    <p className='leading-4'>Games Played</p>
                </div>

                <div className='max-w-[60px] text-center'>
                    <p className='font-semibold text-lg '>8</p>
                    <p className='leading-4'>Stories Listened</p>
                </div>
            </div>
            <div className='flex gap-5'>
                <button className='px-3 bg-purple-600 text-white font-medium rounded-3xl'>Download Report</button>
                <button className='px-3 py-1 bg-purple-600 text-white  rounded-3xl'>View Details</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ParentLeft
