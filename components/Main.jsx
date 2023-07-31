import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Main = () => {
  return (
    <div className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            LETS BUILD SOMETHIMG TOGETHER
          </p>
          <h1 className="py-4 text-gray-700">
            Hi, Im Hilmy <span className="text-[#308C8A]">Febrian</span>
          </h1>
          <h1 className="py-2 text-gray-700">A Frontend web developer</h1>
          <p className="py-4 text-gray-600 m-w-[70%] m-auto sm:mr-2 sm:ml-2">
            Im A Frontend Developer with a passion for creating engaging and
            interactive web experiences. Turning design ideas into reality is
            one of my strengths. I take pleasure in crafting aesthetic and
            functional interfaces for every project I work on....
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300">
              <Link href="https://www.linkedin.com/in/moch-hilmy-febrian-eka-cahyadi-17a10521b/">
                <FaLinkedin/>
              </Link>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300">
              <Link href="https://github.com/Hilll19">
                <FaGithub/>
              </Link>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300">
              <Link href="https://www.instagram.com/hlmyfe/">
                <FaInstagram/>
              </Link>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300">
                <AiOutlineMail/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
