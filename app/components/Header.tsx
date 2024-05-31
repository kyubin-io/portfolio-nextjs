import Link from "next/link";

export default function Header() {
  return (
    <header className="absolute top-4 left-1/2 translate-x-[-50%]">
      <div className="p-[10px] flex items-center justify-between w-[60vw]">
        {/* header__wrap */}
        <ul className="flex items-center gap-8">
          {/* header__left */}
          <li className="text-lg font-bold">
            <Link
              href="#"
              className="group relative grid place-items-center overflow-hidden
              before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-full before:h-[2px] before:bg-current before:transform before:scale-x-0
              before:transition-transform before:duration-300 before:origin-right before:ease-in-out
            after:content-[attr(data-text)] after:absolute after:top-0 after:h-full after:transform after:translate-x-96 after:transition-transform after:duration-300 after:ease-in-out
            hover:before:transform hover:before:scale-100 hover:before:origin-left
            hover:after:transform hover:after:translate-x-0 hover:after:translate-y-0 hover:after:translate-z-0
            "
            >
              <span className="transition-transform duration-300 ease-in-out group-hover:transform group-hover:-translate-x-150">
                Home
              </span>
            </Link>
          </li>
          <li className="text-lg font-bold">
            <Link href="#">
              <span>Reviews</span>
            </Link>
          </li>
          <li className="text-lg font-bold">
            <Link href="#">
              <span>Projects</span>
            </Link>
          </li>
          <li className="text-lg font-bold">
            <Link href="#">
              <span>Insights</span>
            </Link>
          </li>
          <li className="text-lg font-bold">
            <Link href="#">
              <span>Faq</span>
            </Link>
          </li>
        </ul>
        <div>
          {/* header__right */}
          <button className=" text-white">Contact</button>
        </div>
      </div>
    </header>
  );
}
