import React, { useEffect } from "react";
import { EmblaOptionsType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import AutoScroll from "embla-carousel-auto-scroll";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { points } from "@/config/site";
import { Card } from "../ui/card";
// import AutoScroll from "embla-carousel-auto-scroll";
import "./embla.css";

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
    const [emblaRef, emblaApi] = useEmblaCarousel(
      { loop: true, dragFree: true },
      [
        // Autoplay({ stopOnInteraction: false }),
        AutoScroll({ playOnInit: true }),
      ]
    );

  useEffect(() => {
    const autoScroll = emblaApi?.plugins()?.autoScroll;
    if (!autoScroll) return;
    emblaApi.on("autoScroll:stop", () => autoScroll.play());
  }, [emblaApi]);
  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {points.map((point, index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__number">
                <Image
                  src={point.image}
                  alt="Card Image"
                  className="w-1/3 h-full object-cover rounded-l-2xl"
                  width={500}
                  height={500}
                />
                <div className="px-5">
                  <p className="text-muted-foreground mt-2 font-sans text-lg">
                    {point.content}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
