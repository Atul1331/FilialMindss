import React from "react";

import ParentLeft from '../components/parentdashboard/ParentLeft'
import ParentRight from '../components/parentdashboard/ParentRight'

const ParentDashboard = () => {
  return (
    <div className="font-mono flex">
      <ParentLeft />
      <ParentRight />
    </div>
  );
};

export default ParentDashboard;
