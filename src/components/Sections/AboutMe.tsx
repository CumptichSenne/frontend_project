const AboutMe = () => {
  return (
    <section id="about-me" className="pt-20 w-full h-screen">
        <div className="flex flex-col items-center justify-center gap-10">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold">About me</h1>
          </div>
          <div className="flex items-center justify-center p-10 bg-white rounded-2xl shadow-xl w-2/3">
            Hey there, my name is Senne Cumptich.
          </div>
        </div>
    </section>
  );
}

export default AboutMe;