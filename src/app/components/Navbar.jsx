import Link from "next/link";
import React from "react";
import Navlink from "./Navlink";

const NavLists = [
  {
    path: "/",
    title: "Home",
  },
  {
    path: "/about",
    title: "About",
  },
  {
    path: "/blogs",
    title: "Blogs",
  },
  {
    path: "/dashboard",
    title: "Dashboard",
  },
];

const Navbar = () => {
  return (
    <nav className="flex justify-between my-3">
      <h1 className="font-bold text-xl">Next Hero</h1>
      <ul className="flex">
        {NavLists.map(({ path, title }) => (
          <li className="ml-8" key={path}>
            <Navlink exact={path === '/'} activeClassname={'text-blue-600 font-semibold'} href={path}>{title}</Navlink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
