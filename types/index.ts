import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { Dispatch, SetStateAction } from "react";

export interface NavLinkProps {
  path: string;
  title: string;
  setNavOpen?: Dispatch<SetStateAction<boolean>>;
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

export interface LabeledInputProps {
  label: string;
  type: string;
  inputName: string;
  max: number;
  inputs?: Inputs;
  handleChange?(e: any): void;
  formSubmitted?: boolean;
}

export interface Inputs {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export interface SocialMediaLinksProps {
  icon: IconDefinition;
  path: string;
}
