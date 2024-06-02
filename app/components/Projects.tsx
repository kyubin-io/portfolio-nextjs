import { projects } from "../data/project";
import Project from "./Project";

export default function Projects() {
  return (
    <section
      className="section-primary max-[1350px]:p-12 max-[740px]:p-4"
      id="projects"
    >
      {/* projects__header */}
      <h1 className="text-6xl italic pb-[10px]">Some of my work</h1>
      {/* project */}
      {projects.map((project, idx) => {
        return (
          <Project
            key={idx}
            index={`${idx + 1} / ${projects.length}`}
            title={project.title}
            date={project.date}
            imgSrc={project.imgSrc}
            github={project.github}
            link={project.link}
            skills={project.skills}
          />
        );
      })}
    </section>
  );
}
