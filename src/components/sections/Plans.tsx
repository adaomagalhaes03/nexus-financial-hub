import { motion } from "framer-motion";
import { Check, ArrowRight, X } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";

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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleOpenModal = (planName: string) => {
    setSelectedPlan(planName);
    setIsModalOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsModalOpen(false);
    setFormData({ name: "", email: "", phone: "", company: "", message: "" });
    toast({
      title: "Proposta enviada com sucesso!",
      description: "Entraremos em contacto brevemente.",
    });
  };

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
                onClick={() => handleOpenModal(plan.name)}
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

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-[500px] bg-card border-border">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-foreground">
              Solicitar Proposta - <span className="text-primary">{selectedPlan}</span>
            </DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4 mt-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-foreground">Nome Completo</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Seu nome"
                required
                className="bg-background border-border"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground">Email</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="seu@email.com"
                required
                className="bg-background border-border"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-foreground">Telefone</Label>
              <Input
                id="phone"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+244 XXX XXX XXX"
                required
                className="bg-background border-border"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="company" className="text-foreground">Empresa</Label>
              <Input
                id="company"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                placeholder="Nome da sua empresa"
                className="bg-background border-border"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message" className="text-foreground">Mensagem (opcional)</Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Descreva suas necessidades..."
                rows={3}
                className="bg-background border-border"
              />
            </div>
            <button
              type="submit"
              className="w-full btn-primary py-3 rounded-lg font-semibold"
            >
              Enviar Proposta
            </button>
          </form>
        </DialogContent>
      </Dialog>
    </section>
  );
};