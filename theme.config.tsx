import { useRouter } from 'next/router'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { useConfig } from 'nextra-theme-docs'
import Link from 'next/link'

const logo = (
  <span>
    <span className='text-2xl'>Esdocu</span>
    <style jsx>{`
      span {
        padding: 0.5rem 0.5rem 0.5rem 0;
        mask-image: linear-gradient(
          60deg,
          black 25%,
          rgba(0, 0, 0, 0.2) 50%,
          black 75%
        );
        mask-size: 400%;
        mask-position: 0%;
      }
      span:hover {
        mask-position: 100%;
        transition:
          mask-position 1s ease,
          -webkit-mask-position 1s ease;
      }
    `}</style>
  </span>
)

const footer = (
  <div className="w-full flex flex-col items-center">
    <div className="mb-4 text-sm">
      <Link className="inline sm:hidden" href="/politica-de-cookies">
        Cookies
      </Link>
      <Link className="hidden sm:inline" href="/politica-de-cookies">
        Políticas de Cookies
      </Link>
      <span className="mx-2">|</span>
      <Link className="inline sm:hidden" href="/politica-de-privacidad">
        Privacidad
      </Link>
      <Link className="hidden sm:inline" href="/politica-de-privacidad">
        Políticas de Privacidad
      </Link>
      <span className="mx-2">|</span>
      <Link className="inline sm:hidden" href="/aviso-legal">
        Legal
      </Link>
      <Link className="hidden sm:inline" href="/aviso-legal">
        Aviso Legal
      </Link>
    </div>
    <div className="flex space-x-2 text-sm">
      <div>Esdocu</div>
      <div>{` • `}</div>
      <div>{`© ${new Date().getFullYear()}`}</div>
      <div className="hidden sm:block">{` • `}</div>
      <div className="hidden sm:block">Cursos y Tutoriales sobre Desarrollo de Software</div>
    </div>
  </div>
);

const config: DocsThemeConfig = {
  logo,
  project: {
    link: 'https://github.com/fabiankaraben/esdocu-dev',
  },
  // chat: {
  //   link: 'https://discord.com',
  // },
  docsRepositoryBase: 'https://github.com/fabiankaraben/esdocu-dev',
  useNextSeoProps() {
    const { route } = useRouter()
    let props = {}
    if (route !== '/') {
      props['titleTemplate'] = '%s – Esdocu'
      props['noindex'] = route === '/aviso-legal' || route === '/politica-de-cookies' || route === '/politica-de-privacidad'
    } else {
      props['description'] = 'Un proyecto de cursos y tutoriales sobre desarrollo de software.'
    }

    return props
  },
  head: function useHead() {
    const { title } = useConfig()
    const { route } = useRouter()
    const socialCard =
      route === '/' || !title
        ? 'https://esdocu.dev/og.jpeg'
        : `https://esdocu.dev/api/og?title=${title}`

    return (
      <>
        <meta name="msapplication-TileColor" content="#fff" />
        <meta name="theme-color" content="#fff" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Language" content="es" />

        <meta
          name="og:description"
          content="Un proyecto de cursos y tutoriales sobre desarrollo de software."
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={socialCard} />
        <meta name="twitter:site:domain" content="esdocu.dev" />
        <meta name="twitter:url" content="https://esdocu.dev" />
        <meta
          name="og:title"
          content={title ? title + ' – Esdocu' : 'Esdocu'}
        />
        <meta name="og:image" content={socialCard} />
        <meta name="apple-mobile-web-app-title" content="Esdocu" />
        <link rel="apple-touch-icon" sizes="76x76" href="/favicons/apple-touch-icon.png" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicons/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicons/site.webmanifest" />
        <link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="theme-color" content="#000000" />

        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5376430835440290"
          crossOrigin="anonymous"
        ></script>
      </>
    )
  },
  // banner: {
  //   key: '2.0-release',
  //   text: (
  //     <a href="https://nextra.site" target="_blank" rel="noreferrer">
  //       🎉 Esdocu 2.0 is released. Read more →
  //     </a>
  //   )
  // },
  search: {
    placeholder: 'Buscar en Esdocu...',
    emptyResult: (
      <>
        <span className="nx-block nx-select-none nx-p-8 nx-text-center nx-text-sm nx-text-gray-400">
          Sin resultados para este texto.
        </span>
      </>
    ),
    // loading: '',
    // error: '',
  },
  toc: {
    title: 'EN ESTA PAGINA',
    // extraContent: () => <>
    //   <div className="mt-8">
    //     Ultima actualización del curso:<br />
    //     <strong>13 Sep 2023</strong>.
    //   </div>
    //   Nuevo contenido todos los días.
    // </>
  },
  editLink: {
    text: 'Editar esta página en GitHub →'
  },
  feedback: {
    content: '¿Dudas? Danos tu opinión →',
    labels: 'feedback'
  },
  gitTimestamp: '',
  sidebar: {
    titleComponent({ title, type }) {
      if (type === 'separator') {
        return <span className="cursor-default">{title}</span>
      }
      return <>{title}</>
    },
    defaultMenuCollapseLevel: 1,
    autoCollapse: true,
    toggleButton: true,

  },
  footer: {
    text: footer,
  },
}

export default config
