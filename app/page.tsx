import { AnimatedModalDemo } from "@/components/ui/Boton";
import { MacbookScroll } from "@/components/ui/macbook-scroll";

export default function Home() {
  return (
    <main className="flex min-h-screen p-4 gap-2 flex-col items-center justify-center ">
      <AnimatedModalDemo />
      <MacbookScroll/>
    </main>
  );
}
