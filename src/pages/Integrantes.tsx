import PageHeader from "@/components/PageHeader";
import { User, GraduationCap, Users, Crown } from "lucide-react";

const director = { nombre: "Mag. Lic. Alejandro Vazquez", rol: "Director" };
const codirector = { nombre: "Mag. Lic. Alberto Alejandro Cortez", rol: "Codirector" };

const docentes = [
  "Mag. Ing. Carlos Alejandro Martínez",
  "Ing. Claudia Alejandra Naveda",
  "Esp. Lic. Carlos Enrique Troglia",
  "Ing. Bruno Roberti",
  "Lic. Gustavo Felipe Manino",
];

const becarios = [
  "Javier Hernán Caballero García",
  "Federico Nicolás Brest",
  "Raúl Varela",
  "Miguel Agustín Espinoza",
  "Alberto Ariel Martín",
  "Gonzalo Carrasco",
  "Mariano Jaliff",
  "Maximiliano Guerrero",
  "Elías Ezequiel Falcón",
  "Andrés Daniel Bonilla",
  "Matías Luna",
  "Nahim Felicito Gómez",
  "Lucas Molina",
  "David Roco",
  "Facundo Erbin",
];

const Integrantes = () => (
  <>
    <PageHeader title="Integrantes" subtitle="Equipo de investigación del Grupo AuSegTIC" />

    <section className="py-16 md:py-20">
      <div className="container">
        {/* Conducción */}
        <div className="flex items-center gap-3 mb-6">
          <div className="h-9 w-9 rounded-lg bg-warm/10 flex items-center justify-center">
            <Crown className="h-5 w-5 text-warm" />
          </div>
          <h2 className="font-display text-xl font-bold text-foreground">Equipo de conducción</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 max-w-xl mb-14">
          {[director, codirector].map((p, i) => (
            <div key={p.nombre} className={`rounded-xl bg-card border-l-4 ${i === 0 ? 'border-l-warm' : 'border-l-info'} border p-6 card-hover text-center`}>
              <div className={`mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full ${i === 0 ? 'bg-warm/10' : 'bg-info/10'}`}>
                <User className={`h-7 w-7 ${i === 0 ? 'text-warm' : 'text-info'}`} />
              </div>
              <h3 className="font-display font-semibold text-foreground">{p.nombre}</h3>
              <span className={`inline-block mt-2 text-xs font-semibold px-2 py-0.5 rounded-full ${i === 0 ? 'bg-warm/10 text-warm' : 'bg-info/10 text-info'}`}>
                {p.rol}
              </span>
            </div>
          ))}
        </div>

        {/* Docentes */}
        <div className="flex items-center gap-3 mb-6">
          <div className="h-9 w-9 rounded-lg bg-secondary/10 flex items-center justify-center">
            <GraduationCap className="h-5 w-5 text-secondary" />
          </div>
          <h2 className="font-display text-xl font-bold text-foreground">Docentes investigadores</h2>
          <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full">{docentes.length}</span>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 mb-14">
          {docentes.map((d, i) => {
            const colors = ['border-l-secondary', 'border-l-info', 'border-l-success', 'border-l-warm', 'border-l-amber'];
            return (
              <div key={d} className={`rounded-lg bg-card border border-l-4 ${colors[i % colors.length]} p-4 text-sm font-medium text-foreground card-hover`}>
                {d}
              </div>
            );
          })}
        </div>

        {/* Becarios */}
        <div className="flex items-center gap-3 mb-6">
          <div className="h-9 w-9 rounded-lg bg-success/10 flex items-center justify-center">
            <Users className="h-5 w-5 text-success" />
          </div>
          <h2 className="font-display text-xl font-bold text-foreground">Becarios y estudiantes</h2>
          <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full">{becarios.length}</span>
        </div>
        <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {becarios.map((b, i) => {
            const dotColors = ['bg-secondary', 'bg-info', 'bg-warm', 'bg-success', 'bg-amber'];
            return (
              <div key={b} className="rounded-md bg-card border px-4 py-3 text-sm text-foreground flex items-center gap-2 card-hover">
                <span className={`h-2 w-2 rounded-full ${dotColors[i % dotColors.length]} shrink-0`} />
                {b}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  </>
);

export default Integrantes;
