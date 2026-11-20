"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/80 bg-white/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-8 gap-y-5 px-6 py-5 sm:px-10 lg:px-16">
        <Link href="/" className="group flex items-center gap-3" aria-label="My Website home">
          <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f7f7f7] transition-transform group-hover:-rotate-6">
            <Image src="/image.png" alt="" width={28} height={41} className="h-10 w-auto" />
          </span>
          <span className="text-lg font-semibold tracking-tight text-zinc-950">My Website<span className="text-purple-600">.</span></span>
        </Link>

        <nav aria-label="Main navigation" className="order-3 flex w-full items-center justify-center gap-1 rounded-full border border-purple-100 bg-zinc-100 p-1 sm:order-none sm:w-auto">
          <Link href="/" className="flex min-h-11 flex-1 items-center justify-center rounded-full px-6 py-2.5 text-sm font-medium text-zinc-600 transition-colors hover:bg-white hover:text-purple-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-500 active:bg-purple-100 motion-reduce:transition-none sm:flex-none">Home</Link>
          <Link href="/about" className="flex min-h-11 flex-1 items-center justify-center rounded-full px-6 py-2.5 text-sm font-medium text-zinc-600 transition-colors hover:bg-white hover:text-purple-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-500 active:bg-purple-100 motion-reduce:transition-none sm:flex-none">About</Link>
          <Link href="/contact" className="flex min-h-11 flex-1 items-center justify-center rounded-full px-6 py-2.5 text-sm font-medium text-zinc-600 transition-colors hover:bg-white hover:text-purple-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-500 active:bg-purple-100 motion-reduce:transition-none sm:flex-none">Contact</Link>
        </nav>

        <Link href="/contact" className="hidden min-h-11 items-center justify-center rounded-full bg-zinc-950 px-6 text-sm font-medium text-white transition-colors hover:bg-purple-700 lg:inline-flex">
          Get in touch
        </Link>
      </div>
    </header>
  );
}
