import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Intro } from "@/sections/intro";
import { MuscleTypes } from "@/sections/muscle-types";
import { Functions } from "@/sections/functions";
import { Anatomy } from "@/sections/anatomy";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Intro />
        <MuscleTypes />
        <Functions />
        <Anatomy />
      </main>
    </>
  );
}
