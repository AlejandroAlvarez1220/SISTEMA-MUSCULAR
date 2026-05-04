type MuscleCardProps = {
  title: string;
  description: string;
  accent?: string;
};

export function MuscleCard({ title, description, accent = "bg-medical-primary" }: MuscleCardProps) {
  return (
    <article className="medical-card group h-full p-6 hover:-translate-y-1 hover:border-red-400/40">
      <div className={`mb-5 h-1.5 w-14 rounded-full ${accent}`} />
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="mt-3 leading-7 text-slate-300">{description}</p>
    </article>
  );
}
