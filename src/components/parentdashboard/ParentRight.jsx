import React from 'react'

import child1 from '../../assets/child1.png'
import doctor from '../../assets/doctor.jpg'
import doctor1 from '../../assets/doctor1.png'
import child2 from '../../assets/child2.png'
import child3 from '../../assets/child3.png'

import blog1 from '../../assets/blog1.png'
import blog2 from '../../assets/blog2.png'
import blog3 from '../../assets/blog3.png'
import blog4 from '../../assets/blog4.png'


const ParentRight = () => {
  return (
    <div className='w-[30%] pr-10'>
      <div className='mt-20 mb-10 border-[0.4px] p-4 rounded-xl shadow-[inset_1px_1px_0px_0px_#00000024]'>
        <div className='flex justify-between'>
            <h1 className='font-semibold text-2xl mb-4 '>Children</h1>
            <p>Add</p>
        </div>
        <div className='flex gap-6'>
            <img src={child1} alt="" className='w-20 h-20 object-cover border-fuchsia-300 border-4 p-[1px] rounded-full' />
            <img src={child2} alt="" className='w-20 h-20 object-cover border-fuchsia-300 border-4 p-[1px] rounded-full' />
            <img src={child3} alt="" className='w-20 h-20 object-cover border-fuchsia-300 border-4 p-[1px] rounded-full' />
        </div>
        
      </div>


      <div className='mt-10 mb-10 border-[0.4px] p-4 rounded-xl shadow-[inset_1px_1px_0px_0px_#00000024]'>
        <div className='flex justify-between'>
            <h1 className='font-semibold text-2xl mb-4 '>Doctors</h1>
            
        </div>
        <div className='flex gap-6'>
            <img src={doctor} alt="" className='w-20 h-20 object-cover border-fuchsia-300 border-4 p-[1px] rounded-full' />
            <img src={doctor1} alt="" className='w-20 h-20 object-cover border-fuchsia-300 border-4 p-[1px] rounded-full' />
            {/* <img src={child1} alt="" className='w-20 h-20 object-cover border-fuchsia-300 border-4 p-[1px] rounded-full' /> */}
        </div>
        
      </div>


      {/* RECOMMENDATIONS */}
        <div className='mt-10 mb-10 border-[0.4px] p-4 rounded-xl'>
            <div className='font-semibold text-2xl mb-4 '>Recommendations</div>
            <div className=''>
                <div className='flex gap-6'>
                    <img src={blog1} alt="" className='w-20 h-20 object-cover rounded-xl'/>
                    <a href="hthttps://joonify.com/blog/balance-work-parenting-insights-from-an-entrepreneur/tps://www.psychologytoday.com/us/basics/parenting/how-be-good-parent" className='text-lg font-semibold font-sans'>Balance Work & Parenting: Insights and Tips </a>
                </div>
                <hr class="h-px my-8 bg-gray-200 border-0 "></hr>

                <div className='flex gap-6'>
                    <img src={blog2} alt="" className='w-20 h-20 object-cover rounded-xl'/>
                    <a href="https://joonify.com/blog/tips-for-addressing-childrens-fear-and-anxiety/" className='text-lg font-semibold font-sans'>Practical Tips for Addressing Children’s Fear and Anxiety </a>
                </div>
                <hr class="h-px my-8 bg-gray-200 border-0 "></hr>

                <div className='flex gap-6'>
                    <img src={blog3} alt="" className='w-20 h-20 object-cover rounded-xl'/>
                    <a href="https://joonify.com/blog/rhyming-poems-for-early-reading-development/" className='text-lg font-semibold font-sans'>Importance of Rhyming Poems for Early Reading Development  </a>
                </div>
                <hr class="h-px my-8 bg-gray-200 border-0 "></hr>
                
                
                <div className='flex gap-6'>
                    <img src={blog4} alt="" className='w-20 h-20 object-cover rounded-xl'/>
                    <a href="https://www.psychologytoday.com/us/basics/parenting/how-be-good-parent" className='text-lg font-semibold font-sans'>How to be good parent and establish connection with your child. </a>
                </div>
                
            </div>
        </div>

    </div>
  )
}

export default ParentRight
