import { CircleUser, FolderGit2, Home } from "lucide-react"
import { Link } from "react-router-dom"

const Navigation = () => {
    return (
        <nav>
        <div className="flex flex-row items-center justify-between p-4">
          <div>
            <h1 className="text-4xl font-shrikhand font-extrabold p-2">SC</h1>
          </div>
          <div className="flex flex-row items-center gap-8 font-semibold text-lg">
            <Link to="/" className="p-4 flex flex-row gap-2 hover:bg-white hover:rounded-2xl hover:text-teal-700 hover:bg-opacity-90">
              <Home size={24} />
              Home
            </Link>
            <Link to="/projects" className="p-4 flex flex-row gap-2 hover:bg-white hover:rounded-2xl hover:text-teal-700 hover:bg-opacity-90">
              <FolderGit2 size={24}/>
              Projects
            </Link>
            <Link to="/contact" className="p-4 flex flex-row gap-2 hover:bg-white hover:rounded-2xl hover:text-teal-700 hover:bg-opacity-90">
              <CircleUser size={24} />
              Contact
            </Link>
          </div>
        </div>
      </nav>
    )
}

export default Navigation