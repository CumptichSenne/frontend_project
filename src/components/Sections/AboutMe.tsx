import About from "../../../public/images/aboutme.jpg";

const AboutMe = () => {
  return (
    <section id="about-me" className="lg:pt-20 pt-80 w-full h-screen lg:pb-0 mb-60">
        <div className="flex flex-col items-center justify-center gap-10">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold">About me</h1>
          </div>
          <div className="flex lg:flex-row flex-col lg:gap-0 gap-4 items-center justify-evenly p-10 bg-white rounded-2xl shadow-xl w-2/3 lg:text-left text-center">
            <div className="flex flex-col items-center justify-center gap-4">
              <img src={About} alt="John Doe" className="rounded-full lg:w-40 lg:h-40 w-28 h-28" />
              <h2 className="text-2xl font-bold">Senne Cumptich</h2>
              <p className="text-lg">Junior Full Stack Developer</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-4 max-w-96">
              <p className="lg:text-lg text-sm lg:text-left text-center">I am a student at Howest Kortrijk studying Multimedia and Creative Technologies. I am currently in my second year and I am specializing in Full Stack Development. In my free time I like to play competitive volleyball and work on personal projects.</p>
            </div>
          </div>
        </div>
    </section>
  );
}

export default AboutMe;