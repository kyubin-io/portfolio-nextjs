import Image from "next/image";
import Link from "next/link";
import CoolCircleEyeButton from "./CoolCircleEyeButton";

export default function Projects() {
  return (
    <section className="section-primary">
      {/* projects__header */}
      <h1 className="text-6xl italic pb-[10px]">Some of my work</h1>
      {/* project */}
      <div>
        {/* project__header */}
        <div className="grid grid-cols-[1fr_3fr] gap-4 font-sans">
          <span className="border-t border-solid border-black p-4 text-3xl text-center">
            1/8
          </span>
          <span className="border-t border-solid border-black p-4 text-3xl text-center">
            Fev 20
          </span>
        </div>
        {/* project__infos */}
        <div className="mt-4">
          {/* project__infos--name */}
          <h1 className="relative text-[3vw] font-sans flex items-center">
            Facebook Clone <span>(Very advanced)</span>
          </h1>
        </div>
        {/* project__img */}
        <div className="relative w-screen h-[700px]">
          <div className="absolute w-[60vw] h-[600px] right-[10vw] top-12 bg-cover border border-gray-200">
            <Image
              src="/img/p1.png"
              fill={true}
              alt="Twitter clone"
              className=""
            />
          </div>

          {/* project__links */}
          <Link
            href={"#"}
            target="_blank"
            title="Twitter clone source code"
            className="pt-12 absolute"
          >
            {/* coolButton */}
            <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg">
              <span>Github</span>
            </button>
            <CoolCircleEyeButton />
          </Link>
          {/* project__tags */}
          <div>
            <Link href={"#"} title="Node js" className="">
              <span>Node JS</span>
              <svg width="100%" height="9" viewBox="0 0 101 9">
                <path
                  d="M.426 1.973C4.144 1.567 17.77-.514 21.443 1.48 24.296 3.026 24.844 4.627 27.5 7c3.075 2.748 6.642-4.141 10.066-4.688 7.517-1.2 13.237 5.425 17.59 2.745C58.5 3 60.464-1.786 66 2c1.996 1.365 3.174 3.737 5.286 4.41 5.423 1.727 25.34-7.981 29.14-1.294"
                  pathLength="1"
                  fill="none"
                  stroke="#000"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
