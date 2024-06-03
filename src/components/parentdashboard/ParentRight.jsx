import React from 'react'

import child1 from '../../assets/child1.png'

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
            <img src={child1} alt="" className='w-20 h-20 object-cover border-fuchsia-300 border-4 p-[1px] rounded-full' />
            <img src={child1} alt="" className='w-20 h-20 object-cover border-fuchsia-300 border-4 p-[1px] rounded-full' />
        </div>
        
      </div>


      <div className='mt-10 mb-10 border-[0.4px] p-4 rounded-xl shadow-[inset_1px_1px_0px_0px_#00000024]'>
        <div className='flex justify-between'>
            <h1 className='font-semibold text-2xl mb-4 '>Doctors</h1>
            
        </div>
        <div className='flex gap-6'>
            <img src={child1} alt="" className='w-20 h-20 object-cover border-fuchsia-300 border-4 p-[1px] rounded-full' />
            <img src={child1} alt="" className='w-20 h-20 object-cover border-fuchsia-300 border-4 p-[1px] rounded-full' />
            <img src={child1} alt="" className='w-20 h-20 object-cover border-fuchsia-300 border-4 p-[1px] rounded-full' />
        </div>
        
      </div>


      {/* RECOMMENDATIONS */}
        <div className='mt-10 mb-10 border-[0.4px] p-4 rounded-xl'>
            <div className='font-semibold text-2xl mb-4 '>Recommendations</div>
            <div className=''>
                <div className='flex gap-6'>
                    <img src={child1} alt="" className='w-20 h-20 object-cover rounded-xl'/>
                    <a href="https://www.psychologytoday.com/us/basics/parenting/how-be-good-parent" className='text-lg font-semibold font-sans'>How to be good parent and hwshaj fjhgvw rygfj </a>
                </div>
                <hr class="h-px my-8 bg-gray-200 border-0 "></hr>

                <div className='flex gap-6'>
                    <img src={child1} alt="" className='w-20 h-20 object-cover rounded-xl'/>
                    <a href="https://www.psychologytoday.com/us/basics/parenting/how-be-good-parent" className='text-lg font-semibold font-sans'>How to be good parent and hwshaj fjhgvw rygfj </a>
                </div>
                <hr class="h-px my-8 bg-gray-200 border-0 "></hr>

                <div className='flex gap-6'>
                    <img src={child1} alt="" className='w-20 h-20 object-cover rounded-xl'/>
                    <a href="https://www.psychologytoday.com/us/basics/parenting/how-be-good-parent" className='text-lg font-semibold font-sans'>How to be good parent and hwshaj fjhgvw rygfj </a>
                </div>
                <hr class="h-px my-8 bg-gray-200 border-0 "></hr>
                
                
                <div className='flex gap-6'>
                    <img src={child1} alt="" className='w-20 h-20 object-cover rounded-xl'/>
                    <a href="https://www.psychologytoday.com/us/basics/parenting/how-be-good-parent" className='text-lg font-semibold font-sans'>How to be good parent and hwshaj fjhgvw rygfj </a>
                </div>
                <hr class="h-px my-8 bg-gray-200 border-0 "></hr>
            </div>
        </div>

    </div>
  )
}

export default ParentRight
