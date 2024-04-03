import { CircleUser, FolderGit2, Home } from "lucide-react"
import { Link } from "react-router-dom"

const Navigation = () => {
    return (
        <nav>
        <div className="flex flex-row items-center justify-between p-4">
          <div>
            <h1 className="text-3xl p-4">Logo</h1>
          </div>
          <div className="flex flex-row items-center gap-8">
            <Link to="/" className="p-4 flex flex-row gap-2">
              <Home size={24} />
              Home
            </Link>
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
    )
}

export default Navigation