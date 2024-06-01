import { FiSend } from "react-icons/fi";

const INFO_CLASS = "flex items-center gap-4 text-[2.2vw] font-medium";
const INPUT_CLASS =
  "font-inherit text-inherit border-none bg-transparent border-b border-solid border-black text-[#444] focus:outline-none";

export default function Contact() {
  return (
    <section className="section-primary font-sans bg-gradient-to-r from-amber-500 to-pink-500">
      {/* contact__wrapper */}
      <div>
        {/* contact__header */}
        <div className="mb-12">
          {/* section__header-title */}
          <div className="header-title">/Contact</div>
          {/* section__header-subtitle */}
          <div className="header-subtitle">Get in touch</div>
        </div>
        {/* contact__form */}
        <div>
          <form action="#">
            {/* form__flex */}
            <div>
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
            <div>
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
            <div>
              {/* form__info */}
              <div className={INFO_CLASS}>
                <textarea placeholder="Your Message" />
              </div>
            </div>
            {/* form__flex */}
            <div>
              {/* coolbutton */}
              <button>
                <span>
                  Send
                  <FiSend />
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
