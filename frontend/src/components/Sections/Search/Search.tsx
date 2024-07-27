import React from "react";

export const Search = () => {
  return (
    <section className="rounden-lg bg-tertiary-light px-4 py-6">
      <article className="flex-wtap container mx-auto flex items-center justify-between gap-4">
        <aside className="md:1/3 mb-4 w-full md:mb-0 lg:w-auto">
          <label
            htmlFor=""
            className="mb-2 block text-sm font-medium text-black"
          >
            Room Type
          </label>
          <div className="relative">
            <select
              name=""
              id=""
              className="w-full rounded px-4 py-2 capitalize leading-tight focus:outline-none dark:bg-black"
            >
              <option value="All">All</option>
              <option value="Basic">Basic</option>
              <option value="Luxury">Luxury</option>
              <option value="Suite">Suite</option>
            </select>
          </div>
        </aside>
        <aside className="md:1/3 mb-4 w-full md:mb-0 lg:w-auto">
          <label
            htmlFor=""
            className="mb-2 block text-sm font-medium text-black"
          >
            Search
          </label>
          <input
            type="search"
            id="search"
            placeholder="Search..."
            className="w-full rounded px-4 py-3 leading-tight placeholder:text-black focus:outline-none dark:bg-black dark:placeholder:text-white"
          />
        </aside>
        <button className="btn-primary" type="button">
          Search
        </button>
      </article>
    </section>
  );
};
