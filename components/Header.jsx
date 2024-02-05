"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <header className="bg-white pt-10">
      <div className={`mx-auto max-w-screen-xl ${!isNavOpen && "py-4"}`}>
        <div className="flex h-16 items-center justify-between max-xl:px-4">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <Link href="/">
              <Image
                src="/static/logo white nobg.png"
                width={200}
                height={130}
                className="max-sm:w-[170px] max-sm:h-[170px]"
                alt="car dealer logo"
              />
            </Link>
          </div>

          <div className="md:flex md:items-center md:gap-12">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <Link
                    className="text-red-700 font-medium text-lg transition hover:text-red-600"
                    href="/"
                  >
                    Home
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-red-700 font-medium text-lg transition hover:text-red-600"
                    href="/cars"
                  >
                    Cars
                  </Link>
                </li>

                <li>
                  <a
                    className="text-red-700 font-medium text-lg transition hover:text-red-600"
                    href="/"
                  >
                    About
                  </a>
                </li>

                <li>
                  <a
                    className="text-red-700 font-medium text-lg transition hover:text-red-600"
                    href="/"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </nav>

            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4">
                <a
                  className="rounded-md bg-red-700 px-5 py-2.5 text-sm font-medium text-white shadow"
                  href="/"
                >
                  Login
                </a>

                <div className="hidden sm:flex">
                  <a
                    className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-red-700"
                    href="/"
                  >
                    Register
                  </a>
                </div>
              </div>

              <div className="block md:hidden">
                <button
                  className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
                  onClick={() => setIsNavOpen(!isNavOpen)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`${
            !isNavOpen && "hidden"
          } flex flex-col items-center text-center bg-red-700 mt-2`}
        >
          <ul className="w-full">
            <Link
              className="text-white font-semibold text-lg transition"
              href="/"
            >
              <li className="hover:bg-red-600 w-full py-1">Home</li>
            </Link>
            <Link
              className="text-white font-semibold text-lg transition"
              href="/cars"
            >
              <li className="hover:bg-red-600 w-full py-1">Cars</li>
            </Link>

            <Link
              className="text-white font-semibold text-lg transition"
              href="/"
            >
              <li className="hover:bg-red-600 w-full py-1">About</li>
            </Link>

            <Link
              className="text-white font-semibold text-lg transition"
              href="/"
            >
              <li className="hover:bg-red-600 w-full py-1">Contact</li>
            </Link>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
