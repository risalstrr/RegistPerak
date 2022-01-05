import Head from 'next/head'
import Image from 'next/image'
// import styles from '../styles/Home.module.css'

export default function Home() {
    return ( <
        div className = "bg-[#EBC761]" >
        <
        Head >
        <
        title > Homepage Pendaftaran < /title> <
        /Head> <
        div >
        <
        Image src = "/logoPerak.svg"
        width = { 140 }
        height = { 160 }
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