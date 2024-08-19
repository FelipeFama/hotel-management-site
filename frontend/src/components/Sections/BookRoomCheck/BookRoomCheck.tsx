"use client";

import { FC } from "react";

type Props = {
  price: number;
  discount: number;
  specialNote: string;
};

export const BookRoomCheck: FC<Props> = props => {
  const { price, discount, specialNote } = props;

  const discountPrice = price - (price / 100) * discount;

  return (
    <article className="px-7 py-6">
      <h3>
        <span
          className={`${discount ? "text-gray-400" : ""} text-xl font-bold`}
        >
          $ {price}
        </span>
        {discount ? (
          <span className="text-lg font-bold">
            {" "}
            | discount {discount}%. Now{" "}
            <span className="text-tertiary-dark">$ {discountPrice}</span>{" "}
          </span>
        ) : (
          ""
        )}
      </h3>

      <div className="my-2 w-full border-b-2 border-b-secondary"></div>

      <h4 className="my-8">{specialNote}</h4>

      <aside className="flex">
        <div className="w-1/2 pr-2">
          <label htmlFor="check-in-date"></label>
        </div>
      </aside>
    </article>
  );
};
