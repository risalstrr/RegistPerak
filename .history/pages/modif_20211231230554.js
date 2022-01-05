import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
// import styles from '../styles/Home.module.css'

export default function Home() {
    return ( <
        div className = "bg-[#EBC761] relative w-full h-screen" >
        <
        div class = "absolute lg:-top-28 lg:-right-2" >
        <
        Image src = "/biru.svg"
        width = { 340 }
        height = { 540 }
        alt = "biru" /
        >
        <
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
        /div> <
        div class = "absolute -bottom-60 lg:-right-1" >
        <
        Image src = "/rightcloud.svg"
        width = { 880 }
        height = { 960 }
        alt = "rightcloud" /
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