import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
// import styles from '../styles/Home.module.css'

export default function Home() {
    const [isMobile, setIsMobile] = useState(false)
    return ( <
        div className = "bg-[#EBC761] w-full min-h-screen" >
        <
        Head >
        <
        title > Homepage Pendaftaran < /title> <
        /Head> <
        div className = 'flex flex-col lg:flex-row bg=[#F1D78E]' >
        <
        div className = 'bg-[#F1D78E] border-b lg:border-b-0 flex items-center justify-between' >
        <
        div className = 'flex items-center' >
        <
        div className = 'relative pt-2 pl-2' >
        <
        Image src = "/logoPerak.svg"
        width = { 50 }
        height = { 50 }
        alt = "logoPerak" /
        >
        <
        /div> <
        div className = 'text-sm md: pl-3 font-bold font-sans' >
        <
        h1 > PESTA RAKYAT KOMPUTER < /h1> <
        /div> <
        /div> <
        div className = 'pr-2 block lg:hidden' >
        <
        button className = 'font-bold font-sans'
        onClick = {
            () => setIsMobile(true) } > Pendaftaran < /button> <
        /div> <
        /div> <
        div className = 'lg:flex flex-col lg:flex-row justify-end bg-[#F1D78E] w-full py-4 lg:py-0 hidden md:hidden' >
        <
        div className = ' flex flex-col lg:flex-row' >
        <
        a href = "#"
        className = 'block px-4 py-3 lg:py-4 text-sm font-bold font-sans ' > Score < /a> <
        a href = "#"
        className = 'block px-4 py-3 lg:py-4 text-sm font-bold font-sans' > Games Map < /a> <
        a href = "#"
        className = 'block px-4 py-3 lg:py-4 text-sm font-bold font-sans' > Team Profile < /a> <
        a href = "#"
        className = 'block px-4 py-3 lg:py-4 text-sm font-bold font-sans' > News < /a> <
        a href = "#"
        className = 'block px-4 py-3 lg:py-4 text-sm font-bold font-sans' > Explore Cafeteria < /a> <
        a href = "#"
        className = 'block px-4 py-3 lg:py-4 text-sm font-bold font-sans' > Merchandise < /a> <
        /div> <
        /div> <
        /div>   <
        div className = 'relative mr-40 ' >
        <
        div className = 'absolute top-40 right-80' >
        <
        Image src = "/kuning.svg"
        width = { 330 }
        height = { 300 }
        alt = "kuning" /
        >
        <
        /div> <
        div className = 'absolute top-40 -right-[58]' >
        <
        Image src = "/biru.svg"
        width = { 330 }
        height = { 300 }
        alt = "kuning" /
        >
        <
        /div>  <
        /div> <
        /div>
    )
}