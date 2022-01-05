import Head from 'next/head'
import Image from 'next/image'
// import styles from '../styles/Home.module.css'

export default function Home() {
    return ( <
        div className = "bg-[#EBC761]" >
        <
        Head >
        <
        title > Homepage Pendaftaran < /title> < /
        Head > <
        div className = 'relative pl-3' >
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
        h1 > kAMU < /h1> < /
        div > <
        /div>
    )
}