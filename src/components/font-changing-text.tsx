"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  Roboto,
  Abril_Fatface,
  Dancing_Script,
  Bangers,
  Bungee,
  Playfair_Display,
  Rubik_Storm,
  Bebas_Neue,
  Lobster_Two,
} from "next/font/google";

import { cn } from "@/lib/utils";

type Props = {
  text: string;
  className?: HTMLParagraphElement["className"];
};

const roboto = Roboto({ weight: "400", subsets: ["latin"] });
const abrilFatface = Abril_Fatface({ weight: "400", subsets: ["latin"] });
const dancingScript = Dancing_Script({ weight: "400", subsets: ["latin"] });
const bangers = Bangers({ weight: "400", subsets: ["latin"] });
const bungee = Bungee({ weight: "400", subsets: ["latin"] });
const playfairDisplay = Playfair_Display({ weight: "400", subsets: ["latin"] });
const rubikStorm = Rubik_Storm({ weight: "400", subsets: ["latin"] });
const bebasNeue = Bebas_Neue({ weight: "400", subsets: ["latin"] });
const lobsterTwo = Lobster_Two({ weight: "400", subsets: ["latin"] });

const fonts = [
  { name: "Roboto", font: roboto },
  { name: "Abril Fatface", font: abrilFatface },
  { name: "Dancing Script", font: dancingScript },
  { name: "Bangers", font: bangers },
  { name: "Bungee", font: bungee },
  { name: "Playfair Display", font: playfairDisplay },
  { name: "Rubik Storm", font: rubikStorm },
  { name: "Bebas Neue", font: bebasNeue },
  { name: "Lobster Two", font: lobsterTwo },
];

export function FontChangingText({ text, className }: Props) {
  const [currentFontIndex, setCurrentFontIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFontIndex((prev) => (prev + 1) % fonts.length);
    }, 1500); // Wechsel alle 1.5 Sekunden

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.p
        key={currentFontIndex}
        className={cn(fonts[currentFontIndex].font.className, className)}
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -5 }}
        transition={{ duration: 0.1 }}
      >
        {text}
      </motion.p>
    </AnimatePresence>
  );
}
