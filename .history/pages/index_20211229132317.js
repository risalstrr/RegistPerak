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
        div className = 'bg-[#F1D78E] flex items-center justify-between' >
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
        div className = 'absolute block lg:hidden font-bold' >
        Pendaftaran <
        /div> <
        /div> <
        div >
        <
        div >

        <
        /div> <
        div > < /div> <
        /div> <
        /div>   <
        /div>
    )
}