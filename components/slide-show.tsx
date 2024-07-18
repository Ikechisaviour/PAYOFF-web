"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import AutoScroll from "embla-carousel-auto-scroll";
import { points } from "@/config/site";
import Autoplay from "embla-carousel-autoplay";
import { type CarouselApi } from "@/components/ui/carousel"
import React from "react"
import { cn } from "@/lib/utils";

export function SlideShow() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)
 
  React.useEffect(() => {
    if (!api) {
      return
    }
 
    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)
 
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])
  return (
    <div className="my-5 w-full mx-auto p-5 container">
      <Carousel
        // setApi={setApi}
        className="w-full h-full"
        // opts={{
        //   loop: true,
        // }}
        // plugins={[
        //   AutoScroll({
        //     playOnInit: true,
        //     speed: 1,
        //     stopOnMouseEnter: true,
        //     // stopOnFocusIn: true,
        //   }),
        // ]}

        opts={{
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 3000,
            // stopOnFocusIn: true,
            // stopOnInteraction: true,
            stopOnMouseEnter: true,
          }),
        ]}
        orientation="horizontal"
      >
        {" "}
        <CarouselContent className=" ">
          {" "}
          {points.map((item, index) => (
            <CarouselItem
              key={index}
              className={cn("bg-white rounded-2xl pl-0 pt-0 lg:ml-5 w-screen  flex flex-col md:flex-row items-center md:items-start space-y-5 md:space-y-0 md:space-x-5  md:max-w-md dark:border dark:bg-transparent", 
                // index+1 === current ? "scale-110" : "scale-90"
              )}
            >
              <Image
                src={item.image}
                alt={item.content}
                className="w-full md:w-1/3  h-48 md:h-full rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none"
                priority
              />
              <p className="text-muted-foreground  font-sans text-sm md:text-base font-medium p-5">
                <span className="text-green">{item.highlight}</span>{" "}
                {item.content}
              </p>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
