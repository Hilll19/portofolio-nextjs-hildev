import React from "react";
import Image from "next/image";
import htmlImg from "@/public/assets/skills/html.png"
import cssImg from "/public/assets/skills/css.png"
import javascriptlImg from "/public/assets/skills/javascript.png"
import tailwindImg from "/public/assets/skills/tailwind.png"
import reactImg from "/public/assets/skills/react.png"
import nextImg from "/public/assets/skills/nextjs.png"
import nodeImg from "/public/assets/skills/node.png"
import firebaseImg from "/public/assets/skills/firebase.png"

const Skills = () => {
  return (
    <div className="w-fill lg:h-screen p-2" id="skills">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl ml-2 tracking-widest uppercase font-bold text-[#308C8A]">
          Skills
        </p>
        <h2 className="py-4 ml-2">What I Can Do</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={htmlImg} alt="/" width="64" height="64" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>HTML</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={cssImg} alt="/" width="64" height="64" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>CSS</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={javascriptlImg} alt="/" width="64" height="64" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>JAVASCRIPT</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={tailwindImg} alt="/" width="64" height="64" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>TAILWIND CSS</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={reactImg} alt="/" width="64" height="64" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>REACTJS</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={nextImg} alt="/" width="64" height="64" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>NEXTJS</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={nodeImg} alt="/" width="64" height="64" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>NODE</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={firebaseImg} alt="/" width="64" height="64" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>FIREBASE</h3>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Skills;
