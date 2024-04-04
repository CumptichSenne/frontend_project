import Footer from "./components/Footer";
import Navigation from "./components/Navigation";

import { TypeAnimation } from "react-type-animation";

function ScrollAboutMe() {
  const aboutMe = document.getElementById("about-me");
  aboutMe?.scrollIntoView({ behavior: "smooth" });
}

export default function App() {

  return (
    <div className="w-screen animated-background h-full bg-gradient-to-b from-green-200 via-green-200 to-blue-200">
      <Navigation />
      <section className="flex flex-col pt-10 w-full">
        <div className="flex items-center justify-center p-20">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold">Hello there,</h1>
            <h2 className="text-5xl">My name is 
              <span className="text-teal-500 font-bold pl-4">
                Senne Cumptich
              </span>
            </h2>
            <h3 className="text-2xl">I'm a 
              <span className="text-teal-500 font-bold pl-4">
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
            <button className="bg-white bg-opacity-85 backdrop-blur-sm p-3 rounded-xl text-teal-700" onClick={ScrollAboutMe}>
              <p>
                More about me
              </p>
            </button>
          </div>
        </div>
      </section>
      <section id="about-me" className="flex flex-col pt-10 w-full">
        <div className="flex items-center justify-center p-20">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold">About me</h1>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
