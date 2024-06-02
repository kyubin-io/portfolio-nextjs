const H4_CLASS =
  "text-4xl w-[93%] pt-4 min-[500px]:text-[55px] min-[1200px]:text-[70px]";

const introAnimate = "duration-[1000ms] delay-[3000ms] visible";

export default function Intro({ barWidth }: any) {
  return (
    <div
      className={`absolute top-[20%] left-4 w-full h-[60%] z-[2] text-white font-tiltPrism min-[1200px]:left-[5%] visible ${
        barWidth >= 100 ? introAnimate : "invisible"
      }
    `}
    >
      <h4 className="text-3xl min-[500px]:text-[40px] min-[1200px]:text-[50px]">
        Hi 👋, My name is
      </h4>
      <h1 className={H4_CLASS}>Kyubin Kim</h1>
      <h1 className={H4_CLASS}>Full stack web developer</h1>
      <h1 className={H4_CLASS}>CODE YOUR DREAM</h1>
      <h1 className={H4_CLASS}>from anywhere</h1>
    </div>
  );
}
