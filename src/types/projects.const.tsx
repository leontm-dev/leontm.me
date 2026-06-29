import { Route } from "next";
import { IconType } from "react-icons/lib";
import {
  LegoIcon,
  RobotIcon,
  PackageIcon,
  GlobeIcon,
} from "@phosphor-icons/react";
import { Scissors, SearchIcon } from "lucide-react";
import {
  SiAxios,
  SiBabel,
  SiCapacitor,
  SiDiscord,
  SiDocker,
  SiFirebase,
  SiMongodb,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiNpm,
  SiPostgresql,
  SiPython,
  SiReact,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si";

export type Project = {
  title: string;
  description: string;
  shortDescription: string;
  href: Route;
  icon: IconType;
  imgUrl?: string;
  role: string;
  skills: { icon: IconType; name: string }[];
};
export const projects: Project[] = [
  {
    title: "finda",
    icon: GlobeIcon,
    imgUrl: "https://services.find-a.app/api/assets/icon",
    shortDescription: "",
    description:
      "The finda App is an app for young students to find internships and apprentices nearby. finda development started from a school company. By now, finda has turned into a proper company.",
    href: "/projects/finda",
    role: "Founder & Developer",
    skills: [
      {
        icon: SiTypescript,
        name: "TypeScript",
      },
      {
        icon: SiNestjs,
        name: "NestJS",
      },
      {
        icon: SiNextdotjs,
        name: "Next.js",
      },
      {
        icon: SiReact,
        name: "React",
      },
      {
        icon: SiMongodb,
        name: "MongoDB",
      },
      {
        icon: SiVuedotjs,
        name: "Vue.js",
      },
      {
        icon: SiPostgresql,
        name: "PostgresSQL",
      },
      {
        icon: SiCapacitor,
        name: "Capacitor",
      },
      {
        icon: SiFirebase,
        name: "Firebase",
      },
    ],
  },
  {
    title: "Spiky.js",
    role: "Maintainer & Solo-Developer",
    icon: LegoIcon,
    shortDescription: "",
    description:
      "Spiky.js is a npm package to transpile TypeScript code from the spiky.js package into python code that can run on the LEGO® SPIKE Prime robots.",
    href: "https://github.com/leontm-dev/spiky.js",
    skills: [
      {
        icon: SiBabel,
        name: "Babel",
      },
      {
        icon: SiTypescript,
        name: "TypeScript",
      },
      {
        icon: SiPython,
        name: "Python",
      },
    ],
  },
  {
    title: "sevdesk API Wrapper",
    role: "Maintainer",
    icon: PackageIcon,
    shortDescription: "",
    description:
      "An api-sdk for the sevdesk API written in TypeScript. It is build on top of the popular Axios package.",
    href: "https://www.npmjs.com/package/sevdesk-api-wrapper",
    skills: [
      {
        icon: SiNpm,
        name: "npm",
      },
      {
        icon: SiTypescript,
        name: "TypeScript",
      },
      {
        icon: SiAxios,
        name: "Axios",
      },
      {
        icon: SiNodedotjs,
        name: "Node.js",
      },
    ],
  },
  {
    icon: RobotIcon,
    href: "https://obyn.leontm.me",
    title: "Obyn Discord Bot",
    description:
      "An open-source discord bot that tries to combine the most important features of many different discord bots. Obyn is an acronym for only-bot-you-need.",
    shortDescription: "An open-source discord bot.",
    role: "Developer",
    skills: [
      {
        icon: SiTypescript,
        name: "TypeScript",
      },
      {
        icon: SiDiscord,
        name: "Discord.js",
      },
      {
        icon: SiDocker,
        name: "Docker",
      },
    ],
  },
  {
    icon: SearchIcon,
    href: "https://comp-finder.leontm.me",
    title: "comp finder",
    description:
      "Find the pro teams that are playing your desired agent composition of discover the trending comps on a certain patch.",
    shortDescription: "",
    role: "Maintainer",
    skills: [
      {
        icon: SiTypescript,
        name: "TypeScript",
      },
      {
        icon: SiNestjs,
        name: "NestJS",
      },
      {
        icon: SiReact,
        name: "React",
      },
      {
        icon: SiNextdotjs,
        name: "Next.js",
      },
      {
        icon: Scissors,
        name: "Scraping",
      },
    ],
  },
];
