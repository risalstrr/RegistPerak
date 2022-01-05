export default function Home() {
    return ( <
        div className = "bg-white  w-full h-screen flex flex-col justify-center items-center md:px-1 mb-24 font-['Montserrat'] p-2" >
        <
        div className = "bg-[#E5B632] border-2 border-black relative md:w-9/12 md:h-80 lg:w-5/12 lg:h-72 bg-white rounded" >
        <
        div >
        <
        div className = "outline-title text-[#6A7CC8] pb-2 text-5xl font-bold text-center mb-12 mt-8" >
        <
        h1 > Apakah Anda Yakin Ingin Mendaftar di Permainan Ini ? < /h1>

        <
        /div> <
        p className = "pb-10 pr-6 pl-10 pt-3 text-center ..." >
        Pastikan semua data yang telah anda masukkan tidak ada yang salah.Anda tidak bisa mengubah data setelah pendaftaran tersimpan. <
        /p> <
        /div> <
        div className = 'flex flex-wrap justify-center px-4 py-3 lg:py-0' >
        <
        button className = "rounded-md border-4 border-[#FAA299] w-56 h-10 transition ease-in-out delay-150 bg-[#EE200C] hover:-translate-y-1 hover:scale-110 hover:bg-[#FAA299] text-white duration-300 ... " >
        Batal <
        /button> <
        button className = "rounded-md border-4 border-[#03F182] w-56 h-10 transition ease-in-out delay-150 bg-[#028F4D] hover:-translate-y-1 hover:scale-110 hover:bg-[#03F182] text-white duration-300 ... " >
        Simpan <
        /button> <
        /div> <
        /div> <
        /div>
    )
}