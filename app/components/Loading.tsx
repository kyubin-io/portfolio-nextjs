"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import loadingImage from "../../public/img/loader13.svg";

const loadingBarAnimate = "duration-[5000ms] rotate-90 left-[1000%]";
const opacityAnimate = "duration-[500ms] opacity-0";
const boxAnimate = "duration-[1000ms] h-[500px] rounded-[50%]";
const boxAnimate2 = "border-none";
const svgAnimate =
  "duration-[10000ms] opacity-100 rotate-[270deg] rounded-[50%]";
const svgAnimate2 = "duration-[50000ms] rotate-[360deg] opacity-100";
const backgroundAnimate =
  "duration-[2000ms] delay-[2000ms] z-[1] bg-transparent opacity-50";

export default function Loading() {
  const [barWidth, setBarWidth] = useState(0);
  const [timeOutState, setTimeOutState] = useState(false);

  const callApi = () => {
    setBarWidth((state) => state + 1);
  };

  useEffect(() => {
    let effectTimeout: any;
    const bar = setInterval(() => {
      callApi();
    }, 10);
    if (barWidth >= 100) {
      clearInterval(bar);
      effectTimeout = setTimeout(() => {
        setTimeOutState(true);
      }, 2000);
    }

    return () => {
      clearInterval(bar), clearTimeout(effectTimeout);
    };
  }, [barWidth]);

  return (
    <div
      className={`fixed font-orbitron inset-0 h-screen w-full z-[99] bg-[#0b134f] grid place-items-center 
    ${barWidth === 100 && backgroundAnimate} 
    
    `}
    >
      <div
        className={`relative w-[500px] h-[200px] border-[3px] border-solid border-green-400 border-t-green-700 border-b-green-700 
      max-[600px]:w-[90vw] 
      ${barWidth === 100 && boxAnimate} ${timeOutState && boxAnimate2}

      
      `}
      >
        <Image
          src={loadingImage}
          alt=""
          fill={true}
          className={`absolute top-1/2 left-1/2 ${
            barWidth === 100 && !timeOutState ? svgAnimate : "opacity-0"
          } ${timeOutState && svgAnimate2}`}
        />
        <div
          className={`relative text-white p-4 text-xl font-bold flex items-center justify-center max-[355px]:text-sm ${
            barWidth === 100 && opacityAnimate
          }`}
        >
          <div className="w-[85%] h-[1px] bg-dark-green-color absolute bottom-0 left-[50%] -translate-x-1/2 animate-[widthAnimation_1s_forwards]"></div>
          L
          <div className="w-4 h-4 my-0 mx-[3px] rounded-[50%] bg-white animate-[pulse_1s_infinite]"></div>
          OADING EXPERIENCE
        </div>
        <div
          className={`w-[90%] h-[10px] absolute top-1/2 -translate-x-1/2 bg-[#ccc] rounded-sm ${
            barWidth === 100 ? loadingBarAnimate : "left-1/2"
          }`}
        >
          <div
            className={`h-full rounded-sm bg-green-color`}
            style={{ width: barWidth + "%" }}
          >
            {/* inner */}
          </div>
        </div>

        <div
          className={`absolute top-[70%] left-0 text-white text-xl font-bold w-full flex items-center justify-between p-[10px] ${
            barWidth === 100 && opacityAnimate
          }`}
        >
          <span>0%</span>
          <div className="text-green-color">{barWidth}%</div>
        </div>
      </div>
    </div>
  );
}
