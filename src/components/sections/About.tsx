import { motion } from "framer-motion";
import { Target, Eye, Heart, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const values = [
  { icon: Target, title: "Missão", description: "Oferecer soluções financeiras e contabilísticas de excelência, contribuindo para o crescimento sustentável das empresas e a literacia financeira em Angola." },
  { icon: Eye, title: "Visão", description: "Ser a referência em consultoria financeira e educação empresarial em Angola, reconhecida pela qualidade, inovação e impacto positivo na economia." },
  { icon: Heart, title: "Valores", description: "Integridade, Excelência, Inovação, Compromisso com o Cliente e Responsabilidade Social." },
];

const highlights = [
  "Equipa multidisciplinar altamente qualificada",
  "Mais de 10 anos de experiência no mercado angolano",
  "Soluções personalizadas para cada tipo de negócio",
  "Acompanhamento contínuo e suporte dedicado",
];

export const About = () => {
  return (
    <section id="sobre" className="section-padding bg-secondary/30">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/10 rounded-2xl blur-2xl" />
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-border/30">
                <img
                  src={heroImage}
                  alt="Nexuscont Corporate Team"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Experience Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-lg"
              >
                <p className="text-4xl font-bold">10+</p>
                <p className="text-sm">Anos de Experiência</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <span className="label-gold">Sobre Nós</span>
              <h2 className="heading-lg mt-4">
                Conheça a <span className="text-gradient">Nexuscont Corporate</span>
              </h2>
            </div>

            <p className="text-muted-foreground leading-relaxed text-lg">
              A <strong className="text-foreground">Nexuscont Corporate</strong> é um grupo de consultoria especializado em contabilidade, finanças, auditoria e educação financeira, com atuação focada no crescimento sustentável das empresas e no fortalecimento da literacia financeira em Angola.
            </p>

            <div className="space-y-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </motion.div>
              ))}
            </div>

            <a href="#contacto" className="btn-primary inline-flex items-center gap-2">
              Fale Connosco
            </a>
          </motion.div>
        </div>

        {/* Mission, Vision, Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-3 gap-8 mt-24"
        >
          {values.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="card-premium text-center"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <item.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
