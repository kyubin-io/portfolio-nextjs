import Link from "next/link";

type Props = {
  text: string;
};

export default function CoolCircleEyeButton({ text }: Props) {
  return (
    <Link
      href="#"
      title="live website"
      target="_blank"
      className="group relative inline-block max-[1350px]:translate-x-[-10rem] max-[1350px]:-translate-y-12 max-[440px]:translate-x-0 max-[440px]:translate-y-0"
    >
      {/* textcircle */}
      <svg className="block w-[250px] animate-rotate" viewBox="0 0 500 500">
        <defs>
          <path
            id="textcircle"
            d="M250,400 a150,150 0 0,1 0,-300a150,150 0 0,1 0,300Z"
          />
        </defs>
        <text className="text-[32px] uppercase fill-black group-hover:font-medium">
          <textPath xlinkHref="#textcircle" aria-label={text} textLength="900">
            {text}
          </textPath>
        </text>
      </svg>
      {/* eye */}
      <svg
        className="absolute w-[60px] h-[60px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        aria-hidden="true"
        viewBox="0 0 70 70"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* eye__outer */}
        <path
          className="stroke-black fill-none stroke-[1.5px]"
          d="M10.5 35.308c5.227-7.98 14.248-13.252 24.5-13.252s19.273 5.271 24.5 13.252c-5.227 7.98-14.248 13.253-24.5 13.253s-19.273-5.272-24.5-13.253z"
        />
        {/* eye__lashes-up */}
        <path
          className="stroke-black fill-none stroke-[1.5px] group-hover:animate-eyeHide"
          d="M35 8.802v8.836M49.537 11.383l-3.31 8.192M20.522 11.684l3.31 8.192"
        />
        {/* eye__lashes-down */}
        <path
          className="stroke-black fill-none stroke-[1.5px] opacity-0 group-hover:animate-eyeShow"
          d="M35 61.818v-8.836 8.836zM49.537 59.237l-3.31-8.193 3.31 8.193zM20.522 58.936l3.31-8.193-3.31 8.193z"
        />
        {/* eye__iris */}
        <circle
          className="group-hover:animate-eyeHide"
          cx="35"
          cy="35.31"
          r="5.221"
        />
        {/* eye__inner */}
        <circle
          className="stroke-black fill-none stroke-[1.5px] group-hover:animate-eyeHide"
          cx="35"
          cy="35.31"
          r="10.041"
        />
      </svg>
    </Link>
  );
}
