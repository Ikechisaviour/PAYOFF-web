"use client";
import Embla from "./embla/embla";
import { EmblaOptionsType } from "embla-carousel";

const OPTIONS: EmblaOptionsType = {
  loop: true,
};
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

export function Points() {
  return (
    <div className="my-5">
      <Embla slides={SLIDES} options={OPTIONS} />
    </div>
  );
}
