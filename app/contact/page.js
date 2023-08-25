'use client'
import Link from 'next/link';
import { motion } from 'framer-motion'

const MotionLink = motion(Link); 

export default function myTestPage(){
    return(
        <div className="h-[80%] mt-[-20%] sm:mt-0 w-full flex justify-center items-center">
            <div className="h-[90%] w-[90%] mygridcont">

                <MotionLink 
                    href="/contact"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: .92 }}
                    transition={{ type: "spring", stiffness: 100, damping: 17 }}
                    className="text-[rgba(95,95,95,1)] text-3xl font-medium tracking-tighter redBGhalfopacity m-2 col-span-6 row-span-5 ">Logan Clemons
                    <div className="text-[rgba(95,95,95,1)] text-base">logan.clemons.2@gmail.com</div>
                    <div className="text-[rgba(95,95,95,1)] text-base">256-425-4412</div>
                    <div className="text-[rgba(95,95,95,1)] text-base">Panama City Beach, FL</div>
                    </MotionLink>

                <MotionLink
                    href="/home"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: .92 }}
                    transition={{ type: "spring", stiffness: 100, damping: 17 }}
                    className="text-[rgba(26,26,26,1)] text-3xl font-medium tracking-tightermy m-2 col-span-4 row-span-6 flex flex-row-reverse break-all"></MotionLink>
                
                <MotionLink 
                    href="/experience/CyberSecurity"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: .92 }}
                    transition={{ type: "spring", stiffness: 100, damping: 17 }}
                    className="text-[rgba(95,95,95,1)] text-3xl font-medium tracking-tighter m-2 col-span-5 row-span-5 flex flex-col-reverse"></MotionLink>
                
                <MotionLink 
                    href="/home"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: .92 }}
                    transition={{ type: "spring", stiffness: 100, damping: 17 }}
                    className="text-white m-2 row-start-7 col-start-6 myBlackShade col-span-6 row-span-4 flex justify-center items-center">
                        <div className="indent-2 text-[rgba(95,95,95,1)] text-3xl font-semibold tracking-tighter p-2 flex">Home</div>
                    </MotionLink>

                <MotionLink 
                    href="/home"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: .92 }}
                    transition={{ type: "spring", stiffness: 100, damping: 17 }}
                    className="text-black col-start-6 row-start-6"></MotionLink>





</div>
        </div>
        
)}