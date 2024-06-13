import { ServiceCard } from "@components";
import { servicesArray } from "@constants";

function Services() {
  return (
    <section className="bg-navbar-light py-12 md:py-32 dark:bg-navbar-dark w-full">
      <div className="flex flex-col items-center gap-4 w-full sm:w-4/5 md:w-3/5 mx-auto text-center px-8">
        <h2 className="text-site-orange font-semibold">My services</h2>
        <h3 className="text-4xl font-bold">
          Elevate Your Online Presence with me
        </h3>
        <p className="text-xl text-site-text-gray text-center">
          Crafting User-Centric Websites and Applications for Seamless Digital
          <br />
          Experiences
        </p>
      </div>

      <div className="flex flex-col md:flex-row flex-wrap justify-between px-8 w-full sm:w-4/5 md:w-full lg:w-11/12 xl:w-3/5 mx-auto mt-20">
        {servicesArray.map((item) => (
          <ServiceCard key={item.title} {...item} />
        ))}
      </div>
    </section>
  );
}

export default Services;
