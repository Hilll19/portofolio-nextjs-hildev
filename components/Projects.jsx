import React from "react";
import Image from "next/image";
import searchMovieImg from '@/public/assets/projects/searchmoviedb.png'
import propertyImg from "@/public/assets/projects/kopiemak1.png";
import rembangImg from "@/public/assets/projects/RembangTour1.png"
import chatappImg from "@/public/assets/projects/ChatAppSs.png"
import { CgMoreR } from "react-icons/cg"
import Link from "next/link";
import Projectitem from "./Projectitem";

const Projects = () => {
  return (
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
            projectUrl="/Searchmovie"
          />
          {/* ChatApp */}
          <Projectitem
            title="ChatApp Firebase"
            backgroundImg={chatappImg}
            descriptionText="ReactJS CSS SCSS Firebase"
            projectUrl="/ChatApp"
          />
          {/* KOPI EMAK */}
          <Projectitem
            title="Kopi Emak"
            backgroundImg={propertyImg}
            descriptionText="HTML CSS Basic"
            projectUrl="/Kopiemak"
          />
          {/* Rembang */}
          <Projectitem
            title="Rembang"
            backgroundImg={rembangImg}
            descriptionText="HTML CSS Basic"
            projectUrl="/Rembang"
          />
        </div>
        <div className='flex justify-center py-12'>
          <Link href="/ProjectAll">
            <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300">
              <CgMoreR className='text-[#308C8A]' size={25} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;
