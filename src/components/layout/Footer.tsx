import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import logo from "@/assets/logo.png";

const consultancies = [
  "ARQVERITUS ONLICAPITAL",
  "FINANCONTA",
  "PROSPERA ANGOLA",
  "GLOBALAUDIT",
];

const quickLinks = [
  { name: "Início", href: "#home" },
  { name: "Serviços", href: "#servicos" },
  { name: "Sobre Nós", href: "#sobre" },
  { name: "Planos", href: "#planos" },
  { name: "Blog", href: "#blog" },
  { name: "Contacto", href: "#contacto" },
];

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border/30">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <img src={logo} alt="Nexuscont Corporate" className="h-20 w-auto mb-6" />
            <p className="text-muted-foreground text-sm leading-relaxed">
              Consultoria especializada em contabilidade, finanças e educação financeira para o crescimento sustentável das empresas em Angola.
            </p>
            <div className="flex gap-4 mt-6">
              {[Facebook, Instagram, Linkedin, Twitter].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-full border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold mb-6 text-foreground">Links Rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Consultancies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-6 text-foreground">Consultorias do Grupo</h4>
            <ul className="space-y-3">
              {consultancies.map((name) => (
                <li key={name}>
                  <span className="text-muted-foreground text-sm">{name}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="text-lg font-semibold mb-6 text-foreground">Contactos</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground text-sm">Luanda, Angola</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary flex-shrink-0" />
                <span className="text-muted-foreground text-sm">+244 923 456 789</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary flex-shrink-0" />
                <span className="text-muted-foreground text-sm">info@nexuscont.co.ao</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="border-t border-border/30 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Nexuscont Corporate. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">
              Termos de Uso
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
