const AboutMe = () => {
  return (
    <section id="about-me" className="lg:pt-20 pt-80 w-full h-screen">
        <div className="flex flex-col items-center justify-center gap-10">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold">About me</h1>
          </div>
          <div className="flex flex-row items-center justify-evenly p-10 bg-white rounded-2xl shadow-xl w-2/3">
            <div className="flex flex-col items-center justify-center gap-4">
              <img src="https://via.placeholder.com/150" alt="John Doe" className="rounded-full w-40 h-40" />
              <h2 className="text-2xl font-bold">Senne Cumptich</h2>
              <p className="text-lg">Junior Full Stack Developer</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-4 max-w-80">
              <p className="text-md">I am a student at Howest Kortrijk studying Applied Computer Science. I am currently in my second year and I am specializing in Full Stack Development. I am a competitive volleyball player and I am always looking for new challenges.</p>
            </div>
          </div>
        </div>
    </section>
  );
}

export default AboutMe;