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
    <div className="h-10 flex flex-row items-center gap-2 p-2 rounded-sm shadow-sm border-dashed border">
      {props.icon}
      <p>{props.text}</p>
    </div>
  );
}
