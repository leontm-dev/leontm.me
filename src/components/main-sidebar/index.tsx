"use client";

import {
  AddressBookIcon,
  AppWindowIcon,
  GithubLogoIcon,
  HouseIcon,
  Icon,
  LinkedinLogoIcon,
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
import { projects } from "@/types/projects.const";
import { SidebarPreviewItem } from "./sidebar-preview-item";
import { Send } from "lucide-react";

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
    href: "/projects",
    text: "Projects, Apps & Softwares",
  },
  {
    icon: Send,
    href: "/contact",
    text: "Contact me",
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
                    <SidebarMenuButton className="decoration-primary cursor-pointer hover:underline">
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
              {projects.map((project) => (
                <SidebarPreviewItem {...project} key={project.href} />
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
                  <SidebarMenuButton className="decoration-primary cursor-pointer hover:underline">
                    <GithubLogoIcon className="text-primary" /> Github
                  </SidebarMenuButton>
                </Link>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <Link href={"https://www.linkedin.com/in/leon-anneken/"}>
                  <SidebarMenuButton className="decoration-primary cursor-pointer hover:underline">
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
