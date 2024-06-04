import React from 'react'
import {Link} from 'react-router-dom'
import child1 from '../../assets/child1.png'
import child2 from '../../assets/child2.png'
import child3 from '../../assets/child3.png'
import parentchild from '../../assets/parentchild.png'


function ParentLeft() {
  return (
    <div className='w-[75%] px-10'>
      <div className='text-6xl tracking-tighter'>Dashboard</div>

      {/* Children Details */}
      <div className='flex justify-between'>
        <div className='bg-blue-200 p-5 rounded-lg my-5'>
            <div className='flex gap-10'>
                <div>
                    <img src={child1} alt="" className='h-16 w-16 object-cover rounded-xl' />
                </div>
                <div>
                    <p className='text-lg'>Aryan Raj</p>
                    <p>6 years 8 months</p>
                </div>
            </div>
            <div className='flex gap-14 my-5'>
                <div className='max-w-[60px] text-center'>
                    <p className='font-semibold text-lg '>12</p>
                    <p className='leading-4'>Tasks Done</p>
                </div>

                <div className='max-w-[60px] text-center'>
                    <p className='font-semibold text-lg '>5</p>
                    <p className='leading-4'>Games Played</p>
                </div>

                <div className='max-w-[60px] text-center'>
                    <p className='font-semibold text-lg '>8</p>
                    <p className='leading-4'>Stories Listened</p>
                </div>
            </div>
            <div className='flex gap-5'>
                <button className='px-3 py-1 bg-blue-600 text-white rounded-3xl'>Download Report</button>
                <button className='px-3 py-1 bg-blue-600 text-white  rounded-3xl'>View Details</button>
            </div>
        </div>

        <div className='bg-purple-200 p-5 rounded-lg my-5'>
            <div className='flex gap-10'>
                <div>
                    <img src={child2} alt="" className='h-16 w-16 object-cover rounded-xl' />
                </div>
                <div>
                    <p className='text-lg'>Aryan Raj</p>
                    <p>6 years 8 months</p>
                </div>
            </div>
            <div className='flex gap-14 my-5'>
                <div className='max-w-[60px] text-center'>
                    <p className='font-semibold text-lg '>12</p>
                    <p className='leading-4'>Tasks Done</p>
                </div>

                <div className='max-w-[60px] text-center'>
                    <p className='font-semibold text-lg '>5</p>
                    <p className='leading-4'>Games Played</p>
                </div>

                <div className='max-w-[60px] text-center'>
                    <p className='font-semibold text-lg '>8</p>
                    <p className='leading-4'>Stories Listened</p>
                </div>
            </div>
            <div className='flex gap-5'>
                <button className='px-3 bg-purple-600 text-white font-medium rounded-3xl'>Download Report</button>
                <button className='px-3 py-1 bg-purple-600 text-white  rounded-3xl'>View Details</button>
            </div>
        </div>

        <div className='bg-fuchsia-200 p-5 rounded-lg my-5'>
            <div className='flex gap-10'>
                <div>
                    <img src={child3} alt="" className='h-16 w-16 object-cover rounded-xl' />
                </div>
                <div>
                    <p className='text-lg'>Aryan Raj</p>
                    <p>6 years 8 months</p>
                </div>
            </div>
            <div className='flex gap-14 my-5'>
                <div className='max-w-[60px] text-center'>
                    <p className='font-semibold text-lg '>12</p>
                    <p className='leading-4'>Tasks Done</p>
                </div>

                <div className='max-w-[60px] text-center'>
                    <p className='font-semibold text-lg '>5</p>
                    <p className='leading-4'>Games Played</p>
                </div>

                <div className='max-w-[60px] text-center'>
                    <p className='font-semibold text-lg '>8</p>
                    <p className='leading-4'>Stories Listened</p>
                </div>
            </div>
            <div className='flex gap-5'>
                <button className='px-3 bg-fuchsia-600 text-white font-medium rounded-3xl'>Download Report</button>
                <button className='px-3 py-1 bg-fuchsia-600 text-white  rounded-3xl'>View Details</button>
            </div>
        </div>
      </div>

        {/* PARENT CHILD CARD */}
      <div className='w-full bg-violet-200 rounded-xl my-8 flex justify-between px-10 gap-8'>
            <div className='pt-12 w-[70%]'>
                <p className='text-4xl font-bold underline '>Parent Child Relationship Score</p>
                <p className='mt-5'>Parent Child Relationship analyzes the dynamics and interaction between parent an dthe children to understand their impact on the child's development and well being. The goal is to identify strength and areas to improvement and to foster healthier relationships.</p>
                <Link to="/parent-child">
                <button className='px-3 py-1 bg-violet-700 text-white my-5 rounded-2xl'>Check Score</button>
                </Link>
                
            </div>
            <div>
                <img src={parentchild} alt="" className='h-96'/>
            </div>
      </div>

      <div className='flex gap-8'>
        <div className='bg-gray-100 p-8 rounded-2xl '>
            <p className='font-semibold text-3xl'>Latest Scores</p>
            <div className='flex flex-wrap justify-center gap-3'>
            <div className='bg-[#fab6b4] rounded-xl p-3 my-4'>
                <p className='text-[60px] text-red-600 font-medium'>58</p>
                <p>with Aryan</p>
            </div>

            <div className='bg-[#fab6b4]  rounded-xl p-3 my-4'>
                <p>58</p>
                <p>with Aryan</p>
            </div>

            <div className='bg-[#fab6b4]  rounded-xl p-3 my-4'>
                <p>58</p>
                <p>with Aryan</p>
            </div>
            </div>
        </div>


        <div className='bg-gray-100 p-8 rounded-2xl'>
            <p className='font-semibold text-3xl'>Tips & Guidance</p>
            <div className='my-4'>
                <div className='flex items-center gap-2 text-xl'><div className='w-2 h-2  rounded-full bg-black'></div> <div>Keep checking your score every few days.</div></div>

                <div className='flex items-center gap-2 text-xl'><div className='w-2 h-2 rounded-full bg-black'></div> <div>Make your child do the daily activity.</div></div>

                <div className='flex items-center gap-2 text-xl'><div className='w-2 h-2 rounded-full bg-black'></div> <div>Check out the blogs on the right hand side.</div></div>

                <div className='flex items-center gap-2 text-xl'><div className='w-2 h-2 rounded-full bg-black'></div> <div>Make your child play logical games.</div></div>

                <div className='flex items-center gap-2 text-xl'><div className='w-2 h-2 rounded-full bg-black'></div> <div>Read instructions carefully while doing activity.</div></div>


            </div>
        </div>
      </div>
    </div>
  )
}

export default ParentLeft
