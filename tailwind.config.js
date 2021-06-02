module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        third: 'var(--third)',
        fourth: 'var(--fourth)',
        green: 'var(--green)',
        yellow: 'var(--yellow)'
      },
      fontFamily: {
        nunito: ['Nunito']
      }
    }
  },
  variants: {
    extend: {}
  },
  corePlugins: {
    container: false
  },
  plugins: [
    require('tailwind-bootstrap-grid')({
      containerMaxWidths: { sm: '540px', md: '720px', lg: '960px', xl: '1140px' }
    })
  ]
}
