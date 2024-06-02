import Question from "./Question";

const questions = [
  {
    question: "How long does it take to build a website?",
    answer:
      "This completely depends on what you need. It takes longer to build a 1000 page megasite than a smaller eight page brochure website.",
  },
  {
    question: "What tech do you mainly use in projects?",
    answer:
      "I mainly use JavaScript and React. For data management, I use Redux or Context API, and for UI, I prefer CSS and Tailwind CSS.",
  },
  {
    question: "What projects have you collaborated on? Any challenges faced?",
    answer:
      "Recently, I worked on a team project in my company. The main challenges were code conflicts and communication gaps. We tackled these by using Gitlab  actively and having weekly meetings to share project progress.",
  },
  {
    question: "Have you refactored or improved your code before?",
    answer:
      "Yes, I'm keen on continually improving and refactoring my code. Recently, I refactored the API call part of our project by separating it into Redux middleware for cleaner code.",
  },
  {
    question: "How do you approach learning and growing?",
    answer:
      "I believe in continuous learning and growth. I take online courses to learn new technologies and actively participate in developer communities to share knowledge. Also, I learn and grow through project challenges and reflecting on past code for self-improvement.",
  },
  {
    question: "Thoughts on collaborating in team projects?",
    answer:
      "Effective communication and mutual respect are crucial for collaborating in team projects. Good communication fosters smooth interaction and problem-solving, while respecting each other's tasks and cooperating are vital for project success.",
  },
];

export default function Faq() {
  return (
    <div
      className="bg-gradient-to-r from-violet-600 to-indigo-600 relative"
      id="faq"
    >
      {/* feq__wrap */}
      <div className="py-12 px-[4.5%]">
        {/* section__header-title */}
        <div className="header-title text-white">/Faq</div>
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
