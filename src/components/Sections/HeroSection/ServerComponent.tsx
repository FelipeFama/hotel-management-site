import Image from "next/image";
import React from "react";

export const heading = (
  <>
    <h1 className="font-heading mb-6">Explore Our Exquisite Hotel</h1>
    <p className="mb-12 max-w-lg text-[#4a4a4a] dark:text-[#ffffffea]">
      Experience an Exquisite Hotel Immersed in Rich History and Timeless
      Elegance.
    </p>
    <button className="btn-primary">Get Started</button>
  </>
);

export const section = (
  <article className="hidden grid-cols-1 gap-8 md:grid">
    <figure className="h-48 overflow-hidden rounded-2xl">
      <Image
        src="/images/hero-1.jpeg"
        alt="hero-1"
        width={300}
        height={300}
        className="img scale-animation"
      />
    </figure>
    <aside className="grid h-48 grid-cols-2 gap-8">
      <figure className="h-48 overflow-hidden rounded-2xl">
        <Image
          src="/images/hero-2.jpeg"
          alt="hero-2"
          width={300}
          height={300}
          className="img scale-animation"
        />
      </figure>
      <figure className="h-48 overflow-hidden rounded-2xl">
        <Image
          src="/images/hero-3.jpeg"
          alt="hero-3"
          width={300}
          height={300}
          className="img scale-animation"
        />
      </figure>
    </aside>
  </article>
);
