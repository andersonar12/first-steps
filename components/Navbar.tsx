"use client";
import { HomeIcon, InfoIcon, PersonFillIcon } from "@primer/octicons-react";

import Link from "next/link";
import "./Navbar.styles.css";
import { usePathname } from "next/navigation";

const navItems = [
  {
    label: "Home",
    href: "/",
    Icon: HomeIcon,
  },
  {
    label: "About",
    href: "/main/about",
    Icon: InfoIcon,
  },
  {
    label: "Contact",
    href: "/main/contact",
    Icon: PersonFillIcon,
  },
];

export default function Navbar() {
  const path = usePathname();
  return (
    <nav className="navbar bg-blue-800 m-2 p-2 rounded">
      <ul className="flex ">
        {navItems.map((item) => (
          <li key={item.label} className="ml-5">
            <Link
              href={item.href}
              className={"link flex items-center" + (item.href === path ? " active-link" : "")}
            >
              <item.Icon size={16} className="mr-2" />
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
