import {
  mobile,
  backend,
  android,
  Python,
  //  creator,
  NextJs,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  bookaroom,
  grabsmartly,
  studentandcourse,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  staffyourevent,
  Aramark,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  // {
  //   title: "Backend Developer",
  //   icon: backend,
  // },
  {
    title: "Android Developer",
    icon: android,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  {
    name: "docker",
    icon: docker,
  },
  // {
  //   name: "Python",
  //   icon:  Python,
  // },
  {
    name: "Next JS",
    icon: NextJs,
  },
];

const experiences = [
  {
    title: "Event Supervisor",
    company_name: "Staff Your Events ",
    icon: staffyourevent,
    iconBg: "#383E56",
    date: "August 2023 - Present",
    points: [
      "Provide effective leadership and supervision to event staff, ensuring flawless execution of tasks and responsibilities.",
      "Coordinate all aspects of event logistics, from setup to breakdown, while maintaining seamless communication with vendors and clients.",
      "Deliver exceptional customer service by promptly addressing client needs and resolving any issues to guarantee satisfaction.",
    ],
  },
  {
    title: "Event Bartender / Server",
    company_name: "Staff Your Events",
    icon: staffyourevent,
    iconBg: "#E6DEDD",
    date: "August 2022 - December 2022",
    points: [
      "Expertly prepare and serve beverages, adhering to the highest standards of quality and service excellence.",
      "Maintain impeccable cleanliness and organization in the bar area, while upholding strict health and safety regulations.",
      "Foster positive guest interactions through friendly and professional customer engagement, contributing to a memorable event experience.",
      "Assist with event setup and breakdown to ensure smooth operations and enhance guest satisfaction.",
    ],
  },
  {
    title: "Team Leader",
    company_name: "Aramark, Seneca College",
    icon: Aramark,
    iconBg: "#383E56",
    date: "September 2023 - Present",
    points: [
      "Lead and inspire a team in food service operations, overseeing daily activities and ensuring adherence to stringent quality and safety standards.",
      "Provide comprehensive training and mentorship to new team members, cultivating a positive and productive work environment.",
      "Collaborate closely with management to devise and implement strategies aimed at enhancing operational efficiency and elevating customer satisfaction.",
      "Manage inventory levels and ordering processes to minimize waste and optimize cost-effectiveness.",
    ],
  },
  {
    title: "Food Sales Representative",
    company_name: "Aramark, Seneca College",
    icon: Aramark,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Employ persuasive communication and sales techniques to effectively promote and sell food products to customers.",
      "Consistently exceed sales targets by actively engaging with customers, understanding their needs, and offering tailored product recommendations.",
      "Demonstrate expert product knowledge and expertise, providing accurate information and guidance to customers.",
      "Handle customer inquiries and concerns with professionalism and efficiency, ensuring resolution and maintaining high levels of customer satisfaction.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Student and Course Management Web-app",
    description:
      "A sophisticated web application designed and developed to manage student and course data, focusing on backend development. Essential functionalities include seamless data handling through HTML forms, adhering to best practices for code efficiency and maintainability.",
    tags: [
      {
        name: "HTML5",
        color: "orange-text-gradient",
      },
      {
        name: "CSS3",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "blue-text-gradient",
      },
    ],
    image: bookaroom,
    source_code_link:
      "https://github.com/PatelDeep484/Student-and-Course-Management-App- ",
  },
  {
    name: "API Powered Art Search Application",
    description:
      "A Next.js application with Bootstrap, enabling users to search for art by title, tag, artist, or culture geo-location. Features include MongoDB integration for storing user data, pagination, and user registration functionalities.",
    tags: [
      {
        name: "Next.js",
        color: "cyan-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "purple-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "React",
        color: "blue-text-gradient",
      },
    ],
    image: studentandcourse,
    source_code_link: "https://github.com/PatelDeep484/API-Powered-Search-App",
  },
  {
    name: "Grab Smartly – Flutter & Firebase",
    description:
      "A cross-platform Grocery List Recipe Management app developed with Flutter, integrating recipe management with real-time price comparison across major Canadian grocery stores. Hosted on Firebase for robust backend support, providing secure data storage and real-time synchronization.",
    tags: [
      {
        name: "Flutter",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "yellow-text-gradient",
      },
      {
        name: "Real-time",
        color: "green-text-gradient",
      },
      {
        name: "Cross-platform",
        color: "purple-text-gradient",
      },
    ],
    image: grabsmartly,
    source_code_link: "https://github.com/PatelDeep484/PRJ666",
  },
];

export { services, technologies, experiences, testimonials, projects };
