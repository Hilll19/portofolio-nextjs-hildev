import React from "react";
import Image from "next/image";
import Link from "next/link";

const Projectitem = ({title, backgroundImg, descriptionText, projectUrl}) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#308C8A] to-[#55c4c2]">
      <Image
        className="rounded-xl group-hover:opacity-20"
        src={backgroundImg}
        alt="/"
        width="1000"
        height="300"
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl text-white uppercase tracking-widest text-center">
          {title}
        </h3>
        <p className="pb-4 pt-2 text-white text-center">{descriptionText}</p>
        <Link href={projectUrl}>
          <p className="text-center mb-2 py-2 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
            More Info
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Projectitem;
