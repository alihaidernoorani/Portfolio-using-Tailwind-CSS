import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer(){
  return(
    <div className="bottom-0 flex justify-center items-center bg-slate-700 w-full h-32 text-white">
         <ul className="flex flex-row gap-12">
          <li>
            <a href="https://github.com/alihaidernoorani" target="_blank">
              <FaGithub size={36} />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/alihaidernoorani/" target="_blank">
              <FaLinkedin size={36} />
            </a>
          </li>
          <li>
            <a href="https://x.com/alihaider_211" target="_blank">
              <FaTwitter size={36} />
            </a>
          </li>
        </ul>
    </div>
  );
}