"use client";

import { getRoom } from "@/libs/apis";
import useSWR from "swr";
import LoadingSpinner from "../../loading";
import { HotelPhotoGallery } from "@/components/Sections/HotelPhotoGallery/HotelPhotoGallery";
import { MdOutlineCleaningServices } from "react-icons/md";
import { LiaFireExtinguisherSolid } from "react-icons/lia";
import { AiOutlineMedicineBox } from "react-icons/ai";
import { GiSmokeBomb } from "react-icons/gi";
import { BookRoomCheck } from "@/components/Sections/BookRoomCheck/BookRoomCheck";
import { useState } from "react";
import toast from "react-hot-toast";

export default function RoomDetails(props: { params: { slug: string } }) {
  const {
    params: { slug },
  } = props;

  const [checkinDate, setCheckinDate] = useState<Date | null>(null);
  const [checkoutDate, setCheckoutDate] = useState<Date | null>(null);
  const [adults, setAdults] = useState(1);
  const [childrens, setChildrens] = useState(0);

  const fetchRoom = async () => getRoom(slug);

  const { data: room, error, isLoading } = useSWR("/api/room", fetchRoom);

  if (error) throw new Error("Cannot fetch data");
  if (typeof room === "undefined" && !isLoading)
    throw new Error("Cannot fetch data");

  if (!room) return <LoadingSpinner />;

  const calcMinCheckoutDate = () => {
    if (checkinDate) {
      const nextDay = new Date(checkinDate);
      nextDay.setDate(nextDay.getDate() + 1);
      return nextDay;
    }
    return null;
  };

  const handleBookNowClick = () => {
    if (!checkinDate || !checkoutDate)
      return toast.error("Please provide checkin / checkout date");

    if (checkinDate > checkoutDate)
      return toast.error("Please choose a valid checkin period");

    const numOfDays = calcNumberOfDays();

    const hotelRoomSlug = room.slug.current;
  };

  const calcNumberOfDays = () => {
    if (!checkinDate || !checkoutDate) return;
    const timeDiff = checkoutDate.getTime() - checkinDate.getTime();
    const numberOfDays = Math.ceil(timeDiff / (24 * 60 * 60 * 1000));
    return numberOfDays;
  };

  return (
    <section>
      <HotelPhotoGallery photos={room.images} />
      <section className="container mx-auto mt-20">
        <article className="gap-10 px-3 md:grid md:grid-cols-12">
          <div className="md:col-span-8 md:w-full">
            {/* Hotel information */}
            <article>
              <h2 className="text-left text-lg font-bold md:text-2xl">
                {room.name} ({room.dimension})
              </h2>
              <aside className="my-11 flex">
                {room.offeredAmenities.map(amenity => (
                  <figcaption
                    key={amenity._key}
                    className="mr-3 grid h-20 w-fit place-content-center rounded-lg bg-[#eff0f2] px-2 text-center dark:bg-gray-800 md:h-40 md:w-44 md:px-0"
                  >
                    <i className={`fa-solid ${amenity.icon} md:2xl`}></i>
                    <p className="pt-3 text-xs md:text-base">
                      {amenity.amenity}
                    </p>
                  </figcaption>
                ))}
              </aside>
              <aside className="mb-11">
                <h2 className="mb-2 text-3xl font-bold">Description</h2>
                <p>{room.description}</p>
              </aside>
              <aside className="mb-11">
                <h2 className="mb-2 text-3xl font-bold">Offered Amenities</h2>
                <div className="grid grid-cols-2">
                  {room.offeredAmenities.map(amenity => (
                    <figcaption
                      key={amenity._key}
                      className="my-1 flex items-center md:my-0"
                    >
                      <i className={`fa-solid ${amenity.icon}`}></i>
                      <p className="ml-2 text-xs md:text-base">
                        {amenity.amenity}
                      </p>
                    </figcaption>
                  ))}
                </div>
              </aside>
              <aside className="mb-11">
                <h2 className="mb-2 text-3xl font-bold">Safety And Higiene</h2>
                <div className="grid grid-cols-2">
                  <figcaption className="my-1 flex items-center md:my-0">
                    <MdOutlineCleaningServices />
                    <p className="ml-2 text-xs md:text-base">Daily Cleaning</p>
                  </figcaption>
                  <figcaption className="my-1 flex items-center md:my-0">
                    <LiaFireExtinguisherSolid />
                    <p className="ml-2 text-xs md:text-base">
                      Fire Extinguishers
                    </p>
                  </figcaption>
                  <figcaption className="my-1 flex items-center md:my-0">
                    <AiOutlineMedicineBox />
                    <p className="ml-2 text-xs md:text-base">
                      Disinfections and Sterilizations
                    </p>
                  </figcaption>
                  <figcaption className="my-1 flex items-center md:my-0">
                    <GiSmokeBomb />
                    <p className="ml-2 text-xs md:text-base">Smoke Detectors</p>
                  </figcaption>
                </div>
              </aside>
              {/* Reviews */}
              <aside className="rounded-lg p-6 shadow dark:shadow-white">
                <div className="mb-4 items-center">
                  <p className="font-semibold md:text-lg">Customer Reviews</p>
                </div>
                <figcaption className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  {/* Reviews */}
                </figcaption>
              </aside>
            </article>
          </div>
          {/* Book room check */}
          <div className="sticky top-10 h-fit overflow-visible rounded-xl shadow-lg dark:shadow dark:shadow-white md:col-span-4">
            <BookRoomCheck
              price={room.price}
              discount={room.discount}
              specialNote={room.specialNote}
              checkinDate={checkinDate}
              setCheckinDate={setCheckinDate}
              checkoutDate={checkoutDate}
              setCheckoutDate={setCheckoutDate}
              calcMinCheckoutDate={calcMinCheckoutDate}
              adults={adults}
              setAdults={setAdults}
              childrens={childrens}
              setChildrens={setChildrens}
              isBooked={room.isBooked}
              handleBookNowClick={handleBookNowClick}
            />
          </div>
        </article>
      </section>
    </section>
  );
}
