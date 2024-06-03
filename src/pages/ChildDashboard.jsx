import React from 'react'

import ChildLeft from '../components/childdashboard/ChildLeft'
import ChildRight from '../components/childdashboard/ChildRight'

const ChildDashboard = () => {
  return (
    <div className='flex'>
      
      <ChildLeft />
        <ChildRight />
      
      
    </div>
  )
}

export default ChildDashboard
