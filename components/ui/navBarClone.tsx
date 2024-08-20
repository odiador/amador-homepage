"use client";
import { IconHeartFilled, IconHeart } from "@tabler/icons-react";
import { iconos } from "./navBar";

export default function NavBarClone({ onNameClicked }: { onNameClicked?: () => void }) {
  return (
    <nav id="navbar-clone" className="fixed left-0 top-0 px-8 py-2 flex w-full justify-center items-center z-20 backdrop-blur-[10px] bg-black/10 opacity-0">
      <div className="flex-grow h-full font-bold flex items-center text-center">
        <div onClick={() => { if (onNameClicked) onNameClicked() }} className="flex items-center w-fit px-8 py-2 gap-1 cursor-pointer h-full hover:bg-white/5 rounded-full transition-colors">
          <IconHeartFilled fill="#99f6e4" />
          <h1 className="select-none">Juan Manuel <strong className="text-teal-200">Amador</strong> Roa</h1>
        </div>
      </div>
      {iconos()}
    </nav>
  );
}

