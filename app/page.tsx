"use client";
import { FloatingDockDemo } from "@/components/ui/Dock";
import NavBar from "@/components/ui/navBar";
import NavBarClone from "@/components/ui/navBarClone";
import Squares from "@/components/ui/squares";
import { TypingAnimation } from "@/components/ui/typewriter";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { ThemeProvider } from "next-themes";


const isBrowser = () => typeof window !== 'undefined'; //The approach recommended by Next.js

function scrollToTop() {
  if (!isBrowser()) return;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

export default function Home() {
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => {
    const classList = document.getElementById('down-arrow')?.classList;
    if (latest > 30) {
      classList?.remove('animate-pulse');
    } else {
      classList?.add('animate-pulse');
    }
  })
  return (
    <ThemeProvider>
      <main className="relative flex min-h-screen p-16 pt-28 gap-2 flex-col items-center justify-center">
        <NavBarClone onNameClicked={scrollToTop} />
        {/* <FollowingPointerDemo /> */}
        {/* <MacbookScroll /> */}
        <FloatingDockDemo />
        <Squares speed={0.5} id="home" className="px-8 py-4 relative w-8/12 text-6xl flex flex-col" direction="diagonal">
          <h1 className="">I&apos;m</h1>
          <h1 className="font-extrabold w-96">Juan Manuel <strong className="text-[#5373f0] dark:text-teal-200">Amador</strong > Roa</h1>
          <TypingAnimation className="text-[#5373f0] dark:text-teal-200 pt-4 text-3xl font-light tracking-widest" strings={["Programming Lover", "Lover of tech", "Lover of Innovative Solutions", "Lover of Creative Code"]} />
          <NavBar />
        </Squares>
        <motion.svg

          id="down-arrow" className="mt-40 opacity-0 animate-pulse" width={64} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.29289 8.29289C4.68342 7.90237 5.31658 7.90237 5.70711 8.29289L12 14.5858L18.2929 8.29289C18.6834 7.90237 19.3166 7.90237 19.7071 8.29289C20.0976 8.68342 20.0976 9.31658 19.7071 9.70711L12.7071 16.7071C12.3166 17.0976 11.6834 17.0976 11.2929 16.7071L4.29289 9.70711C3.90237 9.31658 3.90237 8.68342 4.29289 8.29289Z"
            fill="#fff"
          />
        </motion.svg>

        <h1 className="my-96 text-3xl font-bold scroll-my-96" id="projects">Mis Proyectos</h1>
      </main>
    </ThemeProvider>
  );
}
