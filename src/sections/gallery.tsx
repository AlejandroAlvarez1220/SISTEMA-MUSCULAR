import Image from "next/image";
import { Section } from "@/components/section";

const images = [
  {
    title: "Entrenamiento funcional",
    src: "/images/gallery-functional.svg"
  },
  {
    title: "Fuerza y postura",
    src: "/images/gallery-posture.svg"
  },
  {
    title: "Movimiento coordinado",
    src: "/images/gallery-motion.svg"
  },
  {
    title: "Trabajo muscular",
    src: "/images/gallery-fibers.svg"
  },
  {
    title: "Anatomía aplicada",
    src: "/images/gallery-anatomy.svg"
  },
  {
    title: "Rendimiento humano",
    src: "/images/gallery-performance.svg"
  }
];

export function Gallery() {
  return (
    <Section
      id="galeria"
      eyebrow="Galería"
      title="Sistema muscular en acción"
      description="Imágenes relacionadas con movimiento, fuerza, control postural y rendimiento físico."
      className="pb-24"
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((image) => (
          <figure
            key={image.title}
            className="group relative aspect-[4/3] overflow-hidden rounded-lg border border-white/10 bg-white/[0.04]"
          >
            <Image
              src={image.src}
              alt={image.title}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover transition duration-500 group-hover:scale-110"
            />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/95 to-transparent p-5">
              <span className="text-sm font-semibold text-white">{image.title}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}
