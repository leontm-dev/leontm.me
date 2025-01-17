"use client"

// Imports

import * as React from "react";
import { FolderCode, Home, Info, LogIn, Mail, Menu, Paperclip, Store } from "lucide-react";

// Components

import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";

// Code

export function Navbar() {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant={"ghost"}>
                    <Menu />
                </Button>
            </SheetTrigger>
            <SheetContent className="flex flex-col justify-between">
                <SheetHeader>
                    <SheetTitle>Oh, there is more?</SheetTitle>
                    <SheetDescription>Yes, check it out down below</SheetDescription>
                </SheetHeader>
                <div className="flex flex-col items-center justify-center gap-4 m-4">
                    <Button variant={"outline"} className="w-full">
                        <Home />
                        Home
                        <span className="text-sm text-muted-foreground">- Go back to the homepage</span>
                    </Button>
                    <Button variant={"outline"} className="w-full">
                        <Info />
                        About
                        <span className="text-sm text-muted-foreground">- Get to know me</span>
                    </Button>
                    <Button variant={"outline"} className="w-full">
                        <FolderCode />
                        Projects
                        <span className="text-sm text-muted-foreground">- All my work is here</span>
                    </Button>
                    <Button variant={"outline"} className="w-full">
                        <Store />
                        Apps
                        <span className="text-sm text-muted-foreground">- published projects are here</span>
                    </Button>
                    <Button variant={"outline"} className="w-full">
                        <Paperclip />
                        Blog
                        <span className="text-sm text-muted-foreground">- Read my thoughts</span>
                    </Button>
                    <Button variant={"outline"} className="w-full">
                        <Mail />
                        Contact
                        <span className="text-sm text-muted-foreground">- Reach out to me</span>
                    </Button>
                </div>
                <SheetFooter>
                    <Button variant={"secondary"} onClick={() => window.location.href = "/account"} className="motion-opacity-in-0 motion-translate-y-in-100 motion-blur-in-md">
                        <LogIn />
                        Check out LTM Accounts
                    </Button>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    )
}