import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export interface NavLinkProps {
  path: string;
  title: string;
}

export interface ProjectCardProps {
  title: string;
  image: string;
  bgClassName: string;
  link: string;
}

export interface SkillCardProps {
  title: string;
  image: string;
}

export interface ServiceCardProps {
  icon: IconDefinition;
  title: string;
  note: string;
}

export interface HeroProps {
  viewRef: (node?: Element | null | undefined) => void;
}

export interface ScrollTopBtnProps {
  inView: boolean;
}
