import PageHeader from "@/components/PageHeader";
import { BookOpen, GraduationCap } from "lucide-react";

const catedras = [
  { nombre: "Proyecto Final", color: "border-l-secondary" },
  { nombre: "Seguridad", color: "border-l-warm" },
  { nombre: "Administración de Recursos", color: "border-l-info" },
  { nombre: "Administración Gerencial", color: "border-l-success" },
  { nombre: "Sistemas de Gestión", color: "border-l-amber" },
  { nombre: "Paradigmas de Programación", color: "border-l-secondary" },
  { nombre: "Taller de Programación Avanzada", color: "border-l-warm" },
  { nombre: "Seguridad en Redes", color: "border-l-info" },
  { nombre: "Desarrollo de Software Dirigido por Modelos", color: "border-l-success" },
  { nombre: "Sistemas Distribuidos", color: "border-l-amber" },
];

const iconColors = ['text-secondary', 'text-warm', 'text-info', 'text-success', 'text-amber'];
const bgColors = ['bg-secondary/10', 'bg-warm/10', 'bg-info/10', 'bg-success/10', 'bg-amber/10'];

const Docencia = () => (
  <>
    <PageHeader title="Docencia" subtitle="Docencia del Grupo AuSegTIC" />

    <section className="py-16 md:py-20 relative overflow-hidden">
      <div className="absolute inset-0 decorative-dots opacity-30" />
      <div className="container max-w-3xl relative">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-10 w-10 rounded-lg bg-secondary/10 flex items-center justify-center">
            <GraduationCap className="h-5 w-5 text-secondary" />
          </div>
          <div>
            <h2 className="font-display text-lg font-bold text-foreground">Cátedras</h2>
            <p className="text-xs text-muted-foreground">Departamento de Ingeniería en Sistemas de Información</p>
          </div>
          <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full ml-auto">{catedras.length} cátedras</span>
        </div>
        <p className="text-muted-foreground mb-8 leading-relaxed">
          Los miembros del Grupo de Auditoría y Seguridad de TIC pertenecen al cuerpo Docente de las siguientes Cátedras del Departamento de Ingeniería en Sistemas de Información:
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          {catedras.map((c, i) => (
            <div key={c.nombre} className={`flex items-center gap-3 rounded-xl bg-card border border-l-4 ${c.color} p-4 card-hover`}>
              <div className={`h-8 w-8 rounded-lg ${bgColors[i % bgColors.length]} flex items-center justify-center shrink-0`}>
                <BookOpen className={`h-4 w-4 ${iconColors[i % iconColors.length]}`} />
              </div>
              <span className="font-medium text-foreground text-sm">{c.nombre}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default Docencia;
