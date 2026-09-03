// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
// https://astro.build/config
export default defineConfig({
  site: 'https://zthedev.com',
  integrations: [
    sitemap({
      // The blog is excluded from production deploys (see
      // .github/workflows/deploy.yml), so keep it out of the sitemap too.
      filter: (page) => !page.includes('/blogs'),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  security: {
    // Dev-server only (this project has no SSR adapter): allows cross-origin
    // subresource requests, e.g. from Polypane's multi-pane preview, which
    // otherwise get 403'd by Astro's Sec-Fetch-Site dev hardening.
    allowedDomains: [{}],
  },
});