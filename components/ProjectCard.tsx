import { ProjectCardProps } from "@types";

function ProjectCard({ title, image, bgClassName, link }: ProjectCardProps) {
  return (
    <a
      href={link}
      target="_blank"
      className="h-fit w-full md:w-[48%] flex flex-col gap-4 md:mb-8"
    >
      <img
        src={image}
        alt={title}
        className={`${bgClassName} rounded-3xl hover:scale-105 transition duration-150`}
      />
      <p className="text-xl md:text-2xl text-site-text-gray font-medium hover:text-blue-text dark:hover:text-white">
        {title}
      </p>
    </a>
  );
}

export default ProjectCard;
