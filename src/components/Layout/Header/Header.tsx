"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import { FaUserCircle } from "react-icons/fa";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";

import ThemeContext from "@/context/themeContext";

export default function Header() {
  const { darkTheme, setDarkTheme } = useContext(ThemeContext);

  const { data: session } = useSession();
  return (
    <header className="container mx-auto flex flex-wrap items-center justify-between px-4 py-10 text-xl md:flex-nowrap">
      <div className="flex w-full items-center md:w-2/3">
        <Link
          href="/"
          className="font-black text-tertiary-dark"
          aria-label="logo"
        >
          Hotelzz
        </Link>
        <ul className="ml-5 flex items-center">
          <li className="flex items-center">
            {session?.user ? (
              <Link href={`/users/${session.user.id}`} aria-label="user">
                {session.user.image ? (
                  <figure className="h-10 w-10 overflow-hidden rounded-full">
                    <Image
                      src={session.user.image}
                      alt={session.user.name!}
                      width={40}
                      height={40}
                      className="scale-animation img"
                    />
                  </figure>
                ) : (
                  <FaUserCircle className="cursor-pointer" />
                )}
              </Link>
            ) : (
              <Link href="/auth" aria-label="user">
                <FaUserCircle className="cursor-pointer" />
              </Link>
            )}
          </li>
          <li className="ml-2">
            {darkTheme ? (
              <MdOutlineLightMode
                className="cursor-pointer"
                onClick={() => {
                  setDarkTheme(false);
                  localStorage.removeItem("hotel-theme");
                }}
              />
            ) : (
              <MdDarkMode
                className="cursor-pointer"
                onClick={() => {
                  setDarkTheme(true);
                  localStorage.setItem("hotel-theme", "true");
                }}
              />
            )}
          </li>
        </ul>
      </div>
      <ul className="mt-4 flex w-full items-center justify-between md:w-1/3">
        <li className="transition-all duration-500 hover:-translate-y-2">
          <Link href="/">Home</Link>
        </li>
        <li className="transition-all duration-500 hover:-translate-y-2">
          <Link href="/rooms">Rooms</Link>
        </li>
        <li className="transition-all duration-500 hover:-translate-y-2">
          <Link href="/">Contact</Link>
        </li>
      </ul>
    </header>
  );
}
