import React from "react";

export default function RoomDetails(props: { params: { slug: string } }) {
  const {
    params: { slug },
  } = props;
  console.log(slug);
  return (
    <section>
      <div>RoomDetails</div>
    </section>
  );
}
