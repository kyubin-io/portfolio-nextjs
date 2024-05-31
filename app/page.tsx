import Header from "./components/Header";
import Loading from "./components/Loading";
import Socials from "./components/Socials";

export default function Home() {
  return (
    <>
      <Loading />
      <div className="relative w-full h-screen bg-[#111] overflow-hidden">
        <Header />
        <Socials />
      </div>
    </>
  );
}
