import Image from "next/image";
import Card from "../common/Card";
import { Service } from "@/types/service";

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Card>
      {service.image && (
        <Image
          src={`http://localhost:1337${service.image.url}`}
          alt={service.title}
          width={400}
          height={250}
          className="rounded-xl"
        />
      )}

      <h3 className="mt-4 text-2xl font-bold text-white">
        {service.title}
      </h3>

      <p className="mt-4 text-slate-400">
        {service.shortDescription}
      </p>
    </Card>
  );
}