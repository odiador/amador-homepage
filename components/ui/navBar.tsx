"use client";
import { IconBrandLinkedin, IconBrandGithubFilled, IconBrandInstagram } from "@tabler/icons-react";
import { motion, useScroll } from "framer-motion";
import { inView } from "framer-motion/dom";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function NavBar() {
  const ref = useRef(null);
  useEffect(() => {
    inView(document.getElementById("navbar")!, () => {
      const navClone = document.getElementById("navbar-clone");
      navClone?.classList.remove("go-top");
      navClone?.classList.add("animate-end");
      
      return (leaveInfo) => {
        navClone?.classList.add("go-top");
        navClone?.classList.remove("animate-end");
      }
    });
  }, [])
  return <nav id="navbar" ref={ref} className="flex w-full justify-center items-center ">
    {iconos()}
  </nav>;
}

export function iconos() {
  return <div className="flex w-fit items-center">
    <div className="size-10 flex items-center justify-center rounded-md">
      <IconBrandLinkedin />
    </div>
    <div className="size-10 flex items-center justify-center rounded-md">
      <IconBrandGithubFilled />
    </div>
    <Link className="size-10 flex items-center justify-center rounded-md group" href={""}>
      <IconBrandInstagram className="transition-transform group-hover:scale-125" />
    </Link>
  </div>;
}

