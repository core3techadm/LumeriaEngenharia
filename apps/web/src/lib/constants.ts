export const BRAND = {
  name: "Lumeria Soluções",
  shortName: "Lumeria",
  tagline: "Inteligência, tecnologia e excelência para seu projeto.",
  description:
    "A Lumeria desenvolve projetos pensados para transformar ambientes com inteligência, desempenho e segurança. Da geração de energia à automação, da iluminação à gestão da obra, cada solução é personalizada para entregar mais conforto, valor e funcionalidade.",
  email: "contato@lumeria.com.br",
  phone: "+55 (48) 0000-0000",
  city: "Santa Catarina, Brasil",
} as const;

export const NAV_LINKS = [
  { href: "/#solucoes", label: "Soluções" },
  { href: "/#pratica", label: "Na prática" },
  { href: "/#metodologia", label: "Metodologia" },
  { href: "/projetos", label: "Projetos" },
  { href: "/sobre", label: "Sobre" },
] as const;

export const HOME_HERO = {
  headline: "Seu ambiente.",
  headlineAccent: "Sua energia.",
  subheadline:
    "Cada projeto responde à sua rotina: gera economia, automatiza, ilumina e prepara o espaço para funcionar do jeito certo.",
  ctaPrimary: { label: "Ver soluções", href: "/#solucoes" },
  ctaSecondary: { label: "Solicitar orçamento", href: "/contato" },
} as const;

export const HOME_VALUE = {
  title: "Seu projeto funcionando do jeito que deveria",
  subtitle: "Tecnologia não é complicação. É organização, conforto e economia.",
  benefits: [
    "Energia solar dimensionada para o seu consumo real",
    "Automação que integra iluminação, clima e segurança",
    "Sonorização e iluminação pensadas para cada ambiente",
    "Projetos elétricos com segurança e conformidade",
    "Gestão de obra com prazos e qualidade sob controle",
    "Tudo funcionando em conjunto, sem esforço desnecessário",
  ],
  cta: { label: "Quero transformar meu ambiente", href: "/contato" },
} as const;

export const HOME_PRACTICE = {
  title: "O que muda na prática?",
  subtitle:
    "Veja como soluções integradas se adaptam à sua rotina — da conta de luz ao conforto do dia a dia.",
  scenarios: [
    {
      title: "Conta de luz que faz sentido",
      description:
        "Energia solar dimensionada com estudo real de consumo e radiância — economia que você acompanha mês a mês.",
    },
    {
      title: "Casa pronta quando você chega",
      description:
        "Climatização, iluminação e cenários configurados para receber você no ambiente ideal.",
    },
    {
      title: "Ambientes que impressionam",
      description:
        "Sonorização e iluminação projetadas para valorizar cada espaço — sem tecnologia aparente.",
    },
    {
      title: "Obra sem surpresas",
      description:
        "Gestão com planejamento, prazos e qualidade — você acompanha, nós coordenamos.",
    },
  ],
  cta: { label: "Avaliar meu projeto", href: "/contato" },
} as const;

export const HOME_AUDIENCE = {
  intro:
    "Se você passa mais tempo resolvendo a casa do que aproveitando ela, talvez chegou a hora de repensar o projeto.",
  painPoints: [
    "Ligar e desligar luzes manualmente em vários ambientes",
    "Conta de energia que não para de subir",
    "Obra sem acompanhamento e prazos estourando",
    "Sistemas desconectados que não conversam entre si",
    "Reformar sem planejar iluminação e automação antes",
    "Quando percebe, está administrando a casa em vez de viver nela",
  ],
  forYou: [
    "Construiu ou reformou pensando no longo prazo",
    "Quer aproveitar o ambiente, não administrá-lo",
    "Valoriza que as coisas simplesmente funcionem",
    "Busca economia, conforto e valorização do imóvel",
  ],
  notForYou: [
    "Usa o imóvel esporadicamente e não se importa com eficiência",
    "Prefere resolver tudo manualmente, sem integração",
    "Não está disposto a investir em planejamento antes da obra",
  ],
  cta: {
    label: "Conversar sobre meu projeto",
    description: "Uma conversa rápida para entender sua rotina e a fase do projeto.",
    href: "/contato",
  },
} as const;

export const HOME_METHODOLOGY = {
  title: "Como funciona o projeto",
  subtitle: "Metodologia",
  steps: [
    {
      number: "01",
      title: "Conversa inicial",
      description: "Entendemos rotina, imóvel e momento da obra ou reforma.",
    },
    {
      number: "02",
      title: "Estudo técnico",
      description:
        "Avaliamos consumo, estrutura e possibilidades reais — nem sempre tudo vale a pena de uma vez.",
    },
    {
      number: "03",
      title: "Projeto personalizado",
      description:
        "A solução é desenhada para o seu espaço — não adaptamos o ambiente ao sistema.",
    },
    {
      number: "04",
      title: "Execução acompanhada",
      description:
        "Integração com eletricista, arquiteto e demais profissionais da obra.",
    },
    {
      number: "05",
      title: "Entrega assistida",
      description: "Você aprende a usar no primeiro dia. Sem manuais técnicos.",
    },
    {
      number: "06",
      title: "Suporte contínuo",
      description: "O projeto não fica por sua conta depois da entrega.",
    },
  ],
} as const;

