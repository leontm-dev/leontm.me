"use client";

import { Route } from "next";
import { IconType } from "react-icons/lib";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../ui/hover-card";
import Link from "next/link";
import { SidebarMenuButton } from "../ui/sidebar";
import React from "react";
import { Skeleton } from "../ui/skeleton";
import Image from "next/image";
import mql from "@microlink/mql";

type Props = {
  icon: IconType;
  title: string;
  description: string;
  href: Route;
  shortDescription: string;
};
export function SidebarPreviewItem(props: Props) {
  const [loading, setLoading] = React.useState<boolean>(true);
  const [image, setImage] = React.useState<string | null>(null);

  React.useEffect(() => {
    setLoading(true);
    mql(props.href.toString(), {
      adblock: true,
      animations: false,
      waitUntil: "networkidle0",
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
  }, [props.href]);
  return (
    <HoverCard>
      <HoverCardContent side="left">
        <div className="flex w-full flex-col gap-2">
          {loading || !image ? (
            <Skeleton className="aspect-video w-full" />
          ) : (
            <Image
              src={image}
              width={200}
              height={200}
              alt=""
              className="aspect-video h-auto w-full"
            />
          )}
        </div>
      </HoverCardContent>
      <HoverCardTrigger
        render={
          <Link href={props.href}>
            <SidebarMenuButton className="decoration-primary cursor-pointer hover:underline">
              <props.icon className="text-primary" /> {props.title}
            </SidebarMenuButton>
          </Link>
        }
      />
    </HoverCard>
  );
}
