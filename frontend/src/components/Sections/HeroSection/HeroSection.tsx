import Image from "next/image";

export const HeroSection = () => {
  return (
    <section className="container mx-auto flex items-center gap-12 px-4">
      <article className="h-full py-10">
        {/* heading */}
        <h1 className="font-heading mb-6">Explore Our Exquisite Hotel</h1>
        <p className="mb-12 max-w-lg text-[#4a4a4a] dark:text-[#ffffffea]">
          Experience an Exquisite Hotel Immersed in Rich History and Timeless
          Elegance.
        </p>
        <button className="btn-primary">Get Started</button>
        {/* room description */}
        <div className="mt-12 flex justify-between">
          <aside className="flex flex-col items-center justify-center gap-3">
            <p className="text-center text-xs lg:text-xl">Basic Room</p>
            <p className="text-lg font-medium md:font-bold xl:text-5xl">+20</p>
          </aside>
          <aside className="flex flex-col items-center justify-center gap-3">
            <p className="text-center text-xs lg:text-xl">Luxury Room</p>
            <p className="text-lg font-medium md:font-bold xl:text-5xl">+20</p>
          </aside>
          <aside className="flex flex-col items-center justify-center gap-3">
            <p className="text-center text-xs lg:text-xl">Suite</p>
            <p className="text-lg font-medium md:font-bold xl:text-5xl">+20</p>
          </aside>
        </div>
      </article>
      {/* images */}
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
    </section>
  );
};
