import Header from "./components/Header";
import Loading from "./components/Loading";

export default function Home() {
  return (
    <>
      <Loading />
      <div className="relative w-full h-screen bg-[#111] overflow-hidden">
        <Header />
      </div>
    </>
  );
}
