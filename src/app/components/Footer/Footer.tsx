import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="mt-16">
      <section className="container mx-auto px-4">
        <Link href="/" className="font-black text-tertiary-dark">
          Hotelzz
        </Link>
      </section>
    </footer>
  );
}
