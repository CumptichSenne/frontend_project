import { CircleUser, FolderGit2,Home, Info } from "lucide-react"
import NavigationItem from "./NavigationItem";

const Navigation = () => {
    return (
      <nav className="sticky top-0 z-50 bg-opacity-10 backdrop-blur-md">
        <div className="relative flex flex-row items-center justify-between p-2">
          <div>
            <h1 className="text-4xl font-shrikhand font-extrabold p-2">SC</h1>
          </div>
          <div className="flex flex-row items-center lg:gap-4 gap-2 font-semibold text-lg">
            <NavigationItem title="Home" icon={<Home size={24} />} scroll={"home"} />
            <NavigationItem title="About me" icon={<Info size={24} />} scroll={"about-me"} />
            <NavigationItem title="Projects" icon={<FolderGit2 size={24} />} scroll={"project"} />
            <NavigationItem title="Contact" icon={<CircleUser size={24} />} scroll={"contact"} />
          </div>
        </div>
      </nav>
    )
}

export default Navigation