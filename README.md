# Lumeria

[![CI](https://github.com/core3techadm/LumeriaEngenharia/actions/workflows/ci.yml/badge.svg)](https://github.com/core3techadm/LumeriaEngenharia/actions/workflows/ci.yml)

Site institucional da Lumeria — soluções em energia fotovoltaica, automação residencial, sonorização, iluminação, projetos elétricos e gestão de obras.

## Acompanhamento do projeto (cliente)

Repositório público para acompanhamento do desenvolvimento:

| O que ver | Link |
|---|---|
| Código e histórico de alterações | [github.com/core3techadm/LumeriaEngenharia](https://github.com/core3techadm/LumeriaEngenharia) |
| Status das verificações automáticas | [GitHub Actions](https://github.com/core3techadm/LumeriaEngenharia/actions) |
| Site publicado (após deploy na Vercel) | _URL será adicionada aqui após o primeiro deploy_ |

**Deploy do site (preview para o cliente):** conecte o repositório na [Vercel](https://vercel.com/new/clone?repository-url=https://github.com/core3techadm/LumeriaEngenharia). Cada atualização na branch `main` gera uma nova versão do site automaticamente.

## Stack

- **Next.js 16** + React 19 + TypeScript
- **Tailwind CSS v4** — design system Lumeria
- **React Three Fiber** — cena 3D no hero
- **GSAP** — animações scroll-driven
- **Framer Motion** — micro-interações
- **Lenis** — scroll suave
- **Web Audio API** — demo de áudio espacial

## Estrutura

```
apps/web/          → Site Next.js
packages/ui/       → Design system (futuro)
Marketing/         → Assets de marca (fonte)
```

## Desenvolvimento

```bash
npm install
npm run dev --workspace=web
```

Acesse [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build --workspace=web
```

## Páginas

| Rota | Descrição |
|---|---|
| `/` | Home com hero 3D e capítulos de serviços |
| `/servicos` | Lista de serviços |
| `/servicos/[slug]` | Detalhe de cada serviço |
| `/sobre` | Sobre a empresa |
| `/projetos` | Portfólio |
| `/contato` | Formulário de contato |

## Próximas fases

- **Fase 2:** PWA + Capacitor (app mobile)
- **Fase 3:** Dashboard de controle + APIs de fabricante
