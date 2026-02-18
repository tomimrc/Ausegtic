import PageHeader from "@/components/PageHeader";
import { FileText, Mic, Handshake, Award, ExternalLink } from "lucide-react";

const publicaciones = [
  "Patente nacional AUDITRAZ — Sistema de Auditoría y Trazabilidad.",
  "Artículos publicados en REABTIC (Revista Electrónica Argentina-Brasil de Tecnologías de la Información y la Comunicación).",
  "Publicaciones en WICC (Workshop de Investigadores en Ciencias de la Computación).",
  "Publicaciones en CONAIISI (Congreso Nacional de Ingeniería Informática / Sistemas de Información).",
  "Publicaciones en JAIIO (Jornadas Argentinas de Informática).",
  "Publicación de libro sobre gamificación aplicada a la educación.",
  "Proyecto de libro sobre Desarrollo de Software Dirigido por Modelos.",
];

const enlaces = [
  { label: "Artículo REABTIC 2020", url: "https://revistas.utn.edu.ar/index.php/reabtic" },
  { label: "Video YouTube — IPS Modelo Mendoza", url: "https://www.youtube.com" },
  { label: "Edición revista REABTIC 2014", url: "https://revistas.utn.edu.ar/index.php/reabtic" },
  { label: "Repositorio FastSkan", url: "https://github.com" },
];

const transferencia = [
  "Mentoría y premios: 'Votación Electrónica con Blockchain', Semana STEAM UTN + Embajada USA.",
  "Organización del CONAIISI 2021.",
  "Exposiciones de proyectos de sistemas.",
  "Convenios con Universidad del Aconcagua.",
  "Asesoría a gobiernos y ministerios en seguridad informática.",
  "Trabajos de pentesting y análisis de vulnerabilidades.",
  "Prácticas profesionales supervisadas en seguridad.",
  "Colaboraciones con empresas, IDITS, ISACA.",
  "Cursos y capacitaciones en ciberseguridad.",
  "Desarrollo de herramienta FastSkan.",
];

const comites = [
  "Organización y participación en CONAIISI, exposiciones de Proyectos de Sistemas, Computing Security Day, Ciudades Conectadas, INTERSEC, FLISoL.",
  "Participación en comités científicos de CONAIISI, CLEI, COMTEL, Eduq@, WEEF.",
  "Miembro de comités académicos y jurados de tesis.",
  "Revisor de artículos científicos en revistas y congresos.",
];

const sections = [
  {
    icon: FileText,
    title: "Publicaciones y patentes",
    color: "border-l-secondary",
    iconBg: "bg-secondary/10",
    iconColor: "text-secondary",
    dotColor: "bg-secondary",
    items: publicaciones,
  },
  {
    icon: Handshake,
    title: "Transferencia a empresas y gobierno",
    color: "border-l-info",
    iconBg: "bg-info/10",
    iconColor: "text-info",
    dotColor: "bg-info",
    items: transferencia,
  },
  {
    icon: Award,
    title: "Comités científicos y eventos",
    color: "border-l-warm",
    iconBg: "bg-warm/10",
    iconColor: "text-warm",
    dotColor: "bg-warm",
    items: comites,
  },
];

const ProduccionTransferencia = () => (
  <>
    <PageHeader title="Producción / Transferencia" subtitle="Producción científica y transferencia del Grupo AuSegTIC" />

    <section className="py-16 md:py-20">
      <div className="container max-w-4xl">
        {sections.map((section) => (
          <div key={section.title} className="mb-14">
            <div className="flex items-center gap-3 mb-5">
              <div className={`h-10 w-10 rounded-lg ${section.iconBg} flex items-center justify-center`}>
                <section.icon className={`h-5 w-5 ${section.iconColor}`} />
              </div>
              <h2 className="font-display text-xl font-bold text-foreground">{section.title}</h2>
              <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full">{section.items.length}</span>
            </div>
            <ul className="space-y-2">
              {section.items.map((item, i) => (
                <li key={i} className={`flex items-start gap-3 rounded-lg bg-card border ${section.color} border-l-3 p-4 card-hover`}>
                  <span className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${section.dotColor}`} />
                  <span className="text-sm text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>

            {section.title === "Publicaciones y patentes" && (
              <div className="mt-4 flex flex-wrap gap-3">
                {enlaces.map((e) => (
                  <a
                    key={e.label}
                    href={e.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm bg-secondary/5 border border-secondary/20 rounded-lg px-3 py-2 text-secondary hover:bg-secondary/10 transition-colors"
                  >
                    <ExternalLink className="h-3 w-3" /> {e.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  </>
);

export default ProduccionTransferencia;
