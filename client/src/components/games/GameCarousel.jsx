import { Carousel, Typography } from '@material-tailwind/react'
import React from 'react'

import carousal1 from '../../assets/Caraousel1.jpg'
import carousal2 from '../../assets/Caraousel2.jpg'
import carousal3 from '../../assets/Caraousel3.jpg'

function GameCarousel() {
  return (
    <Carousel className="rounded-xl">
      <div className="relative h-[600px] w-full">
        <img alt="image 1" className="size-full object-cover" src={carousal1} />
        <div className="absolute inset-0 grid size-full items-end bg-black/25">
          <div className="w-3/4 pb-12 pl-12 md:w-2/4 md:pb-20 md:pl-20 lg:pb-32 lg:pl-32">
            <Typography
              className="mb-4 text-3xl md:text-4xl lg:text-6xl"
              color="white"
              variant="h1"
            >
              The Beauty of Nature
            </Typography>
          </div>
        </div>
      </div>
      <div className="relative h-[600px] w-full">
        <img alt="image 2" className="size-full object-cover" src={carousal2} />
        <div className="absolute inset-0 grid size-full items-end bg-black/25">
          <div className="w-3/4 pb-12 pl-12 md:w-2/4 md:pb-20 md:pl-20 lg:pb-32 lg:pl-32">
            <Typography
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
              color="white"
              variant="h1"
            >
              The Beauty of Nature
            </Typography>
          </div>
        </div>
      </div>
      <div className="relative h-[600px] w-full">
        <img alt="image 3" className="size-full object-cover" src={carousal3} />
        <div className="absolute inset-0 grid size-full items-end bg-black/25">
          <div className="w-3/4 pb-12 pl-12 md:w-2/4 md:pb-20 md:pl-20 lg:pb-32 lg:pl-32">
            <Typography
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
              color="white"
              variant="h1"
            >
              The Beauty of Nature
            </Typography>
          </div>
        </div>
      </div>
    </Carousel>
  )
}

export default GameCarousel
