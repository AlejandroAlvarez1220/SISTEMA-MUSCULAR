"use client";

import Image from "next/image";
import { useState } from "react";

export type MuscleDetail = {
  name: string;
  function: string;
  origin: string;
  insertion: string;
  group?: string;
  imageUrl?: string;
  videoUrl?: string;
};

export type AccordionItem = {
  title: string;
  muscles: MuscleDetail[];
};

type AccordionProps = {
  items: AccordionItem[];
};

export function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <article key={item.title} className="medical-card overflow-hidden">
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
              className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left transition hover:bg-white/[0.04] sm:px-6"
            >
              <span className="text-lg font-semibold text-white">{item.title}</span>
              <span
                className={`grid h-8 w-8 place-items-center rounded-md border border-white/10 text-xl text-red-200 transition ${
                  isOpen ? "rotate-45 bg-red-500/20" : "bg-white/5"
                }`}
                aria-hidden="true"
              >
                +
              </span>
            </button>
            <div
              className={`grid transition-all duration-300 ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <div className="grid gap-4 border-t border-white/10 p-5 sm:grid-cols-2 sm:p-6 lg:grid-cols-3">
                  {item.muscles.map((muscle) => (
                    <div
                      key={muscle.name}
                      className="rounded-lg border border-white/10 bg-slate-950/40 p-5 transition hover:border-red-400/30 hover:bg-slate-950/60"
                    >
                      {muscle.group ? (
                        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-medical-primary">
                          {muscle.group}
                        </p>
                      ) : null}
                      <h4 className="text-lg font-semibold text-white">{muscle.name}</h4>
                      {muscle.imageUrl ? (
                        <div className="relative mt-4 aspect-[4/3] overflow-hidden rounded-md border border-white/10 bg-slate-900">
                          <Image
                            src={muscle.imageUrl}
                            alt={muscle.name}
                            fill
                            sizes="(min-width: 1024px) 28vw, (min-width: 640px) 45vw, 90vw"
                            className="object-cover"
                          />
                        </div>
                      ) : null}
                      <dl className="mt-4 space-y-3 text-sm leading-6">
                        <div>
                          <dt className="font-semibold text-red-200">Función</dt>
                          <dd className="text-slate-300">{muscle.function}</dd>
                        </div>
                        <div>
                          <dt className="font-semibold text-red-200">Origen</dt>
                          <dd className="text-slate-300">{muscle.origin}</dd>
                        </div>
                        <div>
                          <dt className="font-semibold text-red-200">Inserción</dt>
                          <dd className="text-slate-300">{muscle.insertion}</dd>
                        </div>
                      </dl>
                      {muscle.videoUrl ? (
                        <video
                          className="mt-4 aspect-video w-full rounded-md border border-white/10 bg-slate-950"
                          controls
                          preload="metadata"
                        >
                          <source src={muscle.videoUrl} type="video/mp4" />
                        </video>
                      ) : null}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
