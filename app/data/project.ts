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
    github: "https://github.com/kyubin-io/blog-nextjs",
    link: "https://blog-nextjs-seven-rho.vercel.app/",
    skills: ["Next JS", "Tailwind"],
  },
  {
    title: "Twitter Clone",
    date: "Fev 20",
    imgSrc: "/img/projects/twitter.png",
    github: "https://github.com/kyubin-io/k-com",
    link: "",
    skills: ["Next JS", "Zustand", "Tailwind"],
  },

  {
    title: "Carrot-Market Clone",
    date: "March 1",
    imgSrc: "/img/projects/karrot.png",
    github: "https://github.com/kyubin-io/carrot-market",
    link: "",
    skills: ["Next JS", "Typescript", "Prisma", "Tailwind"],
  },
  {
    title: "Discogs Artist & Music Search",
    date: "July 14",
    imgSrc: "/img/projects/discogs.png",
    github: "https://github.com/kyubin-io/discogs-search-project",
    link: "https://discogs-search-project.vercel.app/",
    skills: ["Next JS", "Typescript", "Discogs API"],
  },
  // {
  //   title: "Airbnb Clone",
  //   date: "March 1",
  //   imgSrc: "/img/p1.png",
  //   github: "https://github.com/kyubin-io/airbnb-clone-backend",
  //   link: "",
  //   skills: ["React", "Django", "Chakra"],
  // },
];
