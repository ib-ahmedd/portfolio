import { NavLinkProps } from "@types";
import Link from "next/link";

function NavLink({ path, title }: NavLinkProps) {
  return (
    <Link href={path} className="font-semibold text-lg">
      {title}
    </Link>
  );
}

export default NavLink;
