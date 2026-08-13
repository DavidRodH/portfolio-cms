"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Card from "../common/Card";
import { Testimonial } from "@/types/testimonial";
import { getMediaUrl } from "@/lib/media";

interface Props {
  testimonial: Testimonial;
}

export default function TestimonialCard({
  testimonial,
}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.4,
      }}
    >
      <Card className="relative overflow-hidden">

        {/* Fotografía */}

        {testimonial.photo && (
          <Image
            src={getMediaUrl(
              testimonial.photo.url
            )}
            alt={testimonial.clientName}
            width={80}
            height={80}
            className="h-20 w-20 rounded-full object-cover"
            unoptimized
          />
        )}

        {/* Estrellas */}

        <div className="mt-5 flex gap-1">
          {Array.from({
            length: testimonial.rating,
          }).map((_, index) => (
            <span
              key={index}
              aria-hidden="true"
              className="text-yellow-400"
            >
              ★
            </span>
          ))}
        </div>

        {/* Testimonio */}

        <p className="mt-5 leading-7 text-slate-400">
          {testimonial.message}
        </p>

        {/* Información */}

        <div className="mt-6">

          <h3 className="font-bold text-white">
            {testimonial.clientName}
          </h3>

          <p className="text-sm text-slate-400">
            {testimonial.position}
          </p>

          <p className="text-sm text-blue-500">
            {testimonial.company}
          </p>

        </div>

      </Card>
    </motion.div>
  );
}