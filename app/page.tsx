"use client";

import { useState } from "react";
import Contact from "./components/Contact";
import Faq from "./components/Faq";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Loading from "./components/Loading";
import Projects from "./components/Projects";
import ScrollDown from "./components/ScrollDown";
import Skills from "./components/Skills";
import Socials from "./components/Socials";
import ThreejsBg from "./components/ThreejsBg";
import ScrollToTop from "./components/ScrollToTop";

export default function Home() {
  const [barWidth, setBarWidth] = useState<number>(0);

  return (
    <>
      <ScrollToTop />
      {/* landing */}
      <div
        className="relative w-full h-screen bg-[#111] text-white overflow-hidden
        bg-[url('/img/52.jpg')] bg-cover bg-no-repeat
        "
        // className="relative w-full h-screen bg-[#111] text-white overflow-hidden"
      >
        <Loading barWidth={barWidth} setBarWidth={setBarWidth} />
        {/* <ThreejsBg /> */}
        <Header barWidth={barWidth} />
        <Intro barWidth={barWidth} />
        <Socials barWidth={barWidth} />

        {/* scrollDown */}
        <ScrollDown barWidth={barWidth} />
      </div>
      {/* skills */}
      <Skills />
      {/* projects */}
      <Projects />
      {/* faq */}
      <Faq />
      {/* contact */}
      <Contact />
    </>
  );
}
