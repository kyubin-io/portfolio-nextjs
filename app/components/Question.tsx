"use client";
import { useState } from "react";

export default function Question() {
  const [open, setOpen] = useState(false);

  function handleOpen() {
    setOpen((state) => !state);
  }
  return (
    <div
      onClick={handleOpen}
      className="relative border-b border-solid border-[#0f0f0f] py-6 px-0 cursor-pointer"
    >
      {/* question__wrap */}
      <div className="grid grid-cols-[26px_auto] items-center gap-4">
        {/* question__status */}
        <div
          className={`w-[26px] h-[26px] bg-transparent border-[3px] border-solid border-[#0f0f0f] rounded-[50%] mt-[2px] transition-all duration-200 ease-in-out max-[700px]:w-[25px] max-[700px]:h-[25px] ${
            open &&
            "bg-[#0f0f0f] outline-1 outline outline-[#0f0f0f] outline-offset-2"
          }`}
        ></div>
        <h3 className="cursor-pointer text-[27px] text-[#0f0f0f] font-semibold max-[700px]:text-[22px]">
          How long does it take to build a website?
        </h3>
      </div>
      {/* question__answer */}
      <div
        className={`font-sans text-xl my-5 mx-0 max-w-[40em] text-[#0f0f0f] pl-[40px] transition-all duration-200 ease-in-out ${
          open ? "block" : "hidden"
        }`}
      >
        <p>
          This completely depends on what you need. It takes longer to build a
          1000 page megasite than a smaller eight page brochure website.
        </p>
      </div>
    </div>
  );
}
