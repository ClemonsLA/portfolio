'use client'
import { motion } from 'framer-motion'
import Link from 'next/link';

const MotionLink = motion(Link); 

export default function myTestPage(){
    return(
        <div className="h-[90%] w-full flex justify-center items-center">
            <div className="h-[90%] w-[90%] mygridcont">

                <MotionLink 
                    href="/experience/ColeEngineering"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: .92 }}
                    transition={{ type: "spring", stiffness: 100, damping: 17 }}
                    className="text-[rgba(95,95,95,1)] text-3xl font-medium tracking-tighter myBlackShade m-2 col-span-6 row-span-5 ">Cole Engineering</MotionLink>

                <MotionLink 
                    href="/experience/Sim-S"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: .92 }}
                    transition={{ type: "spring", stiffness: 100, damping: 17 }}
                    className="text-[rgba(95,95,95,1)] text-3xl font-medium tracking-tightermy myBlackShade m-2 col-span-4 row-span-6 flex flex-row-reverse break-all">Sim-S</MotionLink>
                
                <MotionLink
                    href="/experience"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: .92 }}
                    transition={{ type: "spring", stiffness: 100, damping: 17 }}
                    className="text-[rgba(95,95,95,1)] text-3xl font-medium tracking-tighter myBlackShade m-2 col-span-5 row-span-5 flex flex-col-reverse">Personal Projects</MotionLink>
                
                <MotionLink 
                    href="/experience"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: .92 }}
                    transition={{ type: "spring", stiffness: 100, damping: 17 }}
                    className="text-white m-2 row-start-7 col-start-6 myBlackShade col-span-6 row-span-4 flex justify-center items-center">
                        <div className="indent-2 text-[rgba(86,26,26,1)] text-3xl font-semibold tracking-tighter p-2 flex">Back</div>
                    </MotionLink>

                <MotionLink
                    href="/experience"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: .92 }}
                    transition={{ type: "spring", stiffness: 100, damping: 17 }}
                    className="text-black col-start-6 row-start-6"></MotionLink>





</div>
        </div>
        
)}