"use client";
import { signUp } from "next-auth-sanity/client";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";

const defaultFormData = {
  email: "",
  name: "",
  password: "",
};

const Auth = () => {
  const [formData, setFormData] = useState(defaultFormData);

  const inputStyles =
    "border border-gray-300 sm:text-sm text-black rounded-lg block w-full p-2.5 focus:outline-none";

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) router.push("/");
  }, [router, session]);

  const loginHandler = async () => {
    try {
      await signIn();
      // push the user to the home page
      router.push("/");
    } catch (error) {
      console.log(error);
      toast.error("Something wen't wrong");
    }
  };
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const user = await signUp(formData);
      if (user) {
        toast.success("Success. Please signin in");
      }
    } catch (error) {
      toast.error("Something wen't wrong");
      console.log(error);
    } finally {
      setFormData(defaultFormData);
    }
  };
  return (
    <section className="container mx-auto">
      <article className="mx-auto w-80 space-y-4 p-6 sm:p-8 md:w-[70%] md:space-y-6">
        <div className="mb-8 flex flex-col items-center justify-between md:flex-row">
          <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl">
            Create an acccount
          </h1>
          <p>OR</p>
          <span className="inline-flex items-center">
            <AiFillGithub
              onClick={loginHandler}
              className="mr-3 cursor-pointer text-4xl text-black dark:text-white"
            />
            |
            <FcGoogle
              onClick={loginHandler}
              className="ml-3 cursor-pointer text-4xl"
            />
          </span>
        </div>
        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="name@company.com"
            required
            className={inputStyles}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="name"
            placeholder="Jonh Doe"
            required
            className={inputStyles}
            onChange={handleInputChange}
          />
          <input
            type="password"
            name="password"
            placeholder="password"
            required
            className={inputStyles}
            onChange={handleInputChange}
          />
          <button
            type="submit"
            className="w-full rounded-lg bg-tertiary-dark px-5 py-2.5 text-center text-sm font-medium focus:outline-none"
          >
            Sign Up
          </button>
        </form>
        <button onClick={loginHandler} className="text-blue-700 underline">
          login
        </button>
      </article>
    </section>
  );
};

export default Auth;
