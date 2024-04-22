"use client";
import { Carousel } from "flowbite-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Project } from "../models/Project";

export function CarouselProjects( { projects }: { projects: Project[] }) {

  const ConvertProjects = () => {
    const projectlist = [];
    for (const project of projects) {
      projectlist.push(
        <div key={project.id} className="flex flex-col items-center justify-center">
          <img src={project.image} alt={project.name} className="h-56 sm:h-64 xl:h-80 2xl:h-128 w-10/12 object-cover rounded-lg" />
          <div className="flex flex-col items-center justify-center gap-4 p-4">
            <h2 className="text-xl font-bold">{project.name}</h2>
            <p className="text-center">{project.description}</p>
          </div>
        </div>
      );
    }
    return projectlist; // Fix: Return the projectlist array
  };

  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-128 w-10/12">
    <Carousel
    leftControl={<button className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-teal-700 text-white rounded-full p-2">{<ArrowLeft size={36}/>}</button>}
    rightControl={<button className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-teal-700 text-white rounded-full p-2">{<ArrowRight size={36}/>}</button>}
    pauseOnHover={true}
    indicators={false}>
    {ConvertProjects()}
      </Carousel>
    </div>
  );
}