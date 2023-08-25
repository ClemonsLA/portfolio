'use client'

import './globals.css'
import Image from 'next/image';
import MyBackGround from './../public/mainBackground.svg'
import { IBM_Plex_Sans } from 'next/font/google'
import React from 'react'
import { Suspense } from 'react'
import ReactPlayer from 'react-player/lazy'
import { memo, useState} from 'react'
import { useEffect } from 'react'


const ibm_plex_sans = IBM_Plex_Sans({
    weight: ['100', '200', '300', '400', '500', '600', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-ibm_plex_sans',
  })





export default function RootLayout({children}){


    function VideoPlayerComp({url}){

        const [hasWindow, setHasWindow] = useState(false);

        
        useEffect(() => { if (typeof window !== "undefined") { setHasWindow(true); } }, []); 
            return ( <> {hasWindow && <ReactPlayer url={url} width='1920px' height='1080px' playing={true} loop={true} muted={true}/>} </> )


        }
    





    return (
        <html lang="en" className={`${ibm_plex_sans.variable}`}>
            <body className="">
                <Suspense fallback={<div className="absolute w-full h-full bg-[rgba(95,95,95,1)] flex"></div>}>
                <main className="relative box-border flex flex-col w-screen h-screen items-center justify-center overflow-hidden">
                <div className="isolate z-[-1] absolute w-screen h-screen opacity-90">
                             <Image
                             alt="myBackground"
                             src={MyBackGround}
                             priority={true}
                             sizes="100vh"
                             width={1920}
                             height={1080}
                             style={{
                              width: '100%',
                              height: '100%',
                              objectFit: 'fill'
                            }}/>  
                </div>

                <div className="z-[-2] absolute h-full w-full">     
                    <VideoPlayerComp url="https://res.cloudinary.com/dd7mi7bpp/video/upload/v1692995571/AdobeStock_331078456_zlhlem.mov"/>
                </div>
                

              
                {children}
                </main>
                </Suspense>
            </body>
        </html>
    )
};