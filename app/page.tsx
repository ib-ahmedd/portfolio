import { Hero, Projects } from "./components";

function Home() {
  return (
    <main className="flex flex-col items-center">
      <Hero />
      <Projects />
    </main>
  );
}

export default Home;
