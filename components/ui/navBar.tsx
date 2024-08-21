import { IconBrandGithubFilled, IconBrandInstagram, IconBrandLinkedin } from "@tabler/icons-react";
import Link from "next/link";

export default function ContactIcons() {
  return <nav id="navbar" className="flex w-full justify-end items-center ">
    <div className="flex w-fit">
      {
        allIcons.map(ico => {
          return (
            <Link key={ico.name} id={ico.name} className={"size-10 flex items-center justify-center rounded-md hover:scale-125 hover:text-[#53c1f0] hover:dark:text-teal-200 transition-all"} href={ico.href}>
              {ico.icon}
            </Link>
          );
        })
      }
    </div>
  </nav>;
}
export { allIcons };

const allIcons = [
  {
    icon: <IconBrandLinkedin />,
    href: "https://www.linkedin.com/in/jamadorr/",
    name: "Linkedin",
  }, {
    icon: <IconBrandGithubFilled />,
    href: "https://github.com/odiador/",
    name: "GitHub",
  }, {
    icon: <IconBrandInstagram />,
    href: "https://www.instagram.com/amadour.r/",
    name: "Instagram",
  },
]