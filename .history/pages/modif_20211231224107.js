import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
// import styles from '../styles/Home.module.css'

export default function Home() {
    return ( <
        div className = "bg-[#EBC761] relative w-full h-screen" >
        <
        div class = "static ..." >

        <
        div class = "static ..." > < p > Static child < /p></div >
        <
        div class = "inline-block ..." > < p > Static sibling < /p></div >

        <
        div class = "absolute ..." > < p > Absolute child < /p></div >
        <
        div class = "inline-block ..." > < p > Static sibling < /p></div >
        <
        /div> {
            /* <div class="object-none object-right-top...">
                        <Image
                        src="/biru.svg"
                        width={300}
                        height={500}
                        alt="biru"
                        />    
                    </div> */
        }


        <
        /div>
    )
}