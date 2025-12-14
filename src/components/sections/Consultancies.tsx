import { motion } from "framer-motion";
import { Building2, CreditCard, Users, BarChart3 } from "lucide-react";

const consultancies = [
  {
    name: "ARQVERITUS ONLICAPITAL",
    icon: CreditCard,
    services: [
      "Consultoria contabilística online",
      "Planeamento tributário",
      "Microcréditos sustentáveis",
      "Otimização do fluxo de caixa",
    ],
  },
  {
    name: "FINANCONTA",
    icon: BarChart3,
    services: [
      "Contabilidade geral",
      "Gestão fiscal",
      "Relatórios contabilísticos",
      "Formação profissional",
    ],
  },
  {
    name: "PROSPERA ANGOLA",
    icon: Users,
    services: [
      "Serviços contabilísticos e financeiros",
      "Consultoria personalizada",
      "Educação financeira e cursos",
      "Apoio ao empreendedorismo",
    ],
  },
  {
    name: "GLOBALAUDIT",
    icon: Building2,
    services: [
      "Auditoria interna e externa",
      "Consultoria financeira",
      "Implementação de ERP e soluções tecnológicas",
      "Apoio à gestão empresarial",
    ],
  },
];

export const Consultancies = () => {
  return (
    <section id="consultorias" className="section-padding bg-background">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="label-gold">Consultorias do Grupo</span>
          <h2 className="heading-lg mt-4">
            Empresas que Fazem Parte da <span className="text-gradient">Nexuscont</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Cada empresa do nosso grupo oferece soluções especializadas para atender às diversas necessidades do mercado angolano.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {consultancies.map((company, index) => (
            <motion.div
              key={company.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-premium group"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <company.icon className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">{company.name}</h3>
                  <div className="w-12 h-1 bg-primary mt-2 rounded-full" />
                </div>
              </div>
              <ul className="space-y-3">
                {company.services.map((service, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    {service}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
