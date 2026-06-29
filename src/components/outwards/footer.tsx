"use client";

// Imports

import { useTheme } from "next-themes";
import Link from "next/link";
import {
  GithubLogoIcon,
  LinkedinLogoIcon,
  MonitorIcon,
  MoonIcon,
  SunIcon,
} from "@phosphor-icons/react";

// Project-Imports

// Components

import { Separator } from "../ui/separator";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { Button } from "../ui/button";
import { ToggleGroup, ToggleGroupItem } from "../ui/toggle-group";

// Code

export function PageFooter() {
  const { setTheme, resolvedTheme } = useTheme();
  return (
    <div className="mb-2 flex w-full flex-col items-center gap-2 md:w-3/4">
      <Separator className="w-3/4" orientation="horizontal" />
      <div className="flex w-3/4 flex-row items-center justify-evenly">
        <div className="flex w-1/3 flex-row items-center justify-start">
          <Tooltip>
            <TooltipTrigger
              render={
                <Link href={"https://github.com/leontm-dev"}>
                  <Button
                    className="group hover:cursor-pointer"
                    variant={"ghost"}
                    size={"icon"}
                  >
                    <GithubLogoIcon className="group-hover:text-primary" />
                  </Button>
                </Link>
              }
            ></TooltipTrigger>
            <TooltipContent>GitHub</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger
              render={
                <Link href={"https://www.linkedin.com/in/leon-anneken/"}>
                  <Button
                    className="group hover:cursor-pointer"
                    variant={"ghost"}
                    size={"icon"}
                  >
                    <LinkedinLogoIcon className="group-hover:text-primary" />
                  </Button>
                </Link>
              }
            ></TooltipTrigger>
            <TooltipContent>LinkedIn</TooltipContent>
          </Tooltip>
        </div>
        <div className="flex w-1/3 flex-row items-center justify-center">
          <h3 className="text-muted-foreground text-center text-xs">
            2025-2026 © LeonTM
          </h3>
        </div>
        <div className="flex w-1/3 flex-row items-center justify-end">
          <ToggleGroup
            onValueChange={(value) => setTheme(value[0])}
            multiple={false}
            defaultValue={[resolvedTheme || "system"]}
          >
            <ToggleGroupItem value="light">
              <SunIcon />
            </ToggleGroupItem>
            <ToggleGroupItem value="dark">
              <MoonIcon />
            </ToggleGroupItem>
            <ToggleGroupItem value="system">
              <MonitorIcon />
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
      </div>
    </div>
  );
}
