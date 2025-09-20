import React from "react";
import { useEffect, useRef } from "react";
import { IoMoonOutline, IoSunny } from "react-icons/io5";
import { MdArrowOutward } from "react-icons/md";
import { RiCloseLargeFill, RiMenu3Fill } from "react-icons/ri";

const Navbar = () => {
  const sideMenuRef = useRef();
  const navRef = useRef();
  const navLinkRef = useRef();

  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  };
  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  };
  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");

    if (document.documentElement.classList.contains("dark")) {
      localStorage.theme = "dark";
    } else {
      localStorage.theme = "light";
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 50) {
        navRef.current.classList.add(
          "bg-white",
          "bg-opacity-50",
          "backdrop-blur-lg",
          "shadow-sm",
          "dark:bg-darkTheme",
          "dark:shadow-white/20"
        );
        navLinkRef.current.classList.remove(
          "bg-white",
          "shadow-sm",
          "bg-opacity-50",
          "dark:border",
          "dark:border-white/30",
          "dark:bg-transparent"
        );
      } else {
        navRef.current.classList.remove(
          "bg-white",
          "bg-opacity-50",
          "backdrop-blur-lg",
          "shadow-sm",
          "dark:bg-darkTheme",
          "dark:shadow-white/20"
        );
        navLinkRef.current.classList.add(
          "bg-white",
          "shadow-sm",
          "bg-opacity-50",
          "dark:border",
          "dark:border-white/30",
          "dark:bg-transparent"
        );
      }
    });

    // -------- light mode and dark mode -----------

    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden">
        <img src="./assets/header-bg-color.png" alt="" className="w-full" />
      </div>

      <nav
        ref={navRef}
        className="w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50"
      >
        <a href="/">
          <p className="text-2xl font-bold xl-text-xl">Mohamed</p>
        </a>

        <ul
          ref={navLinkRef}
          className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white shadow-sm bg-opacity-50 font-Ovo dark:border dark:border-white/30 dark:bg-transparent transition duratio-500 "
        >
          <li>
            <a
              className="hover:text-gray-500 dark:hover:text-gray-300 transition"
              href="#top"
            >
              Home
            </a>
          </li>
          <li>
            <a
              className="hover:text-gray-500 dark:hover:text-gray-300 transition"
              href="#about"
            >
              About me
            </a>
          </li>
          <li>
            <a
              className="hover:text-gray-500 dark:hover:text-gray-300 transition"
              href="#services"
            >
              Services
            </a>
          </li>
          <li>
            <a
              className="hover:text-gray-500 dark:hover:text-gray-300 transition"
              href="#work"
            >
              My Work
            </a>
          </li>
          <li>
            <a
              className="hover:text-gray-500 dark:hover:text-gray-300 transition"
              href="#contact"
            >
              Contact me
            </a>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <button onClick={toggleTheme} className="transtion duration-500 ease-in-out">
            <IoSunny className="text-2xl hidden dark:block" />
            <IoMoonOutline className="text-2xl dark:hidden" />
          </button>

          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-8 py-1.5 border border-gray-300 hover:bg-slate-100/70 dark:hover:bg-darkHover rounded-full ml-4 font-Ovo dark:border-white/30 transition duration-500"
          >
            Contact
            <MdArrowOutward className="text-2xl" />
          </a>

          <button className="block md:hidden ml-3" onClick={openMenu}>
            <RiMenu3Fill className="text-2xl" />
          </button>
        </div>
        {/* -- ----- mobile menu ------  -- */}
        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 font-Ovo dark:bg-darkHover dark:text-white ease-in-out"
        >
          <div className="absolute right-6 top-6" onClick={closeMenu}>
            <RiCloseLargeFill className="text-2xl" />
          </div>

          <li>
            <a href="#top" onClick={closeMenu}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={closeMenu}>
              About me
            </a>
          </li>
          <li>
            <a href="#services" onClick={closeMenu}>
              Services
            </a>
          </li>
          <li>
            <a href="#work" onClick={closeMenu}>
              My Work
            </a>
          </li>
          <li>
            <a href="#contact" onClick={closeMenu}>
              Contact me
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
