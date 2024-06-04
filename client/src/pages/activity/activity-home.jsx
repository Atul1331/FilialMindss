import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import Activity from '../../assets/activityTitle.json'
import Games from '../../assets/gamesActive.json'
import Stories from '../../components/activity/stories'

const ActivityHome = () => {
  const [activityCategory, setActivityCategory] = useState('activity')
  return (
    <div className=" flex h-full flex-col gap-10 py-10 pt-0">
      <div className="bg-custY mx-auto flex w-fit gap-2 rounded-xl p-1 shadow-md">
        <button
          className={
            activityCategory === 'activity'
              ? 'w-28 rounded-lg bg-yellow-50 px-3 py-2 shadow-md hover:bg-white'
              : 'w-28 rounded-lg px-3 py-2 transition-all hover:bg-yellow-200'
          }
          onClick={() => setActivityCategory('activity')}
        >
          Activities
        </button>
        <button
          className={
            activityCategory === 'games'
              ? 'w-28 rounded-lg bg-yellow-50 px-3 py-2 shadow-md hover:bg-white'
              : 'w-28 rounded-lg px-3 py-2 transition-all hover:bg-yellow-200'
          }
          onClick={() => setActivityCategory('games')}
        >
          Games
        </button>
        <button
          className={
            activityCategory === 'stories'
              ? 'w-28 rounded-lg bg-yellow-50 px-3 py-2 shadow-md hover:bg-white'
              : 'w-28 rounded-lg px-3 py-2 transition-all hover:bg-yellow-200'
          }
          onClick={() => setActivityCategory('stories')}
        >
          Stories
        </button>
      </div>

      <div
        className={`rounded-3xl ${
          activityCategory !== 'stories' && ' grid grid-cols-4 gap-10'
        } mx-20 border-2 p-10`}
      >
        {activityCategory === 'activity' &&
          Activity.active.map((e) => (
            <Link to={e.link}>
              <button className="bg-custV text-custL itali flex flex-col items-center gap-4 rounded-2xl p-6 text-xl italic shadow-md shadow-gray-400 transition-all hover:-translate-y-4 hover:scale-105 hover:shadow-lg hover:shadow-gray-400">
                <img
                  alt=""
                  className="size-60 rounded-xl object-cover"
                  src={e.img}
                />
                {e.title}
              </button>
            </Link>
          ))}
        {activityCategory === 'games' &&
          Games.active.map((e) => (
            // <button className="bg-custV text-custL rounded-lg px-3 py-4 shadow-md">
            //   {name}
            // </button>
            <Link to={e.link}>
              <button className="bg-custV text-custL itali flex flex-col items-center gap-4 rounded-2xl p-6 text-xl italic shadow-md shadow-gray-400 transition-all hover:-translate-y-4 hover:scale-105 hover:shadow-lg hover:shadow-gray-400">
                <img
                  alt=""
                  className="size-60 rounded-xl object-cover"
                  src={e.img}
                />
                {e.title}
              </button>
            </Link>
          ))}
        {activityCategory === 'stories' && <Stories />}
      </div>
    </div>
  )
}

export default ActivityHome
