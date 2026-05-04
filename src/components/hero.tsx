import Image from "next/image";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-[92vh] items-center overflow-hidden pt-16"
      aria-labelledby="hero-title"
    >
      <Image
        src="https://res.cloudinary.com/deflpc2nl/image/upload/q_auto/f_auto/v1777853731/sistema-muscular3-e1539721836398_quue0x.webp"
        alt="Ilustración del sistema muscular humano"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-slate-950/70" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_30%,rgba(239,68,68,0.24),transparent_38%)]" />
      <div className="section-shell relative z-10 pb-20 pt-24">
        <div className="max-w-3xl animate-fade-up">
          <p className="mb-5 inline-flex rounded-md border border-red-400/30 bg-red-500/10 px-3 py-1 text-sm font-medium text-red-100">
            Anatomía humana
          </p>
          <h1
            id="hero-title"
            className="text-5xl font-bold leading-tight text-white sm:text-6xl lg:text-7xl"
          >
            Sistema Muscular
          </h1>
          <p className="mt-6 text-xl leading-8 text-slate-200 sm:text-2xl">
            El motor del cuerpo humano
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="#introduccion"
              className="rounded-md bg-medical-primary px-6 py-3 text-center font-semibold text-white shadow-xl shadow-red-500/20 transition hover:bg-red-500/90"
            >
              Comenzar recorrido
            </a>
            <a
              href="#anatomia"
              className="rounded-md border border-white/15 bg-white/10 px-6 py-3 text-center font-semibold text-white backdrop-blur transition hover:bg-white/15"
            >
              Ver anatomía
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
