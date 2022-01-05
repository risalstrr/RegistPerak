import Image from "next/image"

export default function Home() {
    return ( <
        div className = "bg-[#EBC761] w-full h-screen font-['Montserrat']" >
        <
        div className = '' >
        <
        Image src = "/rightcloud.svg"
        width = { 900 }
        height = { 350 }
        alt = "cloud" /
        >

        <
        /div> <
        div className = '' >
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