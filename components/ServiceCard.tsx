import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ServiceCardProps } from "@types";

function ServiceCard({ icon, title, note }: ServiceCardProps) {
  return (
    <article
      className="w-full md:w-[48%] mb-12 flex items-start gap-4"
      data-aos="fade-up"
    >
      <span className="text-white text-2xl bg-site-orange py-2 px-3 rounded-lg">
        <FontAwesomeIcon icon={icon} />
      </span>
      <div>
        <h4 className="font-3xl font-bold">{title}</h4>
        <p className="text-site-text-gray text-lg">{note}</p>
      </div>
    </article>
  );
}

export default ServiceCard;
