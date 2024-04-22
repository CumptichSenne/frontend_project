import { CarouselProjects } from "../components/Carousel";
import projects from "../assets/projects.json";

const Project = () => {
    return (
        <section id="project" className="flex flex-col pt-10 w-full">
        <div className="flex flex-col gap-8 p-20 items-center justify-center">
            <div className="space-y-4">
                <h1 className="text-4xl font-bold text-center">Projects</h1>
            </div>
            <CarouselProjects projects={projects} />
        </div>
      </section>
    );
}

export default Project;