'use client'
import './../../../globals.css'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Mypython from '/public/python.svg'
import Image from 'next/image';
import MyCisco from '/public/cisco_logo.svg'
import MyTenable from '/public/tenable.svg'
import MySolarwinds from '/public/solarwinds.svg'

export default function TEKPage(){
    return(
<motion.div className="z-[50] w-full min-h-full flex flex-col flex-nowrap scroller chromescrollers overflow-y-scroll"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}>

    <motion.div className="grid min-w-[95%] min-h-[30%] grid-cols-2 grid-rows-2 grid-flow-col justify-center items-center overflow-hidden gap-2 mt-2 mx-2">
        <div className="h-full w-full redBGhalfopacity self-center"></div>

        <div className="h-full w-full flex flex-col-reverse myBlackShade self-center"><div className="p-2 text-xs text-[rgba(200,200,200,1)] italic">June2022-Dec2022</div></div>
        
        <div className="h-full w-full flex flex-col-reverse myBlackShade place-items-end"><div className=" w-min text-2xl text-right p-2 right-0 text-[rgba(95,95,95,1)]">TEKsystems</div></div>

        <div className="h-full w-full redBGhalfopacity self-center"></div>
    </motion.div>

  
    <motion.div className="box-border w-full grow flex myGreyShadeNoOp mt-2">
        <motion.div className="bg-transparent p-2 text-[rgba(26,26,26,1)] italic indent-1 text-lg font-semibold">
                As a Cyber Security Analyst at TEKsystems, I learned the ins and outs of monitoring an enormous network for nefarious or suspicoius activity. 
        </motion.div>
    </motion.div>
    <motion.div className="box-border myBlackShade flex w-full grow">
        <motion.div className="flex flex-col p-2 text-[rgba(200,200,200,1)] justify-center">
            <span className="flex min-w-max justify-center m-8 text-xl font-thin">Responsibility Overview</span>
            <span className="flex indent-4 mb-8">Perform Computer Security Incident Response activities for a large organization and coordinate with other government agencies to record and report incidents. Monitor and analyze Intrusion Detection Systems (IDS) to identify security issues for remediation. Recognize potential, successful, and unsuccessful intrusion attempts and compromises through review and analyses of relevant event detail and summary information. Evaluate firewall change requests and assess organizational risk. Communicate alerts to agencies regarding intrusions and compromises to their network infrastructure, applications and operating systems. Assist with implementation of counter-measures or mitigating controls. Ensure the integrity and protection of networks, systems, and applications by technical enforcement of organizational security policies, through monitoring of vulnerability scanning devices. Perform periodic and on-demand system audits and vulnerability assessments, including user accounts, application access, file system and external Web integrity scans to determine compliance. Prepares incident report of analysis methodology and results. Provide guidance and work leadership to less-experienced technical staff members.</span>
        </motion.div>
    </motion.div>
    <motion.div className="box-border myGreyShadeNoOp flex w-full grow">
        <motion.div className="flex flex-col p-2 text-[rgba(200,200,200,1)] justify-center">
            <span className="flex min-w-max whitespace-pre my-8 ">Project <span className="italic text-rose-900 font-bold">Highlight</span></span>
            <div className="flex flex-col mb-8">

                <div className="my-2 text-xl text-[rgba(26,26,26,1)]">Mysterious/Suspicoius workstation investigation</div>
 
                <div className="my-2 font-semibold">Summary: Investigated and resolved issue with OT workstation plugged into wrong network</div>

                <div className="my-2 underline underline-offset-8">Initial Incident:</div>
 
                <div className="my-2 indent-4">Weekly scans for a particular Air Force base came back with suspicious LDAP activity (suspicous because it appeared that a workstation was plugged in but wasn't on our domain). I immediately reached out to the base OSR (onsite rep) and then went into eMASS to check if that particular MAC-Address was registered in any of the assets/plans. I later had the workstation quarentined until the investigation concluded.</div>
 
                <div className="my-2 underline underline-offset-8">Resolution:</div>
                
                <div className="my-2 indent-4">It turned out the workstation was supposed to interface with thier OT server (Siemens) and was plugged into the wrong port. The confusion lead to the workstation getting a legitimate IP address for that subnet and was now wreaking havoc on our scanners. The OSR had the workstation relocated to it's rightful port and we resolved the incident without issue.</div>

                <div className="my-2 underline underline-offset-8">Issues Encountered along the way:</div>

                <div className="my-2 indent-4">Personel Responsibility, timezone issues </div>
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
                                alt="Tenable svg"
                                src={MyTenable}
                                priority={true}
                                sizes="100vh"
                                style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'contain'
                                }}/> 
            </div>
            <div className="flex bg-rose-900 text-black items-center justify-center">Tenable Security Center/Nessus Scanner</div>
        </div>
        <div className="grid grid-cols-2 h-20vh sm:h-full w-full">
            <div className="flex myBlackShade justify-center items-center">
                    eMASS
            </div>
            <div className="flex bg-rose-900 text-black items-center justify-center">eMass</div>
        </div>
        <div className="grid grid-cols-2 h-20vh sm:h-full w-full">
            <div className="flex myBlackShade relative items-center justify-center text-[rgba(86,26,26,1)]">
            <Image className="absolute"
                                alt="Tenable svg"
                                src={MySolarwinds}
                                priority={true}
                                sizes="100vh"
                                style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'contain'
                                }}/> 
            </div>
            <div className="flex bg-rose-900 text-black items-center justify-center">SolarWinds</div>
        </div>
        </div>
        
        
        
    </motion.div>


</motion.div>
    )
}