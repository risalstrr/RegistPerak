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
        div className = 'flex' >
        <
        div className = 'bg-[#F1D78E] flex items-center justify-between' >
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
        div className = 'text-sm pl-3 font-bold font-sans' >
        <
        h1 > PESTA RAKYAT < /h1> <
        h1 > KOMPUTER < /h1> <
        /div> <
        /div> <
        div className = 'pr-2 block lg:hidden font-bold font-sans' >
        Pendaftaran <
        /div> <
        /div> <
        div className = 'flex bg=[#F1D78E]' >
        <
        div className = 'flex' >
        <
        a href = "#"
        className = 'block' > Score < /a> <
        a href = "#"
        className = 'block' > Games Map < /a> <
        a href = "#"
        className = 'block' > Team Profile < /a> <
        a href = "#"
        className = 'block' > News < /a> <
        a href = "#"
        className = 'block' > Explore Cafeteria < /a> <
        a href = "#"
        className = 'block' > Merchandise < /a> <
        /div> { /* <div></div> */ } <
        /div> <
        /div>   <
        /div>
    )
}