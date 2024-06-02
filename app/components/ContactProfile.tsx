import Image from "next/image";
import profile from "../../public/img/profile.jpeg";
import CoolCircleEyeButton from "./CoolCircleEyeButton";

const ITEM_CLASS = "relative flex items-center gap-4";
const COL_CLASS = "flex flex-col gap-[5px] text-[17px] z-[1]";

export default function ContactProfile() {
  return (
    <div className="flex items-center justify-between flex-wrap gap-12">
      {/* contact__profile-item */}
      <div className={ITEM_CLASS}>
        <Image
          src={profile}
          width={70}
          height={70}
          alt="Kyubin"
          className="object-cover rounded-[50%]"
        />
        {/* contact__profile-col */}
        <div className={COL_CLASS}>
          <b>KYUBIN KIM</b>
          <span>Software Engineer</span>
        </div>
      </div>

      {/* contact__profile-item */}
      <div className={ITEM_CLASS}>
        {/* contact__profile-col */}
        <div className={COL_CLASS}>
          <span>kyubin.it@gmail.com</span>
        </div>
      </div>

      {/* contact__profile-item */}
      <div className={ITEM_CLASS}>
        {/* contact__profile-col */}
        <div className={COL_CLASS}>
          <span>London</span>
          <span>UK</span>
        </div>
      </div>

      {/* contact__profile-item */}
      <div className={ITEM_CLASS}>
        {/* contact__profile-bg */}
        <div className="absolute w-[200px] h-[100px] bg-[#f6d5a4] rounded-[5px] left-[20%]"></div>
        <div className="absolute w-[100px] h-[200px] bg-[#f02132] rounded-[5px] left-[20%] opacity-20"></div>
        {/* contact__profile-col */}
        <div className={COL_CLASS}>
          <span>Get in touch</span>
          <b>kyubin.it@gmail.com</b>
        </div>
      </div>
      <CoolCircleEyeButton text=".Get in touch with me." />
      {/* <div className={ITEM_CLASS}></div> */}
    </div>
  );
}
