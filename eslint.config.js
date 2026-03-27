import eslintPluginAstro from "eslint-plugin-astro";

export default [
    {
        ignores: ["*.mjs"],
    },
    ...eslintPluginAstro.configs.recommended,
    {
        rules: {
            "astro/no-set-html-directive": "error",
        },
    },
];
