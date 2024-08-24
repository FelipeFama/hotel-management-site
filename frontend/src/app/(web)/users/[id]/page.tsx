"use client";

import { getUserBookings } from "@/libs/apis";
import { User } from "@/models/user";
import axios from "axios";
import useSWR from "swr";

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

  console.log("userData:", userData);

  return (
    <section>
      <div>user details</div>
    </section>
  );
}
