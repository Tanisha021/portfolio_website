import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["Professional Coder.", "Full Stack Developer.", "UI Designer.","Video Editor."],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        {/* <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4> */}
        <h1 className="text-5xl font-bold text-white">
          Hi, I'm <span className="text-purple-500 capitalize">Tanisha Agrawal</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#805AD5"
          />
        </h2>
        <p className="text-xl font-bodyFont leading-6 tracking-wide">
        I'm all about building cool stuff online. I've got a thing for creating sleek, clean UIs that make the web a better place. Let's make user experiences smoother together!
        </p>
      </div>
     {/* Media */}
     <Media />
    </div>
  );
}

export default LeftBanner