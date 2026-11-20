import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#17131c] text-white">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <div className="grid gap-10 border-b border-white/10 py-12 sm:py-16 md:grid-cols-[1fr_auto] md:items-center md:gap-16">
          <div>
            <p className="mb-4 text-sm font-medium text-purple-300">Have something in mind?</p>
            <h2 className="max-w-xl text-3xl leading-tight font-medium tracking-tight sm:text-5xl">Good things start<br />with a conversation.</h2>
          </div>
          <Link href="/contact" className="inline-flex min-h-12 w-fit items-center justify-center rounded-full bg-purple-300 px-8 py-3 text-base font-semibold text-[#22112d] transition-colors hover:bg-purple-200">
            Let’s talk
          </Link>
        </div>

        <div className="flex flex-col justify-between gap-8 py-10 sm:flex-row sm:items-center">
          <Link href="/" className="group flex w-fit items-center gap-3" aria-label="My Website home">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#f7f7f7] transition-transform group-hover:-rotate-6">
              <Image src="/image.png" alt="" width={24} height={35} className="h-9 w-auto" />
            </span>
            <span className="text-lg font-semibold tracking-tight">My Website<span className="text-purple-300">.</span></span>
          </Link>
          <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-8 gap-y-2 text-sm text-zinc-300">
            <Link href="/" className="inline-flex min-h-11 items-center transition-colors hover:text-purple-300">Home</Link>
            <Link href="/about" className="inline-flex min-h-11 items-center transition-colors hover:text-purple-300">About</Link>
            <Link href="/contact" className="inline-flex min-h-11 items-center transition-colors hover:text-purple-300">Contact</Link>
          </nav>
        </div>

        <div className="flex flex-col justify-between gap-3 border-t border-white/10 py-6 text-sm text-zinc-400 sm:flex-row">
          <p>© 2026 My Website. All rights reserved.</p>
          <p>A little curiosity. A lot of possibility.</p>
        </div>
      </div>
    </footer>
  );
}
