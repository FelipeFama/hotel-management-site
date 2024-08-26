"use client";

import { signOut } from "next-auth/react";
import Image from "next/image";
import { useState } from "react";
import toast from "react-hot-toast";
import { BsJournalBookmarkFill } from "react-icons/bs";
import { FaSignOutAlt } from "react-icons/fa";
import { GiMoneyStack } from "react-icons/gi";

import axios from "axios";
import useSWR from "swr";

import { BackDrop } from "@/components/BackDrop/BackDrop";
import { Chart } from "@/components/Chart/Chart";
import { RatingModal } from "@/components/RatingModal/RatingModal";
import { Table } from "@/components/Table/Table";
import { getUserBookings } from "@/libs/apis";
import { User } from "@/models/user";

import LoadingSpinner from "../../loading";

export default function UserDetails(props: { params: { id: string } }) {
  const {
    params: { id: userId },
  } = props;

  const [currentNav, setCurrentNav] = useState<
    "bookings" | "amount" | "ratings"
  >("bookings");
  const [roomId, setRoomId] = useState<string | null>(null);
  const [isRatingVisible, setIsRatingVisible] = useState(false);
  const [isSubmittingReview, setIsSubmittingReview] = useState(false);
  const [ratingValue, setRatingValue] = useState<number | null>(0);
  const [ratingText, setRatingText] = useState("");

  const toggleRatingModal = () => setIsRatingVisible(prevState => !prevState);

  const reviewSubmitHandler = async () => {
    if (!ratingText.trim().length || !ratingValue) {
      return toast.error("Please provide a rating text and a rating");
    }

    if (!roomId) toast.error("Id not provided");

    setIsSubmittingReview(true);

    try {
      const { data } = await axios.post("/api/users", {
        reviewText: ratingText,
        ratingValue,
        roomId,
      });
      console.log(data);
      toast.success("Review Submitted");
    } catch (error) {
      console.log(error);
      toast.error("Review Failed");
    } finally {
      setRatingText("");
      setRatingValue(null);
      setRoomId(null);
      setIsSubmittingReview(false);
      setIsRatingVisible(false);
    }
  };

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

  return (
    <section className="container mx-auto px-2 py-10 md:px-4">
      <section className="grid gap-10 md:grid-cols-12">
        <article className="sticky top-10 hidden h-fit rounded-lg bg-[#eff0f2] px-6 py-4 text-black shadow-lg md:col-span-4 md:block lg:col-span-3">
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
            <h2 className="pb-3 text-xl font-bold">About</h2>
            <p className="text-sm">{userData.about ?? ""}</p>
          </aside>
          <aside className="text-left font-normal">
            <h2 className="pb-3 text-xl font-bold">{userData.name}</h2>
          </aside>
          <aside className="flex items-center">
            <p className="mr-2">Sign Out</p>
            <FaSignOutAlt
              className="cursor-pointer text-3xl"
              onClick={() => signOut({ callbackUrl: "/" })}
            />
          </aside>
        </article>

        <article className="md:col-span-8 lg:col-span-9">
          <aside className="flex items-center">
            <h3 className="mr-3 text-2xl font-bold">Hello, {userData.name}</h3>
          </aside>
          <figure className="h-14 w-14 overflow-hidden rounded-l-full md:hidden">
            <Image
              src={userData.image}
              alt="User"
              width={56}
              height={56}
              className="img scale-animation rounded-full"
            />
          </figure>
          <p className="block w-fit py-2 text-sm md:hidden">
            {userData.about ?? ""}
          </p>

          <p className="py-2 text-xs font-medium">
            Joined In {userData._createdAt.split("T")[0]}
          </p>
          <aside className="my-2 flex items-center md:hidden">
            <p className="mr-2">Sign out</p>
            <FaSignOutAlt
              className="cursor-pointer text-3xl"
              onClick={() => signOut({ callbackUrl: "/" })}
            />
          </aside>

          <nav className="sticky top-0 mx-auto mb-8 mt-7 w-fit rounded-lg border border-gray-200 bg-gray-50 px-2 py-3 text-gray-700 md:w-full md:px-5">
            <ol
              className={`${currentNav === "bookings" ? "text-blue-600" : "text-gray-700"} mr-1 inline-flex items-center space-x-1 md:mr-5 md:space-x-3`}
            >
              <li
                onClick={() => setCurrentNav("bookings")}
                className="inline-flex cursor-pointer items-center"
              >
                <BsJournalBookmarkFill />
                <a
                  href="#"
                  className="mx-1 inline-flex items-center text-xs font-medium md:mx-3 md:text-sm"
                >
                  Current Bookings
                </a>
              </li>
            </ol>
            <ol
              className={`${currentNav == "amount" ? "text-blue-600" : "text-gray-700"} mr-1 inline-flex items-center space-x-1 md:mr-5 md:space-x-3`}
            >
              <li
                onClick={() => setCurrentNav("amount")}
                className="inline-flex cursor-pointer items-center"
              >
                <GiMoneyStack />
                <a
                  href="#"
                  className="mx-1 inline-flex items-center text-xs font-medium md:mx-3 md:text-sm"
                >
                  Amount Spent
                </a>
              </li>
            </ol>
          </nav>

          {currentNav === "bookings" ? (
            userBookings && (
              <Table
                bookingDetails={userBookings}
                setRoomId={setRoomId}
                toggleRatingModal={toggleRatingModal}
              />
            )
          ) : (
            <></>
          )}

          {currentNav === "amount" ? (
            userBookings && <Chart userBookings={userBookings} />
          ) : (
            <></>
          )}
        </article>
      </section>

      <RatingModal
        isOpen={isRatingVisible}
        ratingValue={ratingValue}
        setRatingValue={setRatingValue}
        ratingText={ratingText}
        setRatingText={setRatingText}
        isSubmittingReview={isSubmittingReview}
        reviewSubmitHandler={reviewSubmitHandler}
        toggleRatingModal={toggleRatingModal}
      />
      <BackDrop isOpen={isRatingVisible} />
    </section>
  );
}
