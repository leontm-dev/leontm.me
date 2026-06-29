"use client";
import { PageFooter } from "@/components/outwards/footer";
import { FontChangingText } from "@/components/font-changing-text";
import { MainSidebar } from "@/components/main-sidebar";
import { SidebarTrigger } from "@/components/ui/sidebar";
import GradientBlinds from "@/components/GradientBlinds";
import { ListIcon } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import { ProfileSkill } from "./frontPage/skill";
import {
  SiExpress,
  SiMongodb,
  SiNestjs,
  SiNextdotjs,
  SiReact,
  SiTypescript,
} from "react-icons/si";
import { useTheme } from "next-themes";

export default function Page() {
  const { resolvedTheme } = useTheme();
  return (
    <div className="relative flex w-screen flex-col items-center justify-center gap-4">
      <div className="flex h-screen w-full flex-col items-center justify-center">
        <FontChangingText text="LeonTM" className="absolute text-[200px]" />
        <GradientBlinds
          className="h-screen"
          gradientColors={
            resolvedTheme === "dark" ? ["#e7000b", "#fe707c"] : ["#e7000b"]
          }
          angle={30}
          noise={0.3}
          blindCount={20}
          blindMinWidth={50}
          spotlightRadius={0.5}
          spotlightSoftness={1}
          spotlightOpacity={1}
          mouseDampening={0.15}
          distortAmount={0}
          shineDirection="left"
          mixBlendMode="lighten"
        />
        <SidebarTrigger
          className={"absolute top-8 right-8 size-12"}
          variant={"ghost"}
          size={"icon-lg"}
          nativeButton={false}
          render={<ListIcon className="text-primary p-2" />}
        />
      </div>
      <MainSidebar />
      <div className="flex w-full flex-col items-center justify-center">
        <div className="m-2 flex w-5/6 flex-row items-center justify-evenly">
          <Image
            src={"/profilePicture.png"}
            className="aspect-square"
            height={256}
            width={256}
            alt=""
          />
          <div className="flex flex-col items-start justify-center gap-2">
            <h2 className="font-dancing-script-variable text-3xl">Tach!</h2>
            <p>
              I am Leon, a German student that loves programming and automating
              repetitive tasks in my daily life.
            </p>
            <div className="flex flex-col gap-1">
              <p>Some of my skills: </p>
              <div className="flex flex-row flex-wrap items-center gap-1">
                <ProfileSkill
                  icon={<SiTypescript className="text-[#3178C6]" />}
                  text="TypeScript"
                />
                <ProfileSkill
                  icon={<SiNestjs className="text-[#EA2845]" />}
                  text="NestJS"
                />
                <ProfileSkill
                  icon={<SiMongodb className="text-[#00ED64]" />}
                  text="MongoDB"
                />
                <ProfileSkill
                  icon={
                    <SiNextdotjs className="text-[#171717] dark:text-white" />
                  }
                  text="Next.js"
                />
                <ProfileSkill icon={<SiExpress />} text="Express" />
                <ProfileSkill
                  icon={<SiReact className="text-[#58C4DC]" />}
                  text="React"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <PageFooter />
    </div>
  );
}
