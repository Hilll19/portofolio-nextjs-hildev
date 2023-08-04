import React from 'react'
import Image from 'next/image'
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import contactImg from "@/public/assets/contact.jpg"
import {HiOutlineChevronDoubleUp} from "react-icons/hi"
import Link from 'next/link';

const Contact = () => {
    return (
        <div className='w-full lg:h-screen' id='contact'>
            <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
                <p className='text-xl tracking-widest uppercase text-[#308C8A]'>
                    Contact
                </p>
                <h2 className='py-4'>Get In Touch</h2>
                <div className='grid lg:grid-cols-6 gap-12'>
                    {/* LEFT */}
                    <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
                        <div className='lg:p-4 h-full'>
                            <div>
                                <Image className='rounded-xl hover:scale-105 ease-in duration-300' src={contactImg} alt="/" width="500" height="300" />
                            </div>
                            <div>
                                <h2 className='py-2'>Hilmy Febrian</h2>
                                <p>Frontend Developer</p>
                                <p className='py-4'>I am available for Internship onsite or remote.Contact me and lets talk</p>
                            </div>
                            <div>
                                <p className='uppercase pt-4'>Connect with me</p>
                                <div className='flex items-center justify-between py-4'>
                                    <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300">
                                        <Link href="https://www.linkedin.com/in/moch-hilmy-febrian-eka-cahyadi-17a10521b/">
                                            <FaLinkedin />
                                        </Link>
                                    </div>
                                    <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300">
                                        <Link href="https://github.com/Hilll19">
                                            <FaGithub />
                                        </Link>
                                    </div>
                                    <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300">
                                        <Link href="https://www.instagram.com/hlmyfe/">
                                            <FaInstagram />
                                        </Link>
                                    </div>
                                    <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300">
                                        <AiOutlineMail />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT */}
                    <div className='col-span-3 w-full h-auto shadow-xl shadwo-gray-400 rounded-xl lg:p-4'>
                        <div className='p-4'>
                            <form>
                                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                                    <div className='flex flex-col'>
                                        <label className='uppercase text-sm py-2'>Name</label>
                                        <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" />
                                    </div>
                                    <div className='flex flex-col'>
                                        <label className='uppercase text-sm py-2'>Phone Number</label>
                                        <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" />
                                    </div>
                                </div>
                                <div className='flex flex-col py-2'>
                                    <label className='uppercase text-sm py-2'>Email</label>
                                    <input className='border-2 rounded-lg p-3 flex border-gray-300' type="email" />
                                </div>
                                <div className='flex flex-col py-2'>
                                    <label className='uppercase text-sm py-2'>Subject</label>
                                    <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" />
                                </div>
                                <div className='flex flex-col py-2'>
                                    <label className='uppercase text-sm py-2'>Message</label>
                                    <textarea className='border-2 rounded-lg p-3 border-gray-300' rows="9"></textarea>
                                </div>
                                <button className='w-full p-4 text-gray-100 mt-3'>Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center py-12'>
                    <Link href="/">
                        <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300">
                            <HiOutlineChevronDoubleUp className='text-[#308C8A]' size={25}/>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Contact