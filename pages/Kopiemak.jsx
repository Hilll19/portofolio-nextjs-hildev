import React from 'react'
import Image from 'next/image'
import propertyImg from '@/public/assets/projects/kopiemak1.png'
import { RiRadioButtonFill } from 'react-icons/ri'
import Link from 'next/link'

const Kopiemak = () => {
  return (
    <div className='w-full '>
      <div className='w-screen lg:w-full h-[60vh] lg:h-[500px] relative'>
        <div className='absolute top-0 left-0 w-full h-[60vh] lg:h-[500px] bg-black/70 z-10' />
        <Image className='abosulte z-1' layout='fill' objectFit='cover' src={propertyImg} alt='kopiemak' />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[50%] text-white z-10 p-2'>
          <h2>Kopi Emak</h2>
          <h3>HTML / CSS </h3>
        </div>
      </div>
      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-10'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>
          This is a project where I am trying to learn the basics of HTML, CSS, and JavaScript. Here, I am creating a web interface for Kopi emak with CSS layouting techniques such as display, position, dimensions, overflow, and more. I am striving to apply these fundamental components to the project.
          </p>
          <Link href="#">
            <button className='px-8 py-2 mt-4 mr-8'>Demo</button>
          </Link>
          <Link href="https://github.com/Hilll19/Kopi-Emak">
          <button className='px-8 py-2 mt-4'>Code</button>
          </Link>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-3'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-600 py-6 flex items-center'><RiRadioButtonFill className='pr-1'/>HTML</p>
              <p className='text-gray-600 py-6 flex items-center'><RiRadioButtonFill className='pr-1'/>CSS</p>
            </div>
          </div>
        </div>
        <Link href="/#Projects">
          <p className='flex justify-center py-2 rounded-full shadow-lg shadow-gray-400 p-5 hover:scale-110 ease-in duration-300 cursor-pointer'>Back</p>
        </Link>
      </div>
    </div>
  )
}

export default Kopiemak