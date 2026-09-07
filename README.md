# zthedev.com

[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg)](https://github.com/richardlitt/standard-readme)
[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](LICENSE)

> Personal portfolio and developer website, built with Astro, Tailwind CSS, and Alpine.js.

[Repository](https://github.com/zothsu/zthedev.com) · [Live site](https://zthedev.com)

## Table of Contents

- [Background](#background)
- [Tech Stack](#tech-stack)
- [Install](#install)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Background

This repo is the source for zthedev.com — a personal portfolio site covering projects, certifications, an about page, and a blog. It's scoped as a portfolio only; there's no services/sales content here (that lives on a separate site).

## Tech Stack

- [Astro](https://astro.build/) — static site generation and routing
- [Tailwind CSS v4](https://tailwindcss.com/) — styling
- [Alpine.js](https://alpinejs.dev/) — lightweight interactivity
- [Splide.js](https://splidejs.com/) — carousels

## Install

Requires Node.js `>=22.12.0`.

```bash
npm install
```

## Usage

Start the local dev server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Project Structure

```text
src/
├── components/    # Astro components (sections, shared UI under components/ui/)
├── data/          # Static content (e.g. blog post metadata)
├── layouts/       # Page layouts
├── pages/         # File-based routes
├── styles/        # Tailwind entry point and bundled fonts
└── turso.ts       # Turso (libSQL) client, for future backend use
public/
└── img/           # Static images, favicons
```

## Deployment

Pushes to `main` trigger [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which builds the site and deploys it to Hostinger over `rsync` via SSH. The blog is excluded from production deploys and from the sitemap (see `astro.config.mjs`), so it's only reachable in local/preview builds.

To deploy manually:

```bash
npm run build
rsync -avz --delete --exclude 'blogs/' dist/ your_user@your_server_ip:/home/your_user/public_html/
```

Hostinger shared hosting SSH port is typically `65002`:

```bash
ssh -p 65002 your_user@your_server_ip
```

## Contributing

This is a personal portfolio site and isn't set up to accept outside contributions. Feel free to open an issue if you spot a bug.

## License

[GNU AGPL v3.0](LICENSE) © Zoe Sullivan

The bundled fonts under `src/styles/font/` (Nerd Fonts, Ubuntu Mono) are licensed separately under the [SIL Open Font License 1.1](src/styles/font/LICENSE.md).
