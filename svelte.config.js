import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: vitePreprocess(),

    kit: {
        adapter: adapter({
            pages: "build",
            assets: "build",
            fallback: "index.html", // Use fallback if necessary for SPA-like behavior
            precompress: false,
            strict: true
        }),
        prerender: {
            entries: ['*'],
            handleHttpError: 'warn'
        },
        paths: {
            base: process.env.NODE_ENV === 'production' ? '/postit.github.io' : ''  // Replace 'project2' with your repo name
        },
    },
};

export default config;
