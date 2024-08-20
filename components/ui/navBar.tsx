"use client";
import { IconBrandLinkedin, IconBrandGithubFilled, IconBrandInstagram } from "@tabler/icons-react";
import { motion, useScroll } from "framer-motion";
import { inView } from "framer-motion/dom";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function NavBar() {
  const ref = useRef(null);
  useEffect(() => {
    inView(document.getElementById("home")!, () => {
      const navClone = document.getElementById("navbar-clone");
      navClone?.classList.remove("go-top");
      navClone?.classList.add("animate-end");

      return (leaveInfo) => {
        navClone?.classList.add("go-top");
        navClone?.classList.remove("animate-end");
      }
    });
  }, [])
  return <nav id="navbar" ref={ref} className="flex w-full justify-end items-center ">
    <div className="flex w-fit">
      {
        allIcons.map(ico => {
          return (
            <Link key={ico.name} id={ico.name} className={"size-10 flex items-center justify-center rounded-md hover:scale-125 hover:text-[#53c1f0] hover:dark:text-teal-200 transition-all"} href={ico.href}>
              {ico.icon}
            </Link>
          );
        })
      }
    </div>
  </nav>;
}
export { allIcons };

const allIcons = [
  {
    icon: <IconBrandLinkedin />,
    href: "https://www.linkedin.com/in/juana-amador-guerra-martinez/",
    name: "Linkedin",
  }, {
    icon: <IconBrandGithubFilled />,
    href: "https://www.linkedin.com/in/juana-amador-guerra-martinez/",
    name: "GitHub",
  }, {
    icon: <IconBrandInstagram />,
    href: "https://www.linkedin.com/in/juana-amador-guerra-martinez/",
    name: "Instagram",
  },
]