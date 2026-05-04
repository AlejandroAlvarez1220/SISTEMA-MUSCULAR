import { Section } from "@/components/section";

const videos = [
  "Contracción muscular",
  "Músculos antagonistas",
  "Anatomía regional"
];

export function Videos() {
  return (
    <Section
      id="videos"
      eyebrow="Videos"
      title="Recursos audiovisuales"
      description="Espacios preparados para insertar clases, animaciones o demostraciones sobre anatomía y fisiología muscular."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {videos.map((video) => (
          <article key={video} className="medical-card overflow-hidden hover:border-red-400/40">
            <div className="grid aspect-video place-items-center bg-slate-950/70">
              <div className="grid h-14 w-14 place-items-center rounded-full bg-red-500/90 text-xl font-bold text-white shadow-xl shadow-red-500/25">
                ▶
              </div>
            </div>
            <div className="p-5">
              <h3 className="font-semibold text-white">{video}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                Placeholder optimizado para contenido embebido educativo.
              </p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
