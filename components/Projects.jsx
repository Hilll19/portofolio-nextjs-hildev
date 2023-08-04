import React from "react";
import Image from "next/image";
import propertyImg from "@/public/assets/projects/kopiemak1.png";
import rembangImg from "@/public/assets/projects/RembangTour1.png"
import chatappImg from "@/public/assets/projects/ChatAppSs.png"
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
          {/* ChatApp */}
          <Projectitem
            title="ChatApp Firebase"
            backgroundImg={chatappImg}
            descriptionText="ReactJS Firebase"
            projectUrl="/Chatapp"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
