# Colonia Project

![Vite, Vue, Tailwind CSS](https://user-images.githubusercontent.com/11320080/111277027-a9384c00-8640-11eb-8323-21889bd7c609.png)

## Stack
- Vue 3
- Vuex 4
- [Vue Router 4.x](https://github.com/vuejs/vue-router-next)
- [Inter var font](https://github.com/rsms/inter) (self-hosted, woff2, v3.19, with 'preload' attr, check out index.html)
- [Just-in-Time](https://tailwindcss.com/docs/just-in-time-mode) mode by default introduced in Tailwind CSS v2.1 (in preview!)
- [Headless UI](https://headlessui.dev/vue/menu) - unstyled, fully accessible UI components, designed to integrate beautifully with Tailwind CSS
- [Heroicons](https://github.com/tailwindlabs/heroicons#vue) - beautiful hand-crafted SVG icons,
by the makers of Tailwind CSS

First-party plugins needed for Tailwind UI:

- [tailwindcss/forms](https://github.com/tailwindlabs/tailwindcss-forms)
- [tailwindcss/typography](https://github.com/tailwindlabs/tailwindcss-typography)
- [tailwindcss/line-clamp](https://github.com/tailwindlabs/tailwindcss-line-clamp)
- [tailwindcss/aspect-ratio](https://github.com/tailwindlabs/tailwindcss-aspect-ratio)

## Staging

- Site URL: https://eb-staging-4239d.web.app/
- Build from `develop`

### Development 🚀

```sh
yarn install
yarn dev
```

Note: if you can't run it (see some errors), then try this command `npx webpack` then try again.

### Production Build 🚀🚀
```sh
yarn build
```

#### Bonus links
- [Enabling https on localhost](https://github.com/web2033/vite-vue3-tailwind-starter/discussions/112) (dev notes)
- [Vite dev server with netlify dev support](https://github.com/web2033/vite-vue3-tailwind-starter/discussions/113) (dev notes)
- [vue-tailwindcss-cdn](https://github.com/web2033/vue-tailwindcss-cdn) (a single HTML file with CDN links)
- [CodePen Template](https://codepen.io/web2033/pen/QWNbwxY) with a similar stack (Vue 3.x + Tailwind 2.x + Inter var font)
- [base.css](https://github.com/web2033/base.css) (base styles for Tailwind CSS and other projects as an NPM package)
- [Pinia](https://pinia.esm.dev/introduction.html) - state-management alternative to Vuex 4 with a similar to upcoming Vuex 5 API
- [VueUse](https://vueuse.org/functions.html) - collection of essential Vue Composition Utilities
