import CoolLink from "./CoolLink";

export default function ContactSocials() {
  return (
    <div className="flex flex-wrap gap-12 pb-12 text-[25px]">
      <CoolLink skill={"LinkedIn"} />
      <CoolLink skill={"Github"} />
      <CoolLink skill={"Blogger"} />
    </div>
  );
}
