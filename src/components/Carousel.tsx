"use client";
import { Carousel } from "flowbite-react";
import { ArrowLeft, ArrowRight } from "lucide-react";

export function CarouselDefault() {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-128 w-10/12">
    <Carousel
    leftControl={<button className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-teal-700 text-white rounded-full p-2">{<ArrowLeft size={36}/>}</button>}
    rightControl={<button className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-teal-700 text-white rounded-full p-2">{<ArrowRight size={36}/>}</button>}
    pauseOnHover={true}
    indicators={false}>
        <div className="flex flex-row justify-evenly h-full items-center dark:text-white">
          <p>test</p>
          <p>test</p>
        </div>
        <div className="flex flex-row justify-evenly h-full items-center dark:text-white">
          <p>test</p>
          <p>test</p>
        </div>
        <div className="flex flex-row justify-evenly h-full items-center dark:text-white">
          <p>test</p>
          <p>test</p>
        </div>
      </Carousel>
    </div>
  );
}