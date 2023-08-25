
'use client'
import Link from 'next/link';
import { motion } from 'framer-motion'

const MotionLink = motion(Link);

export default function myTestPage(){
    return(
        <div className="h-[80%] mt-[-20%] sm:mt-0 w-full flex justify-center items-center">
            <motion.div className="h-[90%] w-[90%] mygridcont"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                          duration: 0.8,
                          delay: 0.5,
                          ease: [0, 0.71, 0.2, 1.01]}}>

                <MotionLink
                    href="/experience"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: .92 }}
                    transition={{ type: "spring", stiffness: 100, damping: 17 }}
                    className="text-[rgba(86,26,26,1)] text-3xl font-medium tracking-tighter myGreyShade m-2 col-span-6 row-span-5 ">Experience</MotionLink>
                <MotionLink 
                    href="https://github.com/ClemonsLA/"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: .92 }}
                    transition={{ type: "spring", stiffness: 100, damping: 17 }}
                    className="text-[rgba(26,26,26,1)] text-3xl font-medium tracking-tightermy myGreyShade m-2 col-span-4 row-span-6 flex flex-row-reverse">Github</MotionLink>
                <MotionLink 
                    href="/contact"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: .92 }}
                    transition={{ type: "spring", stiffness: 100, damping: 17 }}
                    className="text-[rgba(86,26,26,1)] text-3xl font-medium tracking-tighter myGreyShade m-2 col-span-5 row-span-5 flex flex-col-reverse">Contact</MotionLink>
                <MotionLink 
                    href="/experience"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: .92 }}
                    transition={{ type: "spring", stiffness: 100, damping: 17 }}
                    className="text-white m-2 row-start-7 col-start-6 myBlackShade col-span-6 row-span-4 flex items-center">
                        <div className="indent-2 text-[rgba(95,95,95,1)] font-semibold tracking-tighter p-2 flex justify-center items-center">As an Air Force veteran with almost a decade of IT experience, I will put my leadership and technical expertise to work for your IT infrastructure.</div>
                    </MotionLink>

                <div className="text-black redBGhalfopacity col-start-6 row-start-6 flex overflow-hidden">
                    <MotionLink
                        href="/experience" 
                        animate={{ x: [130, -500] }}
                        transition={{
                            duration: 7,
                            repeat: Infinity,
                          }}
                        className="w-full whitespace-nowrap flex items-center text-[rgba(26,26,26,1)] text-2xl tracking-tighter whitespace-pre">                                   Logan Clemons
                    </MotionLink>
                </div>






            </motion.div>
        </div>
        
)}