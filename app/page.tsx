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

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
          {/* scrollDown */}
          <div className="h-[42px] w-[24px] rounded-[10px] border-2 border-solid border-white">
            {/* __wheel */}
            <div className="absolute left-[10px] mt-[5px] w-1 h-1 bg-white rounded-[50%]">
              {/* wheel--inner */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
