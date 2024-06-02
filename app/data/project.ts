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
    title: "Facebook Clone",
    date: "Fev 20",
    imgSrc: "/img/p1.png",
    github: "",
    link: "",
    skills: ["Next JS", "Tailwind"],
  },
  {
    title: "My blog",
    date: "Jan 15",
    imgSrc: "/img/p1.png",
    github: "",
    link: "",
    skills: ["Next JS", "Tailwind"],
  },
];
