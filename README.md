# Felipe P. dos Santos — AI / LLM Engineer

Página para recrutadores. O visual segue o site da Leemia: tipografia grande, tema claro/escuro e movimento com GSAP. Na capa, o retrato recortado (`public/felipe-hero-bw.webp`) reage ao mouse e o nome corre por cima dele. O conteúdo é o Felipe, AI Engineer Sênior e aberto a novos projetos.

## Stack

Next.js 16, React 19, TypeScript, Tailwind CSS v4, GSAP e Lenis.

## Rodando localmente

```bash
npm install
npm run dev
```

Abre em [http://localhost:3000](http://localhost:3000). O português fica em `/pt` e o inglês em `/en`.

O botão baixa o currículo: `public/cv-pt.pdf` na página em português e `public/cv-en.pdf` na página em inglês.

## Ícone e capa de compartilhamento

O favicon fica em `src/app/` (`favicon.ico`, `icon.svg` e `apple-icon.png`). A capa que aparece quando o link é enviado no WhatsApp, no LinkedIn etc. é `public/og/cover-pt.jpg` na página em português e `public/og/cover-en.jpg` na página em inglês. Para mudar o texto dela, edite `scripts/og-cover/cover.html` e gere de novo (precisa do Chrome ou do Edge instalado):

```bash
node scripts/og-cover/render.mjs
```
