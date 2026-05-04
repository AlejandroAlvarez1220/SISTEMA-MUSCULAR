import { Section } from "@/components/section";

const functions = [
  {
    title: "Movimiento",
    description: "Desde pestañear hasta correr 100 m: los músculos se contraen y tiran de los huesos."
  },
  {
    title: "Postura",
    description: "Mantiene el cuerpo erguido, estable y alineado para evitar caídas."
  },
  {
    title: "Protección",
    description: "Ayuda a proteger órganos vitales como el corazón y los pulmones."
  },
  {
    title: "Calor",
    description: "La contracción muscular genera gran parte del calor corporal; por eso tiemblas con frío."
  },
  {
    title: "Circulación",
    description: "El corazón bombea sangre y los músculos de las piernas ayudan al retorno venoso."
  }
];

export function Functions() {
  return (
    <Section
      id="funciones"
      eyebrow="Funciones"
      title="Más que movimiento"
      description="El sistema muscular sostiene tareas mecánicas, metabólicas y vitales que trabajan de forma integrada durante todo el día."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
        {functions.map((item) => (
          <article key={item.title} className="medical-card p-5 hover:border-red-400/40">
            <div className="mb-4 grid h-10 w-10 place-items-center rounded-md bg-red-500/15 text-sm font-bold text-red-100">
              {item.title.slice(0, 1)}
            </div>
            <h3 className="font-semibold text-white">{item.title}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">{item.description}</p>
          </article>
        ))}
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        <article className="medical-card p-6 sm:p-8">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-medical-primary">
            Cómo funciona
          </p>
          <h3 className="text-2xl font-bold text-white">Músculos antagonistas</h3>
          <p className="mt-4 leading-8 text-slate-300">
            Los músculos trabajan por pares antagonistas. Cuando uno se contrae, el otro se
            relaja. Al doblar el codo, el bíceps se contrae y el tríceps se relaja para
            permitir la flexión.
          </p>
        </article>
        <article className="medical-card p-6 sm:p-8">
          <h3 className="text-2xl font-bold text-white">Señales eléctricas y ATP</h3>
          <p className="mt-4 leading-8 text-slate-300">
            La contracción ocurre por señales eléctricas enviadas por el sistema nervioso.
            Las fibras musculares usan ATP como fuente de energía para producir fuerza,
            movimiento y control postural.
          </p>
        </article>
      </div>
    </Section>
  );
}
