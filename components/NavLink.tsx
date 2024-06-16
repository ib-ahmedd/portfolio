import { NavLinkProps } from "@types";

function NavLink({ path, title, setNavOpen }: NavLinkProps) {
  return (
    <a
      href={path}
      className="font-semibold text-lg"
      onClick={() => {
        setNavOpen && setNavOpen(false);
      }}
    >
      {title}
    </a>
  );
}

export default NavLink;
