export default function Skills() {
  return (
    <section className="relative text-[40px] h-[300px] bg-black overflow-hidden text-center pt-4 text-white ">
      {/* skills__header */}
      <div className="font-semibold">
        {/* skills__text left */}
        <div className="absolute whitespace-nowrap font-roboto left-0 top-24">
          WEB DEVELOPMENT&nbsp;&nbsp;&nbsp; Frontend&nbsp;&nbsp;&nbsp;
          Backend&nbsp;&nbsp;&nbsp; API Development&nbsp;&nbsp;&nbsp;
        </div>
        {/* skills__text right */}
        <div className="absolute whitespace-nowrap font-roboto right-0 top-44">
          HTML&nbsp;&nbsp;&nbsp; CSS&nbsp;&nbsp;&nbsp;
          Javascript&nbsp;&nbsp;&nbsp; React.js&nbsp;&nbsp;&nbsp;
          Next.js&nbsp;&nbsp;&nbsp; Node.js&nbsp;&nbsp;&nbsp;
          Express.js&nbsp;&nbsp;&nbsp; Tailwind&nbsp;&nbsp;&nbsp;
          MongoDB&nbsp;&nbsp;&nbsp; PostgreSQL&nbsp;&nbsp;&nbsp;
        </div>
      </div>
    </section>
  );
}
