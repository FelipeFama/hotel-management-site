export const NewsLetter = () => {
  return (
    <section className="container mx-auto px-4">
      <form className="flex flex-col items-center justify-center rounded-xl bg-primary px-4 py-6 text-white md:rounded-[30px] md:py-24">
        <p className="mb-3 text-center text-lg md:text-xl md:font-semibold">
          Explore More About Our Hotel
        </p>
        <h3 className="text-center text-2xl font-medium md:text-3xl md:font-semibold lg:text-5xl">
          Sign Up for Our Newsletter
        </h3>

        <div className="flex w-full flex-col justify-center pt-12 md:flex-row">
          <input
            type="email"
            placeholder="Your email"
            className="mb-2 h-11 rounded-xl bg-[#026057] pl-6 text-white placeholder:text-white focus:outline-none md:mb-0 md:mr-5 md:h-16 md:w-[452px]"
          />
          <button type="button" className="btn-tertiary">
            Subscribe
          </button>
        </div>
      </form>
    </section>
  );
};
