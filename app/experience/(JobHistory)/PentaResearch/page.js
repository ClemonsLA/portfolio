'use client'
import './../../../globals.css'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Mypython from '/public/python.svg'
import Image from 'next/image';
import MyCisco from '/public/cisco_logo.svg'

export default function PentaPage(){
    return(
<motion.div className="z-[50] w-full min-h-full flex flex-col flex-nowrap scroller chromescrollers overflow-y-scroll"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}>

    <motion.div className="grid min-w-[95%] min-h-[30%] grid-cols-2 grid-rows-2 grid-flow-col justify-center items-center overflow-hidden gap-2 mt-2 mx-2">
        <div className="h-full w-full redBGhalfopacity self-center"></div>

        <div className="h-full w-full flex flex-col-reverse myBlackShade self-center"><div className="p-2 text-xs text-[rgba(200,200,200,1)] italic">Jan2022-May2022</div></div>
        
        <div className="h-full w-full flex flex-col-reverse myBlackShade place-items-end"><div className=" w-min text-2xl text-right p-2 right-0 text-[rgba(95,95,95,1)]">Penta Research</div></div>

        <div className="h-full w-full redBGhalfopacity self-center"></div>
    </motion.div>

  
    <motion.div className="box-border w-full grow flex myGreyShadeNoOp mt-2">
        <motion.div className="bg-transparent p-2 text-[rgba(26,26,26,1)] italic indent-1 text-lg font-semibold">
             As a Jr ISSO at Penta Research, I developed a solid foundation for Cyber Security planning and documentation in eMass.
        </motion.div>
    </motion.div>
    <motion.div className="box-border myBlackShade flex w-full grow">
        <motion.div className="flex flex-col p-2 text-[rgba(200,200,200,1)] justify-center">
            <span className="flex min-w-max justify-center m-8 text-xl font-thin">Responsibility Overview</span>
            <span className="flex indent-4 mb-8">Support the Risk Management Framework (RMF) processes on all operating systems including periodic vulnerability scans, ensuring the Information Assurance Vulnerability Alerts (IAVAs) and Security Technical Implementation Guides (STIGs) are applied periodically to maintain required cybersecurity posture and necessary documentation. Support the lab's services such as the domain controllers, group policy, active directory, and account management for Linux systems as well as some Microsoft systems.</span>
        </motion.div>
    </motion.div>
    <motion.div className="box-border myGreyShadeNoOp flex w-full grow">
        <motion.div className="flex flex-col p-2 text-[rgba(200,200,200,1)] justify-center">
            <span className="flex min-w-max whitespace-pre my-8 ">Project <span className="italic text-rose-900 font-bold">Highlight</span></span>
            <div className="flex flex-col mb-8">

                <div className="my-2 text-xl text-[rgba(26,26,26,1)]">Obtian Interim Authority To Test (IATT)</div>
 
                <div className="my-2 font-semibold">Summary: Engaged with engineers responsible for building the Ground Missile Defense Integration Lab to collaboratively devise a comprehensive strategy for acquiring, relocating, and adequately documenting the necessary equipment/procedures in eMASS.</div>

                <div className="my-2 underline underline-offset-8">Planning Phase:</div>
 
                <div className="my-2 indent-4">The first 2 months of standing up the lab were pure planning. We gathered all the equipment that was getting transfered to us from the last lab. We then had to mentally and sometimes physically put together parts of the HWITL (Hardware in the loop) to figure out what was missing and needed to be purchased. Everything from cables to racks/diskdrives and safety equipment needed to be accounted for/documented in order to get approval to test. </div>
 
                <div className="my-2 underline underline-offset-8">Execution Phase:</div>
                
                <div className="my-2 indent-4">After all the pieces were under one roof, I (and the other ISSO) documented the serial, make, and model of over a thousand pieces of equipment and then manually put them in eMass. Luckily the ISSM gave us access to a similar lab that recently renewed their ATO in eMASS which sped up the approval process.</div>

                <div className="my-2 underline underline-offset-8">Issues Encountered along the way:</div>

                <div className="my-2 indent-4">communication, communication, communication. This job holds the record for most meetings and talks than I've ever done in my career.  Meetings could last for 10 hours in cases where we needed to understand how a fundamental piece of equipment works. Lots of figuring out exactly how the Aproving authority wanted documentation as well.</div>
            </div> 
        </motion.div>
    </motion.div>

    <motion.div className="box-border w-full min-h-[20%] myBlackShade">
        <div className="w-full">
            <div className="flex text-2xl font-bold text-[rgba(95,95,95,1)] items-center justify-center">Tools</div>
        </div> 

        <div className="myBlackShade">

                    <div className="grid grid-cols-2 h-20vh sm:h-full w-full ">
                                <div className="flex myBlackShade relative text-rose-900 justify-center">
                                    eMASS
                                </div>
                                <div className="flex bg-rose-900 text-black items-center justify-center">eMASS</div>
                    </div>
                    <div className="grid grid-cols-2 h-20vh sm:h-full w-full">
                                <div className="flex myBlackShade relative text-rose-900 justify-center">
                                    Excel
                                </div>
                                <div className="flex bg-rose-900 text-black items-center justify-center">Excel</div>
                    </div>


        </div>
        
        
        
    </motion.div>


</motion.div>
    )
}