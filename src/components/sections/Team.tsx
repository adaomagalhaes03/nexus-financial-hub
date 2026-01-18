import { motion } from "framer-motion";
import { Linkedin, Mail } from "lucide-react";
import arqveritusLogo from "@/assets/arqveritus-logo.jpg";
import globalauditLogo from "@/assets/globalaudit-logo.jpg";
import teamCintia from "@/assets/team-cintia.jpg";
import teamGuilhermina from "@/assets/team-guilhermina.jpg";
import teamJoelson from "@/assets/team-joelson.jpg";
import teamPaula from "@/assets/team-paula.jpg";
import teamMilena from "@/assets/team-milena.jpg";

const team = [
  {
    name: "Cintia Vidal",
    role: "Director Geral",
    company: "ArqVeritus OnliCapital",
    image: teamCintia,
    logo: arqveritusLogo,
  },
  {
    name: "Jelson Silva",
    role: "Departamento de Consultoria, Formação e Inovação",
    company: "Prospera Angola",
    image: teamJoelson,
    logo: null,
  },
  {
    name: "Guilhermina",
    role: "Departamento de Desenvolvimento de Negócios",
    company: "ArqVeritus OnliCapital",
    image: teamGuilhermina,
    logo: arqveritusLogo,
  },
  {
    name: "Paula",
    role: "Departamento Fiscal e Tributário",
    company: "",
    image: teamPaula,
    logo: null,
  },
  {
    name: "Milena Lucas",
    role: "Departamento de Planeamento Estratégico",
    company: "GlobalAudit",
    image: teamMilena,
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
