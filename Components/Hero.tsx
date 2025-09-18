import React from 'react'
import { Spotlight } from './ui/spotlight'
import { cn } from "@/lib/utils";
import { BackgroundBeamsWithCollision } from './ui/background-beams-with-collision';
import { TextGenerateEffect } from './ui/TextGenerateEffect';
import Link from 'next/link';
import MagicButton from './ui/MagicButton';
import { FaLocationArrow } from 'react-icons/fa';
import Image from 'next/image';
function Hero() {
  return (
    <div className='relative pt-0  overflow-hidden min-w-[100%] flex items-center justify-center sm:pb-0 '>
        
      

     <Spotlight
        className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen ' fill="white"
      />

      <Spotlight
        className='top-10 left-full h-[80vh] w-[50vw]   ' fill="purple"
      />

      <Spotlight
        className='top-28 left-80  h-[80vh] w-[50vw] ' fill="blue"
      />
      

      <div className=" flex h-full w-full items-center justify-center bg-white
       dark:bg-gray-950  absolute top-0 left-0">

      <BackgroundBeamsWithCollision   className="absolute inset-0 z-10 pointer-events-none ">
        <div className="relative">
        </div>
      </BackgroundBeamsWithCollision>

      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)]",
        )}
      />
      
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center
       bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black-100">        
       </div>
    </div>     

    <div className='flex justify-center  items-center relative  my-20 z-10'>
        <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col 
        items-center justify-center'>
         <h1 className='uppercase tracking-widest text-xs text-center
           text-blue-100 max-w-80 mb-6'>
           Powering the Web with Next.js
         </h1>
          



          <div className='w-40 h-40 rounded-full overflow-hidden
          border-2 border-transparent bg-white bg-clip-padding 
          [background:linear-gradient(white,white)_padding-box,linear-gradient(to_right,#3b82f6,#a855f7)_border-box] 
          animate-rotate-border '>
             <Image src="/myphoto.jpg" width={100} height={100} alt="logo"
             className='w-full h-full object-cover' />
         </div>

          {/*I have given a special text hover effect for name  */}
          {/* <div className="h-40 flex items-center justify-center">
            < TextHoverEffect text="ABHISHEK KUMAR" />
          </div> */}

         <TextGenerateEffect
             className='text-center text-[40px] text-xl md:text-3xl lg:text-4xl '
             words='Aspiring Software Engineer | B.Tech ECE @ NIT Patna 
             | Passionate About Building Scalable Software Solutions'
         />

         <p className='text-center text-sm   mb-4
         md:text-lg lg:text-xl text-gray-400'>
           I&apos;m Abhishek, a web developer focused on crafting clean, efficient, and innovative web experiences.
         </p>

        <div className='my-4 space-x-4 flex'>
        <Link href="#about" className='' >
            <MagicButton 
               title="Show my work"
             />
         </Link>

          <Link href="/resume_ai.pdf" download="resume.pdf" className='' >
            <MagicButton
              title="Download Resume"
              icon={<FaLocationArrow className='w-3 h-3 text-white '/>}
              position='right'
              
            />
         </Link>
        </div>

    </div>


    </div>
    </div>
  )
}

export default Hero