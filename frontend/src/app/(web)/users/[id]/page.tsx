"use client";

import { getUserBookings } from "@/libs/apis";
import { User } from "@/models/user";
import Image from "next/image";
import axios from "axios";
import useSWR from "swr";
import LoadingSpinner from "../../loading";
import { FaSignOutAlt } from "react-icons/fa";
import { signOut } from "next-auth/react";

export default function UserDetails(props: { params: { id: string } }) {
  const {
    params: { id: userId },
  } = props;

  const fetchUserBooking = async () => getUserBookings(userId);
  const fetchUserData = async () => {
    const { data } = await axios.get<User>("/api/users");
    return data;
  };

  const {
    data: userBookings,
    error,
    isLoading,
  } = useSWR("/api/userBooking", fetchUserBooking);

  const {
    data: userData,
    isLoading: loadingUserData,
    error: errorGettingUserData,
  } = useSWR("/api/users", fetchUserData);

  if (error || errorGettingUserData) throw new Error("Cannot fetch data");
  if (typeof userBookings === "undefined" && !isLoading)
    throw new Error("Cannot fetch data");
  if (typeof userData === "undefined" && !loadingUserData)
    throw new Error("Cannot fetch data");

  if (loadingUserData) return <LoadingSpinner />;
  if (!userData) throw new Error("Cannot fetch data");

  console.log("userData:", userData);

  return (
    <section className="container mx-auto px-2 py-10 md:px-4">
      <article className="grid gap-10 md:grid-cols-12">
        <div className="sticky top-10 hidden h-fit rounded-lg bg-[#eff0f2] px-6 py-4 text-black shadow-lg md:col-span-4 md:block lg:col-span-3">
          <figure className="mx-auto mb-5 h-28 w-28 overflow-hidden rounded-full md:h-[143px] md:w-[143px]">
            <Image
              src={userData.image}
              alt={userData.name}
              width={143}
              height={143}
              className="img scale-animation rounded-full"
            />
          </figure>
          <aside className="py-4 text-left font-normal">
            <h6 className="pb-3 text-xl font-bold">About</h6>
            <p className="text-sm">{userData.about ?? ""}</p>
          </aside>
          <aside className="text-left font-normal">
            <h6 className="pb-3 text-xl font-bold">{userData.name}</h6>
          </aside>
          <aside className="flex items-center">
            <p className="mr-2">Sign Out</p>
            <FaSignOutAlt
              className="cursor-pointer text-3xl"
              onClick={() => signOut({ callbackUrl: "/" })}
            />
          </aside>
        </div>
      </article>
    </section>
  );
}
