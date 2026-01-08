"use client";
import React from "react";
import WalletConnect from "./ui/WalletConnect";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [open, setOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const pathname = usePathname();

  function openMenu() {
    setOpen((prev) => !prev);
    console.log(!open); // Logs correct state
  }

  React.useEffect(() => {
    if (pathname === "/") {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 75);
      };

      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [pathname]);

  return (
    <main>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`border border-gray-200 shadow-sm bg-white rounded-md p-3 m-5 flex justify-between items-center mx-3 xl:mx-40 2xl:mx-80 duration-300 ease-in-out
            ${
              isScrolled
                ? "bg-white p-5 fixed top-0 left-0 right-0 z-50 animate-in slide-in-from-top shadow-md"
                : ""
            }`}
      >
        <nav>
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/Logo/zkpull-logo.png"
              alt="zkPull"
              width={32}
              height={32}
              className="w-8 h-8 rounded-full"
            />
            <span className="text-xl font-medium text-gray-900">zkPull</span>
          </Link>
        </nav>

        <nav>
          <ul className="hidden md:flex gap-5 items-center font-medium text-sm text-gray-700">
            <li className="hover:text-gray-900 transition-colors">
              <Link href="/create-bounty">Create Bounty</Link>
            </li>
            <li className="hover:text-gray-900 transition-colors">
              <Link href="/issues">Explore Issues</Link>
            </li>
            <li className="hover:text-gray-900 transition-colors">
              <Link href="/swap">Swap Token</Link>
            </li>
            <li className="hover:text-gray-900 transition-colors">
              <Link href="/leaderboard">Leaderboard</Link>
            </li>
            <li>
              <WalletConnect />
            </li>
          </ul>
        </nav>

        <nav className="flex md:hidden gap-3">
          <WalletConnect />
          <Button asChild size="icon" className="p-1" onClick={openMenu}>
            <Menu />
          </Button>
        </nav>

        {open && (
          <nav className="font-medium fixed w-full h-full top-0 left-0 flex flex-col gap-5 items-center justify-center bg-white text-gray-900 z-50 animate-in slide-in-from-right duration-500">
            <ul className="flex flex-col gap-5">
              <li>
                <Link href="/create-bounty">Create Bounty</Link>
              </li>
              <li>
                <Link href="/issues">Explore Issues</Link>
              </li>
              <li>
                <Link href="/swap">Swap Token</Link>
              </li>
              <li>
                <Link href="/leaderboard">Leaderboard</Link>
              </li>
              <li>
                <Link href="https://bimajdiva.gitbook.io/wearelazydev" target="blank">Documentation</Link>
              </li>
            </ul>
            <X
              onClick={openMenu}
              className="absolute top-5 right-5 cursor-pointer text-gray-900"
            />
          </nav>
        )}
      </motion.header>
    </main>
  );
}
