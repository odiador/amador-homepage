import { inView } from "framer-motion";
import { useEffect, useRef } from "react";
import ContactIcons from "./navBar";
import Squares from "./squares";
import { TypingAnimation } from "./typewriter";

export default function Hero() {
    const ref = useRef(null);
    useEffect(() => {
        inView(ref.current!, () => {
            const navClone = document.getElementById("navbar-header");
            navClone?.classList.remove("go-top");
            navClone?.classList.add("animate-end");

            return () => {
                navClone?.classList.add("go-top");
                navClone?.classList.remove("animate-end");
            }
        });
    }, [])
    return (
        <Squares squaresRef={ref} speed={0.5} id="home" className="px-8 py-4 relative w-8/12 text-6xl flex flex-col" direction="diagonal">
            <h1 className="">I&apos;m</h1>
            <h1 className="font-extrabold w-96">Juan Manuel <strong className="text-[#5373f0] dark:text-teal-200">Amador</strong > Roa</h1>
            <TypingAnimation className="text-[#5373f0] dark:text-teal-200 pt-4 text-3xl font-light tracking-widest" strings={["Programming Lover", "Lover of tech", "Lover of Innovative Solutions", "Lover of Creative Code"]} />
            <ContactIcons />
        </Squares>
    )
}