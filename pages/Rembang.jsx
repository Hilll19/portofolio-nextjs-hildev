import React from 'react'
import Image from 'next/image'
import rembangImg from "@/public/assets/projects/RembangTour1.png"
import { RiRadioButtonFill } from 'react-icons/ri'
import Link from 'next/link'

const Rembang = () => {
  return (
    <div className='w-full '>
      <div className='w-full h-[500px]  relative'>
        <div className='absolute top-0 left-0 w-full h-[500px] bg-black/70 z-10' />
        <Image className='abosulte z-1' layout='fill' objectFit='cover' src={rembangImg} alt='kopiemak' />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[50%] text-white z-10 p-2'>
          <h2 className='pb-30'>Kopi Emak</h2>
          <h3>HTML / CSS / Javascript</h3>
        </div>
      </div>
      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>
          This is a project where I am trying to learn the basics of HTML, CSS, and JavaScript. Here, I am creating a web interface for Rembang with CSS layouting techniques such as display, position, dimensions, overflow, and more. I am striving to apply these fundamental components to the project.
          </p>
          <button className='px-8 py-2 mt-4 mr-8'>Demo</button>
          <button className='px-8 py-2 mt-4'>Code</button>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-3'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-600 py-6 flex items-center'><RiRadioButtonFill className='pr-1'/>HTML</p>
              <p className='text-gray-600 py-6 flex items-center'><RiRadioButtonFill className='pr-1'/>CSS</p>
              <p className='text-gray-600 py-6 flex items-center'><RiRadioButtonFill className='pr-1'/>Javascript</p>
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

export default Rembang