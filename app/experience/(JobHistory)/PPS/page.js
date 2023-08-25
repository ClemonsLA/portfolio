'use client'
import './../../../globals.css'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Mypython from '/public/python.svg'
import Image from 'next/image';
import MyCisco from '/public/cisco_logo.svg'

export default function PPSPage(){
    return(
<motion.div className="z-[50] w-full min-h-full flex flex-col flex-nowrap scroller chromescrollers overflow-y-scroll"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}>

    <motion.div className="grid min-w-[95%] min-h-[30%] grid-cols-2 grid-rows-2 grid-flow-col justify-center items-center overflow-hidden gap-2 mt-2 mx-2">
        <div className="h-full w-full redBGhalfopacity self-center"></div>

        <div className="h-full w-full flex flex-col-reverse myBlackShade self-center"><div className="p-2 text-xs text-[rgba(200,200,200,1)] italic">Nov2020-Jan2022</div></div>
        
        <div className="h-full w-full flex flex-col-reverse myBlackShade place-items-end"><div className=" w-min text-2xl text-right p-2 right-0 text-[rgba(95,95,95,1)]">PPS</div></div>

        <div className="h-full w-full redBGhalfopacity self-center"></div>
    </motion.div>

  
    <motion.div className="box-border w-full grow flex myGreyShadeNoOp mt-2">
        <motion.div className="bg-transparent p-2 text-[rgba(26,26,26,1)] italic indent-1 text-lg font-semibold">
             Preferred Program Solutions was my first civilian job outside of the Air Force. The job was classified as Sys Admin, however that "classification" only really applied when were in the field. When we were at home, my main duty was cyber security.
        </motion.div>
    </motion.div>
    <motion.div className="box-border myBlackShade flex w-full grow">
        <motion.div className="flex flex-col p-2 text-[rgba(200,200,200,1)] justify-center">
            <span className="flex min-w-max justify-center m-8 text-xl font-thin">Responsibility Overview</span>
            <span className="flex indent-4 mb-8">Set up and maintain AVDAS and AVDAS components. Installing, configuring, and updating hardware and software; establishing and managing user accounts; overseeing or conducting backup and recovery tasks; implementing operational and technical security controls; and adhering to organizational security policies and procedures.</span>
        </motion.div>
    </motion.div>
    <motion.div className="box-border myGreyShadeNoOp flex w-full grow">
        <motion.div className="flex flex-col p-2 text-[rgba(200,200,200,1)] justify-center">
            <span className="flex min-w-max whitespace-pre my-8 ">Project <span className="italic text-rose-900 font-bold">Highlight</span></span>
            <div className="flex flex-col mb-8">

                <div className="my-2 text-xl text-[rgba(26,26,26,1)]">Tech Refresh</div>
 
                <div className="my-2 font-semibold">Summary: Created a new Windows 10 image (SHB Windows 10 1809) baseline, executed SCAP scans and vul scans, then Assembled a prototybe AVDAS box utilizing new TPM enabled motherboards. </div>

                <div className="my-2 underline underline-offset-8">New Windows baseline:</div>
 
                <div className="my-2 indent-4">At the time, AVDAS was on Windows 10 1607 and had numerious vulnerabilites. One of the higher-priority vulnerabilites was the lack of encrytion due to the equipment not having a TPM module. After the ISSO and I performed the ACAS scan on 1607 we talked to the system owner and concluded that it was best to just start fresh on a new baseline image, as 1607 was supposed to be EOL by the end of that year. I went onto ceds, grabbed the windows image and the deployment workbench image (custom imaging tools), then made 2 Virtual Machines. The first was the actual AVDAS baseline that contained the fresh new operating system and the programs that AVDAS needs. The second VM was for ACAS. The system owner didnt wan't to plug our classified ACAS laptops into the unclassified image (even if the the unclass image would eventually be classified after entering production) The ACAS VM was actually a windows laptop with a linux VM (RHEL). Security Center was running in the VM but the GUI was accessed with Chrome via loopback on the host. </div>
 
                <div className="my-2 underline underline-offset-8">Execution Phase:</div>
                
                <div className="my-2 indent-4">Once the image was installed and the software was fully functional, I ran  the latest windows updates, ran an ACAS scan, then made a few minor changes to help the score. I then started the SCAP scans. They were herrendous (40% compliance). Due to time constraints (have to meet POA&M date), I decided to grab a set of group policies from ceds. Even though these AVDAS machines aren't on any kind of domain, it was was easier to use group polices to knock out a good chunk of the compliance issues. From there I had a managable 80% compliance and pushed it up to the 95% after marking a lot vuls as not applicable. After the image was in decent shape I found an unutilized AVDAS box, ripped out the old motherboard, ram, and hard drive but kept the power supply and reutilized the sound card and video card. After a few days I had a prototype AVDAS box assembled with the new parts. I threw the new image on it, ran a final ACAS scan, A final SCAP scan, then called the ISSO and gave him the SCAP file and the ACAS score for him to put in eMass. We later briefed all the System Owner on a few vuls stemming from AVDAS using old software.</div>

                <div className="my-2 underline underline-offset-8">Issues Encountered along the way:</div>

                <div className="my-2 indent-4">Parts, ancient software, some SCAP requirements (a few vuls for COTs software packages.. AVDAS in our case.. requires knowledge of C++ libraries)</div>
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
                                    SCAP
                                </div>
                                <div className="flex bg-rose-900 text-black items-center justify-center">SCAP</div>
                    </div>
                    <div className="grid grid-cols-2 h-20vh sm:h-full w-full">
                                <div className="flex myBlackShade relative text-rose-900 justify-center">
                                    Tenable
                                </div>
                                <div className="flex bg-rose-900 text-black items-center justify-center">Security Center</div>
                    </div>


        </div>
        
        
        
    </motion.div>


</motion.div>
    )
}