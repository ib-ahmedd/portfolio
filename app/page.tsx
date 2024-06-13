import { Hero, Projects, Services, Skills } from "./components";

function Home() {
  return (
    <main className="flex flex-col items-center">
      <Hero />
      <Skills />
      <Projects />
      <Services />
    </main>
  );
}

export default Home;
