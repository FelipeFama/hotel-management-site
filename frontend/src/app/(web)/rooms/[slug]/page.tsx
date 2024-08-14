"use client";

import { getRoom } from "@/libs/apis";
import useSWR from "swr";
import LoadingSpinner from "../../loading";
import { HotelPhotoGallery } from "@/components/Sections/HotelPhotoGallery/HotelPhotoGallery";

export default function RoomDetails(props: { params: { slug: string } }) {
  const {
    params: { slug },
  } = props;

  const fetchRoom = async () => getRoom(slug);

  const { data: room, error, isLoading } = useSWR("/api/room", fetchRoom);

  if (error) throw new Error("Cannot fetch data");
  if (typeof room === "undefined" && !isLoading)
    throw new Error("Cannot fetch data");

  if (!room) return <LoadingSpinner />;

  return (
    <section>
      <HotelPhotoGallery photos={room.images} />
      <section className="container mx-auto mt-20">
        <article className="gap-10 px-3 md:grid md:grid-cols-12">
          <div className="md:col-span-8 md:w-full">
            {/* HOTEL INFORMATION */}
            <article>
              <h2 className="text-left text-lg font-bold md:text-2xl">
                {room.name} ({room.dimension})
              </h2>
              <aside className="my-11 flex">
                {room.offeredAmenities.map(amenity => (
                  <div
                    key={amenity._key}
                    className="mr-3 grid h-20 w-fit place-content-center rounded-lg bg-[#eff0f2] px-2 text-center dark:bg-gray-800 md:h-40 md:w-44 md:px-0"
                  >
                    <i className={`fa-solid ${amenity.icon} md:2xl`}></i>
                    <p className="pt-3 text-xs md:text-base">
                      {amenity.amenity}
                    </p>
                  </div>
                ))}
              </aside>
            </article>
          </div>
        </article>
      </section>
    </section>
  );
}
