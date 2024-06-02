const LINK_CLASS = "w-full text-center text-xl max-[900px]:text-sm";

export default function ContactFooter() {
  return (
    <div className="absolute bottom-4 left-0 flex items-center justify-around w-full">
      <div className={LINK_CLASS}>KYUBIN KIM</div>
      <div className={LINK_CLASS}>Copyright©{new Date().getFullYear()}</div>
      <div className={LINK_CLASS}>HAPPY CODING 👋</div>
    </div>
  );
}
