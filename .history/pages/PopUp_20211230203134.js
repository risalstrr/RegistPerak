export default function Home() {
    return ( <
        div className = "bg-white w-full h-screen flex flex-col justify-center items-center md:px-1 mb-24" >
        <
        div className = "bg-[#E5B632] flex relative md:w-7/12 md:h-80 lg:w-4/12 lg:h-72 bg-white rounded-lg" >
        <
        div className = "" >
        <
        div className = "text-[#6A7CC8] font-extrabold text-[29px] pl-10 pr-10 pt-3 text-center ..." >
        <
        h1 > Apakah Anda Yakin Ingin Mendaftar di Permainan Ini ? < /h1>

        <
        /div> <
        p className = "pr-6 pl-6 pt-3 text-center ..." >
        Pastikan semua data yang telah anda masukkan tidak ada yang salah.Anda tidak bisa mengubah data setelah pendaftaran tersimpan. <
        /p> <
        /div> <
        div className = 'space-y-10 md:grid md:grid-cols-5 pl-10' >
        <
        div className = ' w-36 h-36 rounded-lg shadow-2xl bg-[#2E1145]' >
        <
        /div> { /* <div className='pt-10 md:flex md:flex-col'> */ } <
        label className = "pt-10 pr-10 md:flex md:flex-col" >
        <
        span class = "after:ml-0.5 after:text-red-500 block text-sm font-medium text-gray-700 " >
        Pilih Gambar <
        /span> <
        input type = "text"
        name = "pilih gambar"
        class = "mt-1 px-3 py-2 bg-white border shadow-sm w-9/12 border-gray-300 placeholder-gray-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1" / >
        <
        /label> <
        /div> <
        /div> <
        /div>
    )
}