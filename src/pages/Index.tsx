import { Link } from "react-router-dom";
import { Shield, BookOpen, Users, FlaskConical, Mail, Phone, ArrowRight, Globe, Lock, Search } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const lineas = [
  { linea: "Seguridad en el Software y en el desarrollo dirigido por Modelos", responsable: "Alberto Alejandro Cortez", icon: Lock, color: "bg-secondary/10 text-secondary" },
  { linea: "Trazabilidad y Modelado", responsable: "Carlos Alejandro Martínez", icon: Search, color: "bg-info/10 text-info" },
  { linea: "Ciberseguridad y Hacking Ético", responsable: "Gonzalo Carrasco", icon: Shield, color: "bg-warm/10 text-warm" },
  { linea: "Planes de Seguridad TIC", responsable: "Alejandro Vazquez", icon: BookOpen, color: "bg-success/10 text-success" },
  { linea: "COBIT", responsable: "Carlos Enrique Troglia", icon: Globe, color: "bg-amber/10 text-amber" },
  { linea: "Auditoría de TIC", responsable: "Bruno Roberti", icon: FlaskConical, color: "bg-info/10 text-info" },
  { linea: "Seguridad y auditoría en Gamificación", responsable: "Federico Brest", icon: Users, color: "bg-warm/10 text-warm" },
];

const stats = [
  { label: "Líneas de investigación", value: "7", color: "text-hero-foreground" },
  { label: "Integrantes", value: "20+", color: "text-hero-foreground" },
  { label: "Proyectos", value: "6", color: "text-hero-foreground" },
  { label: "Desde", value: "2007", color: "text-hero-foreground" },
];

