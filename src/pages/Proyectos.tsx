import PageHeader from "@/components/PageHeader";
import { FolderGit2 } from "lucide-react";

const borderColors = ['border-l-secondary', 'border-l-info', 'border-l-warm', 'border-l-success', 'border-l-amber', 'border-l-secondary'];
const dotColors = ['bg-secondary', 'bg-info', 'bg-warm', 'bg-success', 'bg-amber', 'bg-secondary'];
const iconBgs = ['bg-secondary/10 text-secondary', 'bg-info/10 text-info', 'bg-warm/10 text-warm', 'bg-success/10 text-success', 'bg-amber/10 text-amber', 'bg-secondary/10 text-secondary'];

const proyectos = [
  {
    titulo: "Integración y calidad del desarrollo de software dirigido por modelos en entornos ágiles",
    detalle: "Res. 222/19, SIINME0007640TC",
  },
  {
    titulo: "Metamodelo de Auditoría y Reingeniería para Sistemas de Trazabilidad de Vinos",
    detalle: "EIINIME0003878TC PID 3878",
  },
  {
    titulo: "Métodos formales de testing de software para mejora de calidad de sistemas",
    detalle: "INI1742, 25J086",
  },
  {
    titulo: "Computación de alto rendimiento segura para Cloud Computing en Data Centers",
    detalle: "",
  },
  {
    titulo: "Impacto de e-business en las Pymes de Mendoza",
    detalle: "UTN1039",
  },
  {
    titulo: "Simulación de Negocios basado en Nuevas Tecnologías Informáticas",
    detalle: "Res. 330/2006",
  },
];

const Proyectos = () => (
  <>
    <PageHeader title="Proyectos" subtitle="Proyectos de investigación del Grupo AuSegTIC" />

    <section className="py-16 md:py-20">
      <div className="container max-w-4xl">
        <p className="text-muted-foreground mb-8 leading-relaxed">
          El Grupo AuSegTIC participa en proyectos de investigación interinstitucionales desde 2005, abordando temáticas de seguridad, auditoría, trazabilidad y calidad de software.
        </p>

        {/* Timeline-like layout */}
        <div className="relative">
          <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-secondary via-info via-warm to-success hidden md:block" />
          <div className="space-y-4">
            {proyectos.map((p, i) => (
              <div key={i} className="md:pl-14 relative">
                <div className={`absolute left-3 top-7 h-4 w-4 rounded-full ${dotColors[i]} border-2 border-background hidden md:block`} />
                <div className={`rounded-xl bg-card border border-l-4 ${borderColors[i]} p-6 card-hover`}>
                  <div className="flex items-start gap-4">
                    <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${iconBgs[i].split(' ')[0]}`}>
                      <FolderGit2 className={`h-5 w-5 ${iconBgs[i].split(' ')[1]}`} />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-foreground mb-1">"{p.titulo}"</h3>
                      {p.detalle && (
                        <span className="inline-block text-xs font-mono bg-muted text-muted-foreground px-2 py-0.5 rounded">{p.detalle}</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  </>
);

export default Proyectos;
