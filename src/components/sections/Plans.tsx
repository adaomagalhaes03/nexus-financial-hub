import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";

const plans = [
  {
    name: "Plano Básico",
    description: "Para pequenas empresas e empreendedores individuais",
    features: [
      "Contabilidade mensal básica",
      "Declarações fiscais obrigatórias",
      "Suporte por email",
      "Relatórios trimestrais",
      "Acesso à plataforma online",
    ],
    highlighted: false,
  },
  {
    name: "Plano Empresarial",
    description: "Para médias empresas em crescimento",
    features: [
      "Tudo do Plano Básico",
      "Consultoria financeira mensal",
      "Análise de fluxo de caixa",
      "Suporte prioritário",
      "Relatórios mensais personalizados",
      "Planeamento tributário",
      "Formação para equipa financeira",
    ],
    highlighted: true,
  },
  {
    name: "Plano Premium",
    description: "Para grandes empresas e grupos empresariais",
    features: [
      "Tudo do Plano Empresarial",
      "Auditoria interna trimestral",
      "Consultoria estratégica",
      "Gestor de conta dedicado",
      "Implementação de ERP",
      "Formação ilimitada",
      "Estudos de viabilidade",
      "Suporte 24/7",
    ],
    highlighted: false,
  },
];

export const Plans = () => {
  return (
    <section id="planos" className="section-padding bg-secondary/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="label-gold">Planos e Serviços</span>
          <h2 className="heading-lg mt-4">
            Escolha o Plano <span className="text-gradient">Ideal</span> para Si
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Oferecemos soluções flexíveis adaptadas às necessidades de cada empresa, desde startups até grandes corporações.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`relative rounded-2xl p-8 ${
                plan.highlighted
                  ? "bg-primary text-primary-foreground border-2 border-primary scale-105"
                  : "bg-card border border-border/30"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary-foreground text-primary px-4 py-1 rounded-full text-sm font-semibold">
                  Mais Popular
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className={`text-sm ${plan.highlighted ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <Check className={`w-5 h-5 flex-shrink-0 ${plan.highlighted ? "text-primary-foreground" : "text-primary"}`} />
                    <span className={`text-sm ${plan.highlighted ? "text-primary-foreground/90" : "text-foreground"}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300 ${
                  plan.highlighted
                    ? "bg-primary-foreground text-primary hover:opacity-90"
                    : "btn-outline"
                }`}
              >
                Solicitar Proposta
                <ArrowRight size={18} />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
