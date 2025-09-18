import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/bento-grid'
import { gridItems } from '@/Data'
import { cn } from "@/lib/utils";

function Grid() {
  return (
    <section id="about" className=' relative w-full min-h-screen px-7 pt-10'>

      <div className="absolute inset-0  h-full w-full  bg-white dark:bg-[#040a17]">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:20px_20px]",
          "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]",
          "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]",
        )}
      />
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>

    </div>

    

     <div className='absolute inset-0  h-full w-full  bg-white dark:bg-[#03031978] '></div>


     <BentoGrid >
      
        {gridItems.map((item,i)=>(
          <BentoGridItem 
          key={i} 
          id={item.id}
          title={item.title} 
          description={item.description}
          className={item.className}
          img={item.img}
          imgClassName={item.imgClassName}
          titleClassName={item.titleClassName}
          spareImg={item.spareImg}
          />
        
        ))}
     </BentoGrid>

    </section>
  )
}

export default Grid