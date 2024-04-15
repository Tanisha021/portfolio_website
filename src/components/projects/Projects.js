import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree,projectfour,projectfive,github } from "../../assets/index";
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
          figma=""
          git="https://github.com/Tanisha021/WattWatch"
          img={github}
        />
        <ProjectsCard
          title="Ecomnia: The Ecommerce Analyser"
          des="Ecomnia: Advanced ecommerce analysis tool with dual website analysis, powerful price prediction using Random Forest Regression, and graphical visualization for comprehensive product data insights, backed by machine learning for robust ecommerce analytics."
          src={projectTwo}
          figma=""
          git="https://github.com/Tanisha021/Ecomnia"
          img={github}
        />
        <ProjectsCard
          title="Prompt Me"
          des=" Created Prompt Me, a tool for modern creators to discover, create, and share creative prompts. Users input tags or descriptions, and it generates related prompts for inspiration."
          src={projectThree}
          git="https://github.com/Tanisha021/prompt-me"
          figma=""
          img={github}
        />
         <ProjectsCard
          title="Edutech"
          des=" Designed and developed an EdTech website with a user-friendly admin portal and dashboard"
          src={projectfour}
          git=""
          figma="https://www.figma.com/file/zzJMS1QPcNvyKrSZqlocmg/EduTech?type=design&node-id=0-1&mode=design&t=CmDrsS1oljaLr9es-0"
        />
         <ProjectsCard
          title="theAutoChat"
          des="Designed a popular platform for creating Instagram chatbots, offering a drag-and-drop builder and features for automated response. It's widely used by businesses for marketing and customer engagement."
          src={projectfive}
          git=""
          figma="https://www.figma.com/file/GuOas18ZJLj30nnD6iEF3o/Autochat2.0?type=design&node-id=74-164&mode=design&t=C8t2YjTxupBvb5UV-0"
        />
       { /*
       
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