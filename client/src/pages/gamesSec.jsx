import React from 'react'

export default function GamesSec({ cdn }) {
  return (
    <div>
      <iframe
        frameBorder="0"
        src={cdn}
        style={{ width: '100%', height: '100vh' }}
      ></iframe>
    </div>
  )
}
