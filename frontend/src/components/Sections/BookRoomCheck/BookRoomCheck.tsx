"use client";

import { FC } from "react";

type Props = {
  price: number;
  discount: number;
};

export const BookRoomCheck: FC<Props> = props => {
  const { price, discount } = props;

  return (
    <article className="px-7 py-6">
      <h3></h3>
    </article>
  );
};
