import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Watt Watch"
          des="Created a mobile app to manage water and electricity usage, guiding users to meet consumption goals through behavioral changes. Features separate tabs for tracking electricity and water usage."
          src={projectOne}
          git="https://github.com/Tanisha021/WattWatch"
        />
        <ProjectsCard
          title="Ecomnia: The Ecommerce Analyser"
          des="Ecomnia: Advanced ecommerce analysis tool with dual website analysis, powerful price prediction using Random Forest Regression, and graphical visualization for comprehensive product data insights, backed by machine learning for robust ecommerce analytics."
          src={projectTwo}
          git="https://github.com/Tanisha021/Ecomnia"
        />
        <ProjectsCard
          title="Prompt Me"
          des=" Created Prompt Me, a tool for modern creators to discover, create, and share creative prompts. Users input tags or descriptions, and it generates related prompts for inspiration."
          src={projectThree}
          git="https://github.com/Tanisha021/prompt-me"
        />
        {/* <ProjectsCard
          title="SOCIAL MEDIA CLONE"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectThree}
        />
        <ProjectsCard
          title="E-commerce Website"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectOne}
        />
        <ProjectsCard
          title="Chatting App"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectTwo}
        /> */}
      </div>
    </section>
  );
}

export default Projects