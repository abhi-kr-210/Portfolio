import React from 'react'
import ColourfulText from "./ui/colourful-text";
import { AnimatedTestimonials } from './ui/animated-testimonials';
import { testimonials } from '../Data/testimonialdata';

import { Boxes } from "./ui/background-boxes";
function RecentProjects() {
  return (
    <div id="projects" className=' text-white text-center text-6xl mt-0'>

     {/* i am designing here box background style ysing asternity UI */}

     <div className="pt-16 relative w-full overflow-hidden bg-[#00000e] flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-[#00000b] z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <Boxes />
       <div className="flex  justify-center 
         relative overflow-hidden">
        <h1
            className="text-2xl md:text-4xl lg:text-5xl font-bold
                        text-center text-[#becbe8] relative z-21 font-sans 
                        w-[90%] md:w-[70%] mx-auto"
            >
            A Showcase of My Featured{" "}
            <span className="whitespace-nowrap">
                <ColourfulText text="Projects" />
            </span>{" "}
            and Technical Contributions
        </h1>

    </div>

      <div className='mt-1 sm:mt-5  z-21 '>

        <AnimatedTestimonials testimonials={testimonials} />
    
      </div>


    </div>

    
        
    </div>
  )
}

export default RecentProjects