import { Button } from '@mui/material'
import TextField from '@mui/material/TextField'
import { useState } from 'react'

import questions from '../assets/questions.json'
import PCQuestion from '../components/parent-child/pc-question'
import useReport from '../hooks/use-report'

const ParentChild = () => {
  const [name, setName] = useState('')
  const [value, setValue] = useState(
    Array(questions.length).fill({
      val: 0,
      type: ''
    })
  )
  const { loading, report } = useReport()

  const handleChange = (index, newValue, types) => {
    setValue((prevValues) => {
      const newValues = [...prevValues]
      newValues[index] = {
        val: newValue,
        type: types[index].type
      }
      return newValues
    })
    console.log(value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(name)
    console.log(value)
    console.log('Before Report')
    await report(name, value)
  }
  return (
    <>
      <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="rounded-xl border-2 bg-white p-4 shadow-xl sm:p-7">
          <div className="mb-8">
            <h1 className="text-custB text-xl font-bold">
              Parent-Child Relationship
            </h1>
            <p className="text-sm text-gray-600">
              Choose the most appropriate option that applies{' '}
              <span className="text-custY">
                (There is no right or wrong answers here)
              </span>
            </p>
          </div>
          <form className="flex flex-col gap-10" onSubmit={handleSubmit}>
            <div className="flex items-baseline gap-10">
              <label className="text-custB block text-lg font-bold">
                Enter Child name:
              </label>
              <TextField
                id="outlined-basic"
                label="Name"
                value={name}
                variant="outlined"
                onChange={(event) => {
                  setName(event.target.value)
                }}
              />
            </div>
            {questions.ques.map((question, index, types) => (
              <PCQuestion
                key={index}
                question={question.question}
                setValue={(newValue) => handleChange(index, newValue, types)}
                value={value[index]}
              />
            ))}
            <div className="flex justify-center">
              <Button
                className="common-button"
                type="submit"
                variant="contained"
              >
                {loading ? 'Submitting...' : 'Submit'}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default ParentChild
