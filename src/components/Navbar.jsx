import React from "react";
import { useScrollPosition } from "../hooks/ScrollPosition";

const Navbar = () => {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const scrollPosition = useScrollPosition();
  console.log(scrollPosition);
  return (
    <nav
      className={classNames(
        scrollPosition > 0 ? "shadow bg-white text-black" : "",
        "flex justify-between px-20 py-3 fixed w-full top-0 z-50 transition-colors"
      )}
    >
      <button className="">
        <img
          src={classNames(
            scrollPosition > 0
              ? "src/assets/Logoprimary.png"
              : "src/assets/Logowhite.png"
          )}
          alt=""
        />
      </button>
      <ul className="flex gap-20  navbar-font text-xl items-center">
        <li
          className={classNames(
            scrollPosition < 514 ? "link-active" : "",
            "navbar-Items"
          )}
        >
          <a href="#Home">Home</a>
        </li>
        <li
          className={classNames(
            scrollPosition >= 514 && scrollPosition < 514 + 514
              ? "link-active"
              : "",
            "navbar-Items"
          )}
        >
          <a href="#About">About</a>
        </li>
        <li
          className={classNames(
            scrollPosition > 514 + 514 ? "link-active" : "",
            "navbar-Items"
          )}
        >
          <a href="#Skills">Skills</a>
        </li>
        <li
          className={classNames(
            scrollPosition > 514 + 514 ? "link-active" : "",
            "navbar-Items"
          )}
        >
          <a href="#Projects">Projects</a>
        </li>
        <li
          className={classNames(
            scrollPosition > 514 + 514 ? "link-active" : "",
            "navbar-Items"
          )}
        >
          <a href="#Resume">Resume</a>
        </li>
        <li
          className={classNames(
            scrollPosition > 514 + 514 ? "link-active" : "",
            "navbar-Items"
          )}
        >
          <a href="#Contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
