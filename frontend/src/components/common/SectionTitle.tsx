interface SectionTitleProps {
  title: string;
  subtitle: string;
}

export default function SectionTitle({
  title,
  subtitle,
}: SectionTitleProps) {
  return (
    <div className="mb-16 text-center">
      <h2 className="text-4xl font-bold text-white">
        {title}
      </h2>

      <p className="mt-4 text-slate-400">
        {subtitle}
      </p>
    </div>
  );
}