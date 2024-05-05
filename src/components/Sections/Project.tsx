import projects from "../../assets/projects.json";

const Project = () => {

    const ConvertProjects = () => {
        const projectlist = [];
        for (const project of projects) {
          projectlist.push(
            <div key={project.id} className={project.id % 2 === 0 ? `flex lg:flex-row flex-col items-center justify-center gap-4 lg:w-10/12 w-screen p-10` : `flex lg:flex-row-reverse flex-col items-center justify-center gap-4 lg:w-10/12 w-screen p-10`}>
                <div className={`relative md:w-1/2 w-full overflow-hidden bg-cover bg-no-repeat rounded-2xl shadow-xl`}>
                    <img src={project.image} alt={project.name} className="rounded-2xl w-full transition duration-300 ease-in-out hover:scale-105" />
                </div>
                <div className="flex flex-col items-center justify-center lg:w-1/2 w-full p-10 bg-white rounded-2xl shadow-xl">
                    <h1 className="text-2xl font-bold">{project.name}</h1>
                    <p className="text-sm">{project.description}</p>
                </div>
            </div>
          );
        }
        return projectlist;
    };

    return (
        <section id="project" className="flex flex-col w-full h-full">
            <div className="flex flex-col gap-8 p-20 items-center justify-center">
                <div className="space-y-4">
                    <h1 className="text-4xl font-bold text-center">Projects</h1>
                </div>
                <div className="flex flex-col items-center justify-center gap-16">
                    {ConvertProjects()}
                </div>
            </div>
        </section>
    );
}

export default Project;