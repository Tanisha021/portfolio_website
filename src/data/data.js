import { AiFillAppstore } from "react-icons/ai";
import { FaMobile, FaGlobe} from "react-icons/fa";
import { MdComputer } from "react-icons/md";
import { FaVideo } from "react-icons/fa";
import { SiProgress, SiAntdesign } from "react-icons/si";

// Features Data
export const featuresData = [
  // {
  //   id: 1,
  //   title: "Business Stratagy",
  //   des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque solutahic consequuntur eum repellendus ad",
  // },
  // {
  //   id: 2,
  //   icon: <AiFillAppstore />,
  //   title: "App Development",
  //   des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque solutahic consequuntur eum repellendus ad",
  // },
  // {
  //   id: 3,
  //   icon: <SiProgress />,
  //   title: "SEO Optimisation",
  //   des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque solutahic consequuntur eum repellendus ad",
  // },
  {
    id: 4,
    icon: <MdComputer />,
    title: "Web Development",
    des: "Skilled in web development, focusing on creating user-friendly interfaces. Experienced in HTML, CSS, JavaScript, React.js, Node.js, and MongoDB. Enthusiastic about creating seamless, engaging experiences.",
  },
  {
    id: 5,
    icon: <SiAntdesign />,
    title: "UX Design",
    des: "Skilled in digging deep into user needs, sketching out ideas, and bringing them to life with Figma,WebFLow, and Adobe XD. Love creating designs that surprise and delight users, keeping them hooked and happy",
  },
  {
    id: 6,
    icon: <FaVideo />,
    title: "Video Editor",
    des: "Experienced in visual storytelling and video editing, with expertise in Adobe Premiere Pro. Skilled in crafting engaging narratives and enhancing visual content to captivate audiences.",
  },
];

//skills data
export const skills = [
  {
    title: "Frontend",
    skills: [
      {
        name: "React Js",
        image:
          "images/react.svg",
      },
      {
        name: "Redux",
        image:
          "images/redux.svg",
      },
      {
        name: "Next Js",
        image:"images/next.png"
      },
      {
        name: "HTML",
        image: "images/html.png",
      },
      {
        name: "CSS",
        image:
          "images/css.png",
      },
      {
        name: "JavaScript",
        image:
          "images/js.png",
      },
      {
        name: "Bootstrap",
        image:
          "images/bootstrap.png",
      },
      // {
      //   name: "Material UI",
      //   image:
      //     "data:image/png;base64,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",
      // },
      {
        name: "Flutter",
        image:
          "images/flutter.png",
      },
    ],
  },
  {
    title: "Backend",
    skills: [
      {
        name: "Node Js",
        image: "images/nodejs.png",
      },
      {
        name: "Express Js",
        image:"/images/express.png"
         
      },
      // {
      //   name: "Graph Ql",
      //   image: "https://www.vectorlogo.zone/logos/graphql/graphql-icon.svg",
      // },
      {
        name: "Python",
        image:
          "images/python.svg",
      },
      {
        name: "MySQL",
        image:
          "/images/mysql.svg",
      },
      {
        name: "Postgresql",
        image: "/images/postgress.png",
      },
      {
        name: "MongoDB",
        image:
          "images/mongodb.svg",
      },
      {
        name: "Firebase",
        image: "images/firebase.svg",
      },
    ],
  },
  // {
  //   title: "Android",
  //   skills: [
  //     {
  //       name: "Java",
  //       image:
  //         "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
  //     },
  //     {
  //       name: "Kotlin",
  //       image:
  //         "https://www.vectorlogo.zone/logos/kotlinlang/kotlinlang-icon.svg",
  //     },
  //     {
  //       name: "XML",
  //       image:
  //         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBMw6_RdwKQ9bDFfnKDX1iwMl4bVJEvd9PP53XuIw&s",
  //     },
  //     {
  //       name: "Android Studio",
  //       image:
  //         "https://developer.android.com/static/studio/images/new-studio-logo-1_1920.png",
  //     },
  //   ],
  // },
  {
    title: "Others",
    skills: [
      {
        name: "Git",
        image:
          "images/git.png",
      },
      {
        name: "GitHub",
        image:
          "images/github.png",
      },
      {
        name: "Docker",
        image:
          "images/docker.svg",
      },
      {
        name: "Netlify",
        image:
          "images/netlify.png",
      },
      {
        name: "VS Code",
        image:
          "images/vs.png",
      },
      {
        name: "Postman",
        image:
          "images/postman.png",
      },
      {
        name: "Adobe XD",
        image:
          "images/adobe.svg",
      },
      {
        name: "Figma",
        image:
          "images/figma.png",
      },
    ],
  },
];

export const Bio = {
  name: "Bhavya Mehta",
  roles: [
    "Full Stack Developer",
    "UI/UX Designer",
    "Programmer",
    "Problem Solver",
    "Tech Enthusiast",
  ],
  description:
    "A passionate tech-learner with a 'can-do' attitude, I'm constantly exploring new languages and tools. I bring a positive mindset and a growth focus to every project, always striving to deliver impactful solutions. Let's collaborate and build something amazing!",
  github: "https://github.com/Tanisha021",
  resume:
    "https://drive.google.com/file/d/1PMfE2oIXMfxXkzonRQqo1vnIf1IA4D4T/view?usp=drive_link",
  linkedin: "https://www.linkedin.com/in/tanishaagrawal21/",
  twitter: "https://twitter.com/TanishaA41737",
  insta: "https://www.instagram.com/tanishaagrawal_21/",
};

// service_nkyhpg3

// template_facjenf
