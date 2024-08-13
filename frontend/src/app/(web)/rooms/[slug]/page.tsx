"use client";

import { getRoom } from "@/libs/apis";
import React from "react";
import useSWR from "swr";
import LoadingSpinner from "../../loading";

export default function RoomDetails(props: { params: { slug: string } }) {
  const {
    params: { slug },
  } = props;

  const fetchRoom = async () => getRoom(slug);

  const { data: room, error, isLoading } = useSWR("/api/room", fetchRoom);
  console.log(room);
  if (error) throw new Error("Cannot fetch data");
  if (typeof room === "undefined" && !isLoading)
    throw new Error("Cannot fetch data");

  if (!room) return <LoadingSpinner />;

  console.log(room);
  return (
    <section>
      <div>RoomDetails</div>
    </section>
  );
}
