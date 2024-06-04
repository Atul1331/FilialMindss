import React from 'react'
import { FaPlay } from 'react-icons/fa'

import dailytask1 from '../../assets/dailytask1.jpg'
import doctor from '../../assets/doctor.jpg'

const ChildRight = () => {
  return (
    <div className="w-[30%] px-5">
      {/* APPOINTMENT */}
      <div className="my-2 text-xl font-semibold">Next Appointment</div>
      <div className="flex w-full items-center gap-16 rounded-lg bg-gray-100 px-16 py-8">
        <div>
          <img
            alt=""
            className="size-24 rounded-full object-cover"
            src={doctor}
          />
          <p className="my-1 font-semibold">DR. Rajesh Ranjan</p>
        </div>
        <div className="text-center">
          <div className="rounded-md bg-blue-500 px-4 py-2 font-semibold uppercase text-white">
            scheduled
          </div>
          <p className="my-2">14th June, 2024</p>
        </div>
      </div>

      {/* STATS */}
      <div className="mb-2 mt-10 text-xl font-semibold">Your Stats</div>
      <div className="flex w-full items-center gap-16 rounded-lg bg-gray-100 px-16 py-8">
        <div className="text-center">
          <p className="mb-2 text-6xl font-semibold text-violet-500">13</p>
          <p className="font-semibold leading-5">Activities Done</p>
        </div>

        <div className="text-center">
          <p className="mb-2 text-6xl font-semibold text-green-500">4</p>
          <p className="font-semibold leading-5">Games Played</p>
        </div>

        <div className="text-center">
          <p className="mb-2 text-6xl font-semibold text-yellow-500">7</p>
          <p className="font-semibold leading-5">Stories Listened</p>
        </div>
      </div>

      {/* PAST ACTIVITIES */}
      <div className="mb-2 mt-10 text-xl font-semibold">Latest Activity</div>
      <div className="w-full rounded-lg bg-gray-100 p-2 ">
        <div className="my-8 flex justify-evenly bg-white py-3">
          <div>
            <img
              alt=""
              className="h-20 rounded-md object-cover"
              src={dailytask1}
            />
          </div>
          <div className="px-2">
            <p className="mb-1 font-medium">Spot The Difference</p>
            <p className="leading-4">
              Find all differences between the pictures
            </p>
          </div>

          <div className="flex items-center ">
            <div className="rounded-full bg-gray-300 p-3">
              <FaPlay />
            </div>
          </div>
        </div>

        <div className="my-8 flex justify-evenly bg-white">
          <div>
            <img
              alt=""
              className="h-20 rounded-md object-cover"
              src={dailytask1}
            />
          </div>
          <div className="px-2">
            <p className="mb-1 font-medium">Spot The Difference</p>
            <p className="leading-4">
              Find all differences between the pictures
            </p>
          </div>

          <div className="flex items-center ">
            <div className="rounded-full bg-gray-300 p-3">
              <FaPlay />
            </div>
          </div>
        </div>

        <div className="my-8 flex justify-evenly bg-white">
          <div>
            <img
              alt=""
              className="h-20 rounded-md object-cover"
              src={dailytask1}
            />
          </div>
          <div className="px-2">
            <p className="mb-1 font-medium">Spot The Difference</p>
            <p className="leading-4">
              Find all differences between the pictures
            </p>
          </div>

          <div className="flex items-center ">
            <div className="rounded-full bg-gray-300 p-3">
              <FaPlay />
            </div>
          </div>
        </div>

        <div className="my-8 flex justify-evenly bg-white">
          <div>
            <img
              alt=""
              className="h-20 rounded-md object-cover"
              src={dailytask1}
            />
          </div>
          <div className="px-2">
            <p className="mb-1 font-medium">Spot The Difference</p>
            <p className="leading-4">
              Find all differences between the pictures
            </p>
          </div>

          <div className="flex items-center ">
            <div className="rounded-full bg-gray-300 p-3">
              <FaPlay />
            </div>
          </div>
        </div>

        <div className="my-8 flex justify-evenly bg-white">
          <div>
            <img
              alt=""
              className="h-20 rounded-md object-cover"
              src={dailytask1}
            />
          </div>
          <div className="px-2">
            <p className="mb-1 font-medium">Spot The Difference</p>
            <p className="leading-4">
              Find all differences between the pictures
            </p>
          </div>

          <div className="flex items-center ">
            <div className="rounded-full bg-gray-300 p-3">
              <FaPlay />
            </div>
          </div>
        </div>

        <div className="my-8 flex justify-evenly bg-white">
          <div>
            <img
              alt=""
              className="h-20 rounded-md object-cover"
              src={dailytask1}
            />
          </div>
          <div className="px-2">
            <p className="mb-1 font-medium">Spot The Difference</p>
            <p className="leading-4">
              Find all differences between the pictures
            </p>
          </div>

          <div className="flex items-center ">
            <div className="rounded-full bg-gray-300 p-3">
              <FaPlay />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChildRight
