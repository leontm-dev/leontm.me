import { PageFooter } from "@/components/outwards/footer";
import { FontChangingText } from "@/components/font-changing-text";
import { MainSidebar } from "@/components/main-sidebar";
import { SidebarTrigger } from "@/components/ui/sidebar";
import GradientBlinds from "@/components/GradientBlinds";
import { ListIcon } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import { ProfileSkill } from "./frontPage/skill";
import { SiJavascript, SiTypescript } from "react-icons/si";

export default function Page() {
  return (
    <div className="w-screen relative flex flex-col gap-4 justify-center">
      <div className="h-screen w-full flex flex-col items-center justify-center">
        <FontChangingText text="LeonTM" className="text-[200px] absolute" />
        <GradientBlinds
          className="h-screen"
          gradientColors={["#e7000b", "#fe707c"]}
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

      <div className="w-full flex flex-col items-center justify-center">
        <div className="flex flex-row items-center m-2 justify-evenly w-5/6">
          <Image
            src={"/profilePicture.png"}
            className="aspect-square"
            height={256}
            width={256}
            alt=""
          />
          <div className="flex flex-col items-start justify-center">
            <h1 className="font-dancing-script-variable text-2xl">Tach!</h1>
            <p>
              I am Leon, a German student that loves programming. <br /> Some of
              my skills:
            </p>
            <div className="flex flex-row items-center gap-1 flex-wrap">
              <ProfileSkill
                icon={<SiTypescript className="text-[#3178C6]" />}
                text="TypeScript"
              />
            </div>
          </div>
        </div>
      </div>
      <PageFooter />
    </div>
  );
}
