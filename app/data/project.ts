export interface ProjectsProps {
  title: string;
  date: string;
  imgSrc: string;
  github?: string;
  link?: string;
  skills: string[];
}

export const projects: ProjectsProps[] = [
  {
    title: "My blog",
    date: "Jan 15",
    imgSrc: "/img/projects/blog.mov",
    github: "https://github.com/kyubinAgnes/blog-nextjs",
    link: "https://blog-nextjs-seven-rho.vercel.app/",
    skills: ["Next JS", "Tailwind"],
  },
  {
    title: "Twitter Clone",
    date: "Fev 20",
    imgSrc: "/img/projects/twitter.png",
    github: "https://github.com/kyubinAgnes/k-com",
    link: "",
    skills: ["Next JS", "Zustand", "Tailwind"],
  },

  {
    title: "Carrot-Market Clone",
    date: "March 1",
    imgSrc: "/img/projects/karrot.png",
    github: "https://github.com/kyubinAgnes/carrot-market",
    link: "",
    skills: ["Next JS", "Typescript", "Prisma", "Tailwind"],
  },
  // {
  //   title: "Airbnb Clone",
  //   date: "March 1",
  //   imgSrc: "/img/p1.png",
  //   github: "https://github.com/kyubinAgnes/airbnb-clone-backend",
  //   link: "",
  //   skills: ["React", "Django", "Chakra"],
  // },
];
