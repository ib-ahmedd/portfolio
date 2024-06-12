import { SkillCardProps } from "@types";

function SkillCard({ title, image }: SkillCardProps) {
  return (
    <article className="flex items-center justify-between hover:cursor-pointer hover:scale-110 transition duration-200 mt-8 px-4 lg:px-8 py-4 h-20 sm:h-24 lg:h-28 xl:h-32 w-[48%] sm:w-[32%] lg:w-[23%] bg-gradient-to-l from-[#c6c9c8]  dark:from-[#1f1f1f] to-navbar-light hover:to-[#c6c9c8] rounded-2xl dark:to-navbar-dark hover:dark:to-[#1f1f1f] shadow-md hover:shadow-xl">
      <div className="h-full">
        <img src={image} alt={title} className="w-full h-full" />
      </div>
      <p className="font-bold text-sm sm:text-base xl:text-xl text-site-text-gray shrink">
        {title}
      </p>
    </article>
  );
}

export default SkillCard;
