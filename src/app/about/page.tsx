"use client";
import { FontChangingText } from "@/components/font-changing-text";
import GradientBlinds from "@/components/GradientBlinds";
import { MainSidebar } from "@/components/main-sidebar";
import { PageFooter } from "@/components/outwards/footer";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { ListIcon } from "@phosphor-icons/react/dist/ssr";
import { useTheme } from "next-themes";
import Image from "next/image";

export default function AboutPage() {
  const { resolvedTheme } = useTheme();
  return (
    <div className="flex h-full min-h-screen w-full max-w-screen flex-col items-center gap-4">
      <main className="flex h-screen w-full flex-col items-center justify-center">
        <div className="absolute z-200 flex w-1/2 flex-row items-center justify-between gap-8">
          <div className="flex flex-col gap-4">
            <FontChangingText text="About me" className="text-5xl" />
            <div className="flex flex-col gap-1">
              <h2>In short, Leon, 19, German.</h2>
              <p>
                I am set to study by the end of this year. My interests lie in
                programming and gaming. I particularly like to build small
                projects that have a dedicated purpose, ideally helping to
                automate some small process or task. Some might call it
                over-engineering, I&apos;d rather call it creativity.
              </p>
            </div>
          </div>
          <Image
            src={"/profilePicture.png"}
            className="aspect-square"
            height={256}
            width={256}
            alt=""
          />
        </div>
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
      </main>
      <MainSidebar />
      <PageFooter />
    </div>
  );
}
