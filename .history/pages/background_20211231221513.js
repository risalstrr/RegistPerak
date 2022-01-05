import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
// import styles from '../styles/Home.module.css'

export default function Home() {
    const [isMobile, setIsMobile] = useState(false)
    return ( <
        div className = "bg-[#EBC761] w-full h-screen" >
        <
        div className = ' flex flex-col lg:flex-row bg-[#F1D78E]' >
        <
        Head >
        <
        title > Homepage Pendaftaran < /title> <
        /Head> <
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
        div className = "text-sm md:pr-10 pl-3 font-bold font-['Montserrat'] " >
        <
        h1 > PESTA RAKYAT KOMPUTER < /h1> <
        /div> <
        /div> <
        div className = 'pr-5 block lg:hidden' >
        <
        button className = 'font-bold font-sans'
        onClick = {
            () => setIsMobile(true) } > Pendaftaran < /button> <
        /div> <
        /div> <
        div className = 'lg:flex flex-col lg:flex-row justify-end bg-[#F1D78E] w-full py-4 lg:py-0 hidden md:hidden' >
        <
        div className = "flex flex-col lg:flex-row font-['Montserrat']" >
        <
        a href = "#"
        className = "block px-4 py-3 lg:py-4 text-sm font-bold " > Score < /a> <
        a href = "#"
        className = "block px-4 py-3 lg:py-4 text-sm font-bold " > Games Map < /a> <
        a href = "#"
        className = "block px-4 py-3 lg:py-4 text-sm font-bold " > Team Profile < /a> <
        a href = "#"
        className = "block px-4 py-3 lg:py-4 text-sm font-bold " > News < /a> <
        a href = "#"
        className = "block px-4 py-3 lg:py-4 text-sm font-bold " > Explore Cafeteria < /a> <
        a href = "#"
        className = "block px-4 py-3 lg:py-4 text-sm font-bold " > Merchandise < /a> <
        /div> <
        /div> <
        /div>   <
        div className = "pl-10 pr-10 pt-10 text-[#6A7CC8] text-[50px] font-extrabold font-['Montserrat'] " >
        <
        p > Pilih games yang < /p> <
        p > kamu inginkan < /p> <
        /div> <
        div className = "pl-10 text-white text-[24px] font-['MADE Sunflower'] font-[900]" >
        <
        h2 > Games Individual < /h2> <
        /div> <
        div class = "absolute bottom-0 -left-4..." >
        <
        Image src = "/leftcloud.svg"
        width = { 700 }
        height = { 900 }
        alt = "leftcloud" /
        >
        <
        /div> <
        div className = ' flex flex-wrap lg:flex-row' >
        <
        div href = "#"
        className = "block px-4 py-3 lg:py-4 " >
        <
        Image src = "/Brawlhalla.svg"
        width = { 230 }
        height = { 160 }
        alt = "Brawlhalla" /
        >
        <
        /div> <
        div href = "#"
        className = "block px-4 py-3 lg:py-4 " >
        <
        Image src = "/osu.svg"
        width = { 230 }
        height = { 160 }
        alt = "osu" /
        >
        <
        /div> <
        div href = "#"
        className = "block px-4 py-3 lg:py-4 " >
        <
        Image src = "/chess.svg"
        width = { 230 }
        height = { 160 }
        alt = "chess" /
        >
        <
        /div>


        <
        /div>

        <
        /div>
    )
}