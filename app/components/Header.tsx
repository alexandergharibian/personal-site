"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import MenuIcon from "./MenuIcon";
import { HeaderProps } from "@/config";

export default function Header({ siteLogo, navLinks }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleToggleMenu = () => {
      setMenuOpen((prev) => !prev);
    };

    const button = document.querySelector("#menu-button");
    const navItems = document.querySelectorAll("#main-menu > ul > li > a");

    button?.addEventListener("click", handleToggleMenu);
    navItems.forEach((item) => {
      item.addEventListener("click", () => setMenuOpen(false));
    });

    // Update navigation based on scroll position with Intersection Observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            setActiveSection(sectionId);
          }
        });
      },
      { threshold: 0.5 }
    );

    document.querySelectorAll("section").forEach((section) => {
      observer.observe(section);
    });

    return () => {
      button?.removeEventListener("click", handleToggleMenu);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <header className="sticky top-0 z-50 mx-auto flex max-w-5xl animate-slide-in justify-between bg-black px-5 py-6">
        <a href="/" aria-label="Home link">
          <Image
            className="rounded-full"
            src={siteLogo}
            width={45}
            height={45}
            alt="website logo"
          />
        </a>

        <button
          type="button"
          id="menu-button"
          className="px-1.5 text-neutral sm:hidden"
          aria-expanded={menuOpen}
          aria-controls="main-menu"
        >
          <MenuIcon />
        </button>

        <nav
          className={`absolute top-20 right-5 rounded-xl border border-neutral/40 bg-black px-4 py-5 text-neutral sm:static sm:block sm:border-0 sm:bg-transparent sm:p-0 ${
            menuOpen ? "block" : "hidden"
          }`}
          id="main-menu"
        >
          <ul className="gap-2 sm:flex">
            {navLinks.map((link) => {
              const hrefId = link.href.replace("#", "");
              const isActive = activeSection === hrefId;
              return (
                <li key={link.href} className="relative">
                  <a
                    className={`nav-item relative block p-2 text-sm font-medium transition-all duration-500 after:absolute after:bottom-0 after:left-2/4 after:h-2 after:w-1 after:-translate-x-2/4 after:text-primary after:opacity-0 after:content-['•'] hover:text-white ${
                      isActive ? "text-white md:after:opacity-100" : ""
                    }`}
                    href={link.href}
                  >
                    {link.text}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
      <style jsx>{`
        header {
          animation-timeline: scroll();
          animation-range: 0 650px;
        }
      `}</style>
    </>
  );
}

