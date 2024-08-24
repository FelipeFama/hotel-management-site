"use client";

import { Booking } from "@/models/booking";
import { Dispatch, FC, SetStateAction } from "react";

type Props = {
  bookingDetails: Booking[];
  setRoomId: Dispatch<SetStateAction<string | null>>;
};

export const Table: FC<Props> = ({ bookingDetails, setRoomId }) => {
  return (
    <div className="mx-auto max-w-[340px] overflow-x-auto rounded-lg shadow-md sm:rounded-lg md:max-w-full">
      <aside></aside>
    </div>
  );
};
