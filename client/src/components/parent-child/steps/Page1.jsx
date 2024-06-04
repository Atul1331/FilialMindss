import React, { useContext, useState } from 'react'

import { StepperContext } from '../../../context/StepperContext'
const Page1 = () => {
  const { score, setScore } = useContext(StepperContext)

  const [question1, setQuestion1] = useState(0)
  const [question2, setQuestion2] = useState(0)
  const [question3, setQuestion3] = useState(0)
  const [question4, setQuestion4] = useState(0)

  return (
    <div>
      <div className=" py-6">
        <div className="q1  ">
          <p className="text-2xl">
            1. I share an affectionate, warm relationship with my child
          </p>
          <div className="options flex flex-wrap justify-evenly text-2xl">
            <label
              className={question1 === 1 ? 'active block py-8' : 'block py-8'}
              onClick={() => setScore(score + 1)}
            >
              {' '}
              <input name="q1" type="radio" value="1" /> Definitely, doesn't
              apply
            </label>
            <label
              className={question1 === 2 ? 'active block py-8' : 'block py-8'}
              onClick={() => setScore(score + 2)}
            >
              <input name="q1" type="radio" value="2" /> Not really
            </label>
            <label
              className={question1 === 3 ? 'active block py-8' : 'block py-8'}
              onClick={() => setScore(score + 3)}
            >
              <input name="q1" type="radio" value="3" /> Neutral, not sure
            </label>
            <label
              className={question1 === 4 ? 'active block py-8' : 'block py-8'}
              onClick={() => setScore(score + 4)}
            >
              <input name="q1" type="radio" value="4" /> Applies somewhat
            </label>
            <label
              className={question1 === 5 ? 'active block py-8' : 'block py-8'}
              onClick={() => setScore(score + 5)}
            >
              <input name="q1" type="radio" value="5" /> Definitely applies
            </label>
          </div>
        </div>

        <div className="q2  ">
          <p className="text-2xl">
            2. My child and I always seem to be struggling with each other
          </p>
          <div className="options flex flex-wrap justify-evenly text-2xl">
            <label
              className={question2 === 1 ? 'active block py-8' : 'block py-8'}
              onClick={() => setScore(score + 1)}
            >
              {' '}
              <input name="q2" type="radio" value="1" /> Definitely, doesn't
              apply
            </label>
            <label
              className={question2 === 2 ? 'active block py-8' : 'block py-8'}
              onClick={() => setScore(score + 2)}
            >
              <input name="q2" type="radio" value="2" /> Not really
            </label>
            <label
              className={question2 === 3 ? 'active block py-8' : 'block py-8'}
              onClick={() => setScore(score + 3)}
            >
              <input name="q2" type="radio" value="3" /> Neutral, not sure
            </label>
            <label
              className={question2 === 4 ? 'active block py-8' : 'block py-8'}
              onClick={() => setScore(score + 4)}
            >
              <input name="q2" type="radio" value="4" /> Applies somewhat
            </label>
            <label
              className={question2 === 5 ? 'active block py-8' : 'block py-8'}
              onClick={() => setScore(score + 5)}
            >
              <input name="q2" type="radio" value="5" /> Definitely applies
            </label>
          </div>
        </div>

        <div className="q3  ">
          <p className="text-2xl">
            3. If upset, my child will seek confort from me
          </p>
          <div className="options flex flex-wrap justify-evenly text-2xl">
            <label
              className={question3 === 1 ? 'active block py-8' : 'block py-8'}
              onClick={() => setScore(score + 1)}
            >
              {' '}
              <input name="q3" type="radio" value="1" /> Definitely, doesn't
              apply
            </label>
            <label
              className={question3 === 2 ? 'active block py-8' : 'block py-8'}
              onClick={() => setScore(score + 2)}
            >
              <input name="q3" type="radio" value="2" /> Not really
            </label>
            <label
              className={question3 === 3 ? 'active block py-8' : 'block py-8'}
              onClick={() => setScore(score + 3)}
            >
              <input name="q3" type="radio" value="3" /> Neutral, not sure
            </label>
            <label
              className={question3 === 4 ? 'active block py-8' : 'block py-8'}
              onClick={() => setScore(score + 4)}
            >
              <input name="q3" type="radio" value="4" /> Applies somewhat
            </label>
            <label
              className={question3 === 5 ? 'active block py-8' : 'block py-8'}
              onClick={() => setScore(score + 5)}
            >
              <input name="q3" type="radio" value="5" /> Definitely applies
            </label>
          </div>
        </div>

        <div className="q4 ">
          <p className="text-2xl">
            4. My child is uncomfortable with physical attention or touch from
            me
          </p>
          <div className="options flex flex-wrap justify-evenly text-2xl">
            <label
              className={question4 === 1 ? 'active block py-8' : 'block py-8'}
              onClick={() => setScore(score + 1)}
            >
              {' '}
              <input name="q4" type="radio" value="1" /> Definitely, doesn't
              apply
            </label>
            <label
              className={question4 === 2 ? 'active block py-8' : 'block py-8'}
              onClick={() => setScore(score + 2)}
            >
              <input name="q4" type="radio" value="2" /> Not really
            </label>
            <label
              className={question4 === 3 ? 'active block py-8' : 'block py-8'}
              onClick={() => setScore(score + 3)}
            >
              <input name="q4" type="radio" value="3" /> Neutral, not sure
            </label>
            <label
              className={question4 === 4 ? 'active block py-8' : 'block py-8'}
              onClick={() => setScore(score + 4)}
            >
              <input name="q4" type="radio" value="4" /> Applies somewhat
            </label>
            <label
              className={question4 === 5 ? 'active block py-8' : 'block py-8'}
              onClick={() => setScore(score + 5)}
            >
              <input name="q4" type="radio" value="5" /> Definitely applies
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page1
