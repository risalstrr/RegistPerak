import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
// import styles from '../styles/Home.module.css'

export default function Home() {
    return ( <
        div className = "bg-[#EBC761] relative w-full h-screen" >
        <
        div class = "absolute -top-28 -right-2" >
        <
        Image src = "/biru.svg"
        width = { 340 }
        height = { 500 }
        alt = "biru" /
        >
        <
        /div> <
        div class = "absolute top-56 right-72" >
        <
        Image src = "/kuning.svg"
        width = { 300 }
        height = { 306 }
        alt = "kuning" /
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