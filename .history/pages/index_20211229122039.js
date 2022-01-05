import Head from 'next/head'
import Image from 'next/image'
// import styles from '../styles/Home.module.css'

export default function Home() {
    return ( <
        div className = " bg-full bg-[#EBC761]" >
        <
        Head >
        <
        title > Homepage Pendaftaran < /title> <
        /Head> <
        div className = 'absolute' >
        <
        Image src = "/logoPerak.svg"
        width = { 50 }
        height = { 50 }
        alt = "logo" /
        >
        <
        /div>  <
        div >
        <
        h1 > kAMU < /h1> <
        /div> <
        /div>
    )
}