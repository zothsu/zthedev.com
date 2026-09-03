// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
// https://astro.build/config
export default defineConfig({
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