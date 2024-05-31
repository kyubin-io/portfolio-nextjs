import Link from "next/link";

const LINK_EFFECT =
  "relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left";

export default function Header() {
  return (
    <header className="group absolute top-4 left-1/2 -translate-x-1/2 z-[2]">
      <div className="p-[10px] flex items-center justify-between w-[60vw] max-[1200px]:w-screen max-[370px]:gap-[20%]">
        {/* header__wrap */}
        <ul className="flex items-center gap-8">
          {/* header__left */}
          <li className="text-lg font-bold max-[370px]:hidden">
            <Link href="#" className={LINK_EFFECT}>
              <span>Home</span>
            </Link>
          </li>
          <li className="text-lg font-bold max-[650px]:hidden">
            <Link href="#" className={LINK_EFFECT}>
              <span>Reviews</span>
            </Link>
          </li>
          <li className="text-lg font-bold">
            <Link href="#" className={LINK_EFFECT}>
              <span>Projects</span>
            </Link>
          </li>
          <li className="text-lg font-bold max-[650px]:hidden">
            <Link href="#" className={LINK_EFFECT}>
              <span>Insights</span>
            </Link>
          </li>
          <li className="text-lg font-bold max-[650px]:hidden">
            <Link href="#" className={LINK_EFFECT}>
              <span>Faq</span>
            </Link>
          </li>
        </ul>
        <div>
          {/* header__right */}
          <button className="text-whit relative inline-flex group max-[800px]:scale-75">
            <div className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
            <span className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">
              Contact
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
