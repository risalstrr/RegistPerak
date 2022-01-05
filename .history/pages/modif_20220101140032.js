import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
// import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="bg-[#EBC761] relative w-full h-full">
        <div class="absolute lg:-bottom-4 lg:left-[772px] -bottom-44 -left-60  ">
            <Image
            src="/kuning.svg"
            width={380}
            height={366}
            alt="kuning"
            />    
        </div>

        <div className=' flex flex-col lg:flex-row bg-[#F1D78E]'>
      <Head>
        <title>Homepage Pendaftaran</title>
      </Head>
        <div className='bg-[#F1D78E] border-b lg:border-b-0 flex items-center justify-between'>
        <div className='flex items-center'>
          <div className='relative pt-2 pl-2'>
            <Image
              src="/logoPerak.svg"
              width={50}
              height={50}
              alt="logoPerak"
            />
          </div>
          <div className="text-sm md:pr-10 pl-3 font-bold font-['Montserrat'] ">
            <h1>PESTA RAKYAT KOMPUTER</h1>
          </div>
          </div>
          <div className='pr-5 block lg:hidden'>
            <button className='font-bold font-sans' onClick={() => setIsMobile(true)}>Pendaftaran</button>
          </div>
        </div>
        <div className='lg:flex flex-col lg:flex-row justify-end bg-[#F1D78E] z-10 w-full py-4 lg:py-0 hidden md:hidden'>
          <div className="flex flex-col lg:flex-row font-['Montserrat']">
            <a href="#" className="block px-4 py-3 lg:py-4 text-sm font-bold ">Score</a>
            <a href="#" className="block px-4 py-3 lg:py-4 text-sm font-bold ">Games Map</a>
            <a href="#" className="block px-4 py-3 lg:py-4 text-sm font-bold ">Team Profile</a>
            <a href="#" className="block px-4 py-3 lg:py-4 text-sm font-bold ">News</a>
            <a href="#" className="block px-4 py-3 lg:py-4 text-sm font-bold ">Explore Cafeteria</a>
            <a href="#" className="block px-4 py-3 lg:py-4 text-sm font-bold ">Merchandise</a>
          </div>
        </div>
      </div>
        <div class="absolute z-8 top-24 -right-56 lg:-top-36 lg:-right-0">
            <Image
            src="/biru.svg"
            width={340}
            height={540}
            alt="biru"
            />    
        </div>
      <div className="pl-10 pr-10 pt-10 text-[#6A7CC8] text-[50px] font-extrabold font-['Montserrat'] ">
        <p>Pilih games yang</p>
        <p>kamu inginkan</p>
      </div>
      <div className="pl-10 text-white text-[24px] font-['MADE Sunflower'] font-[900]">
        <h2>Games Individual</h2>
      </div>
        
      <div className=' flex flex-wrap lg:flex-row p-7'>
            <div href="#" className="block px-4 py-3 lg:py-4 ">
                <Image
                    src="/Brawlhalla.svg"
                    width={260}
                    height={220}
                    alt="Brawlhalla"
                />
            </div>
            <div href="#" className="block px-4 py-3 lg:py-4 ">
                <Image
                    src="/osu.svg"
                    width={260}
                    height={220}
                    alt="osu"
                />
            </div>
            <div href="#" className="block px-4 py-3 lg:py-4 ">
                <Image
                    src="/chess.svg"
                    width={260}
                    height={220}
                    alt="chess"
                />
            </div>
        
        <div class="absolute -bottom-[200px] -right-[180px]">
            <Image
            src="/merah.svg"
            width={400}
            height={360}
            alt="merah"
            />    
        </div>
  </div>      
        
        {/* <div class="relative h-32 w-32 ...">
  <div class="absolute h-14 w-14 left-60 -top-4 ...">halo</div>
</div> */}
    </div>
  )
}