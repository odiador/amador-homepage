"use client";
import { FloatingDockDemo } from "@/components/ui/Dock";
import NavBarHeader from "@/components/ui/HeaderNavBar";
import Hero from "@/components/ui/hero";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { ThemeProvider } from "next-themes";

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
      <main className="relative flex min-h-screen md:p-16 p-4 pt-28 gap-2 flex-col items-center justify-center">
        <NavBarHeader />
        <Hero />
        <FloatingDockDemo />
        <svg

          id="down-arrow" className="my-32 opacity-0 animate-pulse" width={64} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.29289 8.29289C4.68342 7.90237 5.31658 7.90237 5.70711 8.29289L12 14.5858L18.2929 8.29289C18.6834 7.90237 19.3166 7.90237 19.7071 8.29289C20.0976 8.68342 20.0976 9.31658 19.7071 9.70711L12.7071 16.7071C12.3166 17.0976 11.6834 17.0976 11.2929 16.7071L4.29289 9.70711C3.90237 9.31658 3.90237 8.68342 4.29289 8.29289Z"
            fill="#fff"
          />
        </svg>

        <h1 className=" text-3xl font-bold scroll-my-96" id="info">About Me</h1>
        Pues yo jaja
        <h1 className="mt-[32rem] text-3xl font-bold scroll-my-96" id="featured">Featured Projects</h1>
        Clinica veterinaria (java), sputify (spring+react), agencia de viajes (java+javafx), la panadería (java+javafx)
        <h1 className="mt-[32rem] text-3xl font-bold scroll-my-96" id="projects">All my Projects</h1>
        Concesionario(java+javafx), teorema de los 4 colores(react), graphify(react)
        <h1 className="mt-[32rem] text-3xl font-bold scroll-my-96" id="skills">My Skills</h1>
        Java, JS, TS, css, C++, docker, git, github, mongodb, markdown, figma, tailwindcss, react, nextjs
        <h1 className="mt-[32rem] text-3xl font-bold scroll-my-96" id="working">Working On</h1>
        Solventium WebApp (nextjs), UniEventos WebApp(nextjs)
      </main>
    </ThemeProvider>
  );
}
