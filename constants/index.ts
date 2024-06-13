import { faSearchengin } from "@fortawesome/free-brands-svg-icons";
import {
  faChalkboardUser,
  faCode,
  faFileCircleCheck,
  faGears,
  faPalette,
} from "@fortawesome/free-solid-svg-icons";
import { ProjectCardProps, ServiceCardProps, SkillCardProps } from "@types";

export const projectsArray: ProjectCardProps[] = [
  {
    title: "Plashoes",
    image: "/images/portfolio/plashoes.png",
    bgClassName: "plashoes-bg",
    link: "http://plashoes-demo.vercel.app",
  },
  {
    title: "Urban Nest",
    image: "/images/portfolio/urban-nest.png",
    bgClassName: "urban-nest-bg",
    link: "http://urban-nest-lime.vercel.app",
  },
  {
    title: "Roadrunner",
    image: "/images/portfolio/roadrunner.png",
    bgClassName: "roadrunner-bg",
    link: "http://ib-ahmedd.github.io/Roadrunner",
  },
  {
    title: "Travel Tourism",
    image: "/images/portfolio/travel-tourism.png",
    bgClassName: "travel-tourism-bg",
    link: "http://travel-tourism-iota.vercel.app",
  },
  {
    title: "Coffee Shop",
    image: "/images/portfolio/coffee-shop.png",
    bgClassName: "coffee-shop-bg",
    link: "http://coffee-store-zeta.vercel.app",
  },
  {
    title: "Promtopia",
    image: "/images/portfolio/promtopia.png",
    bgClassName: "promtopia-bg",
    link: "http://promtopia-omega.vercel.app",
  },
];

export const skillsArray: SkillCardProps[] = [
  { title: "HTML", image: "/images/skills/html.png" },
  { title: "CSS", image: "/images/skills/css.png" },
  { title: "Javascript", image: "/images/skills/javascript.png" },
  { title: "Jquery", image: "/images/skills/jquery.png" },
  { title: "NodeJS", image: "/images/skills/nodejs.png" },
  { title: "ReactJS", image: "/images/skills/react.png" },
  { title: "NextJS", image: "/images/skills/nextjs.png" },
  { title: "Bootstrap", image: "/images/skills/bootstrap.png" },
  { title: "Tailwind", image: "/images/skills/tailwind.png" },
  { title: "PostgresSQL", image: "/images/skills/postgres.png" },
  { title: "MongoDB", image: "/images/skills/mongodb.png" },
  { title: "Dfinity", image: "/images/skills/dfinity.png" },
  { title: "Github", image: "/images/skills/github.png" },
];

export const servicesArray: ServiceCardProps[] = [
  {
    icon: faPalette,
    title: "Design",
    note: "Crispy, responsive and pixel perfect web applications for better first impression to users.",
  },
  {
    icon: faCode,
    title: "Development",
    note: "Develop performant, efficient and functional wesbites, and populate site content.",
  },
  {
    icon: faGears,
    title: "Maintenance",
    note: "Ensure your site is working at full capacity and monitoring it's overall health and performance.",
  },
  {
    icon: faFileCircleCheck,
    title: "Documentation",
    note: "Easily accessible information on website and answers to important question pertaining website.",
  },
  {
    icon: faSearchengin,
    title: "SEO",
    note: "Getting traffic from search engines and improve your website's position search result pages.",
  },
  {
    icon: faChalkboardUser,
    title: "Mentoring",
    note: "Supporting, influencing and guiding young people interested in starting tech careers.",
  },
];
