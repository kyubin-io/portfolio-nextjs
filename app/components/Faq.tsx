import Question from "./Question";

export default function Faq() {
  return (
    <div className="bg-gradient-to-r from-violet-600 to-indigo-600 relative">
      {/* feq__wrap */}
      <div className="py-12 px-[4.5%]">
        {/* section__header-title */}
        <div className="header-title text-white font-orbitron">/Faq</div>
        {/* section__header-subtitle */}
        <div className="header-subtitle">Have any questions ?</div>
        {/* question */}
        <Question />
      </div>
    </div>
  );
}
