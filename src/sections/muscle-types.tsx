import { MuscleCard } from "@/components/muscle-card";
import { Section } from "@/components/section";

const muscleTypes = [
  {
    title: "Esquelético",
    description:
      "Son músculos voluntarios unidos a los huesos por tendones. Permiten caminar, correr, saltar y realizar gestos deportivos; hay más de 600 en el cuerpo."
  },
  {
    title: "Liso",
    description:
      "Son involuntarios y se encuentran en órganos internos como estómago, intestinos y vasos sanguíneos. Mueven comida y sangre sin control consciente."
  },
  {
    title: "Cardíaco",
    description:
      "Solo está en el corazón. Es involuntario, rítmico y muy resistente para sostener los latidos durante toda la vida."
  }
];

export function MuscleTypes() {
  return (
    <Section
      id="tipos"
      eyebrow="Tipos de músculos"
      title="Tres componentes principales"
      description="Cada tipo de músculo tiene una estructura, una ubicación y un control diferente, pero todos transforman energía en movimiento, presión o impulso."
      className="bg-slate-950/35"
    >
      <div className="grid gap-6 md:grid-cols-3">
        {muscleTypes.map((type) => (
          <MuscleCard key={type.title} {...type} />
        ))}
      </div>
    </Section>
  );
}
