"use client";

import PatternBackground from "@/components/pattern-background";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Project } from "@/types/projects.const";
import Image from "next/image";
import React from "react";
import mql from "@microlink/mql";

type Props = {
  project: Project;
};
export function ProjectShowcase(props: Props) {
  const [loading, setLoading] = React.useState<boolean>(false);
  const [image, setImage] = React.useState<string | null>(null);

  React.useEffect(() => {
    setLoading(true);
    mql(props.project.href.toString(), {
      adblock: true,
      animations: false,
      waitUntil: "networkidle2",
      screenshot: {
        type: "jpeg",
      },
    })
      .then((res) => {
        setLoading(false);
        if (res.status === "success" && res.data.screenshot) {
          setImage(res.data.screenshot.url);
        }
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  }, [props.project.href]);
  return (
    <a
      href={props.project.href}
      target="_blank"
      className="bg-muted flex aspect-video w-full items-center justify-center"
    >
      <div
        className={cn(
          "group relative flex h-full w-full items-center justify-center overflow-hidden",
          "transition-all duration-600 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] perspective-[1000px]",
        )}
      >
        {props.project.imgUrl ? (
          <Image
            src={props.project.imgUrl}
            alt={`Cover for ${props.project.title}`}
            className="aspect-video h-auto w-[90%] object-contain"
            height={1000}
            width={700}
          />
        ) : loading ? (
          <PatternBackground
            text={props.project.title}
            containerClassName="text-primary text-xs"
            rowsClassName="gap-5 text-sm"
            gridClassName="gap-1"
            colsClassName="text-lg"
          />
        ) : image ? (
          <Image
            src={image}
            className="aspect-video h-auto w-[95%] object-contain"
            width={600}
            height={500}
            alt=""
          />
        ) : (
          <PatternBackground
            text={props.project.title}
            containerClassName="text-primary text-xs"
            rowsClassName="gap-5 text-sm"
            gridClassName="gap-1"
            colsClassName="text-lg"
          />
        )}
        <div className="bg-muted absolute top-0 left-0 box-border h-full w-full origin-bottom -rotate-x-90 p-4 transition-all duration-600 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] group-hover:rotate-x-0">
          <div className="flex h-full flex-col justify-between gap-2 2xl:gap-4">
            <div className="flex flex-col gap-0">
              <h1 className="decoration-primary m-0 text-2xl font-bold underline">
                {props.project.title}
              </h1>
              <p className="line-clamp-3 text-sm lg:line-clamp-none">
                {props.project.description}
              </p>
              <p className="text-xs">
                <span>My role: </span>
                <span className="decoration-primary underline">
                  {props.project.role}
                </span>
              </p>
            </div>

            <div className="flex flex-row flex-wrap items-center gap-1">
              {props.project.skills?.map((skill) => (
                <Badge key={skill.name} variant={"outline"}>
                  <skill.icon />
                  {skill.name}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}
