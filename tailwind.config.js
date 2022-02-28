/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: [
        "IBM Plex Sans",
        "-apple-system",
        "BlinkMacSystemFont",
        "Segoe UI",
        "Roboto",
        "Helvetica",
        "Arial",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol"
      ],
    },
    extend: {
      colors: {
        surface: {
          '0': '#f6f6f6',
          '1': '#eeeeee',
          '2': '#777777',
          '3': '#363636',
          '4': '#181819',
        },
        font: {
          'primary': '#111827',
          'secondary1': '#595959',
          'secondary2': '#6b7280',
          'secondary3': '#d9dce1',
        },
        info: '#4f46e5',
      },
      fontSize: {
        '4.5xl': ['2.5rem', '2.75rem'],
      },
      height: {
        '25': '6.25rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
