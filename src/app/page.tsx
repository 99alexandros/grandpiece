import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import Intro from "@/components/home/Intro";
import FeaturedDishes from "@/components/home/FeaturedDishes";
import HoursLocation from "@/components/home/HoursLocation";

export const metadata: Metadata = {
  title: { absolute: "Grand Piece Restaurant – Restaurant italian elegant în Timișoara" },
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <FeaturedDishes />
      <HoursLocation />
    </>
  );
}
