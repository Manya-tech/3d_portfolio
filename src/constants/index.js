import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    java,
    git,
    flask,
    docker,
    python,
    mysql,
    tensorflow,
    tableau,
    huggingface,
    experience,
    smartview,
    sitecodegen,
    covidvaccine
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
      title: "Data Scientist",
      icon: web,
    },
    {
      title: "Data Analyst",
      icon: mobile,
    },
    {
      title: "Web Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "Python",
      icon: python,
    },
    {
      name: "MySQL",
      icon: mysql,
    },
    {
      name: "Tensorflow",
      icon: tensorflow,
    },
    {
      name: "Huggingface",
      icon: huggingface,
    },
    {
      name: "Flask",
      icon: flask,
    },
    {
      name: "Tableau",
      icon: tableau,
    },
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
      name: "Java",
      icon: java,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Python Instructor",
      company_name: "Out of the Box Solutions",
      icon: experience,
      iconBg: "#383E56",
      date: "April 2023 - July 2023",
      points: [
        "Had 100% positive feedback in the demo sessions conducted by me",
        "Learnt how to deal with customers and sell the courses offered by the company.",
        "Delivered complex Python Programming concepts in a simple manner which improved my understanding of the topic.",
      ],
    },
    {
      title: "Backend Developer",
      company_name: "Krivaansa Infotech Pvt. Ltd.",
      icon: experience,
      iconBg: "#E6DEDD",
      date: "July 2023 - August 2023",
      points: [
        "Developed projects providing real world solutions.",
        "Led the design of databases for 5 projects, enhancing efficiency in e-commerce websites and school fee management systems.",
        "Engaged with clients directly to understand needs and projectrequirements.",
      ],
    },
    // {
    //   title: "Web Developer",
    //   company_name: "Shopify",
    //   icon: experience,
    //   iconBg: "#383E56",
    //   date: "Jan 2022 - Jan 2023",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    // {
    //   title: "Full stack Developer",
    //   company_name: "Meta",
    //   icon: meta,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2023 - Present",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
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
      name: "SmartView",
      description:
        "Website that fetches top 3 videos on a topic from YouTube, performs sentiment analysis on its comments and generates a comprehensive report.",
      tags: [
        {
          name: "tensorflow",
          color: "blue-text-gradient",
        },
        {
          name: "flask",
          color: "green-text-gradient",
        },
        {
          name: "youtubedataapi",
          color: "pink-text-gradient",
        },
      ],
      image: smartview,
      source_code_link: "https://github.com/Manya-tech/SmartView",
    },
    {
      name: "Site Code Generator",
      description:
        "Website where the user can enter the image of a website and the code for its frontend will be generated.",
      tags: [
        {
          name: "googlegeminipro",
          color: "blue-text-gradient",
        },
        {
          name: "python",
          color: "green-text-gradient",
        },
        {
          name: "streamlit",
          color: "pink-text-gradient",
        },
      ],
      image: sitecodegen,
      source_code_link: "https://mania-codegenerator.streamlit.app/",
    },
    {
      name: "COVID-19 Global Vaccine Tracker",
      description:
        "An interactive dashboard made using Tableau to track the global vaccination progress of COVID-19.",
      tags: [
        {
          name: "tableau",
          color: "blue-text-gradient",
        },
      ],
      image: covidvaccine,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };