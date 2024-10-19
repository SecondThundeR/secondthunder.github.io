// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

export default defineConfig({
    integrations: [
        tailwind({
            applyBaseStyles: false,
        }),
    ],
    site: "https://secondthunder.github.io",
});
