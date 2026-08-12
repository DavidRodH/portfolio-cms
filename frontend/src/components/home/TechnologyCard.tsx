"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Card from "../common/Card";
import { Technology } from "@/types/technology";
import { getMediaUrl } from "@/lib/media";

interface Props {
  technology: Technology;
}

export default function TechnologyCard({
  technology,
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
				duration: 0.3,
			}}
			>
				<Card>

					<div className="flex items-center gap-4">

						{technology.logo && (
							<Image
								src={getMediaUrl(
									technology.logo.url
								)}
								alt={technology.name}
								width={48}
								height={48}
								className="h-12 w-12 object-contain"
								unoptimized
							/>
						)}

						<div>

							<h3 className="font-semibold text-white">
								{technology.name}
							</h3>

							<p className="text-sm text-slate-400">
								{technology.category}
							</p>

						</div>

					</div>

				</Card>
		</motion.div>
  );
}