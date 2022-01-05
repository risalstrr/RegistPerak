import Image from "next/image"

export default function Home() {
    return ( <
        div className = "bg-[#EBC761] w-full h-screen relative" >
        <
        div className = 'absolute' >
        <
        Image src = "/rightcloud.svg"
        width = { 900 }
        height = { 350 }
        alt = "cloud" /
        >

        <
        /div> <
        div className = 'absolute bottom-0 left-0 ...' >
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