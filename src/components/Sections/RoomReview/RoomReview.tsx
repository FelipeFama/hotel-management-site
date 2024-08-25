import { FC } from "react";

import axios from "axios";
import useSWR from "swr";

import { Review } from "@/models/review";

import { Rating } from "../Rating/Rating";

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

  // console.log(roomReviews);
  return (
    <>
      {roomReviews &&
        roomReviews.map(review => (
          <article
            key={review._id}
            className="rounded-lg bg-gray-100 p-4 dark:bg-gray-900"
          >
            <aside className="mb-2 flex font-semibold">
              <p>{review.user.name}</p>
              <div className="ml-4 flex items-center text-lg text-tertiary-light">
                <Rating rating={review.userRating} />
              </div>
            </aside>
            <p>{review.text}</p>
          </article>
        ))}
    </>
  );
};
