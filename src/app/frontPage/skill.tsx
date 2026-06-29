"use client";

// Components

import { Badge } from "@/components/ui/badge";
import React from "react";

// Code

type Props = {
  icon: React.JSX.Element;
  text: string;
};
export function ProfileSkill(props: Props) {
  return (
    <Badge variant={"outline"}>
      {props.icon}
      <p>{props.text}</p>
    </Badge>
  );
}
