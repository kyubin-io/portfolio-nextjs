import Link from "next/link";
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
    url: "https://www.linkedin.com/in/kyubin-kim-935788293/",
  },
  {
    icon: (
      <FaBlogger className="hover:animate-[coloredIconAnimation_0.2s_infinite]" />
    ),
    url: "https://mnemoni-k.blogspot.com/",
  },
];

const socialsAnimate = "duration-[1000ms] delay-[2500ms] bottom-40";

export default function Socials({ barWidth }: any) {
  return (
    <ul
      className={`absolute left-1/2 transform -translate-x-1/2 flex items-center gap-4 z-[2] ${
        barWidth === 100 ? socialsAnimate : "bottom-[-100%]"
      }`}
    >
      {LINKS.map((link, index) => (
        <Link
          key={index}
          href={link.url}
          target="_blank"
          rel="noreferrer"
          className="text-4xl"
        >
          {link.icon}
        </Link>
      ))}
    </ul>
  );
}
