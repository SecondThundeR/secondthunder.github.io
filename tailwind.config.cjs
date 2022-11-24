/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            colors: {
                accent: {
                    light: "rgb(179, 30, 87)",
                    "light-hover": "rgb(240, 42, 118)",
                    dark: "rgb(230, 115, 159)",
                    "dark-hover": "rgb(184, 62, 108)",
                },
                dimmed: {
                    light: "rgba(0, 0, 0, 0.7);",
                    dark: "rgba(255, 255, 255, 0.7);",
                },
                social: {
                    light: "rgba(255, 255, 255, 0.8);",
                    dark: "rgba(0, 0, 0, 0.8);",
                    vk: "#0077FF",
                    telegram: "#54A9EB",
                    ig: {
                        start: "#833AB4",
                        middle: "#F56040",
                        end: "#FFDC80",
                    },
                    twitter: "#1D9BF1",
                    discord: "#5765F3",
                    lastfm: "#D60603",
                    github: "#181515",
                    codestats: "#3E4053",
                    spotify: "#1CD760",
                    playlist: {
                        start: "rgba(255, 157, 157, 1)",
                        end: "rgba(255, 46, 99, 1)",
                    },
                },
                background: {
                    light: "rgb(255, 255, 255)",
                    dark: "rgb(18, 18, 18)",
                },
            },
        },
        fontFamily: {
            custom: ["Ubuntu", "sans-serif"],
        },
    },
    plugins: [],
};
