"use client";
import { useEffect, useState } from "react";

export default function Loading() {
  const [barWidth, setBarWidth] = useState(0);

  const callApi = () => {
    setBarWidth((state) => state + 1);
  };

  useEffect(() => {
    const bar = setInterval(() => {
      console.log(barWidth);
      callApi();
    }, 50);
    if (barWidth > 100) {
      clearInterval(bar);
    }
    return () => clearInterval(bar);
  }, [barWidth]);

  return (
    <div className="fixed inset-0 h-screen w-full z-[99] bg-[#0b134f] grid place-items-center font-orbitron">
      <div className="relative w-[500px] h-[200px] border-[3px] border-solid border-green-400 border-t-green-700 border-b-green-700 max-[600px]:w-[90vw]">
        <div className="relative text-white	p-4 text-xl font-bold flex items-center justify-center max-[355px]:text-sm">
          <div className="w-[85%] h-[1px] bg-dark-green-color absolute bottom-0 left-[50%] translate-x-[-50%] animate-[widthAnimation_1s]"></div>
          L
          <div className="w-4 h-4 my-0 mx-[3px] rounded-[50%] bg-white animate-[pulse_1s_infinite]"></div>
          OADING EXPERIENCE
        </div>
        <div className="absolute w-[90%] h-[10px] top-[50%] left-[50%] translate-x-[-50%] bg-[#ccc] rounded-sm">
          <div
            className={`h-full rounded-sm bg-green-color`}
            style={{ width: barWidth + "%" }}
          >
            {/* inner */}
          </div>
        </div>
        <div className="absolute top-[70%] left-0 text-white text-xl font-bold w-full flex items-center justify-between p-[10px]">
          <span className="text-green-color">0%</span>
          <div>100%</div>
        </div>
      </div>
    </div>
  );
}
