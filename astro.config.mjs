// @ts-check

// Cloudflare Pages adapter:
// This ensures Astro builds for Cloudflare’s runtime (Workers).
// Without this, Cloudflare Pages would not understand the output.
import cloudflare from "@astrojs/cloudflare";

import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, fontProviders } from "astro/config";
import reactCompilerPlugin from "babel-plugin-react-compiler";

// Cloudflare Pages automatically injects `URL` during production builds.
// This replaces the old Netlify-specific variables (CONTEXT, DEPLOY_PRIME_URL).
// In local dev, fallback to localhost.
const SITE_URL = process.env.URL || "http://localhost:4321";

export default defineConfig({
  // Used by sitemap, SEO tags, and absolute URL generation.
  site: SITE_URL,

  // Vite configuration (Tailwind plugin)
  vite: {
    plugins: [tailwindcss()],
  },

  // Google Fonts provider (Astro 6+)
  fonts: [
    {
      name: "Poppins",
      cssVariable: "--font-poppins",
      provider: fontProviders.google(),
    },
  ],

  // Astro integrations
  integrations: [
    // react({
    //   babel: {
    //     plugins: [reactCompilerPlugin],
    //   },
    // }),
  react(),
    sitemap(),
  ],

  // Cloudflare adapter:
  // This tells Astro to output Cloudflare-compatible functions and routing.
  // Required for Cloudflare Pages + API routes + dynamic routes.
  adapter: cloudflare(),
});