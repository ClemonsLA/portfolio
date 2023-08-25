'use client'
import './../../../globals.css'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Mypython from '/public/python.svg'
import Image from 'next/image';
import MyCisco from '/public/cisco_logo.svg'

export default function SimSPage(){
    return(
<motion.div className="z-[50] w-full min-h-full flex flex-col flex-nowrap scroller chromescrollers overflow-y-scroll"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}>

    <motion.div className="grid min-w-[95%] min-h-[30%] grid-cols-2 grid-rows-2 grid-flow-col justify-center items-center overflow-hidden gap-2 mt-2 mx-2">
        <div className="h-full w-full redBGhalfopacity self-center"></div>

        <div className="h-full w-full flex flex-col-reverse myBlackShade self-center"><div className="p-2 text-xs text-[rgba(200,200,200,1)] italic">June2022-Dec2022</div></div>
        
        <div className="h-full w-full flex flex-col-reverse myBlackShade place-items-end"><div className=" w-min text-2xl text-right p-2 right-0 text-[rgba(95,95,95,1)]">Sim-S</div></div>

        <div className="h-full w-full redBGhalfopacity self-center"></div>
    </motion.div>

  
    <motion.div className="box-border w-full grow flex myGreyShadeNoOp mt-2">
        <motion.div className="bg-transparent p-2 text-[rgba(26,26,26,1)] italic indent-1 text-lg font-semibold">
        Sim-S is where I honed my skills in routing-protocols, switching, firewalls, and Air Force base network architecture. This was necessary to navigate and resolve issues within the COINv2 network, which spanned to virtually every Air Force base, domestic and international.
        </motion.div>
    </motion.div>
    <motion.div className="box-border myBlackShade flex w-full grow">
        <motion.div className="flex flex-col p-2 text-[rgba(200,200,200,1)] justify-center">
            <span className="flex min-w-max justify-center m-8 text-xl font-thin">Responsibility Overview</span>
            <span className="flex indent-4 mb-8">Analyze, administer and maintain voice, video, and/or data communications networks. Manage the usage and performance of voice, video and/or data communications networks. Maintain network security and ensure compliance with security polices and procedures. Evaluate hardware and software, including peripheral, output, and related equipment. Participate in the development and implementation of network-related procedures and standards. Lead aspects of major network installations and upgrades. Interface with vendors to ensure appropriate resolution during network outages or periods of reduced performance. Develop and implement testing strategies and document results.</span>
        </motion.div>
    </motion.div>
    <motion.div className="box-border myGreyShadeNoOp flex w-full grow">
        <motion.div className="flex flex-col p-2 text-[rgba(200,200,200,1)] justify-center">
            <span className="flex min-w-max whitespace-pre my-8 ">Project <span className="italic text-rose-900 font-bold">Highlight</span></span>
            <div className="flex flex-col mb-8">

                <div className="my-2 text-xl text-[rgba(26,26,26,1)]">COINv2 Upgrade</div>
 
                <div className="my-2 font-semibold">Summary: Update several routers with old scripts to allow for proper logging</div>

                <div className="my-2 underline underline-offset-8">Pre-Maintenance window:</div>
 
                <div className="my-2 indent-4">Utilize python/netmiko to iterate through a list of routers/firewalls and match a set of criteria. If criteria matches, add router/firewall to new list. </div>
 
                <div className="my-2 underline underline-offset-8">During Maintence window:</div>
                
                <div className="my-2 indent-4">Utilize python/netmiko to iterate through new list and update scripts that sent logs to a central location for solarwinds to collect/manage</div>

                <div className="my-2 underline underline-offset-8">Issues Encountered along the way:</div>

                <div className="my-2 indent-4">IOS mismatches, firewall rules, McAfee issues, bgp/OSPF issues</div>
            </div> 
        </motion.div>
    </motion.div>

    <motion.div className="box-border w-full min-h-[20%] myBlackShade">
        <div className="w-full">
            <div className="flex text-2xl font-bold text-[rgba(95,95,95,1)] items-center justify-center">Tools</div>
        </div>   
        <div className="myBlackShade">
        <div className="grid grid-cols-2 h-20vh sm:h-full w-full ">
            <div className="flex myBlackShade relative">
            <Image className="absolute"
                                alt="Python svg"
                                src={Mypython}
                                priority={true}
                                sizes="100vh"
                                style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'contain'
                                }}/> 
            </div>
            <div className="flex bg-rose-900 text-black items-center justify-center">Python</div>
        </div>
        <div className="grid grid-cols-2 h-20vh sm:h-full w-full">
            <div className="flex myBlackShade relative">
            <Image className="absolute"
                                alt="Python svg"
                                src={MyCisco}
                                priority={true}
                                sizes="100vh"
                                style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'contain'
                                }}/> 
            </div>
            <div className="flex bg-rose-900 text-black items-center justify-center">Cisco</div>
        </div>
        <div className="grid grid-cols-2 h-20vh sm:h-full w-full">
            <div className="flex myBlackShade relative items-center justify-center text-[rgba(86,26,26,1)]">
                SecureCRT 
            </div>
            <div className="flex bg-rose-900 text-black items-center justify-center">SecureCRT</div>
        </div>
        </div>
        
        
        
    </motion.div>


</motion.div>
    )
}