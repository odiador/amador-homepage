import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconChartDonutFilled,
  IconClock,
  IconFolderFilled,
  IconHomeFilled,
  IconInfoCircleFilled,
  IconPhone,
  IconPhoneRinging,
  IconStarFilled,
  IconTimeDuration0
} from "@tabler/icons-react";

export function FloatingDockDemo() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHomeFilled className="h-full w-full text-neutral-900 dark:text-neutral-300" />
      ),
    },
    {
      title: "Info",
      icon: (
        <IconInfoCircleFilled className="h-full w-full text-neutral-900 dark:text-neutral-300" />
      ),
      href: "#info",
    },
    {
      title: "Featured Projects",
      icon: (
        <IconStarFilled className="h-full w-full text-neutral-900 dark:text-neutral-300" />
      ),
      href: "#featured",
    },
    {
      title: "Projects",
      icon: (
        <IconFolderFilled className="h-full w-full text-neutral-900 dark:text-neutral-300" />
      ),
      href: "#projects",
    },
    {
      title: "Skills",
      icon: (
        <IconChartDonutFilled className="h-full w-full text-neutral-900 dark:text-neutral-300" />
      ),
      href: "#skills",
    },
    {
      title: "Working On",
      icon: (
        <IconClock className="h-full w-full text-neutral-900 dark:text-neutral-300" />
      ),
      href: "#working",
    },
    {
      title: "Contact me",
      icon: (
        <IconPhone className="h-full w-full text-neutral-900 dark:text-neutral-300" />
      ),
    },

  ];
  return (
    <div className="flex items-start md:items-center h-full fixed top-0 left-0">
      <FloatingDock items={links} />
    </div>
  );
}
