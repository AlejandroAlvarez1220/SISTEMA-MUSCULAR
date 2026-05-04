import { Section } from "@/components/section";

export function Intro() {
  return (
    <Section
      id="introduccion"
      eyebrow="Introducción"
      title="El motor del cuerpo humano"
      description='El sistema muscular es el conjunto de músculos y tendones del cuerpo encargado del movimiento, la postura y la generación de calor. Convierte la energía química en movimiento mecánico.'
    >
      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="medical-card p-6 sm:p-8">
          <p className="text-lg leading-8 text-slate-300">
            En conjunto con el sistema nervioso y el sistema esquelético, los músculos
            transforman señales eléctricas y energía del ATP en acciones coordinadas. Cada
            contracción permite actividades simples y complejas, desde pestañear hasta correr
            100 m, estabilizar el cuerpo o ayudar al retorno de la sangre hacia el corazón.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
          {[
            ["600+", "músculos en el cuerpo humano"],
            ["40%", "del calor corporal viene de la contracción muscular"],
            ["3", "tipos principales de tejido muscular"]
          ].map(([value, label]) => (
            <div key={label} className="medical-card p-5">
              <p className="text-3xl font-bold text-medical-primary">{value}</p>
              <p className="mt-2 text-sm text-slate-300">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
