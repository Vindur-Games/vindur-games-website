import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightBlog from "starlight-blog";
import catppuccin from "@catppuccin/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://vindurgames.com",

  integrations: [
    starlight({
      // navbar
      title: "Vindur Games",
      logo: {
        light: "./src/assets/logo-wide-light.svg",
        dark: "./src/assets/logo-wide-dark.svg",
        replacesTitle: true,
      },
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/vindur-games",
        },
        {
          icon: "heart",
          label: "Support us",
          href: "https://donate.stripe.com/00w00i1Gr1VC3PEgsG6kg00",
        },
      ],

      components: {
        Footer: "./src/components/Footer.astro",
      },

      routeMiddleware: "./src/routeData.ts",

      plugins: [
        catppuccin({
          dark: { flavor: "mocha", accent: "flamingo" },
          light: { flavor: "latte", accent: "flamingo" },
        }),

        starlightBlog({
          title: {
            en: "Blog",
            is: "Blogg",
          },

          authors: {
            oli: {
              name: "Óli",
              title: "Silly goose",
              picture: "/gwamp.png",
              url: "https://olafur-andri.github.io",
            },
          },

          metrics: {
            readingTime: true,
            words: false,
          },

          navigation: "none",
        }),
      ],

      // make sure the Geist fonts (and Inter as a fallback) are included and used across the site
      customCss: [
        "@fontsource-variable/geist",
        "@fontsource-variable/geist-mono",
        "@fontsource-variable/inter",
        "./src/styles/custom.css",
      ],

      // i18n
      defaultLocale: "root",
      locales: {
        root: {
          label: "English", // English should be the root language of the website
          lang: "en",
        },
        is: {
          label: "Íslenska",
          lang: "is",
        },
      },
    }),
  ],
});
