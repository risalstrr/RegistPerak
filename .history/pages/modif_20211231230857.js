import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
// import styles from '../styles/Home.module.css'

export default function Home() {
    return ( <
        div className = "bg-[#EBC761] relative w-full h-screen" >
        <
        div class = "absolute lg:-top-36 lg:-right-2" >
        <
        Image src = "/biru.svg"
        width = { 340 }
        height = { 540 }
        alt = "biru" /
        >
        <
        /div> <
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
        /div> <
        div class = "absolute lg:top-56 lg:right-72" >
        <
        Image src = "/kuning.svg"
        width = { 300 }
        height = { 306 }
        alt = "kuning" /
        >
        <
        /div> <
        div class = "absolute lg:bottom-0 lg:-right-1" >
        <
        Image src = "/merah.svg"
        width = { 300 }
        height = { 306 }
        alt = "merah" /
        >
        <
        /div>


        {
            /* <div class="relative h-32 w-32 ...">
              <div class="absolute h-14 w-14 left-60 -top-4 ...">halo</div>
            </div> */
        } <
        /div>
    )
}