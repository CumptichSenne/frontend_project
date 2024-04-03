import { CircleUser, FolderGit2 } from "lucide-react";
import { Link } from "react-router-dom";

export default function App() {

  return (
    <>
      <nav>
        <div className="flex flex-row items-center justify-between p-4">
          <div>
            <h1 className="text-3xl p-4">Logo</h1>
          </div>
          <div className="flex flex-row items-center gap-8">
            <Link to="/" className="p-4">Home</Link>
            <Link to="/projects" className="p-4 flex flex-row gap-2">
              <FolderGit2 size={24} />
              Projects
            </Link>
            <Link to="/contact" className="p-4 flex flex-row gap-2">
              <CircleUser size={24} />
              Contact
            </Link>
          </div>
        </div>
      </nav>
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
