import React from 'react'
import Child from '../../assets/child.png'
import dailytask1 from '../../assets/dailytask1.jpg'
import dailytask2 from '../../assets/dailytask2.jpg'

// import { Link } from 'react-router-dom';
import { MdTableChart } from "react-icons/md";
import { FaGamepad } from "react-icons/fa";
import { FaBookDead } from "react-icons/fa";
import spiral from "../../assets/Spiral.png";
import spiralLight from "../../assets/SpiralLight.png";

const ChildLeft = () => {
  return (
    <div className='px-10 w-[70%] bg-gray-100'>
      <div className='text-3xl font-bold'>Hi Atul, Welcome 👋</div>

      <div className='bg-red-400 rounded-2xl flex items-center justify-between my-5'>
        <div className='pl-20'>
            <img src={Child} alt="" className='h-80' />
        </div>

        <div className='pr-20'>
            <p className='uppercase w-[440px] text-5xl'>This is your day 1 of something </p>
            <p className='my-5 text-2xl underline'>Go and explore </p>
        </div>
      </div>

      {/* DAILY TASKS */}
      <div className='font-semibold text-2xl mb-5 mt-10'>Your Today's Tasks</div>
      <div className=' flex gap-32 mb-5 '>
        <div className='p-4  rounded-xl  hover:scale-110 transition duration-600 bg-gray-300'>
            <div>
                <img src={dailytask1} alt="" className='h-60 w-52 object-cover rounded-xl' />
            </div>
            <p className='uppercase w-2/3 my-2 font-semibold'>Spot the difference</p>
            <p className='w-52'>Spot the differences between the pictures.</p>
        </div>

        <div className='p-4 bg-gray-300 rounded-xl hover:scale-110 transition duration-600'>
            <div>
                <img src={dailytask2} alt="" className='h-60 w-52 object-cover rounded-xl' />
            </div>
            <p className='uppercase w-2/3 my-2 font-semibold'>Listen story</p>
            <p className='w-52'> Read and listen to a story and answer questions.</p>
        </div>
      </div>

      {/* Explore */}
      <div className='font-semibold text-2xl mb-5 mt-10'>Explore More</div>
      <div>
        <div className="flex gap-20 mb-8">
            <div className="relative w-[25%] rounded-3xl bg-[#d4c3f2] overflow-hidden p-5">
            <div className="p-3 bg-[#e9e3f2] w-[50px] text-center rounded-full mb-6">
                <MdTableChart className="text-2xl " />
            </div>
            <p className=" font-semibold text-2xl mb-4">
            Creative<br></br>
                <span className="italic ">Activities</span>
            </p>
            <p className=" font-medium text-lg">
            Discover enjoyable activities such as coloring, crafting, and
            science.
            </p>
            <img
            src={spiral}
            alt=""
            className="w-40  absolute -top-[50px] -right-16"
            />
            </div>

            <div  className="w-[25%]" >
            <div className="relative rounded-3xl bg-[#664dd4] overflow-hidden p-5">
            <div className="p-3 bg-[#c2b8ec] w-[50px] text-center rounded-full mb-6">
            <FaGamepad className="text-2xl " />
            </div>
            <p className=" font-semibold text-2xl mb-4 text-white">
            Fun<br></br>
            <span className="italic ">Games</span>
            </p>
            <p className=" font-medium text-lg text-white">
            Discover enjoyable activities such as coloring, crafting, and
            science.
            </p>
            <img
            src={spiralLight}
            alt=""
            className="w-40  absolute -top-[50px] -right-16"
            />
        </div>
        </div>

        <div className="w-[25%]">
        <div className="relative  rounded-3xl bg-[#f6d26f] overflow-hidden p-5">
          <div className="p-3 bg-[#e9ddbd] w-[50px] text-center rounded-full mb-6">
            <FaBookDead className="text-2xl " />
          </div>
          <p className=" font-semibold text-2xl mb-4 ">
            Interesting<br></br>
            <span className="italic ">Stories</span>
          </p>
          <p className=" font-medium text-lg ">
            Discover enjoyable activities such as coloring, crafting, and
            science.
          </p>
          <img
            src={spiralLight}
            alt=""
            className="w-40  absolute -top-[50px] -right-16"
            style={{
              filter:
                "brightness(0) saturate(100%) invert(100%) sepia(100%) saturate(0%) hue-rotate(242deg) brightness(102%) contrast(102%)",
            }}
          />
        </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default ChildLeft
