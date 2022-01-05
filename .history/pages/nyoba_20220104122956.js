import Image from "next/image"

export default function Home() {
    return ( <
        div className = "bg-[#EBC761] w-full h-screen font-['Montserrat']" >
        <
        div className = 'hidden lg:block lg:absolute -bottom-[580px] right-0' >
        <
        Image src = "/rightcloud.svg"
        width = { 900 }
        height = { 350 }
        alt = "cloud" /
        >

        <
        /div> <
        div className = 'hidden lg:block lg:absolute -bottom-[580px] -left-6' >
        <
        Image src = "/leftcloud.svg"
        width = { 880 }
        height = { 300 }
        alt = "cloud" /
        >

        <
        /div> <
        /div>

    )
}