"use client";
import { ScrollTopBtn } from "@components";
import { Hero, Projects, Services, Skills } from "./components";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

function Home() {
  const [ref, inView] = useInView({ threshold: 0 });
  useEffect(() => {
    console.log(inView);
  }, [inView]);
  return (
    <main className="flex flex-col items-center">
      <Hero viewRef={ref} />
      <Skills />
      <Projects />
      <Services />
      <ScrollTopBtn inView={inView} />
    </main>
  );
}

export default Home;
