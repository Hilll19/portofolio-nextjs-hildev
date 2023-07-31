import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className="w-full md:h-screen items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols3 gap-8">
        <div className="col-span-2">
          <p className="mt-16 ml-2 uppercase text-xl font-bold tracking-widest text-[#308C8A]">
            About
          </p>
          <h2 className="py-3 ml-2">Hello World</h2>
          <p className="p-2 text-gray-600 ml-2">//Programmer</p>
          <p className="p-2 text-gray-600 ml-2">
            Mochamad Hilmy Febrian 20 years old, a dedicated and enthusiastic
            web developer. Have a solid foundation in HTML, CSS and JavaScript.
            With 2 years of experience in this field during college student,
            successfully created several simple web and application
            projects.Understand responsive design principles and strive to
            create seamless experiences across devices and browsers
          </p>
          <p className="p-2 text-gray-600 ml-2">
            Have skilled in using modern frameworks and libraries like React, to
            build dynamic and interactive interfaces.Always try to stay up to
            date with the latest trends and technologies to further my knowledge
            of the industry, and excited to help contribute my skills in
            creating engaging digital experiences.
          </p>
          <p className="flex p-2 text-gray-600 xl:ml-[550px] ml-[105px]">
            Lets check out my CV{" "}
          </p>
          <div className="flex items-center justify-between mb-5 xl:mb-[-20px]">
            <button
              href=""
              className="bg-[#308C8A] hover:bg-[#306b6a] text-white font-bold py-2 px-3 ml-[130px] rounded-full cursor-pointer hover:scale-105 ease-in duration-300 xl:ml-[575px]"
            >
              Download
            </button>
          </div>
        </div>
        <div className="xl:w-auto w-[200px] ml-[94px] h-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-2 hover:scale-105 ease-in duration-300 xl:ml-[530px]">
          <Image src="/../public/assets/hilll.jpeg" width="200" height="60" />
        </div>
      </div>
    </div>
  );
};

export default About;
