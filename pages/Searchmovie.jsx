import React from 'react'
import Image from 'next/image'
import searchMovieImg from '@/public/assets/projects/searchmoviedb.png'
import { RiRadioButtonFill } from 'react-icons/ri'
import Link from 'next/link'

const Searchmovie = () => {
  return (
    <div className='w-full '>
      <div className='w-screen lg:w-full h-[60vh] lg:h-[500px] relative'>
        <div className='absolute top-0 left-0 w-full h-[60vh] lg:h-[500px] bg-black/70 z-10' />
        <Image className='abosulte z-1' layout='fill' objectFit='cover' src={searchMovieImg} alt='kopiemak' />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[50%] text-white z-10 p-2'>
          <h2 className='pb-30'>Search Movie with API</h2>
          <h3>ReactJS / Axios / Api from themoviedb</h3>
        </div>
      </div>
      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p className='p-2'>
            Disini saya mencoba belajar bagaimana penggunaan reactjs untuk terkoneksi dengan API external(themoviedb).Untuk menyambungkan atau mengintegrasikan API saya menggunakan axios dan beberapa declare api di .env dengan prosedur react (REACT_APP_...).Lalu agar api token saya tidak terlihat ketika digithub saya menambahkannya tadi di .env dan lalu memasukannya ke .gitignore.Stelah API terkoneksi saya menambahkan logic search dimana ketika kita input nama filmnya maka akan keluar.
          </p>
          <Link href="#">
            <button className='px-8 py-2 mt-4 mr-8'>Demo</button>
          </Link>
          <Link href="https://github.com/Hilll19/search-movie-web">
          <button className='px-8 py-2 mt-4'>Code</button>
          </Link>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-3'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-600 py-6 flex items-center'><RiRadioButtonFill className='pr-1'/>ReachJS</p>
              <p className='text-gray-600 py-6 flex items-center'><RiRadioButtonFill className='pr-1'/>Axios</p>
              <p className='text-gray-600 py-6 flex items-center'><RiRadioButtonFill className='pr-1'/>API</p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className='flex justify-center py-2 rounded-full shadow-lg shadow-gray-400 p-5 hover:scale-110 ease-in duration-300 cursor-pointer'>Back</p>
        </Link>
      </div>
    </div>
  )
}

export default Searchmovie