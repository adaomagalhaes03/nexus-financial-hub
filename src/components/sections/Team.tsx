import { motion } from "framer-motion";
import { Linkedin, Mail } from "lucide-react";
import arqveritusLogo from "@/assets/arqveritus-logo.jpg";
import globalauditLogo from "@/assets/globalaudit-logo.jpg";

const team = [
  {
    name: "Bruno Januário",
    role: "Director Geral",
    company: "ArqVeritus OnliCapital",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    logo: arqveritusLogo,
  },
  {
    name: "Joelson Silva",
    role: "Departamento de Consultoria, Formação e Inovação",
    company: "Prospera Angola",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    logo: null,
  },
  {
    name: "Elizeth Felipe",
    role: "Departamento de Desenvolvimento de Negócios",
    company: "ArqVeritus OnliCapital",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face",
    logo: arqveritusLogo,
  },
  {
    name: "Patrício Domingos",
    role: "Departamento Fiscal e Tributário",
    company: "",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face",
    logo: null,
  },
  {
    name: "Milena Lucas",
    role: "Departamento de Planeamento Estratégico",
    company: "GlobalAudit",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
    logo: globalauditLogo,
  },
];

export const Team = () => {
  return (
    <section id="equipa" className="section-padding bg-background">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="label-gold">Nossa Liderança</span>
          <h2 className="heading-lg mt-4">
            Conheça a Nossa <span className="text-gradient">Equipa</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Profissionais experientes e dedicados ao sucesso do seu negócio.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group text-center"
            >
              <div className="relative mb-6 overflow-hidden rounded-xl">
                <div className="aspect-square">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <div className="flex gap-3">
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground hover:scale-110 transition-transform"
                    >
                      <Linkedin size={18} />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground hover:scale-110 transition-transform"
                    >
                      <Mail size={18} />
                    </a>
                  </div>
                </div>
                {/* Gold Accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">{member.name}</h3>
              <p className="text-sm text-primary mt-1">{member.role}</p>
              {member.company && (
                <div className="mt-2 flex items-center justify-center gap-2">
                  {member.logo && (
                    <img src={member.logo} alt={member.company} className="w-6 h-6 object-contain rounded" />
                  )}
                  <span className="text-xs text-muted-foreground">{member.company}</span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
