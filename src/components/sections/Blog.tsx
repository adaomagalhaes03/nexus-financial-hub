import { motion } from "framer-motion";
import { ArrowRight, Clock, User } from "lucide-react";

const articles = [
  {
    category: "Educação Financeira",
    title: "Como Melhorar a Gestão de Fluxo de Caixa na Sua Empresa",
    excerpt: "Descubra as melhores práticas para otimizar o fluxo de caixa e garantir a saúde financeira do seu negócio.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
    author: "Ruth Matias",
    readTime: "5 min",
  },
  {
    category: "Contabilidade e Fiscalidade",
    title: "Novas Alterações Fiscais em Angola para 2024",
    excerpt: "Fique a par das principais mudanças na legislação fiscal que podem impactar a sua empresa.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&fit=crop",
    author: "João Manuel",
    readTime: "7 min",
  },
  {
    category: "Gestão e Negócios",
    title: "Estratégias de Crescimento Sustentável para PMEs",
    excerpt: "Aprenda a expandir o seu negócio de forma sustentável e com riscos controlados.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    author: "Carlos André",
    readTime: "6 min",
  },
];

export const Blog = () => {
  return (
    <section id="blog" className="section-padding bg-secondary/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16"
        >
          <div>
            <span className="label-gold">Blog & Insights</span>
            <h2 className="heading-lg mt-4">
              Conteúdos que <span className="text-gradient">Educam e Inspiram</span>
            </h2>
          </div>
          <a
            href="#"
            className="btn-outline inline-flex items-center gap-2 w-fit"
          >
            Ver Todos os Artigos
            <ArrowRight size={18} />
          </a>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.article
              key={article.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="card-premium group overflow-hidden p-0"
            >
              <div className="relative overflow-hidden aspect-[3/2]">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                    {article.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                  {article.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <User size={14} />
                    <span>{article.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={14} />
                    <span>{article.readTime}</span>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
