import { Review } from "@/models/review";
import axios from "axios";
import { FC } from "react";
import useSWR from "swr";

export const RoomReview: FC<{ roomId: string }> = ({ roomId }) => {
  const fetchRoomReviews = async () => {
    const { data } = await axios.get<Review[]>(`/api/room-reviews/${roomId}`);
    return data;
  };

  const {
    data: roomReviews,
    error,
    isLoading,
  } = useSWR("/api/room-reviews", fetchRoomReviews);

  if (error) throw new Error("Cannot fetch data");
  if (typeof roomReviews === "undefined" && !isLoading)
    throw new Error("Cannot fetch data");

  console.log(roomReviews);
  return <article></article>;
};
