import { SkillCard } from "@components";
import { skillsArray } from "@constants";

function Skills() {
  return (
    <section
      id="skills"
      className="w-full flex flex-col px-4 sm:px-8 xl:px-20 py-20 md:py-40 bg-navbar-light dark:bg-navbar-dark"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills</h2>
      <p className="text-xl text-site-text-gray">What I can do.</p>
      <div className="flex flex-wrap gap-[2%] mt-4">
        {skillsArray.map((item) => (
          <SkillCard key={item.title} {...item} />
        ))}
      </div>
    </section>
  );
}

export default Skills;
