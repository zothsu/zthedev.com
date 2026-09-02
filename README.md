# zthedev.com

[Repository](https://github.com/zothsu/zthedev.com)

Personal portfolio and developer website built with Astro, Tailwind CSS, and Alpine.js.

## Tech Stack

* Astro
* Tailwind CSS v4
* Alpine.js
* Splide.js

## Installation

```bash
npm install
```

Start the development server:

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

## Deployment to Hostinger via SSH

Build the project first:

```bash
npm run build
```

Copy the `dist/` directory to your server using `rsync`:

```bash
rsync -avz --delete dist/ your_user@your_server_ip:/home/your_user/public_html/
```

Or using `scp`:

```bash
scp -r dist/* your_user@your_server_ip:/home/your_user/public_html/
```

To connect directly via SSH:

```bash
ssh your_user@your_server_ip
```

Hostinger shared hosting SSH port is typically `65002`:

```bash
ssh -p 65002 your_user@your_server_ip
```

## TODO

### Contact

* [ ] Stand up a working backend for the contact form (currently disabled on both `/` and `/contact` with a "temporarily unavailable" notice)
* [ ] Replace placeholder social links (`#`) in `ContactUs.astro` with real profile URLs
* [ ] Refactor SVG for GH logo #29
* [ ] Refactor SVG for LinkedIn logo #37
* [ ] Add Fediverse Servers

### Projects

* [ ] Add repo button to modal

### Certifications

* [ ] Add link to hosted certification
  * [ ] [FCC Certification](https://freecodecamp.org/certification/zoe-moment/responsive-web-design)

### Blog

* [ ] Update blog photos

## Questions for Future Me

Do I want to have a contact page if I have it at the bottom of my front page with a button at the top as well? Feels like a contact page might be a little bit overkill.
