import React from 'react'

import { Link } from 'react-router-dom'
import activityTitle from '../../assets/activityTitle.json'

console.log(activityTitle)

const ActivityLink = ({ title }) => {
  return (
    <div className="flex w-full flex-wrap gap-5 px-10 pb-4 pt-8">
      {activityTitle.active.map((e) => (
        <Link to={e.link}>
          <h1
            className={
              e.title === title
                ? 'bg-custV border-custV cursor-pointer rounded-lg border-2  px-3 py-2 text-base text-white shadow-md transition-all hover:-translate-y-1 hover:border-2 hover:shadow-md hover:shadow-gray-300'
                : 'text-custV border-custV cursor-pointer rounded-lg border-2 bg-white px-3 py-2 text-base shadow-md shadow-gray-200 transition-all hover:-translate-y-1 hover:shadow-md hover:shadow-gray-300'
            }
          >
            {e.title}
          </h1>
        </Link>
      ))}
    </div>
  )
}

export default ActivityLink
