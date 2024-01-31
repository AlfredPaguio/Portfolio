"use client"
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Facebook, Github, Linkedin, Mail, PhoneIcon, HomeIcon, LanguagesIcon } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Contact',
}

export default function Home() {
  return (
    <div className="flex h-full items-center justify-between px-4 pb-4 md:px-16">
      <div className="flex h-full w-full flex-col items-center justify-center gap-y-4">
      <Card>
        <CardContent className="flex h-full w-full flex-col items-center justify-center gap-8 p-4 lg:p-14">
          <Button
            variant={"link"}
            className="text-primary-foreground hover:text-primary"
            asChild
          >
            <Link href="https://www.facebook.com/FleetingComet/">
              <Facebook className="mr-1 size-8" />
              <h1 className="text-2xl">Facebook</h1>
            </Link>
          </Button>

          <Button
            variant={"link"}
            className="text-primary-foreground hover:text-primary"
            asChild
          >
            <Link href="https://github.com/AlfredPaguio">
              <Github className="mr-1 size-8" />
              <h1 className="text-2xl">Github</h1>
            </Link>
          </Button>

          <Button
            variant={"link"}
            className="text-primary-foreground hover:text-primary"
            asChild
          >
            <Link href="https://www.linkedin.com/in/alfredpaguio">
              <Linkedin className="mr-1 size-8" />
              <h1 className="text-2xl">LinkedIn</h1>
            </Link>
          </Button>
          <Button
            variant={"link"}
            className="text-primary-foreground hover:text-primary"
            asChild
          >
            <Link href="mailto:alfredpaguio36@gmail.com">
              <Mail className="mr-1 size-8" />
              <h1 className="text-2xl">alfredpaguio36@gmail.com</h1>
            </Link>
          </Button>
          <div className="flex">
            <PhoneIcon className="mr-1 size-8" />
            <h1 className="text-2xl">+63 949 820 2989</h1>
          </div>
          <div className="flex">
            <HomeIcon className="mr-1 size-8" />
            <h1 className="text-2xl">#618 Tuazon St., Población, Muntinlupa City</h1>
          </div>
          <div className="flex">
            <LanguagesIcon className="mr-1 size-8" />
            <h1 className="text-2xl">English, Filipino</h1>
          </div>
        </CardContent>
      </Card>
      <h1>There&#39;s no form fully functioning yet. (╥﹏╥)</h1>
      {/* <InputForm /> */}
    </div>
    </div>
  );
}
