import React, { useContext, useState } from 'react'

import { StepperContext } from '../../../context/StepperContext'
const Page5 = () => {
  const { score, setScore } = useContext(StepperContext)
  console.log(score)

  const [question1, setQuestion1] = useState(0)
  const [question2, setQuestion2] = useState(0)
  const [question3, setQuestion3] = useState(0)
  const [question4, setQuestion4] = useState(0)

  // if(question1 !== 0 && question2 !== 0 && question3 !== 0 && question4 !== 0){
  //   setScore( question1 + question2 + question3 + question4)
  // }

  return (
    <div>
      <div className=" py-6">
        <div className="q1  ">
          <p className="text-2xl">
            17. When my child is in a bad mood, I know we're in for a long and
            difficult day.
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
            18. My child's feelings toward me can be unpredictable or can change
            suddenly.{' '}
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
            19. My child openly shares his/her feelings and experiences with me.
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
            20. My child is sneaky or manipulative with me
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

export default Page5
