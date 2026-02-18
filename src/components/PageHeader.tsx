import { ReactNode } from "react";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
}

const PageHeader = ({ title, subtitle, children }: PageHeaderProps) => (
  <section className="hero-gradient py-16 md:py-20 relative overflow-hidden">
    {/* Decorative circles */}
    <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-secondary/10 -translate-y-1/2 translate-x-1/3" />
    <div className="absolute bottom-0 left-10 w-32 h-32 rounded-full bg-info/10 translate-y-1/2" />
    <div className="absolute top-8 right-1/4 w-3 h-3 rounded-full bg-hero-accent animate-pulse" />
    <div className="absolute bottom-6 right-1/3 w-2 h-2 rounded-full bg-warm animate-pulse delay-500" />

    <div className="container relative">
      <div className="inline-block mb-3 px-3 py-1 rounded-full bg-hero-accent/15 text-hero-accent text-xs font-semibold tracking-wider uppercase">
        Grupo AuSegTIC
      </div>
      <h1 className="font-display text-3xl md:text-4xl font-bold text-hero-foreground mb-2">
        {title}
      </h1>
      {subtitle && (
        <p className="text-hero-foreground/70 text-lg max-w-2xl">{subtitle}</p>
      )}
      {children}
    </div>
  </section>
);

export default PageHeader;
