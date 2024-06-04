import React from 'react'

import blog1 from '../../assets/blog1.png'
import blog2 from '../../assets/blog2.png'
import blog3 from '../../assets/blog3.png'
import blog4 from '../../assets/blog4.png'
import child1 from '../../assets/child1.png'
import child2 from '../../assets/child2.png'
import child3 from '../../assets/child3.png'
import doctor from '../../assets/doctor.jpg'
import doctor1 from '../../assets/doctor1.png'

const ParentRight = () => {
  return (
    <div className="w-[30%] pr-10">
      <div className="my-10 rounded-xl border-[0.4px] p-4 shadow-[inset_1px_1px_0px_0px_#00000024]">
        <div className="flex justify-between">
          <h1 className="mb-4 text-2xl font-semibold ">Children</h1>
          <p>Add</p>
        </div>
        <div className="flex gap-6">
          <img
            alt=""
            className="size-20 rounded-full border-4 border-fuchsia-300 object-cover p-px"
            src={child1}
          />
          <img
            alt=""
            className="size-20 rounded-full border-4 border-fuchsia-300 object-cover p-px"
            src={child2}
          />
          <img
            alt=""
            className="size-20 rounded-full border-4 border-fuchsia-300 object-cover p-px"
            src={child3}
          />
        </div>
      </div>

      <div className="my-10 rounded-xl border-[0.4px] p-4 shadow-[inset_1px_1px_0px_0px_#00000024]">
        <div className="flex justify-between">
          <h1 className="mb-4 text-2xl font-semibold ">Doctors</h1>
        </div>
        <div className="flex gap-6">
          <img
            alt=""
            className="size-20 rounded-full border-4 border-fuchsia-300 object-cover p-px"
            src={doctor}
          />
          <img
            alt=""
            className="size-20 rounded-full border-4 border-fuchsia-300 object-cover p-px"
            src={doctor1}
          />
          {/* <img src={child1} alt="" className='w-20 h-20 object-cover border-fuchsia-300 border-4 p-[1px] rounded-full' /> */}
        </div>
      </div>

      {/* RECOMMENDATIONS */}
      <div className="my-10 rounded-xl border-[0.4px] p-4">
        <div className="mb-4 text-2xl font-semibold ">Recommendations</div>
        <div className="">
          <div className="flex gap-6">
            <img
              alt=""
              className="size-20 rounded-xl object-cover"
              src={blog1}
            />
            <a
              className="font-sans text-lg font-semibold"
              href="hthttps://joonify.com/blog/balance-work-parenting-insights-from-an-entrepreneur/tps://www.psychologytoday.com/us/basics/parenting/how-be-good-parent"
            >
              Balance Work & Parenting: Insights and Tips{' '}
            </a>
          </div>
          <hr className="my-8 h-px border-0 bg-gray-200 "></hr>

          <div className="flex gap-6">
            <img
              alt=""
              className="size-20 rounded-xl object-cover"
              src={blog2}
            />
            <a
              className="font-sans text-lg font-semibold"
              href="https://joonify.com/blog/tips-for-addressing-childrens-fear-and-anxiety/"
            >
              Practical Tips for Addressing Children’s Fear and Anxiety{' '}
            </a>
          </div>
          <hr className="my-8 h-px border-0 bg-gray-200 "></hr>

          <div className="flex gap-6">
            <img
              alt=""
              className="size-20 rounded-xl object-cover"
              src={blog3}
            />
            <a
              className="font-sans text-lg font-semibold"
              href="https://joonify.com/blog/rhyming-poems-for-early-reading-development/"
            >
              Importance of Rhyming Poems for Early Reading Development{' '}
            </a>
          </div>
          <hr className="my-8 h-px border-0 bg-gray-200 "></hr>

          <div className="flex gap-6">
            <img
              alt=""
              className="size-20 rounded-xl object-cover"
              src={blog4}
            />
            <a
              className="font-sans text-lg font-semibold"
              href="https://www.psychologytoday.com/us/basics/parenting/how-be-good-parent"
            >
              How to be good parent and establish connection with your child.{' '}
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ParentRight
