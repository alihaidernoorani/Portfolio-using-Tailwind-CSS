import React from 'react';
import Image from 'next/image';
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function About () {
  return (
    <section className="text-gray-600 body-font">
    <div className="container mx-auto flex px-5 py-24 items-center justify-center   
flex-col">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">   

        About Me
      </h1>
      <Image
        className="mb-10 object-center rounded-full"
        alt="hero"
        src="/images/profile.jpeg"
        width={300}
        height={300}
      />
      <div className="text-center lg:w-2/3 w-full">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">   

          Frontend Developer
        </h1>
        <p className="mb-8 leading-relaxed">
          I'm a web developer who crafts elegant digital experiences. My expertise lies in HTML, CSS, JavaScript, and TypeScript. I'm passionate about creating responsive, user-friendly websites that leave a lasting impression.
        </p>
        <div className="flex flex-row gap-8 sm:gap-12 justify-center">
          <a href="https://github.com/alihaidernoorani" target="_blank" rel="noopener">
            <FaGithub size={40} className="text-gray-600 hover:text-blue-600 transition duration-300" />
          </a>
          <a href="https://www.linkedin.com/in/alihaidernoorani/" target="_blank" rel="noopener">
            <FaLinkedin size={40} className="text-gray-600 hover:text-blue-600 transition duration-300" />
          </a>
          <a href="https://x.com/alihaider_211" target="_blank" rel="noopener">
            <FaTwitter size={40} className="text-gray-600 hover:text-blue-600 transition duration-300" />
          </a>
        </div>
      </div>
    </div>
    <Skills />
  </section>
);
}

interface SkillProps {
    name: string;
    percent: number;
  }

const skillsData = [
  { name: 'HTML', percent: 90 },
  { name: 'CSS', percent: 85 },
  { name: 'TypeScript', percent: 80 },
  { name: 'Next.js', percent: 85 },
  { name: 'Tailwind', percent: 80 },
];

function Skills() {
  return (
    <div className="container mx-auto px-5 py-16">
      <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">My Skills</h2>
      <div className="flex flex-col gap-6">
        {skillsData.map((skill) => (
          <SkillBar key={skill.name} name={skill.name} percent={skill.percent} />
        ))}
      </div>
    </div>
  );
}

function SkillBar({ name, percent }: SkillProps) {
  return (
    <div className="w-full mb-4">
      <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
      <div className="w-full bg-gray-200 rounded-full h-3">
        <div
          className="bg-blue-500 h-3 rounded-full"
          style={{ width: `${percent}%` }}
        ></div>
      </div>
      <p className="text-sm text-gray-700 mt-1">{percent}% Proficiency</p>
    </div>
  );
}