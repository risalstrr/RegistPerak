import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
// import styles from '../styles/Home.module.css'

export default function Home() {
    const [isMobile, setIsMobile] = useState(false)
    return ( <
        div className = "bg-[#EBC761] w-full h-full font-['Montserrat']" >
        <
        Head >
        <
        title > Homepage Pendaftaran < /title> <
        /Head> <
        div className = ' flex flex-col lg:flex-row bg-[#F1D78E]' >
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
        div className = "text-sm md:pr-10 pl-3 font-bold " >
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
        div className = 'flex flex-col lg:flex-row' >
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
        /div>  <
        /div>
    );
};