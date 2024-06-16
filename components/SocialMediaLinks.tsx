import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SocialMediaLinks({ icon, path }) {
  return (
    <a
      href={path}
      target="_blank"
      className="bg-navbar-light dark:bg-navbar-dark w-10 h-10 rounded-full flex justify-center items-center hover:scale-125 transition duration-200"
    >
      <FontAwesomeIcon icon={icon} />
    </a>
  );
}

export default SocialMediaLinks;
