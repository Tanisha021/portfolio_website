import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiFigma, SiNextdotjs } from "react-icons/si";
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          {/* <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2> */}
          <div className="flex gap-4">
            {/* <span className="bannerIcon">
              <FaFacebookF />
            </span> */}
             <a href="https://drive.google.com/file/d/1PMfE2oIXMfxXkzonRQqo1vnIf1IA4D4T/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="font-semibold inline-block px-6 py-5 bg-gradient-to-br from-gray-700 to-gray-900 text-gray-200 hover:text-purple-600 hover:shadow-lg rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105">
  <span className="flex items-center">
    <span>📄</span>
    <span className="ml-2">CHECK RESUME</span>
  </span>
</a>


             {/* <a href="https://www.linkedin.com/in/tanishaagrawal21/" target="_blank" rel="noopener noreferrer" className="bannerIcon">
                  <FaLinkedinIn />
              </a> */}

          </div>
        </div>
        {/* <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4 ">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <SiNextdotjs />
            </span>
            <span className="bannerIcon">
              <SiTailwindcss />
            </span>
            <span className="bannerIcon">
              <SiFigma />
            </span>
          </div>
        </div> */}
      </div>
  )
}

export default Media