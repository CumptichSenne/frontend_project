import Footer from "./components/Footer";
import Navigation from "./components/Navigation";

import { TypeAnimation } from "react-type-animation";

import profile from "../public/profile.jpg";

export default function App() {

  return (
    <div className="w-full animated-background h-full bg-gradient-to-b from-green-200 via-green-200 to-blue-200">
      <Navigation />
      <section id="home" className="flex flex-row justify-center pt-10 w-full">
        <div className="flex items-center justify-evenly p-20">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold">Hello there,</h1>
            <h2 className="text-5xl">My name is <span className="text-teal-600 font-bold ">Senne Cumptich</span>
            </h2>
            <h3 className="text-2xl">A 
              <span className="text-teal-600 font-bold pl-2">
                <TypeAnimation
                  sequence={[
                    "web developer in the making", 1500,
                    "student at Howest", 1500,
                    "competitive volleyball player", 1500,
                  ]}
                  cursor={true}
                  repeat={Infinity}
                />
              </span>
            </h3>
          </div>
        </div>
        <div className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat rounded-full shadow-xl">
          <img src={profile} alt="profile" className="rounded-full max-w-xs transition duration-300 ease-in-out hover:scale-110" />
        </div>
      </section>
      <section id="about-me" className="flex flex-col pt-10 w-full">
        <div className="flex items-center justify-center p-20">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold">About me</h1>
          </div>
        </div>
      </section>
      <section id="project" className="flex flex-col pt-10 w-full">
        <div className="flex items-center justify-center p-20">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold">Projects</h1>
          </div>
        </div>
      </section>
      <section id="contact" className="flex flex-col pt-10 w-full">
        <div className="flex items-center justify-center p-20">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold">Contact</h1>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
