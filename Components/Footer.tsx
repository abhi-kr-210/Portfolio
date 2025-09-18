import Image from 'next/image'
import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import { socialMedia } from '@/Data'
import ContactSection from './ContactSection'

function Footer() {
  return (
    <footer className=' w-full relative ' id='contact'>
        <div className='w-full absolute left-0 -bottom-0 min-h-86 '>

          <Image
          src="/footer-grid.svg"
          alt="grid"
          width={100}
          height={100}
          className="w-full opacity-50"
          />

        </div>
        <div className='flex flex-col items-center'>
            <h1 className='text-3xl lg:text-4xl xl:text-5xl font-bold
             mx-auto text-center w-[85%] lg:w-[50%]'>Ready to Explore {" "}
                <span className='text-purple-300 mx-2'
                >Opportunities</span>
                Together? Reach Out!
            </h1>        
          <p className='text-gray-400 md:mt-10 my-5 
           mx-auto text-center w-[80%] lg:w-[50%]'>Open to internships, projects, or simply
            exchanging thoughts — drop me a message!</p>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=abhikumaroffc@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MagicButton
                  title="Let's get in touch"
                  icon={<FaLocationArrow />}
                  position="right"
                />
              </a>
                <ContactSection/>
              <div className='flex md:flex-row flex-col justify-between items-center mt-16 md:w-[80%] mb-9'>
                
                <p className='text-sm md:text-base  mt-10
                md:font-normal text-gray-400'>Copyright © 2025 Abhikumar</p>
                <div className='flex items-center md:gap-3 gap-6 mt-6'>
                   {
                     socialMedia.map((profile,i)=>(
                      <a key={i}
                      href={profile.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      >
                       <div key={i} className='w-10 h-10
                       cursor-pointer flex justify-center items-center backdrop-filter
                       backdrop-blur-lg saturate-180 bg-opacity-75 bg-gray-900 rounded-lg
                       border border-gray-600'>
                          <Image 
                          src={profile.img}
                          alt="profile"
                          width={20} height={20}/>
                       </div>
                       </a>
                     ))
                   }

                </div>
              </div>

        </div>

    </footer>
  )
}

export default Footer