import { socialMediaLinksArray } from "@constants";
import SocialMediaLinks from "./SocialMediaLinks";

function Footer() {
  return (
    <section className="w-[90%] mx-auto border-t border-navbar-light-b dark:border-border-grey text-site-text-gray py-12 flex flex-col-reverse md:flex-row gap-4 md:gap-0 sm:items-center justify-between">
      <p className="text-sm">
        © {new Date().getFullYear()} developed by Ibrahim Ahmed. All rights
        reserved
      </p>

      <div className="flex gap-3 text-xl">
        {socialMediaLinksArray.map((item) => (
          <SocialMediaLinks key={item.path} {...item} />
        ))}
      </div>
    </section>
  );
}

export default Footer;
