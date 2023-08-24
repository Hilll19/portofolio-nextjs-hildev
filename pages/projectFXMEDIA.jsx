import React from 'react'
import Image from 'next/image'
import fxmediaIMG from "@/public/assets/projects/pict_fxmedia.png"
import { RiRadioButtonFill } from 'react-icons/ri'
import Link from 'next/link'

const projectFXMEDIA = () => {
  return (
    <div className='w-full '>
      <div className='w-screen lg:w-full h-[60vh] lg:h-[500px] relative'>
        <div className='absolute top-0 left-0 w-full h-[60vh] lg:h-[500px] bg-black/70 z-10' />
        <Image className='abosulte z-1' layout='fill' objectFit='cover' src={fxmediaIMG} alt='kopiemak' />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[50%] text-white z-10 p-2'>
          <h2>Project FXMEDIA</h2>
          <h3>HTML / CSS / Javascript /Bootstrap</h3>
        </div>
      </div>
      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-10'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p className='p-2'>
            Project ini saya buat untuk test assestment dari fxmedia, disini saya diberikan sebuah intruksi untuk mengimplementasikan design yang ada di adobe illustrator ke dalam sebuah code dengan memakai bootstrap.Pada menunya memiliki sebuah logic ketika topnya 0 maka dia akan menampilkan navbar dropdown, dan ketika discroll maka akan berganti ke main navbar.Lalu ada juga slider dari bootstrap untuk memperlihatkan gambar-gambar, ada logic autoplay pada gambar.Di bagian main menu memakai component dari bootstrap yaitu navs & tabs untuk featured, event, collaboration.Pada menu-event menambahkan logic pada container untuk ketika diclick baru displaynya terlihat.<br/>(untuk versi mobilenya memang masih jelek dan butuh perbaikan, kalo bisa memakai laptop/pc)
          </p>
          <Link href="https://roaring-malabi-556c69.netlify.app/">
            <button className='px-8 py-2 mt-4 mr-8'>Demo</button>
          </Link>
          <Link href="https://github.com/Hilll19/ProjectFXMEDIA">
          <button className='px-8 py-2 mt-4'>Code</button>
          </Link>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-3'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-600 py-6 flex items-center'><RiRadioButtonFill className='pr-1'/>HTML</p>
              <p className='text-gray-600 py-6 flex items-center'><RiRadioButtonFill className='pr-1'/>CSS</p>
              <p className='text-gray-600 py-6 flex items-center'><RiRadioButtonFill className='pr-1'/>JSS</p>
              <p className='text-gray-600 py-6 flex items-center'><RiRadioButtonFill className='pr-1'/>Bootstrap</p>
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

export default projectFXMEDIA