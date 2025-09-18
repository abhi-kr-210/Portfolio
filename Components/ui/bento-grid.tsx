'use client';
import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./background-gradient-animation";
import {GlobeDemo} from "./GridGlobe";
import { useState } from "react";
import animationData from '../../Data/confetti.json';
import Lottie from 'lottie-react';
import MagicButton from "./MagicButton";
import { IoCopyOutline } from "react-icons/io5";
import { techstack } from "@/Data";
import Image from "next/image";
export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (

    <div>
        <h1
          className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-center 
                    relative z-20 w-[90%] md:w-[70%] mx-auto  mb-6 md:mb-0"
        >
          <span className="bg-gradient-to-r from-pink-400 via-purple-500 to-blue-500 
                          bg-clip-text text-transparent drop-shadow-lg">
            About
          </span>{" "}
          <span className="font-[cursive] text-[#d4c5f8] italic tracking-wide">
            me
          </span>
        </h1>
    
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:grid-cols-5 md:auto-rows-auto  md:pt-16 pb-16",
          // "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3",
        className,
      )}
    >

      {children}
    </div>
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  id?:number;
  img?:string;
  imgClassName?:string;
  titleClassName?:string;
  spareImg?:string;
}) => {

  const [copied,setCopied] = useState(false);

  const handleCopy=()=>{
       navigator.clipboard.writeText("abhikumaroffc@gmail.com");
       setCopied(true);
  }
  return (
    <div
      className={cn(
        `group/bento shadow-input relative overflow-hidden row-span-1 flex
         flex-col justify-between  rounded-xl 
        transition duration-200  border border-white/[0.1]
          hover:shadow-xl dark:shadow-none`,

        className,
      )}

      style={{
        backgroundColor: '#010a1a',
        background: 'linear-gradient(90deg,rgba(1, 10, 26, 1) 0%, rgba(0, 12, 33, 1) 35%, rgba(0, 15, 38, 1) 100%)'
      }}

    >
         

        <div className={`${id===6&&'flex items-center justify-center'} h-full w-full'`} >
            <div className="w-full h-full absolute">
                <img src={img} 
                alt={img} 
                className={cn(imgClassName,'object-cover,object-center')} 
                 />
            </div>

            <div className={`absolute right-0 -bottom-5 ${id===5&& 'w-full opacity-80'}`}>

             {
               spareImg && (
                 <img src={spareImg} 
                 alt={spareImg} 
                 className='object-cover,object-center,h-full w-full'
                  />
               )
             }
            </div>

            {
              id===6&&(
                 <BackgroundGradientAnimation>
                   <div className="absolute z-50 flex items-center justify-center text-white
                   font-bold " />
                 </BackgroundGradientAnimation>
              )
            }

            <div className={cn(
              titleClassName,'group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10 '
            )}>


                <div className={`font-sans font-bold text-lg lg:text-3xl max-w-96 z-11 mb-3
                 `}>
                {title}

              </div>
              <div
                className={`font-sans text-[12px] sm:text-sm md:text-xs lg:text-base 
                  font-extralight text-[#dfdfe6] dark:text-neutral-200 z-10 
                  ${id === 1 && "bg-slate-900/60 border border-white/[0.1] p-5 rounded-lg"}`}
              >
                {description}
              </div>



           

            {
              id===2&&<GlobeDemo/>
            }

            {
              id===3&&(
                <div className="w-full h-full ">
                     <div className='flex  justify-center w-full'>
                        <h1
                        className="text-2xl sm:text-3xl text-center font-extrabold 
                        bg-gradient-to-r from-pink-500 via-yellow-500 to-red-500 
                        text-transparent bg-clip-text drop-shadow-md tracking-wide
                        animate-gradient"
                        >
                       My Tech <span className="text-black dark:text-white animate-pulse">Stack</span>
                        </h1>
                      </div>

                    <div className='w-full  mt-10'>
                      <div  className='flex flex-wrap gap-2 justify-center'>
                          {
                            techstack.map((items,i)=>(
                                <div 
                                key={i} 
                                className='px-4 py-2 rounded-full cursor-pointer hover:bg-slate-600
                                transition-all duration-300 bg-gray-200 dark:bg-gray-900
                                border border-gray-600 hover:scale-110
                                dark:text-gray-300 text-gray-900 font-semibold text-[11px] md:text-[15px] flex items-center gap-1'>
                                    <div>
                                      <Image src={items.icon} alt={items.name} width={20} height={20} /> 
                                    </div>
                                    <div>{items.name}</div>

                                </div>
                            ))
                          }
                      </div>
                  </div>
                      

                </div>
              )}
            
            {
              id===6&&(
                <div className="mt-5 relative ">
                    <div className={`absolute -bottom-5 right-0`}
                    >
                      <Lottie
                        animationData={animationData}
                        loop={copied}
                        autoplay={copied}
                        rendererSettings={{
                          preserveAspectRatio: "xMidYMid slice",
                        }}
                      />
                      
                   </div>
                     <MagicButton
                     
                       title={copied?'Email Copied':'Copy my Email'}
                       icon={<IoCopyOutline/>}
                       position='left'
                       otherClasses="!bg-[#161a31]"
                       handleClick={handleCopy}
                     />

                </div>


              )}

        </div>
    </div>
     </div>
  );
};
