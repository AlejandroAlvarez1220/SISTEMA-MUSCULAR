const navItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Introducción", href: "#introduccion" },
  { label: "Tipos", href: "#tipos" },
  { label: "Funciones", href: "#funciones" },
  { label: "Anatomía", href: "#anatomia" }
];

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <nav
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
        aria-label="Navegación principal"
      >
        <a href="#inicio" className="flex items-center gap-3 font-semibold tracking-wide">
          <span className="h-3 w-3 rounded-full bg-medical-primary shadow-lg shadow-red-500/50" />
          <span>Sistema Muscular</span>
        </a>
        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/10 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>
        <a
          href="#anatomia"
          className="rounded-md bg-medical-primary px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-red-500/20 transition hover:bg-red-500/90"
        >
          Explorar
        </a>
      </nav>
    </header>
  );
}
