import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

import { Room } from "@/models/room";

type Props = {
  room: Room;
};

export const RoomCard: FC<Props> = props => {
  const {
    room: { coverImage, name, price, type, description, slug, isBooked },
  } = props;

  return (
    <article className="mx-auto mb-10 w-72 overflow-hidden rounded-xl text-black md:mx-0">
      <figure className="h-60 overflow-hidden">
        <Image
          src={coverImage.url}
          alt={name}
          width={250}
          height={250}
          className="img scale-animation"
        />
      </figure>
      <aside className="bg-white p-4">
        <aside className="flex justify-between text-xl font-semibold">
          <p>{name}</p>
          <p>$ {price}</p>
        </aside>

        <p className="pt-2 text-xs">{type} Room</p>

        <p className="pb-6 pt-3">{description.slice(1, 100)}...</p>

        <Link
          href={`/rooms/${slug.current}`}
          className="inline-block w-full rounded-xl bg-primary py-4 text-center text-xl font-bold text-white transition-all duration-500 hover:-translate-y-2 hover:shadow-lg"
        >
          {isBooked ? "BOOKED" : "BOOK NOW"}
        </Link>
      </aside>
    </article>
  );
};
