import React from 'react'
import { me3 } from "../../assets/index";
import { me2 } from "../../assets/index";
import { pic } from "../../assets/index";

 import { me } from "../../assets/index";


const RightBanner = () => {
  return (
    <div className="w-full lgl:w-1/2 flex justify-center items-center ">
      <img
        className="w-[300px] h-[330px] lgl:w-[480px] lgl:h-[620px] z-10"
        src={me2}
        alt="bannerImg"
      />
      {/* <div className="absolute bottom-0 w-[350px] h-[300px] lgl:w-[500px] lgl:h-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center"></div> */}
    </div>
  );
}

export default RightBanner