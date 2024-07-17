import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";

const Auth = () => {
  const inputStyles =
    "border border-gray-300 sm:text-sm text-black rounded-lg block w-full p-2.5 focus:outline-none";
  return (
    <section className="container mx-auto">
      <article className="mx-auto w-80 space-y-4 p-6 sm:p-8 md:w-[70%] md:space-y-6">
        <div className="mb-8 flex flex-col items-center justify-between md:flex-row">
          <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl">
            Create an acccount
          </h1>
          <p>OR</p>
          <span className="inline-flex items-center">
            <AiFillGithub className="mr-3 cursor-pointer text-4xl text-black dark:text-white" />
            |
            <FcGoogle className="ml-3 cursor-pointer text-4xl" />
          </span>
        </div>
        <form className="space-y-4 md:space-y-6">
          <input
            type="email"
            name="email"
            placeholder="name@company.com"
            required
            className={inputStyles}
          />
          <input
            type="text"
            name="name"
            placeholder="Jonh Doe"
            required
            className={inputStyles}
          />
          <input
            type="password"
            name="password"
            placeholder="password"
            required
            className={inputStyles}
          />
          <button
            type="submit"
            className="w-full rounded-lg bg-tertiary-dark px-5 py-2.5 text-center text-sm font-medium focus:outline-none"
          >
            Sign Up
          </button>
        </form>
        <button className="text-blue-700 underline">login</button>
      </article>
    </section>
  );
};

export default Auth;
