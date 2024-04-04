import Navigation from "./components/Navigation";

export default function App() {

  return (
    <div className="w-screen animated-background h-screen bg-gradient-to-b from-green-200 via-green-200 to-blue-200">
      <Navigation />
      <section className="flex flex-col pt-10 w-full">
        <div className="flex items-center justify-center p-20">
          <div className="bg-white p-10 rounded-2xl shadow-md space-y-4">
            <h1 className="text-4xl font-bold">Hello there,</h1>
            <h2 className="text-5xl">My name is <span className="text-teal-400 font-bold">Senne Cumptich</span></h2>
            <p className="text-lg">A full stack developer in the making and a competitive volleyball player</p>
          </div>
        </div>
        <div className="flex flex-row items-center justify-evenly pl-20 pr-20">
          <div className="bg-white p-10 rounded-2xl shadow-md">
            <p className="text-center">placeholder</p>
          </div>
          <div className="p-10">
            <p className="text-center">placeholder</p>
          </div>
        </div>
      </section>
    </div>
  )
}
