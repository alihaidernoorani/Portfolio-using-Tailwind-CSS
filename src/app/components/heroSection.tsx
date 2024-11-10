import Image from "next/image";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function HeroSection() {
    return (
        <section>
        <div className="flex flex-col sm:flex-row items-center justify-between w-[95%] h-screen text-center  p-9">
          <div className="flex flex-col justify-center items-center sm:w-1/2">
            <h1 className="text-7xl sm:text-7xl font-bold font-sans sm:mt-36 mb-4 sm:mb-8 text-gray-800">
              Hi, I'm Ali Haider
            </h1>
            <p className="leading-relaxed text-2xl sm:text-4xl font-sans font-semibold mb-12 sm:mb-8 text-gray-700">
              I'm a <span className="text-blue-600">Frontend Developer</span>
            </p>
            <div className="flex flex-row gap-8 sm:gap-12 justify-center sm:justify-start">
              <a href="https://github.com/alihaidernoorani" target="_blank" rel="noopener noreferrer">
                <FaGithub size={40} className="text-gray-600 hover:text-blue-600 transition duration-300" />
              </a>
              <a href="https://www.linkedin.com/in/alihaidernoorani/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={40} className="text-gray-600 hover:text-blue-600 transition duration-300" />
              </a>
              <a href="https://x.com/alihaider_211" target="_blank" rel="noopener noreferrer">
                <FaTwitter size={40} className="text-gray-600 hover:text-blue-600 transition duration-300" />
              </a>
            </div>
          </div>
          <div className="mt-10 sm:mt-0 sm:w-1/2 flex justify-center">
            <Image
              src="/images/profile.jpeg"
              alt="Ali Haider's profile picture"
              width={300}
              height={300}
              className="rounded-full shadow-lg"
            />
          </div>
        </div>      
    </section>
    )
}