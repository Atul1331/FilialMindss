import React from 'react'
import { FaBookDead, FaGamepad } from 'react-icons/fa'
import { MdTableChart } from 'react-icons/md'

import Child from '../../assets/child.png'
import dailytask1 from '../../assets/dailytask1.jpg'
import dailytask2 from '../../assets/dailytask2.jpg'

// import { Link } from 'react-router-dom';

import spiral from '../../assets/Spiral.png'
import spiralLight from '../../assets/SpiralLight.png'

const ChildLeft = () => {
  return (
    <div className="w-[70%] bg-gray-100 px-10">
      <div className="text-3xl font-bold">Hi Atul, Welcome 👋</div>

      <div className="my-5 flex items-center justify-between rounded-2xl bg-red-400">
        <div className="pl-20">
          <img alt="" className="h-80" src={Child} />
        </div>

        <div className="pr-20">
          <p className="w-[440px] text-5xl uppercase">
            This is your day 1 of something{' '}
          </p>
          <p className="my-5 text-2xl underline">Go and explore </p>
        </div>
      </div>

      {/* DAILY TASKS */}
      <div className="mb-5 mt-10 text-2xl font-semibold">
        Your Today's Tasks
      </div>
      <div className=" mb-5 flex gap-32 ">
        <div className="duration-600  rounded-xl  bg-gray-300 p-4 transition hover:scale-110">
          <div>
            <img
              alt=""
              className="h-60 w-52 rounded-xl object-cover"
              src={dailytask1}
            />
          </div>
          <p className="my-2 w-2/3 font-semibold uppercase">
            Spot the difference
          </p>
          <p className="w-52">Spot the differences between the pictures.</p>
        </div>

        <div className="duration-600 rounded-xl bg-gray-300 p-4 transition hover:scale-110">
          <div>
            <img
              alt=""
              className="h-60 w-52 rounded-xl object-cover"
              src={dailytask2}
            />
          </div>
          <p className="my-2 w-2/3 font-semibold uppercase">Listen story</p>
          <p className="w-52">
            {' '}
            Read and listen to a story and answer questions.
          </p>
        </div>
      </div>

      {/* Explore */}
      <div className="mb-5 mt-10 text-2xl font-semibold">Explore More</div>
      <div>
        <div className="mb-8 flex gap-20">
          <div className="relative w-[25%] overflow-hidden rounded-3xl bg-[#d4c3f2] p-5">
            <div className="mb-6 w-[50px] rounded-full bg-[#e9e3f2] p-3 text-center">
              <MdTableChart className="text-2xl " />
            </div>
            <p className=" mb-4 text-2xl font-semibold">
              Creative<br></br>
              <span className="italic ">Activities</span>
            </p>
            <p className=" text-lg font-medium">
              Discover enjoyable activities such as coloring, crafting, and
              science.
            </p>
            <img
              alt=""
              className="absolute  -right-16 -top-[50px] w-40"
              src={spiral}
            />
          </div>

          <div className="w-[25%]">
            <div className="relative overflow-hidden rounded-3xl bg-[#664dd4] p-5">
              <div className="mb-6 w-[50px] rounded-full bg-[#c2b8ec] p-3 text-center">
                <FaGamepad className="text-2xl " />
              </div>
              <p className=" mb-4 text-2xl font-semibold text-white">
                Fun<br></br>
                <span className="italic ">Games</span>
              </p>
              <p className=" text-lg font-medium text-white">
                Discover enjoyable activities such as coloring, crafting, and
                science.
              </p>
              <img
                alt=""
                className="absolute  -right-16 -top-[50px] w-40"
                src={spiralLight}
              />
            </div>
          </div>

          <div className="w-[25%]">
            <div className="relative  overflow-hidden rounded-3xl bg-[#f6d26f] p-5">
              <div className="mb-6 w-[50px] rounded-full bg-[#e9ddbd] p-3 text-center">
                <FaBookDead className="text-2xl " />
              </div>
              <p className=" mb-4 text-2xl font-semibold ">
                Interesting<br></br>
                <span className="italic ">Stories</span>
              </p>
              <p className=" text-lg font-medium ">
                Discover enjoyable activities such as coloring, crafting, and
                science.
              </p>
              <img
                alt=""
                className="absolute  -right-16 -top-[50px] w-40"
                src={spiralLight}
                style={{
                  filter:
                    'brightness(0) saturate(100%) invert(100%) sepia(100%) saturate(0%) hue-rotate(242deg) brightness(102%) contrast(102%)'
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
