"use client";
import React from 'react'
import { FaGraduationCap } from 'react-icons/fa'
import { motion } from "motion/react";
import { EducationDetails } from './ui/educationcard';


function EducationSection() {
  return (
    <div id="education" className='pt-0 sm:pt-10 pb-16 '>
        <div className='flex justify-center items-center gap-3'>
           <div>
            <motion.div
                initial={{ y: 0 }}
                animate={{ y: [0, -10, 0] }} // floating effect
                transition={{
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 2,
                  ease: "easeInOut",
                }}
                className="flex justify-center"
              >
              <FaGraduationCap className='text-6xl sm:text-8xl text-white'/>
            </motion.div>

          </div>
           <h1 className='bg-gradient-to-tr from-[#e0d5f6] via-[#9a75ea] to-[#9a75ea]
           bg-clip-text text-transparent drop-shadow-2xl
           text-3xl md:text-4xl 
           lg:text-5xl font-bold text-center 
            font-sans '>Education
            </h1>
        </div>    
         <div>
          <EducationDetails/>        
          </div>

   
    </div>
  )
}

export default EducationSection