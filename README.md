# zthedev.com

[Repository](https://github.com/zothsu/zthedev.com)

Personal portfolio and developer website built with Astro, Tailwind CSS, and Alpine.js.

## Tech Stack

* Astro
* Tailwind CSS v4
* Alpine.js
* Astro DB
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

### General

* [ ] Update favicon
* [ ] Decide between SPA or click-through site

### CSS

* [ ] Change neon-cyan to green in global CSS
  * [ ] Update instances of `neon-cyan` to `green`

### Hero

* [ ] Increase size of head img
* [ ] Implement max-width for `ProfileCard`

### Projects

* [ ] Add repo button to modal

### Certifications

* [ ] Add link to hosted certification
  * [ ] [FCC Certification](https://freecodecamp.org/certification/zoe-moment/responsive-web-design)

### Contact

* [ ] Refactor SVG for GH logo #29
* [ ] Refactor SVG for LinkedIn logo #37
* [ ] Add Fediverse Servers
* [ ] Decide on SPA `components/ContactSection.astro` or click-through site `pages/contact.astro` + `components/ContactUs`

### Blog

* Add Blog back onto main menu
* Update blog photos

## Questions for Future Me

Do I want to have a contact page if I have it at the bottom of my front page with a button at the top as well? Feels like a contact page might be a little bit overkill.
