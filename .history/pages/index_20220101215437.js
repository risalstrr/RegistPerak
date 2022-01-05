import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
// import styles from '../styles/Home.module.css'

export default function Home() {
    const [isMobile, setIsMobile] = useState(false)
    return ( <
        div className = "bg-[#EBC761] w-full h-full font-['Montserrat']" >
        <
        div className = ' flex flex-col lg:flex-row bg-[#F1D78E]' >
        <
        Head >
        <
        title > Homepage Pendaftaran < /title> <
        /Head> <
        div class = "absolute lg:bottom-8 z-0 lg:left-[772px] -bottom-44 -left-60  " >
        <
        Image src = "/kuning.svg"
        width = { 380 }
        height = { 366 }
        alt = "kuning" /
        >
        <
        /div> <
        div class = "absolute z-8 top-24 -right-56 lg:-top-36 lg:-right-0" >
        <
        Image src = "/biru.svg"
        width = { 340 }
        height = { 540 }
        alt = "biru" /
        >
        <
        /div> <
        div class = "absolute lg:bottom-[145px] z-0 lg:left-[905px] -bottom-44 -left-60  " >
        <
        Image src = "/canvas.svg"
        width = { 480 }
        height = { 470 }
        alt = "canvas" /
        >
        <
        /div> <
        div class = "absolute lg:bottom-[145px] z-0 lg:left-[905px] -bottom-44 -left-60  " >
        <
        Image src = "/logobrawhalla.svg"
        width = { 480 }
        height = { 470 }
        alt = "logobrawhalla" /
        >
        <
        /div>

        <
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
        div className = "text-sm md:pr-10 pl-3 font-bold " >
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
        div className = 'lg:flex flex-col lg:flex-row justify-end bg-[#F1D78E] z-10 w-full py-4 lg:py-0 hidden md:hidden' >
        <
        div className = ' flex flex-col lg:flex-row' >
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
        /div>   <
        div className = "outline-title pl-10 pr-10 pt-10 text-[#6A7CC8] text-[50px] font-extrabold" >
        <
        p > Pendaftaran Games Individual < /p> <
        /div> <
        div className = "outline-title pl-10 text-white text-[28px] font-['MADE Sunflower'] font-[900]" >
        <
        h2 > Brawlhalla < /h2> <
        /div> <
        div className = "pl-10 pt-5 text-black text-[15px] font-extrabold" >
        <
        p > Biaya pendaftaran: Rp xx.xxx < /p> <
        /div> <
        div className = "pl-10 pr-10 text-black text-[10px] " >
        <
        p > Instruksi pembayaran diberikan setelah mengisi form pendaftaran < /p> <
        /div>

        <
        div className = "flex pl-10 pr-10 pt-5 pb-5 items-center " >
        <
        input type = "radio"
        className = "indeterminate:bg-gray-300 ..." / >
        <
        p className = 'mr-12' > Elemen Staf / Dosen < /p> <
        input type = "radio"
        className = "indeterminate:bg-gray-300 ..." / >
        <
        p > Mahasiswa < /p> <
        /div>

        <
        label className = "block pl-10" >
        <
        span class = "after:ml-0.5 after:text-red-500 block text-sm font-medium text-gray-700 " >
        Nama Lengkap <
        /span> <
        input type = "text"
        name = "namaLengkap"
        class = "mt-1 px-3 py-2 bg-white border-2 shadow-sm w-4/12 border-black placeholder-gray-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1"
        placeholder = "Aang Perak" / >
        <
        /label>

        <
        label className = "block pl-10 pt-3" >
        <
        span class = "after:ml-0.5 after:text-red-500 block text-sm font-medium text-gray-700 " >
        Nama Panggilan <
        /span> <
        input type = "text"
        name = "namaPanggilan"
        class = "mt-1 px-3 py-2 bg-white border-2 shadow-sm w-4/12 border-black placeholder-gray-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1"
        placeholder = "Aang Aja" / >
        <
        /label> <
        div className = "block pl-10 pt-3 " >
        <
        p > Profile Picture < /p> <
        /div>

        <
        div className = 'space-y-10 z-10 md:grid md:grid-cols-5 pl-10' >
        <
        div className = ' w-36 h-36 border-4 border-[#8648BA] rounded-lg shadow-2xl bg-[#2E1145]' >
        <
        /div> { /* <div className='pt-10 md:flex md:flex-col'> */ } <
        label className = "pt-10 pr-10 md:flex md:flex-col" >
        <
        span class = "after:ml-0.5 after:text-red-500 block text-sm font-medium text-gray-700 " >
        Pilih Gambar <
        /span> <
        input type = "text"
        name = "pilih gambar"
        class = "mt-1 px-3 py-2 bg-white border-2 shadow-sm w-9/12 border-black placeholder-gray-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1" / >
        <
        /label> <
        /div>

        <
        div className = 'block pl-10 pt-3' >
        <
        button className = "rounded-lg text-[14px] z-10 w-28 h-10 transition ease-in-out delay-150 bg-[#CC9D1A] border-4 border-[#F1D78E] hover:-translate-y-1 hover:scale-110 hover:bg-[#F1D78E] duration-300 ... " >
        Upload File <
        /button> <
        /div> <
        label className = "block pl-10 pt-10" >
        <
        span class = "after:ml-0.5 after:text-red-500 block text-sm font-medium text-gray-700 " >
        NPM <
        /span> <
        input type = "text"
        name = "NPM"
        class = "mt-1 px-3 py-2 bg-white border-2 shadow-sm w-4/12 border-black placeholder-gray-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1"
        placeholder = "1900000000" / >
        <
        /label> <
        label className = "block pl-10 pt-10" >
        <
        span class = "after:ml-0.5 after:text-red-500 block text-sm font-medium text-gray-700 " >
        ID Line / WhatsApp <
        /span> <
        input type = "text"
        name = "id"
        class = "mt-1 px-3 py-2 bg-white border-2 shadow-sm w-4/12 border-black placeholder-gray-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1"
        placeholder = "aangperak21" / >
        <
        /label>

        <
        div className = 'block pl-10 pt-10 pb-20' >
        <
        button className = "rounded-lg lg:w-4/12 lg:h-10 border-4 border-[#03F182] md:w-4/12 md:h-12 w-5/12 h-12 transition ease-in-out delay-150 bg-[#028F4D] hover:-translate-y-1 hover:scale-110 hover:bg-[#03F182] duration-300 ..." >
        Daftar Sekarang <
        /button> <
        /div>

        {
            /* <div className='hidden lg:block lg:absolute -bottom-14 right-0'> 
                    <Image
                      src="/rightcloud.svg"
                      width = {900}
                      height = {350}
                      alt = "cloud"
                    />
                  
                </div>
                  <div className='hidden lg:block lg:absolute -bottom-14 -left-6'> 
                    <Image
                      src="/leftcloud.svg"
                      width = {880}
                      height = {300}
                      alt = "cloud"
                    />
                  
                </div> */
        }

        {
            /* <div className='absolute top-40 right-80'> 
                    <Image
                      src="/kuning.svg"
                      width = {330}
                      height = {300}
                      alt = "kuning"
                    />
                  </div> */
        } {
            /* <div className='lg:block lg:absolute top-10 right-0'> 
                    <Image
                      src="/biru.svg"
                      width = {270}
                      height = {240}
                      alt = "biru"
                    />
                  </div>  */
        } <
        /div>
    )
}