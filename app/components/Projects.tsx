import Image from "next/image";
import Link from "next/link";
import CoolCircleEyeButton from "./CoolCircleEyeButton";
import CoolLink from "./CoolLink";

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
            href={"/#"}
            target="_blank"
            title="Twitter clone source code"
            className="pt-12 absolute"
          >
            {/* coolButton */}
            <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg">
              <span>Github</span>
            </button>
            {/* error */}
            <CoolCircleEyeButton />
          </Link>
          {/* project__tags */}
          <div className="absolute bottom-4 flex flex-col gap-4">
            {/* coolfunny link */}
            <CoolLink skill={"NODE JS"} />
            <CoolLink skill={"REACT JS"} />
          </div>
        </div>
      </div>
    </section>
  );
}
