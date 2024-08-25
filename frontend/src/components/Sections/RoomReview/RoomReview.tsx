import { Review } from "@/models/review";
import axios from "axios";
import { FC } from "react";

export const RoomReview: FC<{ roomId: string }> = ({ roomId }) => {
  const fetchRoomReviews = async () => {
    const { data } = await axios.get<Review[]>(`/api/room-reviews/${roomId}`);
    return data;
  };
  return <article></article>;
};
