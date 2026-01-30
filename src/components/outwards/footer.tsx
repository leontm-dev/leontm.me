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
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/base-tooltip";
import { Button } from "../ui/button";
import { ToggleGroup, ToggleGroupItem } from "../ui/toggle-group";

// Code

export function PageFooter() {
  const { setTheme, resolvedTheme } = useTheme();
  return (
    <div className="w-3/4 flex flex-col gap-2 items-center">
      <Separator className="w-3/4" orientation="horizontal" />
      <div className="flex flex-row items-center justify-between w-3/4">
        <div className="flex flex-row items-center gap-1">
          <Tooltip>
            <TooltipTrigger
              render={
                <Link href={"https://github.com/leontm-dev"}>
                  <Button
                    className="hover:cursor-pointer group text-white"
                    variant={"ghost"}
                    size={"icon"}
                  >
                    <GithubLogoIcon className="group-hover:text-primary " />
                  </Button>
                </Link>
              }
            ></TooltipTrigger>
            <TooltipContent variant={"default"}>GitHub</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger
              render={
                <Link href={"https://www.linkedin.com/in/leon-anneken/"}>
                  <Button
                    className="hover:cursor-pointer group"
                    variant={"ghost"}
                    size={"icon"}
                  >
                    <LinkedinLogoIcon className="group-hover:text-primary" />
                  </Button>
                </Link>
              }
            ></TooltipTrigger>
            <TooltipContent variant={"default"}>LinkedIn</TooltipContent>
          </Tooltip>
        </div>
        <h1 className="text-muted-foreground text-xs">2025 © Leon Anneken</h1>
        <ToggleGroup
          onValueChange={(value) => setTheme(value)}
          type="single"
          defaultValue={resolvedTheme}
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
  );
}
