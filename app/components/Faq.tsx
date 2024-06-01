import Question from "./Question";

const questions = [
  {
    question: "How long does it take to build a website?",
    answer:
      "This completely depends on what you need. It takes longer to build a 1000 page megasite than a smaller eight page brochure website.",
  },
];

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
        {questions.map((question, idx) => {
          return <Question key={idx} question={question} />;
        })}
      </div>
    </div>
  );
}
