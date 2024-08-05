import {
  faGithub,
  faInstagram,
  faLinkedin,
  faSearchengin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faChalkboardUser,
  faCode,
  faFileCircleCheck,
  faGears,
  faPalette,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import {
  LabeledInputProps,
  ProjectCardProps,
  ServiceCardProps,
  SkillCardProps,
  SocialMediaLinksProps,
} from "@types";

export const projectsArray: ProjectCardProps[] = [
  {
    title: "Print",
    image: "/images/portfolio/print.png",
    bgClassName: "print-bg",
    link: "http://print-azure.vercel.app",
  },
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

export const navLinksArray = [
  { path: "#home", title: "Home" },
  { path: "#skills", title: "Skills" },
  { path: "#projects", title: "Projects" },
  { path: "#services", title: "Services" },
];

export const skillsArray: SkillCardProps[] = [
  { title: "HTML", image: "/images/skills/html.png" },
  { title: "CSS", image: "/images/skills/css.png" },
  { title: "Javascript", image: "/images/skills/javascript.png" },
  { title: "Typescript", image: "/images/skills/typescript.png" },
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

export const inputsArray: LabeledInputProps[] = [
  { label: "Full name", inputName: "name", type: "text", max: 30 },
  { label: "Email address", inputName: "email", type: "email", max: 30 },
  { label: "Phone number", inputName: "phone", type: "tel", max: 11 },
  { label: "Subject", inputName: "subject", type: "text", max: 30 },
];

export const socialMediaLinksArray: SocialMediaLinksProps[] = [
  { icon: faGithub, path: "https://github.com/ib-ahmedd" },
  { icon: faXTwitter, path: "https://twitter.com/_ib_ahmed_" },
  { icon: faInstagram, path: "https://www.instagram.com/_ib_ahmed/" },
  {
    icon: faLinkedin,
    path: "https://www.linkedin.com/in/ahmed-ibrahim-923246315/",
  },
];
