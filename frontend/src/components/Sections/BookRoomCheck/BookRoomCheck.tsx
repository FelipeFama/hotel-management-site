"use client";

import { Dispatch, FC, SetStateAction } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

type Props = {
  price: number;
  discount: number;
  specialNote: string;
  checkinDate: Date | null;
  setCheckinDate: Dispatch<SetStateAction<Date | null>>;
  checkoutDate: Date | null;
  setCheckoutDate: Dispatch<SetStateAction<Date | null>>;
  calcMinCheckoutDate: () => Date | null;
};

export const BookRoomCheck: FC<Props> = props => {
  const {
    price,
    discount,
    specialNote,
    checkinDate,
    setCheckinDate,
    checkoutDate,
    setCheckoutDate,
    calcMinCheckoutDate,
  } = props;

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
          <label
            htmlFor="check-in-date"
            className="block text-sm font-medium text-gray-900 dark:text-gray-400"
          >
            Check In Date
          </label>
          <DatePicker
            selected={checkinDate}
            onChange={date => setCheckinDate(date)}
            dateFormat="dd/MM/yyyy"
            minDate={new Date()}
            id="check-in-date"
            className="w-full rounded-lg border border-gray-300 p-2.5 text-black focus:border-primary focus:ring-primary"
          />
        </div>
        <div className="w-1/2 pr-2">
          <label
            htmlFor="check-out-date"
            className="block text-sm font-medium text-gray-900 dark:text-gray-400"
          >
            Check Out Date
          </label>
          <DatePicker
            selected={checkoutDate}
            onChange={date => setCheckoutDate(date)}
            dateFormat="dd/MM/yyyy"
            disabled={!checkinDate}
            minDate={calcMinCheckoutDate() || undefined}
            id="check-out-date"
            className="w-full rounded-lg border border-gray-300 p-2.5 text-black focus:border-primary focus:ring-primary"
          />
        </div>
      </aside>
    </article>
  );
};
