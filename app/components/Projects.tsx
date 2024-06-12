"use client";
import { ProjectCard } from "@components";
import { projectsArray } from "@constants";
import { useState } from "react";

function Projects() {
  const [projectsCount, setProjectsCount] = useState(4);

  const displayedProjects = projectsArray.map(
    (item) =>
      projectsArray.indexOf(item) < projectsCount && (
        <ProjectCard key={item.title} {...item} />
      )
  );

  function handleShowMore() {
    if (projectsCount + 4 < projectsArray.length) {
      setProjectsCount((prev) => prev + 4);
    } else {
      setProjectsCount(projectsArray.length);
    }
  }

  function handleShowLess() {
    if (projectsCount - 4 > 4) {
      setProjectsCount((prev) => prev - 4);
    } else {
      setProjectsCount(4);
    }
  }
  return (
    <section
      className="w-full flex flex-col px-4 sm:px-8 xl:px-20 py-20 md:py-40 bg-navbar-light dark:bg-navbar-dark"
      id="projects"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects</h2>
      <p className="text-xl text-site-text-gray">
        Some of the projects that I have done before.
      </p>

      <div className="flex flex-col md:flex-row flex-wrap justify-between mt-8 gap-8">
        {displayedProjects}
      </div>
      <div className="w-full flex justify-center">
        {projectsCount < projectsArray.length && (
          <button
            onClick={handleShowMore}
            className="bg-site-orange hover:bg-site-orange-hover transition duration-200 mt-12 text-white font-semibold py-2 px-4 rounded-lg mx-auto self-center"
          >
            Show more
          </button>
        )}

        {projectsCount > 4 && (
          <button
            onClick={handleShowLess}
            className="bg-site-orange hover:bg-site-orange-hover transition duration-200 mt-12 text-white font-semibold py-2 px-4 rounded-lg mx-auto self-center"
          >
            Show less
          </button>
        )}
      </div>
    </section>
  );
}

export default Projects;
