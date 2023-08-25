'use client'


import React from 'react'
import ReactPlayer from 'react-player/lazy'
import { memo, useState} from 'react'
import { useEffect } from 'react'


export default function VideoPlayerComp({url}){
    const [hasWindow, setHasWindow] = useState(false);
    useEffect(() => { if (typeof window !== "undefined") { setHasWindow(true); } }, []); 
        return ( <> {hasWindow && <ReactPlayer url={url} width='1920px' height='1080px' playing={true} loop={true} muted={true} />} </> )
}