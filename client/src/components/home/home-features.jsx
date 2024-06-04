import { Container } from '@mui/material'
import React from 'react'

import feature1 from '../../assets/feature1.png'
import feature2 from '../../assets/feature2.jpg'
import feature3 from '../../assets/feature3.jpg'
import line from '../../assets/underline.svg'

export default function Homefeatures() {
  return (
    <div style={{ backgroundColor: '#f2edfa' }}>
      <Container fixed>
        <div
          style={{ display: 'flex', flexDirection: 'column', paddingBlock: 60 }}
        >
          <p
            className="text-center text-5xl font-bold italic"
            style={{ fontFamily: 'Protest Riot, sans-serif', color: '#664dd4' }}
          >
            Features
          </p>
          <img alt="" src={line} style={{ height: 20, marginBottom: 80 }} />

          <div>
            <div className="flex justify-evenly">
              <div className="w-[50%] py-5">
                <p
                  className="py-4 text-4xl font-semibold"
                  style={{ color: '#333' }}
                >
                  Child Analysis
                </p>
                <p className="text-l text-gray-600">
                  Streamlined assessments with a child-friendly interface,
                  allowing therapists to gain insights in a comfortable
                  environment. Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Molestias aliquid ipsa, obcaecati delectus
                  fugit nisi maxime, nihil autem quae minus minima nobis quod
                  quia. Inventore quis reprehenderit et alias fugiat aliquam
                  nihil vero consequatur minima eaque est accusamus aperiam
                  corporis sed ullam laborum nemo sint, voluptate praesentium
                  fugit rem cupiditate, dicta tempore! Vero necessitatibus,
                  dolorem voluptatum ipsam suscipit dignissimos voluptas animi
                  fuga quibusdam beatae quos, officiis sunt odit excepturi ullam
                  facilis, eligendi aliquam consequuntur neque assumenda.
                  Deleniti, beatae eligendi nihil eius ullam numquam alias, cum
                  voluptatibus laborum omnis animi sit reprehenderit quam
                  debitis illum velit libero sequi ex odit! Ut!
                </p>
              </div>
              <div className="w-2/5">
                <img alt="" className="w-full object-contain" src={feature1} />
              </div>
            </div>

            <div className="mt-5 flex justify-evenly">
              <div className="w-2/5" style={{ mixBlendMode: 'darken' }}>
                <img alt="" className="w-full" src={feature2} />
              </div>
              <div className="w-[50%] py-5">
                <p
                  className="py-4 text-4xl font-semibold"
                  style={{ color: '#333' }}
                >
                  Relationship Insight
                </p>
                <p className="text-l text-gray-600">
                  delves into the crucial parent-child relationship, providing
                  valuable information for a comprehensive understanding of the
                  child's behavior. Lorem ipsum, dolor sit amet consectetur
                  adipisicing elit. Voluptatibus quia odio dolore ex voluptatum?
                  Maiores expedita excepturi sed aperiam, voluptatem reiciendis
                  illo enim deleniti in, voluptas sequi laboriosam natus ullam
                  sunt ut soluta consequuntur eius facere eum esse nulla beatae
                  dicta? Voluptatum nihil, cupiditate nesciunt impedit fuga
                  mollitia deleniti, aliquid quisquam tenetur atque dicta
                  dolorum! Recusandae facere veniam quidem voluptate et sint
                  laboriosam sit. Reprehenderit qui atque ad itaque sit ea,
                  corrupti dolorum alias ut hic vitae optio minus consequuntur
                  ducimus natus commodi voluptatum animi. Nihil alias officia
                  cupiditate a! Molestias illum tenetur saepe soluta nemo
                  quaerat sapiente. Incidunt, illum!
                </p>
              </div>
            </div>

            <div className="mt-5 flex justify-evenly">
              <div className="w-[50%] py-8">
                <p
                  className="py-4 text-4xl font-semibold"
                  style={{ color: '#333' }}
                >
                  Creative Exploration
                </p>
                <p className="text-l text-gray-600">
                  Daily activities, such as framing stories from pictures,
                  nurture creativity and analytical thinking, offering a deeper
                  insight into a child's cognitive development. Lorem ipsum
                  dolor sit amet consectetur adipisicing elit. Neque possimus
                  quaerat, maiores delectus porro esse quidem commodi beatae
                  error dolore iusto impedit nulla ut. Maiores voluptatem
                  commodi suscipit unde illum similique id amet repudiandae
                  blanditiis, laudantium reiciendis ea cumque animi dolore quas
                  natus quae enim quaerat vel et nulla autem obcaecati!
                  Exercitationem quaerat ipsam at quasi nulla dolorem adipisci
                  sint debitis harum, maiores, aspernatur ut tempore eaque
                  recusandae, repudiandae commodi voluptates rem aperiam officia
                  quae illum obcaecati! Cumque corporis deleniti minus
                  reiciendis nihil ullam dicta accusantium ipsum atque, impedit
                  asperiores adipisci mollitia unde eos deserunt inventore
                  assumenda animi, officia natus.
                </p>
              </div>
              <div className="w-2/5">
                <img
                  alt=""
                  className="w-full"
                  src={feature3}
                  style={{ mixBlendMode: 'darken' }}
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
