import React from 'react'

import ParentLeft from '../components/parent-dashboard/ParentLeft'
import ParentRight from '../components/parent-dashboard/ParentRight'

const ParentDashboard = () => {
  return (
    <div className="flex font-mono">
      <ParentLeft />
      <ParentRight />
    </div>
  )
}

export default ParentDashboard
