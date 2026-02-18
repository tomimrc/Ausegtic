import { Shield, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="border-t bg-primary text-primary-foreground relative overflow-hidden">
    {/* Decorative accent bar */}
    <div className="h-1 w-full bg-gradient-to-r from-secondary via-info via-warm to-success" />

    <div className="container py-12">
      <div className="grid gap-8 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2 font-display text-lg font-bold mb-3">
            <div className="h-8 w-8 rounded-lg bg-hero-accent/20 flex items-center justify-center">
              <Shield className="h-4 w-4 text-hero-accent" />
            </div>
            Grupo AuSegTIC
          </div>
          <p className="text-sm opacity-80">
            Grupo de Auditoría y Seguridad de Tecnologías de Información y Comunicaciones.
            Universidad Tecnológica Nacional, Facultad Regional Mendoza.
          </p>
        </div>

        <div>
          <h4 className="font-display font-semibold mb-3">Contacto</h4>
          <ul className="space-y-2 text-sm opacity-80">
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0 text-hero-accent" />
              <a href="mailto:avazquez@frm.utn.edu.ar" className="hover:underline">avazquez@frm.utn.edu.ar</a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0 text-hero-accent" />
              <a href="mailto:cortezalberto@gmail.com" className="hover:underline">cortezalberto@gmail.com</a>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0 text-hero-accent" />
              261 6503396
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold mb-3">Ubicación</h4>
          <p className="text-sm opacity-80 flex items-start gap-2">
            <MapPin className="h-4 w-4 shrink-0 mt-0.5 text-hero-accent" />
            Rodríguez 273, (M5502AJE) Mendoza, República Argentina
          </p>
          <a
            href="https://maps.google.com/?q=UTN+Facultad+Regional+Mendoza"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 text-sm text-hero-accent hover:underline"
          >
            Ver en mapa →
          </a>
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-primary-foreground/20 text-center text-xs opacity-60">
        © {new Date().getFullYear()} Grupo AuSegTIC — UTN Facultad Regional Mendoza
      </div>
    </div>
  </footer>
);

export default Footer;
