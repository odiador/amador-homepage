"use client";
import { IconHeartFilled } from "@tabler/icons-react";
import Link from "next/link";
import { allIcons } from "./navBar"

export default function NavBarClone({ onNameClicked }: { onNameClicked?: () => void }) {
  return (
    <nav id="navbar-clone" className="hidden md:flex fixed left-0 top-0 px-8 py-2  w-full justify-center items-center z-20 backdrop-blur-[10px] bg-white dark:bg-black/10 opacity-0 before:content-[''] before:absolute before:w-1/2 before:bottom-0 before:left-0 before:h-[1px] before:bg-gradient-to-r before:from-transparent before:to-[#5373f0] dark:before:to-teal-200 after:content-[''] after:absolute after:w-1/2 after:bottom-0 after:right-0 after:rotate-180 after:h-[1px] after:bg-gradient-to-r after:from-transparent after:to-[#5373f0] dark:after:to-teal-200">
      <div className="flex-grow h-full font-bold flex items-center text-center">
        <div onClick={() => { if (onNameClicked) onNameClicked() }} className="flex items-center w-fit px-8 py-2 gap-1 cursor-pointer h-full hover:bg-black/5 dark:hover:bg-white/5 rounded-full transition-colors">
          <IconHeartFilled className="dark:fill-[#99f6e4] fill-[#5373f0]" />
          <h1 className="select-none text-black dark:text-white font-bold">Juan Manuel <strong className="text-[#5373f0] dark:text-teal-200">Amador</strong> Roa</h1>
        </div>
      </div>
      <div className="flex w-fit items-center">
        {
          allIcons.map(ico => {
            return (
              <Link key={ico.name} className={"size-10 flex items-center justify-center rounded-md hover:scale-125 hover:text-[#53c1f0] hover:dark:text-teal-200 transition-all fill-red-500"} href={ico.href}>
                {ico.icon}
              </Link>
            );
          })
        }
      </div>
    </nav>
  );
}

