// import { Link } from '@mui/material'
import React from 'react'
import {Link} from 'react-router-dom'


const data = [
    {
        key : 1,
        score : 58,
        name : "Atul"
    },
    {
        key : 2,
        score : 28,
        name : "Tanmoy"
    }
]

const ParentHero = () => {
  return (
    <div>
      <p className='text-5xl pt-8 font-semibold '>Welcome Atul's Father</p>
      <Link to="/child-dashboard"> <p>Child Dashboard</p> </Link>
      <Link to="/parent-child"> <p>Parent Child Relationship</p> </Link>
      
            <div className=" flex gap-32 pt-12 pb-16">
                {data.map((item) => (
                    <div className="p-5 rounded-xl bg-[#664dd4] text-white" key={item.key}>

                    <p className="text-[80px] font-semibold">{item.score}</p>
                    <p className="text-xl mt-2 w-[90%]">Your parent-child relationship score with {item.name}</p>
                    <button className="bg-[#d4c3f2] px-5 py-1 rounded-3xl text-[#664dd4] shadow-[0px_10px_10px_5px_#00000024] font-semibold text-xl duration-100 hover:scale-105 mt-5">Check</button>
                </div>
                ))}
            
        </div>
    </div>
  )
}

export default ParentHero
