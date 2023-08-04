import React from 'react'
import Image from 'next/image'
import searchMovieImg from '@/public/assets/projects/searchmoviedb.png'
import projectallIMG from '@/public/assets/projects/projectall.png'
import propertyImg from "@/public/assets/projects/kopiemak1.png";
import rembangImg from "@/public/assets/projects/RembangTour1.png"
import chatappImg from "@/public/assets/projects/ChatAppSs.png"
import {HiOutlineChevronDoubleUp} from "react-icons/hi"
import Projectitem from "../components/Projectitem";

import Link from 'next/link'


const ProjectAll = () => {
    return (
        <div className='w-full' id='projectall'>
            <div className='w-screen lg:w-full h-[50vh] lg:h-[60vh] relative'>
                <div className='absolute top-0 left-0 w-full h-[50vh] lg:h-[60vh] bg-black/60 z-10' />
                <Image className='abosulte z-1' layout='fill' objectFit='cover' src={projectallIMG} alt='kopiemak' />
                <div className='absolute text-center top-[60%] w-full text-white z-10 p-2'>
                    <h2>My Project</h2>
                    <h3>This is my project collection</h3>
                </div>
            </div>
            <div className="w-full" id="projects">
                <div className="max-w-[1240px] mx-auto px-2 py-16">
                    <p className="text-xl tracking-widest uppercase font-bold text-[#308C8A] ml-2">
                        Projects
                    </p>
                    <h2 className="ml-2">What Ive Build</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Search Movie  */}
                        <Projectitem
                            title="Search Movie API"
                            backgroundImg={searchMovieImg}
                            descriptionText="ReactJS Axios API"
                            projectUrl="/ChatApp"
                        />
                        {/* ChatApp */}
                        <Projectitem
                            title="ChatApp Firebase"
                            backgroundImg={chatappImg}
                            descriptionText="ReactJS Firebase"
                            projectUrl="/ChatApp"
                        />
                        {/* KOPI EMAK */}
                        <Projectitem
                            title="Kopi Emak"
                            backgroundImg={propertyImg}
                            descriptionText="HTML CSS JAVASCRIPT Basic"
                            projectUrl="/Kopiemak"
                        />
                        {/* Rembang */}
                        <Projectitem
                            title="Rembang"
                            backgroundImg={rembangImg}
                            descriptionText="HTML CSS JAVASCRIPT Basic"
                            projectUrl="/Rembang"
                        />
                    </div>
                    <div className='flex justify-center py-12'>
                        <Link href="#projectall">
                            <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300">
                                <HiOutlineChevronDoubleUp className='text-[#308C8A]' size={25} />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectAll