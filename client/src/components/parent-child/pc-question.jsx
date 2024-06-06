import React from 'react'

const PCQuestion = ({ key, question, setValue }) => {
  return (
    <div className="">
      <label className="text-custB block text-lg font-bold">{question}</label>
      <div className="mt-1 flex gap-10 ">
        <div className="flex items-center gap-2">
          <input
            className="radio radio-xs radio-primary"
            name={key}
            type="radio"
            value="1"
            onChange={(e) => setValue(e.target.value)}
          />
          <label className="block text-sm font-medium text-gray-700">
            Absolutely Not
          </label>
        </div>
        <div className="flex items-center gap-2">
          <input
            className="radio radio-xs radio-primary"
            name={key}
            type="radio"
            value="2"
            onChange={(e) => setValue(e.target.value)}
          />
          <label className="block text-sm font-medium text-gray-700">
            Not Really
          </label>
        </div>
        <div className="flex items-center gap-2">
          <input
            className="radio radio-xs radio-primary"
            name={key}
            type="radio"
            value="3"
            onChange={(e) => setValue(e.target.value)}
          />
          <label className="block text-sm font-medium text-gray-700">
            Not Sure
          </label>
        </div>
        <div className="flex items-center gap-2">
          <input
            className="radio radio-xs radio-primary"
            name={key}
            type="radio"
            value="4"
            onChange={(e) => setValue(e.target.value)}
          />
          <label className="block text-sm font-medium text-gray-700">Yes</label>
        </div>
        <div className="flex items-center gap-2">
          <input
            className="radio radio-xs radio-primary"
            name={key}
            type="radio"
            value="5"
            onChange={(e) => setValue(e.target.value)}
          />
          <label className="block text-sm font-medium text-gray-700">
            Absolutely Yes
          </label>
        </div>
      </div>
    </div>
  )
}

export default PCQuestion
