"use client";

import { FC, useState } from "react";
import { Image as ImageType } from "@/models/room";
import Image from "next/image";

export const HotelPhotoGallery: FC<{ photos: ImageType[] }> = ({ photos }) => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  return (
    <section className="container mx-auto">
      <article className="relative grid gap-5 px-3 md:grid-cols-2">
        <aside className="relative h-[540px] overflow-hidden rounded-2xl">
          <figure className="hidden h-full w-full items-center justify-center md:flex">
            <Image
              src={photos[0].url}
              alt={`Room Photo ${currentPhotoIndex + 1}`}
              className="img scale-animation cursor-pointer"
              width={150}
              height={150}
            />
          </figure>
        </aside>
      </article>
    </section>
  );
};
