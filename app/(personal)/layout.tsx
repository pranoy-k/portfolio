import Footer from "@/components/global/Footer/Footer";
import Navbar from "@/components/global/Header/Navbar";
import { Analytics } from "@vercel/analytics/react";
import { Suspense } from "react";

export default function IndexRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <Suspense>{children}</Suspense>
      <Footer />
      <Analytics />
    </>
  );
}
