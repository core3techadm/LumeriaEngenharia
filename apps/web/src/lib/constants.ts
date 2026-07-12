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
  { href: "/servicos", label: "Soluções" },
  { href: "/projetos", label: "Projetos" },
  { href: "/sobre", label: "Sobre" },
  { href: "/contato", label: "Contato" },
] as const;

export const SERVICES = [
  {
    id: "fotovoltaica",
    title: "Energia solar fotovoltaica",
    subtitle: "Etapa energia solar",
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
      "Áudio e segurança integrados",
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
    ],
  },
  {
    id: "projetos-eletricos",
    title: "Projetos elétricos",
    subtitle: "Segurança e conformidade técnica",
    description:
      "Desenvolvimento de projetos elétricos completos, com foco em segurança, organização, conformidade técnica e excelência na execução.",
    href: "/servicos/projetos-eletricos",
    accent: "slate",
    icon: "⚡",
    features: [
      "Projetos elétricos completos",
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
    ],
  },
] as const;
