"use client";
import { ScrollTopBtn } from "@components";
import { Contact, Hero, Projects, Services, Skills } from "./components";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

function Home() {
  const [ref, inView] = useInView({ threshold: 0 });
  return (
    <main className="flex flex-col items-center">
      <Hero viewRef={ref} />
      <Skills />
      <Projects />
      <Services />
      <Contact />
      <ScrollTopBtn inView={inView} />
    </main>
  );
}

export default Home;
