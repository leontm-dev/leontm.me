"use client";

import ShapeGrid from "@/components/ShapeGrid";
import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { GithubLogoIcon, ListIcon } from "@phosphor-icons/react";
import { ChevronDown } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";

export function ProjectsPageHero() {
  const { resolvedTheme } = useTheme();
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center">
      <ShapeGrid
        className="absolute"
        speed={0.2}
        squareSize={40}
        direction="diagonal"
        borderColor={resolvedTheme === "dark" ? "#333333" : "#D3D3D3"}
        hoverFillColor={resolvedTheme === "dark" ? "#555555" : "#E5E4E2"}
        shape="square"
        hoverTrailAmount={0}
      />
      <div className="z-10 flex flex-col items-center justify-center gap-0">
        <h1 className="text-primary text-center text-3xl font-extrabold sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
          Explore my projects!
        </h1>
        <p className="text-muted-foreground text-center text-lg">
          Feel free to browse through my work and don&apos;t hesitate to reach
          out if you have any questions!
        </p>
        <div className="mt-2 flex flex-row items-center gap-1">
          <Link href={"/contact"}>
            <Button>Let&apos;s connect!</Button>
          </Link>
          <Link href={"https://github.com/leontm-dev"}>
            <Button size={"icon"} variant="outline">
              <GithubLogoIcon />
            </Button>
          </Link>
        </div>
      </div>
      <Button
        variant={"ghost"}
        size={"icon-lg"}
        className="absolute bottom-8 m-auto"
        onClick={() => window.scrollBy({ behavior: "smooth", top: 100 })}
      >
        <ChevronDown />
      </Button>
      <SidebarTrigger
        className={"absolute top-8 right-8 size-12"}
        variant={"ghost"}
        size={"icon-lg"}
        nativeButton={false}
        render={<ListIcon className="text-primary p-2" />}
      />
    </div>
  );
}
