import { Hero, Projects, Skills } from "./components";

function Home() {
  return (
    <main className="flex flex-col items-center">
      <Hero />
      <Skills />
      <Projects />
    </main>
  );
}

export default Home;
