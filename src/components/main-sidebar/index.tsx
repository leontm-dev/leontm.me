"use client";

import {
  AddressBookIcon,
  AppWindowIcon,
  ArticleMediumIcon,
  CactusIcon,
  GithubLogoIcon,
  GlobeIcon,
  HouseIcon,
  Icon,
  LegoIcon,
  LinkedinLogoIcon,
  PackageIcon,
  RobotIcon,
  UserCircleIcon,
  XIcon,
} from "@phosphor-icons/react";
import { Button } from "../ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "../ui/sidebar";
import { Route } from "next";
import Link from "next/link";

// Imports

// Project-Imports

// Code

const contents: { icon: Icon; text: string; href: Route }[] = [
  {
    icon: HouseIcon,
    href: "/",
    text: "Home",
  },
  {
    icon: AddressBookIcon,
    href: "/about",
    text: "About me",
  },
  {
    icon: AppWindowIcon,
    href: "/apps",
    text: "Projects, Apps & Softwares",
  },
];
const projects: { icon: Icon; text: string; href: Route }[] = [
  {
    icon: LegoIcon,
    href: "https://spiky.leontm.me",
    text: "Spiky.js",
  },
  {
    icon: RobotIcon,
    href: "https://obyn.leontm.me",
    text: "Obyn Discord Bot",
  },
  {
    icon: PackageIcon,
    href: "https://www.npmjs.com/package/sevdesk-api-wrapper",
    text: "sevdesk API Wrapper",
  },
  {
    icon: GlobeIcon,
    href: "https://find-a.app",
    text: "finda",
  },
];
export function MainSidebar() {
  const { toggleSidebar } = useSidebar();
  return (
    <Sidebar side="right" variant="floating">
      <SidebarHeader>
        <SidebarHeader className="flex flex-row items-center justify-between">
          Check these out
          <Button onClick={toggleSidebar} variant={"ghost"} size={"icon"}>
            <XIcon />
          </Button>
        </SidebarHeader>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Contents</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {contents.map((content, index) => (
                <SidebarMenuItem key={index}>
                  <Link href={content.href}>
                    <SidebarMenuButton className="cursor-pointer hover:underline decoration-primary">
                      <content.icon className="text-primary" /> {content.text}
                    </SidebarMenuButton>
                  </Link>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Projects</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {projects.map((project, index) => (
                <SidebarMenuItem key={index}>
                  <Link href={project.href}>
                    <SidebarMenuButton className="cursor-pointer hover:underline decoration-primary">
                      <project.icon className="text-primary" /> {project.text}
                    </SidebarMenuButton>
                  </Link>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Socials</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <Link href={"https://github.com/leontm-dev"}>
                  <SidebarMenuButton className="cursor-pointer hover:underline decoration-primary">
                    <GithubLogoIcon className="text-primary" /> Github
                  </SidebarMenuButton>
                </Link>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <Link href={"https://www.linkedin.com/in/leon-anneken/"}>
                  <SidebarMenuButton className="cursor-pointer hover:underline decoration-primary">
                    <LinkedinLogoIcon className="text-primary" /> LinkedIn
                  </SidebarMenuButton>
                </Link>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <Link href={"/account"}>
          <Button variant={"outline"} className={"w-full"}>
            <UserCircleIcon className="text-primary" />
            LTM Account
          </Button>
        </Link>
      </SidebarFooter>
    </Sidebar>
  );
}
