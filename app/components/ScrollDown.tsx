const scrollDownAnimate = "duration-[1000ms] delay-[3000ms] bottom-12";

export default function ScrollDown({ barWidth }: any) {
  return (
    <div
      className={`absolute left-1/2 -translate-x-1/2 ${
        barWidth >= 100 ? scrollDownAnimate : "bottom-[-100%]"
      }`}
    >
      {/* __wheel */}
      <div className="h-[42px] w-[24px] rounded-[10px] border-2 border-solid border-white">
        {/* wheel--inner */}
        <div className="absolute left-[10px] mt-[5px] w-1 h-1 bg-white rounded-[50%] animate-movingWheel"></div>
      </div>
      {/* scrollDown__arrows */}
      <div className="flex flex-col items-center">
        {/*  */}
        <span className="w-[15px] h-[15px] border-r-2 border-b-2 border-solid border-white rotate-45  animate-[scrollAnim_1s_infinite_alternate_100ms]"></span>
        <span className="w-[15px] h-[15px] border-r-2 border-b-2 border-solid border-white rotate-45  animate-[scrollAnim_1s_infinite_alternate_200ms]"></span>
        <span className="w-[15px] h-[15px] border-r-2 border-b-2 border-solid border-white rotate-45  animate-[scrollAnim_1s_infinite_alternate_300ms]"></span>
      </div>
    </div>
  );
}
