import React from 'react'

import { FaPlay } from "react-icons/fa";

import doctor from '../../assets/doctor.jpg'
import dailytask1 from '../../assets/dailytask1.jpg'


const ChildRight = () => {
  return (
    <div className='px-5 w-[30%]'>
      
      {/* APPOINTMENT */}
      <div className='text-xl font-semibold my-2'>Next Appointment</div>
      <div className='w-full px-16 py-8 bg-gray-100 flex gap-16 items-center rounded-lg'>
        <div>
            <img src={doctor} alt="" className='w-24 h-24 object-cover rounded-full' />
            <p className='my-1 font-semibold'>DR. Rajesh Ranjan</p>
        </div>
        <div className='text-center'>
            <div className='uppercase py-2 px-4 bg-blue-500 font-semibold rounded-md text-white'>scheduled</div>
            <p className='my-2'>14th June, 2024</p>
        </div>
      </div>

        {/* STATS */}
        <div className='text-xl font-semibold mt-10 mb-2'>Your Stats</div>
        <div className='w-full px-16 py-8 bg-gray-100 flex gap-16 items-center rounded-lg'>
            <div className='text-center'>
                <p className='text-6xl font-semibold text-violet-500 mb-2'>13</p>
                <p className='font-semibold leading-5'>Activities Done</p>
            </div>

            <div className='text-center'>
                <p className='text-6xl font-semibold text-green-500 mb-2'>4</p>
                <p className='font-semibold leading-5'>Games Played</p>
            </div>

            <div className='text-center'>
                <p className='text-6xl font-semibold text-yellow-500 mb-2'>7</p>
                <p className='font-semibold leading-5'>Stories Listened</p>
            </div>
        </div>

        {/* PAST ACTIVITIES */}
        <div className='text-xl font-semibold mt-10 mb-2'>Latest Activity</div>
        <div className='w-full px-2 py-2 bg-gray-100 rounded-lg '>

            <div className='bg-white flex justify-evenly py-3 my-8'>
                <div>
                    <img src={dailytask1} alt="" className='h-20 object-cover rounded-md' />
                </div>
                <div className='px-2'>
                    <p className='font-medium mb-1'>Spot The Difference</p>
                    <p className='leading-4'>Find all differences between the pictures</p>
                </div>

                <div className='flex items-center '>
                    <div className='p-3 rounded-full bg-gray-300'>
                    <FaPlay />
                </div>
                </div>
                
            </div>

            <div className='bg-white flex justify-evenly my-8'>
                <div>
                    <img src={dailytask1} alt="" className='h-20 object-cover rounded-md' />
                </div>
                <div className='px-2'>
                    <p className='font-medium mb-1'>Spot The Difference</p>
                    <p className='leading-4'>Find all differences between the pictures</p>
                </div>

                <div className='flex items-center '>
                    <div className='p-3 rounded-full bg-gray-300'>
                    <FaPlay />
                </div>
                </div>
                
            </div>

            <div className='bg-white flex justify-evenly my-8'>
                <div>
                    <img src={dailytask1} alt="" className='h-20 object-cover rounded-md' />
                </div>
                <div className='px-2'>
                    <p className='font-medium mb-1'>Spot The Difference</p>
                    <p className='leading-4'>Find all differences between the pictures</p>
                </div>

                <div className='flex items-center '>
                    <div className='p-3 rounded-full bg-gray-300'>
                    <FaPlay />
                </div>
                </div>
                
            </div>

            <div className='bg-white flex justify-evenly my-8'>
                <div>
                    <img src={dailytask1} alt="" className='h-20 object-cover rounded-md' />
                </div>
                <div className='px-2'>
                    <p className='font-medium mb-1'>Spot The Difference</p>
                    <p className='leading-4'>Find all differences between the pictures</p>
                </div>

                <div className='flex items-center '>
                    <div className='p-3 rounded-full bg-gray-300'>
                    <FaPlay />
                </div>
                </div>
                
            </div>

            <div className='bg-white flex justify-evenly my-8'>
                <div>
                    <img src={dailytask1} alt="" className='h-20 object-cover rounded-md' />
                </div>
                <div className='px-2'>
                    <p className='font-medium mb-1'>Spot The Difference</p>
                    <p className='leading-4'>Find all differences between the pictures</p>
                </div>

                <div className='flex items-center '>
                    <div className='p-3 rounded-full bg-gray-300'>
                    <FaPlay />
                </div>
                </div>
                
            </div>

            <div className='bg-white flex justify-evenly my-8'>
                <div>
                    <img src={dailytask1} alt="" className='h-20 object-cover rounded-md' />
                </div>
                <div className='px-2'>
                    <p className='font-medium mb-1'>Spot The Difference</p>
                    <p className='leading-4'>Find all differences between the pictures</p>
                </div>

                <div className='flex items-center '>
                    <div className='p-3 rounded-full bg-gray-300'>
                    <FaPlay />
                </div>
                </div>
                
            </div>

            


        </div>

    </div>
  )
}

export default ChildRight
