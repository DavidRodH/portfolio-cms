import Link from "next/link";
import Image from "next/image";
import Card from "../common/Card";
import { Service } from "@/types/service";
import { getMediaUrl } from "@/lib/media";

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Link href={`/services/${service.slug}`} className="block">
      <Card>
          {service.image && (
            <Image
              src={getMediaUrl(service.image.url)}
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
    </Link>
  );
}