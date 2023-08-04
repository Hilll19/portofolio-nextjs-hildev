import React from 'react'
import Image from 'next/image'
import chatappImg from "@/public/assets/projects/ChatAppSs.png"
import { RiRadioButtonFill } from 'react-icons/ri'
import Link from 'next/link'

const ChatApp = () => {
  return (
    <div className='w-full '>
      <div className='w-screen lg:w-full h-[60vh] lg:h-[500px] relative'>
        <div className='absolute top-0 left-0 w-full h-[60vh] lg:h-[500px] bg-black/70 z-10' />
        <Image className='abosulte z-1' layout='fill' objectFit='cover' src={chatappImg} alt='kopiemak' />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[50%] text-white z-10 p-2'>
          <h2>Chatapp</h2>
          <h3>ReactJS / SCSS / Firebase</h3>
        </div>
      </div>
      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-10'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p className='p-2'>
            Project ini saya buat dengan frontendnya menggunakan reactjs, css, scss sebagai component membuat UI yang menarik dan dinamis.Untuk bagian backendnya saya mengkoneksikan dengan firebase ( seperti authentication, storage, cloud dll).Pada halaman depan akan ada Register dan Login page untuk membuat akun serta menambahkan gambar profile, untuk informasi akun nantinya akan di simpan di authentication dan untuk gambarnya akan disimpan di storage sesuai id dari authentication tadi.Sehingga jika kita menggunakan id tadi bisa dipanggil di chat profil akun masing-masing.
          </p>
          <Link href="#">
            <button className='px-8 py-2 mt-4 mr-8'>Demo</button>
          </Link>
          <Link href="https://github.com/Hilll19/chatapp-hildev">
          <button className='px-8 py-2 mt-4'>Code</button>
          </Link>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-3'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-600 py-6 flex items-center'><RiRadioButtonFill className='pr-1'/>ReactJS</p>
              <p className='text-gray-600 py-6 flex items-center'><RiRadioButtonFill className='pr-1'/>CSS</p>
              <p className='text-gray-600 py-6 flex items-center'><RiRadioButtonFill className='pr-1'/>SCSS</p>
              <p className='text-gray-600 py-6 flex items-center'><RiRadioButtonFill className='pr-1'/>Firebase</p>
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

export default ChatApp