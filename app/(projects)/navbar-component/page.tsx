'use client'

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
    const [showNav, toggleNav] = useState(false);

  return (
    <div className="bg-gradient-to-br from-[#F9FAFB] to-[#D2D6DB] h-screen">
      <header className="px-4 pt-4 h-[84px] md:px-8 lg:px-[112px]">
        <div className="flex items-center place-content-between gap-[96px] py-3">
          <Image
            src={"img/abstractly.svg"}
            height={32}
            width={112}
            alt="Brand Logo"
          />
          <div className="hidden lg:flex items-center grow gap-8 text-neutral-600 whitespace-nowrap">
            <Link
              href="/"
              className="px-0.5 hover:text-neutral-900 focus:text-neutral-900 focus:ring focus:ring-[#444CE7]/[.12] focus:rounded focus:outline-none"
            >
              Home
            </Link>
            <Link
              href="/"
              className="px-0.5 hover:text-neutral-900 focus:text-neutral-900 focus:ring focus:ring-[#444CE7]/[.12] focus:rounded focus:outline-none"
            >
              Features
            </Link>
            <Link
              href="/"
              className="px-0.5 hover:text-neutral-900 focus:text-neutral-900 focus:ring focus:ring-[#444CE7]/[.12] focus:rounded focus:outline-none"
            >
              Pricing
            </Link>
            <Link
              href="/"
              className="px-0.5 hover:text-neutral-900 focus:text-neutral-900 focus:ring focus:ring-[#444CE7]/[.12] focus:rounded focus:outline-none"
            >
              About us
            </Link>
            <Link
              href="/"
              className="px-0.5 hover:text-neutral-900 focus:text-neutral-900 focus:ring focus:ring-[#444CE7]/[.12] focus:rounded focus:outline-none"
            >
              Contact
            </Link>
          </div>
          <div className="hidden lg:flex gap-4 text-center whitespace-nowrap">
            <Link
              href="/"
              className="px-4 py-2.5 rounded text-neutral-900 bg-white border border-neutral-200 drop-shadow-sm hover:bg-neutral-50 focus:bg-neutral-50 focus:ring focus:ring-[#444CE7]/[.12] focus:rounded focus:outline-none"
            >
              Learn more
            </Link>
            <Link
              href="/"
              className="px-4 py-2.5 rounded text-white bg-indigo-700 drop-shadow-sm hover:bg-indigo-800 focus:bg-indigo-800 focus:ring focus:ring-[#444CE7]/[.12] focus:rounded focus:outline-none"
            >
              See pricing
            </Link>
          </div>
          <i className="lg:hidden ri-menu-line text-neutral-600" onClick={() => toggleNav(!showNav)}></i>
        </div>
      </header>
      <nav className="flex flex-col gap-6 place-content-between w-[375px] h-[812px] px-4 pt-8 pb-4 bg-white fixed top-0 -translate-x-[100%] transition ease-in-out duration-300 aria-hidden:translate-x-0 lg:hidden" aria-hidden={showNav}>
        <div className="flex items-center place-content-between">
          <Image
            src={"img/abstractly.svg"}
            height={32}
            width={112}
            alt="Brand Logo"
          />
          <div>
            <i className="ri-close-line text-neutral-600" onClick={() => toggleNav(false)}></i>
          </div>
        </div>
        <div className="flex flex-col gap-2 grow text-neutral-900 text-sm">
          <Link href="/" className="px-3 py-2">
            Home
          </Link>
          <Link href="/" className="px-3 py-2">
            Features
          </Link>
          <Link href="/" className="px-3 py-2">
            Pricing
          </Link>
          <Link href="/" className="px-3 py-2">
            About us
          </Link>
          <Link href="/" className="px-3 py-2">
            Contact
          </Link>
        </div>
        <div className="flex flex-col gap-4 text-center">
          <Link
            href="/"
            className="px-4 py-2.5 rounded text-neutral-900 bg-white border border-neutral-200 drop-shadow-sm"
          >
            Learn more
          </Link>
          <Link
            href="/"
            className="px-4 py-2.5 rounded text-white bg-indigo-700 drop-shadow-sm"
          >
            Try it out
          </Link>
        </div>
      </nav>
    </div>
  );
}
