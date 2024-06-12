import { NavLinkProps } from "@types";

function NavLink({ path, title }: NavLinkProps) {
  return (
    <a href={path} className="font-semibold text-lg">
      {title}
    </a>
  );
}

export default NavLink;
