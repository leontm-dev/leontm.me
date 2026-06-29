"use client";

import { MainSidebar } from "@/components/main-sidebar";
import { PageFooter } from "@/components/outwards/footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";
import {
  GithubLogoIcon,
  InstagramLogoIcon,
  LinkedinLogoIcon,
  ListIcon,
} from "@phosphor-icons/react";
import { ExternalLink } from "lucide-react";
import { Route } from "next";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IconType } from "react-icons/lib";
import {
  SiCapacitor,
  SiFirebase,
  SiJsonwebtokens,
  SiMongodb,
  SiNestjs,
  SiNextdotjs,
  SiPostgresql,
  SiReact,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si";

export function ProductsPageFindaComponent() {
  const { resolvedTheme } = useTheme();
  const subProjects: {
    name: string;
    description: string;
    skills: { icon: IconType; name: string }[];
    href: Route;
  }[] = React.useMemo(
    () => [
      {
        name: "finda Services",
        description:
          "The finda Services is a collection of tools and smaller applications. They are aimed to help companies and schools use the finda App more efficiently by delivering analytics, showing important counts and letting them manage their orders.",
        skills: [
          { icon: SiTypescript, name: "TypeScript" },
          { icon: SiReact, name: "React" },
          { icon: SiNextdotjs, name: "Next.js" },
        ],
        href: "https://services.find-a.app",
      },
      {
        name: "finda Resources",
        description:
          "The finda Resources API is a Nest.js application that controls the backend of the finda Services. It provides the statistics, graphs and counts.",
        skills: [
          {
            icon: SiTypescript,
            name: "TypeScript",
          },
          {
            icon: SiNestjs,
            name: "NestJs",
          },
          {
            icon: SiMongodb,
            name: "MongoDB",
          },
          {
            icon: SiJsonwebtokens,
            name: "JWT",
          },
          {
            icon: SiFirebase,
            name: "Firebase",
          },
          {
            icon: SiPostgresql,
            name: "PostgresSQL",
          },
        ],
        href: "#",
      },
      {
        name: "App",
        description:
          "At first the app got developed by someone else, but now I am slowly taking more and more action in the development of our main product.",
        href: "https://web.find-a.app",
        skills: [
          {
            icon: SiVuedotjs,
            name: "Vue.js",
          },
          {
            icon: SiCapacitor,
            name: "Capacitor",
          },
        ],
      },
    ],
    [],
  );
  return (
    <div className="flex min-h-screen w-screen flex-col items-center gap-4">
      <div className="flex min-h-screen w-full flex-col items-center justify-center">
        <div className="my-8 flex min-h-screen w-9/10 flex-col items-center justify-between gap-10 lg:m-0 lg:flex-row">
          <div className="flex w-full flex-col gap-4 lg:w-1/2">
            <Image
              src={
                resolvedTheme === "dark"
                  ? "https://services.find-a.app/api/assets/icon?style=white"
                  : "https://services.find-a.app/api/assets/icon"
              }
              alt="finda"
              width={1000}
              height={500}
              className="w-1/2"
            />
            <p>
              finda is an app for everyone that is searching for something new
              to add to their resume. The app is free to use for people that
              search for jobs, apprentices and internships and companies need to
              pay a small fee. To search, the users have answer some questions
              that will influence the apps algorithm so that it can find the
              best jobs possible. The matching works via swiping left and right.
            </p>
            <p>
              The company is management by a team of three including myself. We
              founded the company in the summer holidays of 2025. Before we were
              working a scholar business, a sub-form of a company usually for
              easier purposes inside the school.
            </p>
            <p>
              The tech-part is my work-branch. The{" "}
              <strong>finda Services</strong> and the{" "}
              <strong>finda Resources</strong> are completely coded by me.
            </p>
            <div className="flex flex-row items-center gap-2">
              <Link href={"https://find-a.app"}>
                <Button>
                  <ExternalLink /> Website
                </Button>
              </Link>
              <Link href={"https://instagram.find-a.app"}>
                <Button variant={"outline"}>
                  <InstagramLogoIcon /> Instagram
                </Button>
              </Link>
              <Link href={"https://github.find-a.app"}>
                <Button variant={"outline"}>
                  <GithubLogoIcon /> GitHub
                </Button>
              </Link>
              <Link href={"https://linkedin.find-a.app"}>
                <Button variant={"outline"}>
                  <LinkedinLogoIcon /> LinkedIn
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex w-full flex-col items-center gap-2 lg:w-1/2 lg:items-end">
            {subProjects.map((subProject) => (
              <a
                href={subProject.href}
                key={subProject.name}
                className="group flex w-full flex-col gap-4 border border-dashed p-4 lg:w-3/4"
              >
                <div className="flex flex-col gap-0">
                  <h1 className="decoration-primary group-hover:text-primary text-xl font-bold underline group-hover:no-underline">
                    {subProject.name}
                  </h1>
                  <p className="text-muted-foreground">
                    {subProject.description}
                  </p>
                </div>
                <div className="flex flex-row flex-wrap items-center gap-1">
                  {subProject.skills.map((skill) => (
                    <Badge
                      key={skill.name}
                      className="group-hover:bg-primary"
                      variant={"outline"}
                    >
                      <skill.icon />
                      {skill.name}
                    </Badge>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </div>
        <SidebarTrigger
          className={"absolute top-8 right-8 size-12"}
          variant={"ghost"}
          size={"icon-lg"}
          nativeButton={false}
          render={<ListIcon className="text-primary p-2" />}
        />
      </div>
      <MainSidebar />
      <div className="flex w-full flex-row items-center justify-center">
        <PageFooter />
      </div>
    </div>
  );
}
