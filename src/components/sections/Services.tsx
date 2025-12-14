import { motion } from "framer-motion";
import { Calculator, TrendingUp, GraduationCap, FileText, PieChart, Building, Scale, BookOpen } from "lucide-react";

const mainServices = [
  {
    icon: Calculator,
    title: "Consultoria Contabilística",
    description: "Planeamento contabilístico, fiscal e conformidade legal para garantir a saúde financeira da sua empresa.",
  },
  {
    icon: TrendingUp,
    title: "Consultoria Financeira",
    description: "Gestão financeira estratégica, análise de rentabilidade e otimização do fluxo de caixa.",
  },
  {
    icon: GraduationCap,
    title: "Educação Financeira",
    description: "Cursos, formações e capacitação profissional online e presencial para equipas e empreendedores.",
  },
];

const solutions = [
  { icon: FileText, title: "Auditoria e Contabilidade" },
  { icon: PieChart, title: "Planeamento Financeiro Estratégico" },
  { icon: Scale, title: "Gestão Fiscal e Tributária" },
  { icon: Building, title: "Estudos de Viabilidade Económica" },
  { icon: BookOpen, title: "Formação Profissional e Corporativa" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export const Services = () => {
  return (
    <section id="servicos" className="section-padding bg-background">
      <div className="container-custom">
        {/* Main Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="label-gold">Áreas de Atuação</span>
          <h2 className="heading-lg mt-4">
            Soluções Completas para o Seu <span className="text-gradient">Negócio</span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 mb-24"
        >
          {mainServices.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="card-premium group"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Solutions Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="label-gold">Nossas Soluções</span>
          <h2 className="heading-md mt-4">
            Cresça com as Nossas <span className="text-gradient">Soluções</span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4"
        >
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              variants={itemVariants}
              className="bg-secondary/50 border border-border/30 rounded-xl p-6 text-center hover:bg-secondary hover:border-primary/30 transition-all duration-300 group"
            >
              <solution.icon className="w-8 h-8 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <p className="text-sm font-medium text-foreground">{solution.title}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
