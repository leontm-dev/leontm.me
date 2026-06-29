"use client";
import { FontChangingText } from "@/components/font-changing-text";
import GradientBlinds from "@/components/GradientBlinds";
import { MainSidebar } from "@/components/main-sidebar";
import { PageFooter } from "@/components/outwards/footer";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { ListIcon } from "@phosphor-icons/react/dist/ssr";
import { useTheme } from "next-themes";
import LoginForm from "./form";

export default function AccountPage() {
  const { resolvedTheme } = useTheme();
  return (
    <div className="flex h-full min-h-screen w-screen flex-col items-center gap-4">
      <main className="flex h-screen w-full flex-row items-center justify-center">
        <div className="bg-muted flex h-full w-2/3 flex-col items-center justify-center">
          <div className="flex w-3/4 flex-col gap-4">
            <div className="flex flex-col gap-0">
              <h1 className="text-4xl">Login to your LTM Account</h1>
              <p className="text-muted-foreground">
                LTM Accounts are used to connect different services and devices
                together so that you interact with your other accounts
              </p>
            </div>
            <LoginForm />
          </div>
        </div>
        <div className="flex w-1/3 flex-col items-center justify-center">
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
          <FontChangingText text="LTM Account" className="absolute text-6xl" />
        </div>
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
