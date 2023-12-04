const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  latex: true,
  flexsearch: {
    codeblocks: false
  },
  defaultShowCopyCode: true,
})

module.exports = withNextra({
  reactStrictMode: true,
  i18n: {
    locales: ["es"],
    defaultLocale: "es",
  },
  eslint: {
    // Eslint behaves weirdly in this monorepo.
    ignoreDuringBuilds: true
  },
  webpack(config) {
    // const allowedSvgRegex = /components\/icons\/.+\.svg$/

    // const fileLoaderRule = config.module.rules.find(rule =>
    //   rule.test?.test('.svg')
    // )
    // fileLoaderRule.exclude = allowedSvgRegex

    // config.module.rules.push({
    //   test: allowedSvgRegex,
    //   use: ['@svgr/webpack']
    // })

    return config
  },
  async redirects() {
    return [
      {
        source: '/feed.xml',
        destination: '/',
        permanent: true,
      },
      {
        source: '/python/conceptos/tipos-de-datos',
        destination: '/python/tipos-de-datos',
        permanent: true,
      },
      {
        source: '/python/conceptos/variables',
        destination: '/python/variables',
        permanent: true,
      },
      {
        source: '/python/conceptos/expresiones-logicas',
        destination: '/python/expresiones-logicas',
        permanent: true,
      },
      {
        source: '/python/conceptos/funciones-y-metodos',
        destination: '/python/funciones-y-metodos',
        permanent: true,
      },
      {
        source: '/python/conceptos/otros',
        destination: '/python/conceptos',
        permanent: true,
      },
      {
        source: '/python/primer-programa/tipeado-compilacion-testing',
        destination: '/python/primer-programa',
        permanent: true,
      },
      {
        source: '/python/primer-programa/estructura-basica',
        destination: '/python/primer-programa',
        permanent: true,
      },
      {
        source: '/python/primer-programa/primer-programa',
        destination: '/python/primer-programa',
        permanent: true,
      },
      {
        source: '/python/primer-programa/comentarios',
        destination: '/python/primer-programa',
        permanent: true,
      },
      {
        source: '/python/primer-programa/caso-de-error',
        destination: '/python/primer-programa',
        permanent: true,
      },
      {
        source: '/python/estructuras-de-control',
        destination: '/python/condicionales',
        permanent: true,
      },
      {
        source: '/python/estructuras-de-control/condicionales',
        destination: '/python/condicionales',
        permanent: true,
      },
      {
        source: '/python/estructuras-de-control/bucles',
        destination: '/python/bucles',
        permanent: true,
      },
      {
        source: '/python/estructuras-de-control/expresiones-asignacion',
        destination: '/python/expresiones-asignacion',
        permanent: true,
      },
      {
        source: '/python/archivos/leer-archivo',
        destination: '/python/archivos',
        permanent: true,
      },
      {
        source: '/python/archivos/escribir-archivo',
        destination: '/python/archivos',
        permanent: true,
      },
      {
        source: '/python/archivos/generar-archivo',
        destination: '/python/archivos',
        permanent: true,
      },
    ];
  },
})
