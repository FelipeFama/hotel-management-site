import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";

const Auth = () => {
  const inputStyles =
    "border border-gray-300 sm:text-sm text-black rounded-lg block w-full p-2.5 focus:outline-none";
  return (
    <section className="container mx-auto">
      <article className="p-6 space-y-4 md:space-y-6 sm:p-8 w-80 md:w-[70%] mx-auto">
        <div className="flex mb-8 flex-col md:flex-row items-center justify-between">
          <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl">
            Create an acccount
          </h1>
          <p>OR</p>
          <span className="inline-flex items-center">
            <AiFillGithub className="mr-3 text-4xl cursor-pointer text-black dark:text-white" />
            |
            <FcGoogle className="ml-3 text-4xl cursor-pointer" />
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
            className="w-full bg-tertiary-dark focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center"
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
