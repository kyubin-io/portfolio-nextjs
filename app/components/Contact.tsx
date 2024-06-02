import { FiSend } from "react-icons/fi";

const INFO_CLASS =
  "flex items-center gap-4 text-[2.2vw] font-medium max-[900px]:text-[4vw] max-[610px]:flex-col max-[610px]:items-center max-[610px]:text-[5vw] max-[610px]:w-full";
const INPUT_CLASS =
  "font-inherit text-inherit bg-transparent border-b border-solid border-black text-white focus:outline-none placeholder:text-gray-200 max-[900px]:text-[4vw] max-[610px]:w-full";

const FLEX_CLASS = "flex gap-4 mb-8 max-[900px]:flex-col";

export default function Contact() {
  return (
    <section className="section-primary font-sans bg-gradient-to-r from-amber-500 to-pink-500 max-[1100px]:p-8">
      {/* contact__wrapper */}
      <div>
        {/* contact__header */}
        <div className="mb-12">
          {/* section__header-title */}
          <div className="header-title text-white">/Contact</div>
          {/* section__header-subtitle */}
          <div className="header-subtitle">Get in touch</div>
        </div>
        {/* contact__form */}
        <div>
          <form action="#">
            {/* form__flex */}
            <div className={FLEX_CLASS}>
              {/* form__info */}
              <div className={INFO_CLASS}>
                <label>Hey, My name is </label>
                <input
                  className={INPUT_CLASS}
                  type="text"
                  placeholder="Type here"
                />
              </div>
              {/* form__info */}
              <div className={INFO_CLASS}>
                <label>{"I'm looking for"}</label>
                <input
                  className={INPUT_CLASS}
                  type="text"
                  placeholder="Type of service"
                />
              </div>
            </div>
            {/* form__flex */}
            <div className={FLEX_CLASS}>
              {/* form__info */}
              <div className={INFO_CLASS}>
                <label>Get in touch with me at</label>
                <input
                  className={INPUT_CLASS}
                  type="text"
                  placeholder="Your Email id here"
                />
              </div>
            </div>

            {/* form__flex */}
            <div className={FLEX_CLASS}>
              <textarea
                placeholder="Your Message"
                className="w-[70%] bg-transparent border-b border-solid 
                  border-black text-[2.2vw] text-white resize-none placeholder:text-gray-200 focus:outline-none max-[900px]:text-[4vw] max-[610px]:w-full max-[610px]:text-[5vw]"
              />
            </div>
            {/* form__flex */}
            <div className={FLEX_CLASS}>
              {/* coolbutton */}
              <button
                className="rounded-tl-full rounded-br-full text-white text-xs text-center self-center px-8 py-4 m-2
              bg-gradient-to-r from-blue-500 to-purple-500 font-bold transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg
              max-[800px]:text-[19px]
              "
              >
                <span className="flex items-center">
                  Send <FiSend />
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
