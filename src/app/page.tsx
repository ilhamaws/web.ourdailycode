import Hero from "@/components/Hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Daily Code: Your Software & IT Solution",
  description: "Our Daily Code adalah penyedia jasa pembuatan Sistem yang handal dan berpengalaman",
  // other metadata
};

export default function Home() {
  return (
    <>
      <Hero />
    </>
  );
}
