import Image from "next/image";
import Link from "next/link";
import CoolCircleEyeButton from "./CoolCircleEyeButton";
import CoolLink from "./CoolLink";

export default function Projects() {
  return (
    <section className="section-primary max-[1350px]:p-12 max-[740px]:p-4">
      {/* projects__header */}
      <h1 className="text-6xl italic pb-[10px]">Some of my work</h1>
      {/* project */}
      <div>
        {/* project__header */}
        <div className="grid grid-cols-[1fr_3fr] gap-4 font-sans">
          <span className="border-t border-solid border-black p-4 text-3xl text-center max-[440px]:text-2xl">
            1/8
          </span>
          <span className="border-t border-solid border-black p-4 text-3xl text-center max-[440px]:text-2xl">
            Fev 20
          </span>
        </div>
        {/* project__infos */}
        <div className="mt-4">
          {/* project__infos--name */}
          <h1 className="relative text-[3vw] font-sans flex items-center max-[1350px]:text-4xl max-[740px]:text-3xl">
            Facebook Clone{" "}
            <span className="max-[740px]:hidden">(Very advanced)</span>
          </h1>
        </div>
        {/* project__img */}
        <div className="relative w-screen h-[700px]">
          <div
            className="absolute w-[60vw] h-[600px] right-[10vw] top-12 bg-cover border border-gray-200 max-[1350px]:w-[74vw] max-[1350px]:right-20
          max-[740px]:w-[85vw] max-[740px]:right-12
          "
          >
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
            <CoolCircleEyeButton text={".Click to see the live version."} />
          </Link>
          {/* project__tags */}
          <div className="absolute bottom-4 flex flex-col gap-4 max-[740px]:flex-row max-[740px]:top-0 max-[740px]:left-0 max-[440px]:gap-[6px] max-[440px]:text-xs">
            {/* coolfunny link */}
            <CoolLink skill={"NODE JS"} />
            <CoolLink skill={"REACT JS"} />
          </div>
        </div>
      </div>
    </section>
  );
}
