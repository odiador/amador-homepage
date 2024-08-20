import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconHomeFilled,
  IconInfoCircleFilled,
  IconFolderFilled,
  IconPhoneFilled,
  IconStarFilled
} from "@tabler/icons-react";
import { AnimatedTooltip } from "./animated-tooltip";

export function FloatingDockDemo() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHomeFilled className="h-full w-full text-neutral-900 dark:text-neutral-300" />
      ),
      href: "#home",
    },
    {
      title: "Featured Projects",
      icon: (
        <IconStarFilled className="h-full w-full text-neutral-900 dark:text-neutral-300" />
      ),
      href: "#",
    },

    {
      title: "Projects",
      icon: (
        <IconFolderFilled className="h-full w-full text-neutral-900 dark:text-neutral-300" />
      ),
      href: "#projects",
    },

    {
      title: "Contact me",
      icon: (
        <IconPhoneFilled className="h-full w-full text-neutral-900 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Info",
      icon: (
        <IconInfoCircleFilled className="h-full w-full text-neutral-900 dark:text-neutral-300" />
      ),
      href: "#",
      modalContent: <div className="flex flex-col items-center">
        <span className="text-5xl font-bold text-center pb-4">{"¿Quien soy?"}</span>
        {/* <span className="text-md font-[200]">{"Aquí publico mis proyectos mas destacados."}</span> */}
        <AnimatedTooltip />
      </div>
    },
  ];
  return (
    <div className="flex items-start md:items-center h-full fixed top-0 left-0">
      <FloatingDock items={links}/>
    </div>
  );
}
