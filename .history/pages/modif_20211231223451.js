import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
// import styles from '../styles/Home.module.css'

export default function Home() {
    const [isMobile, setIsMobile] = useState(false)
    return ( <
        div className = "bg-[#EBC761] w-full h-screen" >

        <
        div class = "absolute -top-2 -..." >
        <
        Image src = "/biru.svg"
        width = { 300 }
        height = { 100 }
        alt = "biru" /
        >
        <
        /div>


        <
        /div>
    )
}