import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div className='w-full md:w-1/2'>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2019-2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education</h2>
        </div>
        <div className="mt-6 lg:mt-14 w-full h-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            subTitle="BTech in Computer Science & Engineering (Till 6th sem)"
            title="Pandit Deendayal Energy University "
            result="9.2/10"
            des="Learnings: DSA (Data Structure and Algorithm), Discrete Mathematics, OOPs with Java,
             Design and Analysis of Algorithm, Design Pattern,Database Management System (DBMS), Operating System (OS), Theory of Computation (TOC), Advance Python, Computer Networks, Cryptography and Information Security, Web Technology, Software Engineering, System Software & Compiler Design, Artifical Intelligence (Ai), Cloud Computing, Big Data Analytics, Industry 4.0, Accounting."
          />
          <ResumeCard
            title="Green Valley High School"
            subTitle="Higher Secondary School Education (May 2021)"
            result="90%"
            des="Higher Secondary Education passed 12th grade being in dummy school."
          />
          <ResumeCard
            subTitle="Secondary School Education (May 2019)"
            title="Delhi Public School "
            result="89%"
            des="High Schooling passed 10 grade being a dipsite"
          />
        </div>
      </div>
      {/* part Two */}

      {/* <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2010 - 2022</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Sr. Software Engineer"
            subTitle="Google Out Tech - (2017 - Present)"
            result="USA"
            des="Google's hiring process is an important part of our culture. Googlers care deeply about their teams and the people who make them up."
          />
          <ResumeCard
            title="Web Developer & Trainer"
            subTitle="Apple Developer Team - (2012 - 2016)"
            result="MALAYSIA"
            des="A popular destination with a growing number of highly qualified homegrown graduates, it's true that securing a role in Malaysia isn't easy."
          />
          <ResumeCard
            title="Front-end Developer"
            subTitle="Nike - (2020 - 2011)"
            result="Oman"
            des="The Oman economy has grown strongly over recent years, having transformed itself from a producer and innovation-based economy."
          />
        </div>
      </div> */}
    </motion.div>
  );
}

export default Education