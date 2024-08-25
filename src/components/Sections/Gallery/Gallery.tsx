import Image from "next/image";

export const Gallery = () => {
  return (
    <section className="container mx-auto h-full py-14">
      <article className="flex flex-wrap md:-m-2">
        <div className="flex w-1/2 flex-wrap">
          <figure className="h-48 w-1/2 p-1 md:p-2">
            <Image
              alt="gallery"
              className="img"
              src="/images/hero-1.jpeg"
              width={200}
              height={200}
            />
          </figure>
          <figure className="h-48 w-1/2 p-1 md:p-2">
            <Image
              alt="gallery"
              className="img"
              src="/images/hero-2.jpeg"
              width={200}
              height={200}
            />
          </figure>
          <figure className="h-48 w-full p-1 md:p-2">
            <Image
              alt="gallery"
              className="img"
              src="/images/hero-3.jpeg"
              width={200}
              height={200}
            />
          </figure>
        </div>
        <div className="flex w-1/2 flex-wrap">
          <figure className="h-48 w-full p-1 md:p-2">
            <Image
              alt="gallery"
              className="img"
              src="/images/hero-1.jpeg"
              width={200}
              height={200}
            />
          </figure>
          <figure className="h-48 w-1/2 p-1 md:p-2">
            <Image
              alt="gallery"
              className="img"
              src="/images/hero-2.jpeg"
              width={200}
              height={200}
            />
          </figure>
          <figure className="h-48 w-1/2 p-1 md:p-2">
            <Image
              alt="gallery"
              className="img"
              src="/images/hero-3.jpeg"
              width={200}
              height={200}
            />
          </figure>
        </div>
      </article>
    </section>
  );
};
