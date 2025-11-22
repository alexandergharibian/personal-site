export interface SiteConfig {
  title: string;
  description: string;
  lang: string;
  author: string;
  siteLogo: string;
  navLinks: { text: string; href: string }[];
  socialLinks: { text: string; href: string }[];
  socialImage: string;
  canonicalURL?: string;
}

export interface SiteContent {
  hero: HeroProps;
  experience: ExperienceProps[];
  projects: ProjectProps[];
  about: AboutProps;
}

export interface HeroProps {
  name: string;
  specialty: string;
  summary: string;
  email: string;
}

export interface ExperienceProps {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  summary: string | string[];
}

export interface ProjectProps {
  name: string;
  summary: string;
  image: string;
  linkPreview?: string;
  linkSource?: string;
}

export interface AboutProps {
  description: string;
  image: string;
}

export interface HeaderProps {
  siteLogo: string;
  navLinks: { text: string; href: string }[];
}

export const SITE_CONFIG: SiteConfig = {
  title: "Alexander Gharibian — Software Engineer",
  author: "Alexander Gharibian",
  description:
    "Software Engineer based in Boston, MA. Specialized in backend development, cloud infrastructure, and full-stack applications. Currently working at Capital One leading teams to build innovative financial services solutions.",
  lang: "en",
  siteLogo: "/alex-small.jpeg",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "LinkedIn", href: "https://www.linkedin.com/in/alexandergharibian" },
    { text: "Github", href: "https://github.com/alexandergharibian" },
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://alexandergharibian.com",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Alexander Gharibian",
    specialty: "Software Engineer",
    summary:
      "Software Engineer based in Boston, MA. Passionate about building innovative software solutions, leading teams, and creating exceptional user experiences. Specialized in backend development, cloud infrastructure, and full-stack applications.",
    email: "alexandergharibian@gmail.com",
  },
  experience: [
    {
      company: "Capital One",
      position: "Senior Associate Software Engineer",
      startDate: "July 2020",
      endDate: "Present",
      summary: [
        "Led a team of 3 to implement Secured Card specific functionality in the website used by Capital One's call center agents, such as the ability to check the balance of and pay the security deposit on the account",
        "Developed RESTful Golang orchestration AWS Lambda APIs to enable millions of Capital One's Secured Card customers to increase their credit limit after their account has been established",
        "Created an automated end-to-end testing framework to create pre-conditioned Secured Card testing accounts to use with internal systems and to allow for integration within CI/CD pipelines to test overall system functionality before deployment, reducing the time to create test data from 15 minutes to 30 seconds",
      ],
    },
    {
      company: "Capital One",
      position: "Associate Software Engineer",
      startDate: "August 2019",
      endDate: "July 2020",
      summary: [
        "Wrote part of the core logic for an AWS Lambda, AWS EMR, and Apache Spark-based decision engine that modifies a business card customer's APR based on payment habits replacing a legacy, on-premise system saving the company $10M annually",
        "Implemented a Java Spring Boot API and Vue.js-based UI tile used by call center agents to see information regarding a customer's remaining statement balance, allowing agents to provide another option for customers to pay their bill",
      ],
    },
    {
      company: "Red Hat",
      position: "Performance Engineering Intern",
      startDate: "May 2018",
      endDate: "August 2018",
      summary: [
        "Wrote unit tests for Machine Learning Container Creator (MLCC), a command line utility that installs a user's desired machine learning packages in a Docker container for Red Hat operating systems in a single command hiding the messy details and eliminating the risk of corrupting the host operating system",
        "Created an ML app using OpenCV and TensorFlow that identifies handwritten digits via camera to demonstrate the MLCC workflow and presented in front of Red Hat employees and executives",
      ],
    },
    {
      company: "Red Hat",
      position: "Software Engineering Intern",
      startDate: "June 2017",
      endDate: "August 2017",
      summary:
        "Worked on the team developing Linchpin, an application that provides a command-line interface and Python API for provisioning and managing resources across multiple infrastructures. I developed the Linchpin fetch feature to retrieve remote topology configurations and integrate them locally to allow users to quickly restore previously working sessions. Linchpin has been downloaded over 225k times.",
    },
  ],
  projects: [
    {
      name: "BandMap",
      summary: "A unified service that allows users to find trustworthy bands and local musicians for hire. Musicians and bands can create their own profile, showcasing their talent so that venues can quickly learn about each artist's capabilities and contact them for hire through the website.",
      linkPreview: "/",
      linkSource: "https://github.com/alexandergharibian",
      image: "/spotifu.png",
    },
  ],
  about: {
    description: `
      Hi, I'm Alexander Gharibian, a Software Engineer based in Boston, MA. I'm passionate about building innovative software solutions and leading teams to deliver exceptional results.

      I currently work at Capital One as a Senior Associate Software Engineer, where I lead a team developing critical financial services applications. My expertise spans backend development with Go and Java, cloud infrastructure on AWS, and full-stack development with Vue.js. I'm also an AWS Certified Solutions Architect Associate.

      When I'm not coding, I enjoy playing guitar and piano, skiing, rowing, and cycling. I'm fluent in both English and Armenian, and I hold a Bachelor of Science in Computer Science from Purdue University with a concentration in Systems Programming and Software Engineering, along with a Certificate in Entrepreneurship.
    `,
    image: "/alex-big.jpeg",
  },
};

