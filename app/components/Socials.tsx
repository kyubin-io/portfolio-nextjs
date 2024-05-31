import { FaGithubSquare, FaLinkedin, FaBlogger } from "react-icons/fa";

const LINKS = [
  {
    icon: (
      <FaGithubSquare className="hover:animate-[coloredIconAnimation_0.2s_infinite]" />
    ),
    url: "https://github.com/kyubinAgnes",
  },
  {
    icon: <FaLinkedin />,
    url: "https://www.linkedin.com/in/kyubin-agnes/",
  },
  {
    icon: <FaBlogger />,
    url: "https://mnemoni-k.blogspot.com/",
  },
];

export default function Socials() {
  return (
    <ul className="absolute left-1/2 bottom-40 transform translate-x-[-50%] flex items-center gap-4">
      {LINKS.map((link, index) => (
        <a
          key={index}
          href={link.url}
          target="_blank"
          rel="noreferrer"
          className="text-4xl 
          text-shadow-a
          hover:animate-[coloredIconAnimation_0.2s_infinite]
          hover:text-shadow-a
          "
        >
          {link.icon}
        </a>
      ))}
    </ul>
  );
}
