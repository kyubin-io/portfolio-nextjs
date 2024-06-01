import Link from "next/link";

type Props = {
  skill: string;
};

export default function CoolLink({ skill }: Props) {
  return (
    <Link
      href={"#"}
      title={skill}
      className="group relative font-sans text-black"
    >
      <span>{skill}</span>
      <svg
        width="100%"
        height="9"
        viewBox="0 0 101 9"
        className="absolute bottom-[-5px] left-0 stroke-1 w-[95px]"
      >
        <path
          d="M.426 1.973C4.144 1.567 17.77-.514 21.443 1.48 24.296 3.026 24.844 4.627 27.5 7c3.075 2.748 6.642-4.141 10.066-4.688 7.517-1.2 13.237 5.425 17.59 2.745C58.5 3 60.464-1.786 66 2c1.996 1.365 3.174 3.737 5.286 4.41 5.423 1.727 25.34-7.981 29.14-1.294"
          pathLength="1"
          fill="none"
          stroke="#000"
          className="scale-x-0 group-hover:scale-100 group-hover:transition group-hover:ease-in-out"
        />
      </svg>
    </Link>
  );
}
