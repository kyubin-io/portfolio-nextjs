import Header from "./components/Header";
import Intro from "./components/Intro";
import Loading from "./components/Loading";
import ScrollDown from "./components/ScrollDown";
import Skills from "./components/Skills";
import Socials from "./components/Socials";

export default function Home() {
  return (
    <>
      <Loading />
      <div
        className="relative w-full h-screen bg-[#111] text-white overflow-hidden
      bg-[url('/img/52.jpg')] bg-cover bg-no-repeat
      "
      >
        <Header />
        <Intro />
        <Socials />

        {/* scrollDown */}
        <ScrollDown />
      </div>
      {/* skills */}
      <Skills />
    </>
  );
}
