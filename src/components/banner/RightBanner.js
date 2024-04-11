import React from 'react'
import { me3 } from "../../assets/index";
import { me2 } from "../../assets/index";
import { me1 } from "../../assets/index";


const RightBanner = () => {
  return (
    <div className="w-full lgl:w-1/2 flex justify-center items-center ">
      <img
        className="w-[300px] h-[350px] lgl:w-[480px] lgl:h-[660px] z-10 border-2 border-white rounded-full "
        src={me1}
        alt="bannerImg"
      />
      {/* <div className="absolute bottom-0 w-[350px] h-[300px] lgl:w-[500px] lgl:h-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center"></div> */}
    </div>
  );
}

export default RightBanner