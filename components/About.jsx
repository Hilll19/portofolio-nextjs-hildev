import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className="w-full md:h-screen items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols3 gap-8">
        <div className="col-span-2">
          <p className="mt-10 uppercase text-xl tracking-widest text-[#308C8A]">
            About
          </p>
          <h2 className="py-3">Hello World</h2>
          <p className="p-2 text-gray-600">//Programmer</p>
          <p className="p-2 text-gray-600">
            Mochamad Hilmy Febrian 20 years old, a dedicated and enthusiastic
            web developer. Have a solid foundation in HTML, CSS and JavaScript.
            With 2 years of experience in this field during college student,
            successfully created several simple web and application
            projects.Understand responsive design principles and strive to
            create seamless experiences across devices and browsers
          </p>
          <p className="p-2 text-gray-600">
            Have skilled in using modern frameworks and libraries like React, to
            build dynamic and interactive interfaces.Always try to stay up to
            date with the latest trends and technologies to further my knowledge
            of the industry, and excited to help contribute my skills in
            creating engaging digital experiences.
          </p>
          <p className="p-2 text-gray-600">Lets check ou some CV =</p>
          <button href="" class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center cursor-pointer">
            <svg
              class="fill-current w-4 h-4 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
            </svg>
            <span>Download</span>
          </button>
        </div>
        <div>
          <Image src="/../public/assets/hilll.jpeg" width="250" height="60" />
        </div>
      </div>
    </div>
  );
};

export default About;
