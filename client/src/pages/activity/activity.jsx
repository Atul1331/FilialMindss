import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

import questionData from '../../assets/tasks/questionData.json'
import ActivityLink from '../../components/activity/ActivityLink'
import Audio from '../../components/activity/Audio'
import Img from '../../components/activity/Img'
import Mcq from '../../components/activity/Mcq'
import No from '../../components/activity/No'
import QuestionList from '../../components/activity/QuestionList'
import Rating from '../../components/activity/Rating'
import Textbox from '../../components/activity/Textbox'
import Time from '../../components/activity/Time'

const Activity = ({ title }) => {
  const [data, setData] = useState(questionData[title])
  const [question, setQuestion] = useState(data.content[0].id)
  const [content_selected, setContent_selected] = useState(data.content[0])
  const [ans, setAns] = useState(null)
  const location = useLocation()

  useEffect(() => {
    const newData = questionData[title]
    setData(newData)
    setQuestion(newData.content[0].id)
    setContent_selected(newData.content[0])
  }, [title])

  const renderOptions = (content) => {
    console.log(content.type)
    switch (content.type) {
      case 'mcq':
        return (
          <Mcq
            ans={ans}
            content={content}
            mainDesc={data.desc}
            question={question}
            setAns={setAns}
          />
        )
      case 'textbox':
        return (
          <Textbox
            ans={ans}
            content={content}
            mainDesc={data.desc}
            question={question}
            setAns={setAns}
          />
        )
      case 'number':
        return (
          <No
            ans={ans}
            content={content}
            mainDesc={data.desc}
            question={question}
            setAns={setAns}
          />
        )
      case 'img':
        return (
          <Img
            ans={ans}
            content={content}
            mainDesc={data.desc}
            question={question}
            setAns={setAns}
          />
        )
      case 'audio':
        return (
          <Audio
            ans={ans}
            content={content}
            mainDesc={data.desc}
            question={question}
            setAns={setAns}
          />
        )
      case 'time':
        return (
          <Time
            ans={ans}
            content={content}
            mainDesc={data.desc}
            question={question}
            setAns={setAns}
          />
        )
      case 'rate':
        return (
          <Rating
            ans={ans}
            content={content}
            mainDesc={data.desc}
            question={question}
            setAns={setAns}
          />
        )
      default:
        return null
    }
  }

  return (
    <>
      <div className="mt-16 pb-10 flex bg-gray-100">
        <div className="flex w-full flex-col">
          <ActivityLink title={title} />
          <div className="flex">
            <div className="w-4/5">
              <h1 className="text-custV mx-10 my-4 text-4xl font-semibold">
                {data.title}
              </h1>
              {renderOptions(content_selected)}
            </div>
            <QuestionList
              ans={ans}
              question={question}
              questionData={data}
              setAns={setAns}
              setQuestion={(content) => {
                setQuestion(content.id)
                setContent_selected(content)
              }}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Activity
