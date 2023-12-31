import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import logoImg from "@/public/assets/logo.png"
import { Router, useRouter } from "next/router";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState('#ecf0f3');
  const [LinkColor, setLinkColor] = useState('#1f2937');
  const router = useRouter()

  //This to effect when nav on pages declare will change
  useEffect(() => {
    if (
      router.asPath === '/Kopiemak' ||
      router.asPath === '/Rembang' ||
      router.asPath === '/ChatApp' ||
      router.asPath === '/ProjectAll'
    ){
      setNavBg('transparent')
      setLinkColor('#ecf0f3')
    }else{
      setNavBg('#ecf0f3')
      setLinkColor('#1f2937')
    }
  }, [router])

  //fot handle to change menu
  const handleNav = () => {
    //So now its setting every time for handle frequently navbar menu and close
    setNav(!nav);
  };

  //Create scroll shadow 
  useEffect(() => {
    const handleShadow = () => {
      if (window.screenY >= 90) {
        setShadow(true)
      } else {
        setShadow(false)
      }
    };
    window.addEventListener('scroll', handleShadow);
  }, []);

  return (
    <div style={{backgroundColor: `${navBg}`}} className={shadow ? 'fixed w-full h-20 shadow-xl z-[100]' : 'fixed w-full h-20 z-[100]'}>
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Image
          src={logoImg}
          alt="/"
          width="200"
          height="50"
          className="mr-10 mb-7"
        />
        <div>
          <ul style={{color: `${LinkColor}`}} className="hidden md:flex ">
            <Link href="/">
              <li className="ml-10 text-sm uppercase font-bold hover:border-b">
                Home
              </li>
            </Link>
            <Link href="#about">
              <li className="ml-10 text-sm uppercase font-bold hover:border-b">
                About
              </li>
            </Link>
            <Link href="#skills">
              <li className="ml-10 text-sm uppercase font-bold hover:border-b">
                Skills
              </li>
            </Link>
            <Link href="#projects">
              <li className="ml-10 text-sm uppercase font-bold hover:border-b">
                Project
              </li>
            </Link>
            <Link href="#contact">
              <li className="ml-10 text-sm uppercase font-bold hover:border-b">
                Contact
              </li>
            </Link>
          </ul>
          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu size={25} className="mr-8" />
          </div>
        </div>
      </div>

      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            //This will be handle when menu click '?' its normal before click, and ':' its after click
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-300"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between mt-[-133px]">
              <Image
                src={logoImg}
                alt="/"
                width="200"
                height="10"
                className="mr-2"
              />
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-600 p-1 cursor-pointer "
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-3 mt-[-80px] ml-6">
              <p className="w-[85%] md:w-[90%] py-4">
                Lets build something together
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link href="/">
                <li onClick={() => setNav(false)} className="ml-5 py-4 text-sm font-bold">Home</li>
              </Link>
              <Link href="/#about">
                <li onClick={() => setNav(false)} className="ml-5 py-4 text-sm font-bold">
                  About
                </li>
              </Link>
              <Link href="/#skills">
                <li onClick={() => setNav(false)} className="ml-5 py-4 text-sm font-bold">Skills</li>
              </Link>
              <Link href="/#projects">
                <li onClick={() => setNav(false)} className="ml-5 py-4 text-sm font-bold">Project</li>
              </Link>
              <Link href="/#contact">
                <li onClick={() => setNav(false)} className="ml-5 py-4 text-sm font-bold">Contact</li>
              </Link>
            </ul>
            <div className="pt-[30px]">
              <p className="uppercase tracking-widest text-[#5b56ec]">
                Lets CONNECT
              </p>
              <div className="flex items-center justify-between mt-10 w-full sm:w-[80%] ">
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <Link href="https://www.linkedin.com/in/moch-hilmy-febrian-eka-cahyadi-17a10521b/">
                    <FaLinkedin />
                  </Link>
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <Link href="https://github.com/Hilll19">
                    <FaGithub />
                  </Link>
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <Link href="https://www.instagram.com/hlmyfe/">
                    <FaInstagram />
                  </Link>
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <AiOutlineMail />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
