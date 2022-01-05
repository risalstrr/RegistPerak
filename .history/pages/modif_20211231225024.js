import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
// import styles from '../styles/Home.module.css'

export default function Home() {
    return ( <
        div className = "bg-[#EBC761] relative w-full h-screen" >
        <
        div class = "absolute -top-24 right-0" >
        <
        Image src = "/biru.svg"
        width = { 300 }
        height = { 500 }
        alt = "biru" /
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