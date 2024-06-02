export default function Skills() {
  return (
    <section
      className="relative text-[40px] h-[300px] bg-black overflow-hidden text-center pt-4 text-white max-[700px]:h-[200px]"
      id="skills"
    >
      {/* skills__header */}
      <div className="font-semibold">My expertise</div>
      {/* skills__text left */}
      <div className="absolute text-yellow-400 whitespace-nowrap font-roboto font-normal left-0 top-24 animate-moveLeft max-[700px]:text-2xl max-[700px]:top-20">
        WEB DEVELOPMENT&nbsp;&nbsp;&nbsp; Frontend&nbsp;&nbsp;&nbsp;
        Backend&nbsp;&nbsp;&nbsp; API Development&nbsp;&nbsp;&nbsp;
        RESPONSIVE&nbsp;&nbsp;&nbsp; UI/UX DEsign&nbsp;&nbsp;&nbsp; WEB
        DEVELOPMENT&nbsp;&nbsp;&nbsp; Frontend&nbsp;&nbsp;&nbsp;
        Backend&nbsp;&nbsp;&nbsp; API Development&nbsp;&nbsp;&nbsp;
        RESPONSIVE&nbsp;&nbsp;&nbsp; UI/UX DEsign&nbsp;&nbsp;&nbsp;
      </div>
      {/* skills__text right */}
      <div className="absolute text-yellow-400 whitespace-nowrap font-roboto right-0 top-44 animate-moveRight max-[700px]:text-2xl max-[700px]:top-32">
        HTML&nbsp;&nbsp;&nbsp; CSS&nbsp;&nbsp;&nbsp;
        Javascript&nbsp;&nbsp;&nbsp; React.js&nbsp;&nbsp;&nbsp;
        Next.js&nbsp;&nbsp;&nbsp; Node.js&nbsp;&nbsp;&nbsp;
        Express.js&nbsp;&nbsp;&nbsp; Tailwind&nbsp;&nbsp;&nbsp;
        MongoDB&nbsp;&nbsp;&nbsp; PostgreSQL&nbsp;&nbsp;&nbsp;
        HTML&nbsp;&nbsp;&nbsp; CSS&nbsp;&nbsp;&nbsp;
        Javascript&nbsp;&nbsp;&nbsp; React.js&nbsp;&nbsp;&nbsp;
        Next.js&nbsp;&nbsp;&nbsp; Node.js&nbsp;&nbsp;&nbsp;
        Express.js&nbsp;&nbsp;&nbsp; Tailwind&nbsp;&nbsp;&nbsp;
        MongoDB&nbsp;&nbsp;&nbsp; PostgreSQL&nbsp;&nbsp;&nbsp;
      </div>
    </section>
  );
}
