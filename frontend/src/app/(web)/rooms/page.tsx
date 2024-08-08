"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Rooms() {
  const [roomTypeFilter, setRoomTypeFilter] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const searchParams = useSearchParams();

  useEffect(() => {
    const searchQuery = searchParams.get("searchQuery");
    const roomType = searchParams.get("roomType");

    if (roomType) setRoomTypeFilter(roomType);
    if (searchQuery) setSearchQuery(searchQuery);
  }, []);

  return (
    <section>
      <div>Rooms</div>
    </section>
  );
}
