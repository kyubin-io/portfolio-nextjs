import CoolLink from "./CoolLink";

export default function ContactSocials() {
  return (
    <div className="flex flex-wrap gap-12 pb-12 text-[25px]">
      <CoolLink
        skill={"LinkedIn"}
        link={"https://www.linkedin.com/in/kyubin-kim-935788293/"}
      />
      <CoolLink skill={"Github"} link={"https://github.com/kyubinAgnes"} />
      <CoolLink skill={"Blogger"} link={"https://mnemoni-k.blogspot.com/"} />
    </div>
  );
}
