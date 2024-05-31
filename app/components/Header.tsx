import Link from "next/link";

export default function Header() {
  return (
    <header className="absolute top-4 left-1/2 translate-x-[-50%]">
      <div className="p-[10px] flex items-center justify-between w-[60vw]">
        {/* header__wrap */}
        <ul className="flex items-center gap-8">
          {/* header__left */}
          <li>
            <Link href="#">
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link href="#">
              <span>Reviews</span>
            </Link>
          </li>
          <li>
            <Link href="#">
              <span>Projects</span>
            </Link>
          </li>
          <li>
            <Link href="#">
              <span>Insights</span>
            </Link>
          </li>
          <li>
            <Link href="#">
              <span>Faq</span>
            </Link>
          </li>
        </ul>
        <div>
          {/* header__right */}
          <button>Contact</button>
        </div>
      </div>
    </header>
  );
}
