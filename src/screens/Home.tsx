import Footer from "../components/Footer";
import Navigation from "../components/Navigation/Navigation";

import { TypeAnimation } from "react-type-animation";

import profile from "../../public/images/profile.jpg";
import Contact from "../components/Sections/Contact";
import Project from "../components/Sections/Project";
import AboutMe from "../components/Sections/AboutMe";

export default function App() {

  return (
    <div id="home" className="w-full animated-background h-full bg-gradient-to-b from-green-200 via-teal-200 to-blue-200 flex flex-col lg:gap-0 gap-32">
      <Navigation />
      <section className="flex flex-col lg:flex-row items-center justify-center lg:pt-10 w-full h-screen">
        <div className="flex items-center justify-evenly p-20">
          <div className="space-y-4">
            <h1 className="lg:text-4xl text-2xl font-bold">Hello there,</h1>
            <h2 className="lg:text-5xl text-3xl">My name is <span className="text-teal-600 font-bold ">Senne Cumptich</span>
            </h2>
            <h3 className="lg:text-2xl text-xl">A 
              <span className="text-teal-600 font-bold pl-2">
                <TypeAnimation
                  sequence={[
                    "web developer in the making", 1500,
                    "student at Howest Kortrijk", 1500,
                    "competitive volleyball player", 1500,
                  ]}
                  cursor={true}
                  repeat={Infinity}
                />
              </span>
            </h3>
          </div>
        </div>
        <div className="lg:relative max-w-xs lg:overflow-hidden lg:bg-cover lg:bg-no-repeat lg:rounded-full lg:shadow-xl lg:h-2/3 h-5/6">
          <img src={profile} alt="profile" className="rounded-full max-w-xs lg:transition lg:duration-300 lg:ease-in-out lg:hover:scale-110 h-full" />
        </div>
      </section>
      <AboutMe />
      <Project />
      <Contact />
      <Footer />
    </div>
  )
}
