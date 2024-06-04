import { Container } from '@mui/material'
import React, { useState } from 'react'

import line from '../../assets/underline.svg'

const data = [
  {
    key: 1,
    title: 'Question 1 ?',
    data: `Answer 1.`,
    isOpen: false
  },
  {
    key: 2,
    title: 'Question 2 ?',
    data: `Answer 2 `,
    isOpen: false
  },
  {
    key: 3,
    title: 'Question 3 ?',
    data: `Answer 3 `,
    isOpen: false
  }
]

const Section = ({ question, answer, isVisible, setIsVisible }) => {
  return (
    <>
      <div className="mx-auto w-full cursor-pointer bg-[#664dd4]  px-5 py-2 transition duration-500 ease-out">
        <div
          className="flex justify-between"
          onClick={() => setIsVisible(!isVisible)}
        >
          <div className="text-xl font-medium text-white">{question}</div>
          {isVisible ? (
            <div className="text-3xl" style={{ color: '#f6d26f' }}>
              -
            </div>
          ) : (
            <div className="text-2xl" style={{ color: '#f6d26f' }}>
              +
            </div>
          )}
        </div>
        <div className="text-md w-[88%] text-white">
          {isVisible && <p>{answer}</p>}
        </div>
      </div>
      <div
        className="mx-auto h-px w-full"
        style={{ backgroundColor: '#aaa' }}
      ></div>
    </>
  )
}

export default function Homefaq() {
  const [visibleSection, setVisibleSection] = useState(null)
  return (
    <Container fixed>
      <div
        className="my-28"
        style={{ display: 'flex', flexDirection: 'column' }}
      >
        <h3
          className="text-center text-5xl font-bold"
          style={{
            fontFamily: `'Protest Riot', sans-serif`,
            color: '#333'
          }}
        >
          Frequently Asked{' '}
          <h3
            className="text-center text-5xl font-bold"
            style={{
              display: 'inline',
              fontFamily: `'Protest Riot', sans-serif`,
              color: '#664dd4'
            }}
          >
            Questions
          </h3>
        </h3>
        <img
          alt=""
          src={line}
          style={{
            height: '20px',
            alignSelf: 'center',
            objectFit: 'contain',
            marginLeft: '350px',
            marginTop: '-5px',
            marginBottom: '40px'
          }}
        />

        <div
          style={{
            borderRadius: '20px',
            overflow: 'hidden',
            width: '1000px',
            alignSelf: 'center'
          }}
        >
          {data.map((section) => (
            <Section
              key={section.key}
              answer={section.data}
              isVisible={visibleSection === section.key}
              question={section.title}
              setIsVisible={() =>
                setVisibleSection(
                  visibleSection === section.key ? null : section.key
                )
              }
            />
          ))}
        </div>
      </div>
    </Container>
  )
}
