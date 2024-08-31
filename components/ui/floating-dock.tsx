"use client";
/**
 * Note: Use position fixed according to your needs
 * Desktop navbar is better positioned at the bottom
 * Mobile navbar is better positioned at bottom right.
 **/

import { cn } from "@/lib/utils";
import { IconLayoutNavbarCollapse } from "@tabler/icons-react";
import {
  AnimatePresence,
  MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { off } from "process";
import { useRef, useState } from "react";

export const FloatingDock = ({
  items,
  desktopClassName,
  mobileClassName,
}: {
  items: { title: string; icon: React.ReactNode; href?: string }[];
  desktopClassName?: string;
  mobileClassName?: string;
}) => {
  return (
    <>
      <FloatingDockDesktop items={items} className={desktopClassName} />
      <FloatingDockMobile items={items} className={mobileClassName} />
    </>
  );
};

const FloatingDockMobile = ({
  items,
  className,
}: {
  items: { title: string; icon: React.ReactNode; href?: string }[];
  className?: string;
}) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={cn("relative md:hidden flex items-center w-full", className)}>
      <AnimatePresence>
        {open && (
          <motion.div
            layoutId="nav"
            className="pt-4 absolute top-full flex flex-col gap-2"
          >
            {items.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: -10 }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -10,
                  transition: {
                    delay: (items.length - 1 - idx) * 0.05,
                  },
                }}
                transition={{ delay: (idx) * 0.05 }}
              >
                <div
                  onClick={() => {
                    if (item.href) scrolltoHash(item.href);
                    else scrollToTop();
                  }}
                  key={item.title}
                  className="h-16 w-16 rounded-full bg-gray-200 dark:bg-neutral-900 flex items-center justify-center -z-1"
                >
                  <div className="h-8 w-8">{item.icon}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <button
        onClick={() => setOpen(!open)}
        className="flex-shrink-0 h-16 w-16 rounded-full bg-gray-200 dark:bg-neutral-800 flex items-center justify-center z-1"
      >
        <IconLayoutNavbarCollapse className="h-8 w-8 text-neutral-500 dark:text-neutral-400" />
      </button>
      <div className="text-nowrap">
        Juan Manuel Amador Roa
      </div>
      <div className="w-full text-end justify-self-end">
        Hola
      </div>
    </div>
  );
};
const scrolltoHash = function (element_id: string) {
  const element = document.getElementById(element_id.substring(1));
  if (element) {
    var elementPosition = element.getBoundingClientRect().top;
    let offsetPosition = elementPosition + window.scrollY - 20;
    const width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    if (width >= 768)
      offsetPosition -= 50;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  }
}
const isBrowser = () => typeof window !== 'undefined'; //The approach recommended by Next.js

function scrollToTop() {
  if (!isBrowser()) return;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}


const FloatingDockDesktop = ({
  items,
  className,
}: {
  items: { title: string; icon: React.ReactNode; href?: string; }[];
  className?: string;
}) => {
  let mouseY = useMotionValue(Infinity);
  let mouseX = useMotionValue(Infinity);
  let ref2 = useRef<HTMLDivElement>(null);
  return (
    <motion.div
      onMouseMove={(e) => {
        mouseY.set(e.screenY + 35 - (ref2.current?.getBoundingClientRect().y ?? 1));
        mouseX.set(e.pageX);
      }}
      onMouseLeave={() => mouseY.set(Infinity)}
      className={cn(
        "my-auto hidden md:flex w-16 gap-4 flex-col items-center rounded-2xl bg-gray-200 dark:bg-neutral-900 py-4",
        className
      )}
      ref={ref2}
    >
      {items.map((item) => (
        <IconContainer mouseX={mouseX} mouseY={mouseY} key={item.title} {...item} />
      ))}
    </motion.div>
  );
};

function IconContainer({
  mouseX,
  mouseY,
  title,
  icon,
  href,
}: {
  mouseX: MotionValue;
  mouseY: MotionValue;
  title: string;
  icon: React.ReactNode;
  href?: string;
}) {
  let ref = useRef<HTMLDivElement>(null);

  let bounds = ref.current?.getBoundingClientRect() ?? { y: 0, height: 0, width: 0 };
  let distance = useTransform([mouseX, mouseY], ([x, val]) => {
    let centerY = bounds.y + bounds.height / 2;

    if (typeof val === "number" && typeof x === "number" && x < 170) {
      return val - centerY;
    } else {
      return Infinity;
    }
  });
  let x = useTransform(distance, [-100, 0, 100], [1, 20, 1]);

  let widthTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  let heightTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);

  let widthTransformIcon = useTransform(distance, [-150, 0, 150], [20, 40, 20]);
  let heightTransformIcon = useTransform(
    distance,
    [-150, 0, 150],
    [20, 40, 20]
  );

  let width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  let height = useSpring(heightTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  let widthIcon = useSpring(widthTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  let heightIcon = useSpring(heightTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const [hovered, setHovered] = useState(false);

  return (
    <div onClick={() => {
      if (href)
        scrolltoHash(href);
      else
        scrollToTop();
    }}>
      {boton(false)}
    </div>

  );

  function boton(moverMas: boolean) {
    return <motion.div
      ref={ref}
      style={{ width, height, x }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="aspect-square rounded-full bg-gray-300 dark:bg-neutral-800 flex items-center justify-center relative transition-transform duration-75"
    >
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: 0, x: "20%" }}
            animate={{ opacity: 1, y: 0, x: moverMas ? "150%" : "100%" }}
            exit={{ opacity: 0, y: 0, x: "20%" }}
            className="ml-4 px-2 py-0.5 whitespace-pre rounded-md bg-gray-100 border dark:bg-neutral-800 dark:border-neutral-900 dark:text-white border-gray-200 text-neutral-700 absolute w-fit text-xs"
          >
            {title}
          </motion.div>
        )}
      </AnimatePresence>
      <motion.div
        style={{ width: widthIcon, height: heightIcon }}
        className="flex items-center justify-center"
      >
        {icon}
      </motion.div>
    </motion.div>;
  }
}
