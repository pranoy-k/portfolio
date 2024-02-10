"use client";

import Link from "next/link";
import ExclamationTriangle from "@/assets/icons/unicons/exclamation-triangle.svg";
import SyncExclamation from "@/assets/icons/unicons/sync-exclamation.svg";
import HomeAlt from "@/assets/icons/unicons/home-alt.svg";
import { Button } from "@/components/ui/button";
import { funFacts } from "@/data/Home/FunFacts";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  console.error(error);
  return (
    <div className="container flex flex-grow flex-col items-center justify-center space-y-4 text-pretty text-center">
      <header className="flex flex-col items-center">
        <ExclamationTriangle className="size-12 " />
        <h1 className="text-4xl font-bold lg:text-5xl">
          Something went wrong! <br /> I&apos;m on it!
        </h1>
      </header>
      <div className="max-w-prose space-y-1">
        <p>But since you stranded here, here is a fun fact for you:</p>
        <p>{funFacts[Math.floor(Math.random() * funFacts.length)]}</p>
      </div>
      <div className="flex gap-3">
        <Button asChild size={"shadow"}>
          <Link href="/">
            <HomeAlt className="size-5" />
            Go Home
          </Link>
        </Button>
        <Button onClick={() => reset()} variant={"secondary"} size={"shadow"}>
          <SyncExclamation className="size-5" />
          Try again!
        </Button>
      </div>
    </div>
  );
}