export const HOME_FAQ = [
  {
    question: "Vale a pena instalar energia solar agora?",
    answer:
      "Depende do seu perfil de consumo, da orientação do telhado e da fase da obra. Fazemos um estudo de caso gratuito para dimensionar o retorno real do investimento antes de qualquer decisão.",
  },
  {
    question: "Preciso reformar tudo para ter automação?",
    answer:
      "Não necessariamente. Avaliamos o que já existe e o que faz sentido integrar. Em obras novas, o ideal é planejar antes — mas também atendemos retrofit em imóveis prontos.",
  },
  {
    question: "E se eu vender o imóvel depois?",
    answer:
      "Soluções bem projetadas valorizam o imóvel. Energia solar, automação e projetos elétricos conformes são diferenciais reais na hora da venda.",
  },
  {
    question: "Fica difícil de usar no dia a dia?",
    answer:
      "Não. Priorizamos interfaces simples e entrega assistida — você aprende a operar tudo no primeiro dia, sem depender de manuais técnicos.",
  },
  {
    question: "Vou ficar dependente da Lumeria depois?",
    answer:
      "Não. Entregamos autonomia total. O suporte contínuo existe para quando você precisar, não para criar dependência.",
  },
] as const;

export const HOME_FINAL_CTA = {
  title: "A maioria só percebe que o projeto estava dando trabalho depois que para de dar.",
  subtitle:
    "Se quiser entender se já chegou esse momento para o seu ambiente, podemos olhar juntos — sem compromisso e sem pressa.",
  cta: { label: "Quero entender melhor", href: "/contato" },
} as const;

export const SERVICES = [
  {
    id: "fotovoltaica",
    title: "Energia solar fotovoltaica",
    subtitle: "Etapa energia solar",
    videoId: "WKnISv7QvwE",
    description:
      "Projetos de energia solar que reduzem custos, aumentam a eficiência energética e promovem uma fonte limpa e sustentável para residências e empresas. Em cada estudo de caso, analisamos seu perfil de consumo e as condições de radiância em seu imóvel, com projeto 3D em softwares específicos de eficiência fotovoltaica. Calculamos o resultado esperado e entregamos equipamentos específicos para atender sua necessidade.",
    href: "/servicos/fotovoltaica",
    accent: "gold",
    icon: "☀️",
    features: [
      "Estudo de caso: perfil de consumo e radiância no imóvel",
      "Projeto 3D em software de eficiência fotovoltaica",
      "Dimensionamento e equipamentos sob medida",
      "Sistemas ON-GRID",
      "Sistemas OFF-GRID",
      "Sistemas híbridos com armazenamento",
    ],
  },
  {
    id: "automacao",
    title: "Automação residencial",
    subtitle: "Conforto e integração total",
    description:
      "Tecnologia para controlar iluminação, climatização, áudio, segurança e outros sistemas com praticidade, conforto e integração total ao seu ambiente.",
    href: "/servicos/automacao",
    accent: "sage",
    icon: "🏠",
    features: [
      "Iluminação e climatização",
      "Aspiração central",
      "Monitoramento de consumo de energia",
      "Home Theater",
      "Painel de Led",
      "Sonorização de ambientes",
      "Segurança interna",
      "Controle centralizado",
    ],
  },
  {
    id: "sonorizacao",
    title: "Sonorização de alta performance",
    subtitle: "Experiências sonoras imersivas",
    description:
      "Soluções de áudio com qualidade superior para criar experiências mais imersivas, elegantes e funcionais em diferentes tipos de espaços.",
    href: "/servicos/sonorizacao",
    accent: "leaf",
    icon: "🔊",
    features: [
      "Qualidade superior de áudio",
      "Experiências imersivas",
      "Diferentes tipos de espaços",
      "Salas de conferência",
    ],
  },
  {
    id: "luminotecnico",
    title: "Projetos luminotécnicos",
    subtitle: "Luz que valoriza cada ambiente",
    description:
      "Estudos de iluminação que valorizam arquitetura, conforto visual e estética, equilibrando beleza, eficiência e desempenho em cada ambiente.",
    href: "/servicos/luminotecnico",
    accent: "mint",
    icon: "💡",
    features: [
      "Valorização da arquitetura",
      "Conforto visual e estética",
      "Beleza com eficiência",
      "Ênfase em fachadas e design imobiliário",
    ],
  },
  {
    id: "projetos-eletricos",
    title: "Projetos elétricos Residenciais",
    subtitle: "Segurança e conformidade técnica",
    description:
      "Desenvolvimento de projetos elétricos completos, com foco em segurança, organização, conformidade técnica e excelência na execução.",
    href: "/servicos/projetos-eletricos",
    accent: "slate",
    icon: "⚡",
    features: [
      "Projetos elétricos e distribuição de cargas",
      "Cálculo padrão de entrada",
      "Projetos de rede cabeada e WI-FI",
      "Segurança e organização",
      "Conformidade técnica",
    ],
  },
  {
    id: "gestao-obras",
    title: "Gestão de obras",
    subtitle: "Eficiência em cada etapa",
    description:
      "Coordenação e acompanhamento de obras com foco em planejamento, organização, prazos e qualidade na entrega, garantindo mais eficiência em cada etapa.",
    href: "/servicos/gestao-obras",
    accent: "sage",
    icon: "📋",
    features: [
      "Planejamento e organização",
      "Controle de prazos",
      "Qualidade na entrega",
      "Mapeamento de custos",
    ],
  },
] as const;
