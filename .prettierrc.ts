import { type Config } from "prettier";

const config: Config = {
  // General formatting options
  printWidth: 100,
  proseWrap: "always",

  // Astro-specific formatting options
  astroAllowShorthand: true,

  // add the Astro plugin
  plugins: ["prettier-plugin-astro"],

  // tell Prettier to use the Astro parser for .astro files
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};

export default config;
