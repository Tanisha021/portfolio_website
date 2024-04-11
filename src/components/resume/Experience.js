import React from "react";
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div className="w-1/2">
        <div className="flex flex-col gap-4">
          {/* <p className="text-sm text-designColor tracking-[4px]">2021 - 2024</p> */}
          <h2 className="text-4xl font-bold">Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Web developer intern"
            subTitle="Placement Portal - (Aug 2023 - Dec 2023)"
            result="Gandhinagar"
            des="Orchestrated the development of an innovative Placement Portal for PDEU College, granting 500+ students direct
            access to 100+ high-quality internship opportunities, fostering career growth and professional development."
          />
          <ResumeCard
            title="Web Designer"
            subTitle="EduTech - (June 2023 - Aug 2023)"
            result="Ahmedabad"
            des="Designed and developed an EdTech website with a user-friendly admin portal and dashboard"
          />
          <ResumeCard
            title="Volunteer"
            subTitle="Divyaroshni Foundation  - (June 2022 - July 2022)"
            result="Vadodara"
            des="Orchestrated targeted tutoring sessions for students in marginalized areas, focusing on literacy and numeracy
            skills also boost in mathematical abilities."
          />
        </div>
      </div>
      {/* <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2001 - 2020</p>
          <h2 className="text-4xl font-bold">Trainer Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Gym Instructor"
            subTitle="Rainbow Gym Center (2015 - 2020)"
            result="DHAKA"
            des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
          />
          <ResumeCard
            title="Web Developer and Instructor"
            subTitle="SuperKing College (2010 - 2014)"
            result="CANADA"
            des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
          />
          <ResumeCard
            title="School Teacher"
            subTitle="Kingstar Secondary School (2001 - 2010)"
            result="NEVADA"
            des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          />
        </div>
      </div> */}
    </motion.div>
  );
};

export default Experience;
