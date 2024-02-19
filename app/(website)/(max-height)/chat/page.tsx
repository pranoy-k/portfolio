import Chat from "@/components/chat/Chat";
import type { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Personal AI Chat",
  description:
    "Have a chat with my digital self, which is well versed in many aspects of my life.",
};

export default function Page() {
  return (
    <div className="container mx-auto mb-4 mt-4 flex flex-1 flex-col overflow-hidden max-sm:pr-0 sm:mt-8">
      <h1 className="mb-6 text-5xl font-bold sm:mt-2 sm:text-center">
        Let&apos;s chat!
      </h1>
      {/* useSearchParams() causes client-side rendering up to the closest Suspense boundary during static rendering. */}
      <Suspense fallback={null}>
        <Chat />
      </Suspense>
    </div>
  );
}
