interface CardProps {
  children: React.ReactNode;
}

export default function Card({
  children,
}: CardProps) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8 transition hover:border-blue-500">
      {children}
    </div>
  );
}