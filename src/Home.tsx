import Navigation from "./components/Navigation";

export default function App() {

  return (
    <>
      <Navigation />
      <section className="flex flex-col pt-10 w-full">
        <div className="flex flex-row items-center justify-evenly pl-20 pr-20">
          <div className="bg-white p-10 rounded-2xl shadow-md">
            <p className="text-center">placeholder</p>
          </div>
          <div className="p-10">
            <p className="text-center">placeholder</p>
          </div>
        </div>
      </section>
    </>
  )
}
