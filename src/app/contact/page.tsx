"use client";

import { FontChangingText } from "@/components/font-changing-text";
import { MainSidebar } from "@/components/main-sidebar";
import { PageFooter } from "@/components/outwards/footer";
import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { GithubLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react";
import { ListIcon } from "@phosphor-icons/react/dist/ssr";
import { Mail } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="flex h-full min-h-screen w-screen flex-col items-center gap-4">
      <main className="flex h-screen w-full flex-col items-center justify-center">
        <SidebarTrigger
          className={"absolute top-8 right-8 size-12"}
          variant={"ghost"}
          size={"icon-lg"}
          nativeButton={false}
          render={<ListIcon className="text-primary p-2" />}
        />
        <div className="flex w-3/4 flex-col items-center justify-between gap-12 md:flex-row">
          <div className="flex flex-col gap-2">
            <FontChangingText
              text="Get in touch"
              className="text-primary text-8xl"
            />
            <p className="text-lg">
              You want to get in touch with me? Then you can pick any of my
              contact methods on the right side to hit me up.
            </p>
            <p className="text-muted-foreground">
              Yes, there is no contact form. Just click on the e-mail link if
              you wanna text me :)
            </p>
          </div>
          <div className="flex w-full flex-col gap-2 md:w-auto md:items-end">
            <Link href={"mailto:lanneken09@gmail.com"}>
              <Button size={"lg"} variant={"secondary"}>
                <Mail /> Write an E-Mail
              </Button>
            </Link>
            <Link href={"https://linkedin.com/in/leon-anneken"}>
              <Button variant={"outline"} size={"lg"}>
                <LinkedinLogoIcon /> DM me on LinkedIn
              </Button>
            </Link>
            <Link href={"https://github.com/leontm-dev"}>
              <Button variant={"default"} size={"lg"}>
                <GithubLogoIcon /> GitHub, however you wanna do it
              </Button>
            </Link>
          </div>
        </div>
        <MainSidebar />
      </main>
      <PageFooter />
    </div>
  );
}
