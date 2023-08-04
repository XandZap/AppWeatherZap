"use client";
import Link from "next/link";
import React, { useState } from "react";

interface props {
  navigation: { href: string; name: string }[];
}

const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-black transition ease transform duration-300`;

function Navigation({ navigation }: props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="flex flex-row justify-between gap-x-8 text-xl mr-20 max-lg:hidden hover:text-zinc-300">
        {navigation.map((nav) => (
          <Link href={nav.href} key={nav.name}>
            {nav.name}
          </Link>
        ))}
      </nav>
      <button
        className="absolute top-5 right-5 h-12 w-12 border-2 border-black rounded flex flex-col justify-center items-center group lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div
          className={`${genericHamburgerLine} ${
            isOpen
              ? "rotate-45 translate-y-3 opacity-50 group-hover:opacity-100"
              : "opacity-50 group-hover:opacity-100"
          }`}
        />
        <div
          className={`${genericHamburgerLine} ${isOpen ? "opacity-0" : "opacity-50 group-hover:opacity-100"}`}
        />
        <div
          className={`${genericHamburgerLine} ${
            isOpen
              ? "-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100"
              : "opacity-50 group-hover:opacity-100"
          }`}
        />
      </button>
    </>
  );
}

export default Navigation;

