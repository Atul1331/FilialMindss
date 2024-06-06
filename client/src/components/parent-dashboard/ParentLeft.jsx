import React from 'react'
import { Link } from 'react-router-dom'

import child1 from '../../assets/child1.png'
import child2 from '../../assets/child2.png'
import child3 from '../../assets/child3.png'
import parentchild from '../../assets/parentchild.png'
import useGetScores from '../../hooks/use-get-scores'

function ParentLeft() {
  const { loading, scores } = useGetScores()
  return (
    <div className="w-[75%] p-10 font-sans">
      <div className="text-6xl tracking-tighter">Dashboard</div>
      <div className="">
        <h1 className="text-custV mt-5 text-4xl">Dynamic Scoreboard</h1>
        <div className="my-5 flex flex-wrap gap-10 gap-y-5">
          {scores.map((score) => (
            <div key={score._id} className="rounded-lg bg-blue-200 p-5">
              <h1 className="text-custB text-lg font-bold">
                Name:{' '}
                <span className="text-custV ml-2 text-2xl">{score.name}</span>
              </h1>
              <h1>Closeness: {score.closenessScore}</h1>
              <h1>Conflict: {score.conflictsScore}</h1>
            </div>
          ))}
        </div>
      </div>

      {/* Children Details */}
      <div className="flex flex-wrap justify-between">
        <Link to="/child-dashboard">
          <div className="my-5 rounded-lg bg-blue-200 p-5">
            <div className="flex gap-10">
              <div>
                <img
                  alt=""
                  className="size-16 rounded-xl object-cover"
                  src={child1}
                />
              </div>
              <div>
                <p className="text-lg">Aryan Raj</p>
                <p>6 years 8 months</p>
              </div>
            </div>
            <div className="my-5 flex gap-14">
              <div className="max-w-[60px] text-center">
                <p className="text-lg font-semibold ">12</p>
                <p className="leading-4">Tasks Done</p>
              </div>

              <div className="max-w-[60px] text-center">
                <p className="text-lg font-semibold ">5</p>
                <p className="leading-4">Games Played</p>
              </div>

              <div className="max-w-[60px] text-center">
                <p className="text-lg font-semibold ">8</p>
                <p className="leading-4">Stories Listened</p>
              </div>
            </div>
            <div className="flex gap-5">
              <button className="rounded-3xl bg-blue-600 px-3 py-1 text-white">
                Download Report
              </button>
              <button className="rounded-3xl bg-blue-600 px-3 py-1  text-white">
                View Details
              </button>
            </div>
          </div>
        </Link>

        <div className="my-5 rounded-lg bg-purple-200 p-5">
          <div className="flex gap-10">
            <div>
              <img
                alt=""
                className="size-16 rounded-xl object-cover"
                src={child2}
              />
            </div>
            <div>
              <p className="text-lg">Rishi Kapoor</p>
              <p>5 years 4 months</p>
            </div>
          </div>
          <div className="my-5 flex gap-14">
            <div className="max-w-[60px] text-center">
              <p className="text-lg font-semibold ">13</p>
              <p className="leading-4">Tasks Done</p>
            </div>

            <div className="max-w-[60px] text-center">
              <p className="text-lg font-semibold ">7</p>
              <p className="leading-4">Games Played</p>
            </div>

            <div className="max-w-[60px] text-center">
              <p className="text-lg font-semibold ">8</p>
              <p className="leading-4">Stories Listened</p>
            </div>
          </div>
          <div className="flex gap-5">
            <button className="rounded-3xl bg-purple-600 px-3 font-medium text-white">
              Download Report
            </button>
            <button className="rounded-3xl bg-purple-600 px-3 py-1  text-white">
              View Details
            </button>
          </div>
        </div>

        <div className="my-5 rounded-lg bg-fuchsia-200 p-5">
          <div className="flex gap-10">
            <div>
              <img
                alt=""
                className="size-16 rounded-xl object-cover"
                src={child3}
              />
            </div>
            <div>
              <p className="text-lg">Shivam Kumar</p>
              <p>6 years 3 months</p>
            </div>
          </div>
          <div className="my-5 flex gap-14">
            <div className="max-w-[60px] text-center">
              <p className="text-lg font-semibold ">7</p>
              <p className="leading-4">Tasks Done</p>
            </div>

            <div className="max-w-[60px] text-center">
              <p className="text-lg font-semibold ">2</p>
              <p className="leading-4">Games Played</p>
            </div>

            <div className="max-w-[60px] text-center">
              <p className="text-lg font-semibold ">3</p>
              <p className="leading-4">Stories Listened</p>
            </div>
          </div>
          <div className="flex gap-5">
            <button className="rounded-3xl bg-fuchsia-600 px-3 font-medium text-white">
              Download Report
            </button>
            <button className="rounded-3xl bg-fuchsia-600 px-3 py-1  text-white">
              View Details
            </button>
          </div>
        </div>
      </div>

      {/* PARENT CHILD CARD */}
      <div className="my-8 flex w-full justify-between gap-8 rounded-xl bg-violet-200 px-10">
        <div className="w-[70%] pt-12">
          <p className="text-4xl font-bold underline ">
            Parent Child Relationship Score
          </p>
          <p className="mt-5">
            Parent Child Relationship analyzes the dynamics and interaction
            between parent an dthe children to understand their impact on the
            child's development and well being. The goal is to identify strength
            and areas to improvement and to foster healthier relationships.
          </p>
          <Link to="/parent-child-score">
            <button className="my-5 rounded-2xl bg-violet-700 px-3 py-1 text-white">
              Check Score
            </button>
          </Link>
        </div>
        <div>
          <img alt="" className="h-96" src={parentchild} />
        </div>
      </div>

      <div className="flex gap-8">
        <div className="rounded-2xl bg-gray-100 p-8 ">
          <p className="text-3xl font-semibold">Latest Scores</p>
          <div className="flex flex-wrap justify-center gap-3">
            <div className="my-4 rounded-xl bg-[#f6cccb] p-3">
              <p className="text-[60px] font-medium text-red-600">58</p>
              <p className="font-semibold">with Aryan</p>
            </div>

            <div className="my-4  rounded-xl bg-[#bbd9f8] p-3">
              <p className="text-[60px] font-medium text-blue-600">76</p>
              <p className="font-semibold">with Rishi</p>
            </div>

            <div className="my-4  rounded-xl bg-[#f9f5be] p-3">
              <p className="text-[60px] font-medium text-yellow-600">58</p>
              <p className="font-semibold">with Shivam</p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-gray-100 p-8">
          <p className="text-3xl font-semibold">Tips & Guidance</p>
          <div className="my-4">
            <div className="flex items-center gap-2 text-xl">
              <div className="size-2 rounded-full  bg-black"></div>{' '}
              <div>Keep checking your score every few days.</div>
            </div>

            <div className="flex items-center gap-2 text-xl">
              <div className="size-2 rounded-full bg-black"></div>{' '}
              <div>Make your child do the daily activity.</div>
            </div>

            <div className="flex items-center gap-2 text-xl">
              <div className="size-2 rounded-full bg-black"></div>{' '}
              <div>Check out the blogs on the right hand side.</div>
            </div>

            <div className="flex items-center gap-2 text-xl">
              <div className="size-2 rounded-full bg-black"></div>{' '}
              <div>Make your child play logical games.</div>
            </div>

            <div className="flex items-center gap-2 text-xl">
              <div className="size-2 rounded-full bg-black"></div>{' '}
              <div>Read instructions carefully while doing activity.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ParentLeft
