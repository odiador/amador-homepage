"use client";
import Image from "next/image";
import React, { useState } from "react";
import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";
import Link from "next/link";

export const AnimatedTooltip = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0); // going to set this value on mouse move
  // rotate the tooltip
  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig
  );
  // translate the tooltip
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig
  );
  const handleMouseMove = (event: any) => {
    const halfWidth = event.target.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth); // set the x value, which is then used in transform and rotate
  };
  const item = {
    id: 1,
    username: "odiador",
    name: "Juan Manuel Amador",
    cargo: "Estudiante",
    image:
      "https://avatars.githubusercontent.com/u/115110279?s=180&v=4",
  }
  return (
    <Link href={'https://github.com/odiador'}>
      <div
        className="relative group flex flex-col"
        key={item.username}
        onMouseEnter={() => setHoveredIndex(item.id)}
        onMouseLeave={() => setHoveredIndex(null)}
      >
        <AnimatePresence mode="popLayout">
          {hoveredIndex === item.id && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.6 }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
                transition: {
                  type: "spring",
                  stiffness: 260,
                  damping: 10,
                },
              }}
              exit={{ opacity: 0, y: 20, scale: 0.6 }}
              style={{
                translateX: translateX,
                rotate: rotate,
                whiteSpace: "nowrap",
              }}
              className="font-bold text-white gap-2 text-base absolute bottom-40 left-[1.5rem] flex items-center justify-center rounded-md bg-black z-50 shadow-xl px-6 py-2 border-2 border-black before:content-[''] before:absolute before:w-4 before:h-4 before:left-[calc(calc(50%)- 2 rem)] before:-bottom-4 before:border-solid before:border-t-black before:border-t-8 before:border-x-transparent before:border-x-8 before:border-b-0"
            >
              <Image width={32} height={32} src="/github.svg" alt={"GitHub"} />
              {item.username}
            </motion.div>
          )}
        </AnimatePresence>
        <div className="flex flex-col font-bold items-center justify-center group-hover:bg-[rgb(255,255,255,0.25)] dark:bg-[rgb(10,10,10,0.25)] border border-solid border-transparent group-hover:border-[rgba(255,255,255,0.25)] transition-colors px-6 py-4 rounded-xl " onMouseMove={handleMouseMove}>
          <span className="glitch text-black dark:text-white" data-glitch={`${hoveredIndex === null ? '' : item.name}`}>{item.name}</span>
          <Image
            height={100}
            width={100}
            src={item.image}
            alt={item.username}
            className="object-cover !p-0 !m-0 !my-2 object-top rounded-full h-20 w-20 border-2 group-hover:scale-105 group-hover:z-30 border-white relative transition duration-500"
          />

          <span className="font-normal">{item.cargo}</span>
        </div>
      </div>
    </Link>
  );
};
