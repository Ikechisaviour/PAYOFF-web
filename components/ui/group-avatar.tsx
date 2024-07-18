"use client";

import Image from "next/image";
interface Props {
  images: string[];
}

export function GroupAvatar({ images }: Props) {
  return (
    <div className="flex items-center relative">
      {images.map((image, index) => (
        <Image
          src={image}
          key={image}
          alt={image}
          className={` w-[2rem] h-[2rem] lg:w-[2.7rem] lg:h-[2.7rem] ${index && "-ml-3 lg:-ml-5"} border relative rounded-full`}
          style={{
            zIndex: images.length - index,
          }}
        />
      ))}
    </div>
  );
}
