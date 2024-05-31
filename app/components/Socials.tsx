import { FaGithubSquare, FaLinkedin, FaBlogger } from "react-icons/fa";

const LINKS = [
  {
    icon: (
      <FaGithubSquare className="hover:animate-[coloredIconAnimation_0.2s_infinite]" />
    ),
    url: "https://github.com/kyubinAgnes",
  },
  {
    icon: (
      <FaLinkedin className="hover:animate-[coloredIconAnimation_0.2s_infinite]" />
    ),
    url: "https://www.linkedin.com/in/kyubin-agnes/",
  },
  {
    icon: (
      <FaBlogger className="hover:animate-[coloredIconAnimation_0.2s_infinite]" />
    ),
    url: "https://mnemoni-k.blogspot.com/",
  },
];

export default function Socials() {
  return (
    <ul className="absolute left-1/2 bottom-40 transform -translate-x-1/2 flex items-center gap-4">
      {LINKS.map((link, index) => (
        <a
          key={index}
          href={link.url}
          target="_blank"
          rel="noreferrer"
          className="text-4xl"
        >
          {link.icon}
        </a>
      ))}
    </ul>
  );
}
