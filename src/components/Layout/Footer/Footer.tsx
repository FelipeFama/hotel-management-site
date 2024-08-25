import Link from "next/link";
import React from "react";
import { BiMessageDetail } from "react-icons/bi";
import { BsFillSendFill, BsTelephoneOutbound } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="mt-16">
      <section className="container mx-auto px-4">
        <Link href="/" className="font-black text-tertiary-dark">
          Hotelzz
        </Link>
        <h4 className="py-6 text-[40px] font-semibold">Contact</h4>
        <article className="flex flex-wrap items-center justify-between gap-16">
          <aside className="flex-1">
            <p>123 Road</p>
            <figcaption className="flex items-center py-4">
              <BsFillSendFill />
              <p className="ml-2">codewithfelipe</p>
            </figcaption>
            <figcaption className="flex items-center">
              <BsTelephoneOutbound />
              <p className="ml-2">000-000-00</p>
            </figcaption>
            <figcaption className="flex items-center pt-4">
              <BiMessageDetail />
              <p className="ml-2">codewithfelipe</p>
            </figcaption>
          </aside>
          <aside className="flex-1 md:text-right">
            <p className="pb-4">Our Story</p>
            <p className="pb-4">Get in Touch</p>
            <p className="pb-4">Our Privacy Commitment</p>
            <p className="pb-4">Terms of service</p>
            <p>Customer Assistance</p>
          </aside>
          <aside className="flex-1 md:text-right">
            <p className="pb-4">Dining Experience</p>
            <p className="pb-4">Wellness</p>
            <p className="pb-4">Fitness</p>
            <p className="pb-4">Sports</p>
            <p>Events</p>
          </aside>
        </article>
      </section>
      <div className="bottom-0 left-0 mt-16 h-10 w-full bg-tertiary-light md:h-[70px]" />
    </footer>
  );
}