const Index = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden hero-gradient">
        <div
          className="absolute inset-0 opacity-20 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-secondary/5 blur-3xl" />
        <div className="absolute bottom-10 left-10 w-48 h-48 rounded-full bg-info/5 blur-2xl" />
        <div className="absolute top-1/3 right-1/4 w-4 h-4 rounded-full bg-hero-accent/40 animate-pulse" />
        <div className="absolute top-2/3 right-1/3 w-2 h-2 rounded-full bg-warm/60 animate-pulse" />

        <div className="relative container py-24 md:py-36">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-hero-accent/15 border border-hero-accent/20">
            <Shield className="h-4 w-4 text-hero-accent" />
            <span className="text-hero-accent font-semibold text-sm tracking-wider uppercase">
              UTN — Facultad Regional Mendoza
            </span>
          </div>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-hero-foreground mb-4 max-w-3xl">
            Grupo <span className="text-gradient">AuSegTIC</span>
          </h1>
          <p className="text-xl md:text-2xl text-hero-foreground/80 max-w-2xl mb-8 leading-relaxed">
            Grupo de Auditoría y Seguridad de Tecnologías de Información y Comunicaciones
          </p>
          <div className="flex flex-wrap gap-3 mb-12">
            <Link
              to="/objetivos"
              className="inline-flex items-center gap-2 rounded-lg bg-secondary px-6 py-3 font-semibold text-secondary-foreground transition-all hover:scale-105 hover:shadow-lg hover:shadow-secondary/25"
            >
              <BookOpen className="h-4 w-4" /> Ver objetivos
            </Link>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=cortezalberto@gmail.com" target="_blank"
              className="inline-flex items-center gap-2 rounded-lg border border-hero-foreground/30 px-6 py-3 font-semibold text-hero-foreground transition-colors hover:bg-hero-foreground/10"
            >
              <Mail className="h-4 w-4" /> Contactar
            </a>
          </div>

          {/* Stats bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="rounded-xl bg-hero-foreground/5 backdrop-blur-sm border border-hero-foreground/10 p-4 text-center">
                <div className={`font-display text-2xl font-bold ${s.color}`}>{s.value}</div>
                <div className="text-hero-foreground/60 text-xs mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quiénes somos */}
      <section className="py-16 md:py-20 relative">
        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-secondary via-info to-warm hidden lg:block ml-[calc(50%-700px)]" />
        <div className="container max-w-4xl">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-10 w-10 rounded-lg bg-secondary/10 flex items-center justify-center">
              <Users className="h-5 w-5 text-secondary" />
            </div>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
              Quiénes somos
            </h2>
          </div>
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <div className="rounded-xl bg-card border-l-4 border-l-secondary p-6">
              <p>
                La creciente importancia de las funciones de Auditoría y Seguridad de las Tecnologías de Información para la protección de los activos de las Organizaciones y Empresas y el auge que el mercado de la Seguridad tiene en todo el mundo exige a los Profesionales un creciente esfuerzo de investigación, desarrollo y capacitación.
              </p>
            </div>
            <div className="rounded-xl bg-card border-l-4 border-l-info p-6">
              <p>
                El nivel a alcanzar en el tema comprende desde el conocimiento de la problemática de la Seguridad, los riesgos, los estándares, medios, técnicas y procedimientos operativos, la generación de modelos aplicables hasta la administración de los recursos, mediante una conceptualización estratégica de la Seguridad y Auditoría de las Tecnologías de Información y Comunicaciones.
              </p>
            </div>
            <div className="rounded-xl bg-card border-l-4 border-l-warm p-6">
              <p>
                El alcance global de las TICs, las facilidades tecnológicas y de comunicaciones, la expansión, globalización y crecimiento más accesible, el permanente desarrollo de ataques a la Seguridad de los Activos Informáticos de las Organizaciones y Empresas en todo el mundo, el aumento del poder competitivo, la generación de nuevos canales de ventas y pagos en Internet, la distribución acelerada de investigación, desarrollo y conocimientos; han hecho de la Seguridad y Auditoría de TICs un área que necesita tener permanente investigación y desarrollo para reducir los riesgos existentes. En ese contexto funciona el Grupo de Auditoría y Seguridad de Tecnologías de Información y Comunicaciones, creado en el ámbito de la Universidad Tecnológica Nacional, Facultad Regional Mendoza, mediante Resolución de Consejo Académico N° 425/2007.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Líneas de investigación */}
      <section className="section-alt py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 decorative-dots opacity-40" />
        <div className="container relative">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-10 w-10 rounded-lg bg-info/10 flex items-center justify-center">
              <FlaskConical className="h-5 w-5 text-info" />
            </div>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
              Líneas de investigación
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {lineas.map((l) => (
              <div
                key={l.linea}
                className="rounded-xl bg-card p-5 border card-hover group"
              >
                <div className={`h-10 w-10 rounded-lg ${l.color.split(' ')[0]} flex items-center justify-center mb-3 transition-transform group-hover:scale-110`}>
                  <l.icon className={`h-5 w-5 ${l.color.split(' ')[1]}`} />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-2">{l.linea}</h3>
                <p className="text-sm text-muted-foreground flex items-center gap-1">
                  <ArrowRight className="h-3 w-3 text-secondary" /> {l.responsable}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contacto rápido */}
      <section className="py-16 md:py-20">
        <div className="container max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-warm/10 text-warm text-xs font-semibold tracking-wider uppercase">
            Contacto
          </div>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
            ¿Querés contactarnos?
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=cortezalberto@gmail.com" target="blank" className="rounded-xl bg-card border border-info/20 p-5 card-hover flex flex-col items-center gap-2 hover:border-info/50">
              <div className="h-12 w-12 rounded-full bg-info/10 flex items-center justify-center">
                <Mail className="h-5 w-5 text-info" />
              </div>
              <span className="text-sm font-medium text-foreground">Alberto Cortez</span>
              <span className="text-xs text-muted-foreground">cortezalberto@gmail.com</span>
            </a>
            <div className="rounded-xl bg-card border border-warm/20 p-5 flex flex-col items-center gap-2">
              <div className="h-12 w-12 rounded-full bg-warm/10 flex items-center justify-center">
                <Phone className="h-5 w-5 text-warm" />
              </div>
              <span className="text-sm font-medium text-foreground">Teléfono</span>
              <span className="text-xs text-muted-foreground">261 5884753</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
