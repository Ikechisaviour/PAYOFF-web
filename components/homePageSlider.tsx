"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

import { SliderImages } from "@/config/site";
import Autoplay from "embla-carousel-autoplay";

export function CarouselImages() {
  return (
    <Carousel
      className="w-full h-full"
      opts={{
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 7000,
          // stopOnFocusIn: true,
          // stopOnInteraction: true,
          stopOnMouseEnter: true,
        }),
      ]}
    >
      <CarouselContent>
        {SliderImages.map((item) => (
          <CarouselItem key={item.src}>
            <Image
              src={item}
              alt={item.src}
              className="w-full h-full"
              priority
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
