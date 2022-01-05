export default function Home() {
    return ( <
        div className = "bg-white w-full h-screen flex flex-col justify-center items-center md:px-1 mb-24 font-['Montserrat'] p-2" >
        <
        div className = "bg-[#E5B632] relative md:w-8/12 md:h-80 lg:w-4/12 lg:h-72 bg-white rounded-lg" >
        <
        div >
        <
        div className = "text-[#6A7CC8] font-extrabold text-[29px] pl-10 pr-10 pt-3 text-center ..." >
        <
        h1 > Apakah Anda Yakin Ingin Mendaftar di Permainan Ini ? < /h1>

        <
        /div> <
        p className = "pb-10 pr-6 pl-6 pt-3 text-center ..." >
        Pastikan semua data yang telah anda masukkan tidak ada yang salah.Anda tidak bisa mengubah data setelah pendaftaran tersimpan. <
        /p> <
        /div> <
        div className = 'flex justify-center px-4 py-3 lg:py-4' >
        <
        button className = "rounded-lg w-28 h-10 transition ease-in-out delay-150 bg-[#EE200C] hover:-translate-y-1 hover:scale-110 hover:bg-[#FAA299] duration-300 ... " >
        Batal <
        /button> <
        button className = "rounded-lg w-28 h-10 transition ease-in-out delay-150 bg-[#028F4D] hover:-translate-y-1 hover:scale-110 hover:bg-[#03F182] duration-300 ... " >
        Simpan <
        /button> <
        /div> <
        /div> <
        /div>
    )
}