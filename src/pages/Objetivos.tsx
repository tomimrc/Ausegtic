import PageHeader from "@/components/PageHeader";
import { Target, CheckCircle2, Shield, Search, BookOpen, Globe, Wrench } from "lucide-react";

const categorias = [
  {
    titulo: "Riesgos y Auditoría",
    color: "border-l-secondary",
    iconBg: "bg-secondary/10",
    iconColor: "text-secondary",
    icon: Shield,
    items: [
      "Identificar y conocer los riesgos que afectan a las Organizaciones y Empresas en sus diferentes actividades, relacionados con las TICs.",
      "Investigar el Framework COBIT como marco de referencia para la Auditoría y Seguridad de TICs.",
      "Diseñar y elaborar Planes de Seguridad y Contingencia para Organizaciones.",
    ],
  },
  {
    titulo: "Normas y Estándares",
    color: "border-l-info",
    iconBg: "bg-info/10",
    iconColor: "text-info",
    icon: BookOpen,
    items: [
      "Investigar las diferentes normas y estándares de calidad, seguridad y auditoría existentes, como base de los trabajos del Grupo.",
      "Investigar y generar modelos aplicables a la seguridad y auditoría de las TICs.",
    ],
  },
  {
    titulo: "Ciberseguridad y Hacking Ético",
    color: "border-l-warm",
    iconBg: "bg-warm/10",
    iconColor: "text-warm",
    icon: Search,
    items: [
      "Investigar y aplicar técnicas de ethical hacking y ciberseguridad.",
      "Desarrollar herramientas de software para auditoría y seguridad.",
    ],
  },
  {
    titulo: "Modelado y Trazabilidad",
    color: "border-l-success",
    iconBg: "bg-success/10",
    iconColor: "text-success",
    icon: Globe,
    items: [
      "Aplicar la trazabilidad y modelado en distintos dominios.",
      "Investigar seguridad y auditoría aplicada a gamificación.",
    ],
  },
  {
    titulo: "Formación y Vinculación",
    color: "border-l-amber",
    iconBg: "bg-amber/10",
    iconColor: "text-amber",
    icon: Wrench,
    items: [
      "Formar recursos humanos capacitados en seguridad y auditoría de TICs.",
      "Generar concientización y cultura de la seguridad informática.",
      "Realizar publicaciones en congresos y revistas científicas nacionales e internacionales.",
      "Brindar servicios de asesoramiento y transferencia a organizaciones públicas y privadas.",
      "Participar en congresos, jornadas y eventos relacionados con la temática.",
      "Vincularse con otros grupos de investigación afines a nivel nacional e internacional.",
    ],
  },
];

const Objetivos = () => (
  <>
    <PageHeader title="Objetivos" subtitle="Misión y metas del Grupo AuSegTIC" />

    <section className="py-16 md:py-20">
      <div className="container max-w-4xl">
        {/* Objetivo principal */}
        <div className="rounded-2xl bg-gradient-to-br from-primary/5 via-card to-secondary/5 border p-8 mb-14 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-secondary/5 -translate-y-1/2 translate-x-1/2" />
          <div className="flex items-start gap-4 relative">
            <div className="h-12 w-12 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0">
              <Target className="h-6 w-6 text-secondary" />
            </div>
            <div>
              <div className="inline-block mb-2 px-2 py-0.5 rounded bg-secondary/10 text-secondary text-xs font-semibold uppercase tracking-wider">
                Misión
              </div>
              <h2 className="font-display text-xl font-bold text-foreground mb-4">Objetivo Principal</h2>
              <p className="text-muted-foreground leading-relaxed">
                El objetivo principal del Grupo de Auditoría y Seguridad de Tecnologías de Información y Comunicaciones, es disponer de un ambiente sinérgico con personal directivo, docentes y estudiantes adecuadamente capacitados para investigar, generar conocimiento, realizar trabajos específicos, de investigación y brindar servicios. Es de gran importancia generar conocimiento y formar personas con una sólida base de conocimientos y experiencia práctica para poder interactuar con organizaciones científicas, académicas, gubernamentales y empresariales en distintos ambientes de trabajo mediante la aplicación de los métodos actuales y futuros de seguridad, calidad y auditoría de Sistemas y TIC, con activa participación en publicaciones en congresos, exposiciones, vinculación y transferencia al medio.
              </p>
            </div>
          </div>
        </div>

        {/* Objetivos por categoría */}
        <h2 className="font-display text-xl font-bold text-foreground mb-8 flex items-center gap-2">
          Objetivos Secundarios
          <span className="text-xs font-normal text-muted-foreground bg-muted px-2 py-1 rounded-full">{categorias.reduce((a, c) => a + c.items.length, 0)} objetivos</span>
        </h2>
        <div className="space-y-6">
          {categorias.map((cat) => (
            <div key={cat.titulo} className={`rounded-xl bg-card border ${cat.color} border-l-4 p-6`}>
              <div className="flex items-center gap-3 mb-4">
                <div className={`h-8 w-8 rounded-lg ${cat.iconBg} flex items-center justify-center`}>
                  <cat.icon className={`h-4 w-4 ${cat.iconColor}`} />
                </div>
                <h3 className="font-display font-semibold text-foreground">{cat.titulo}</h3>
              </div>
              <ul className="space-y-2 ml-11">
                {cat.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className={`h-4 w-4 ${cat.iconColor} shrink-0 mt-0.5`} />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default Objetivos;
