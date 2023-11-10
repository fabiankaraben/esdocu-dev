import { useRouter } from 'next/router'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { useConfig } from 'nextra-theme-docs'
import Link from 'next/link'

const logo = (
  <Link className="nx-flex nx-items-center hover:nx-opacity-75 ltr:nx-mr-auto rtl:nx-ml-auto" href='/' aria-label="Logo de Esdocu. Ir al home del sitio web.">
    <span>
      <svg height="20" viewBox="0 0 361 70" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_543_351)">
          <path fill="currentColor" d="M17.4258 10.4375H21.1992H49.0898C50.6211 10.4922 51.8789 11.0664 52.8633 12.1602C53.9023 13.2539 54.4219 14.5664 54.4219 16.0977C54.1484 19.3789 52.3711 21.1562 49.0898 21.4297H20.2148C18.1367 21.5391 16.4141 22.332 15.0469 23.8086C13.6797 25.2852 12.668 26.9805 12.0117 28.8945C11.4102 30.7539 11.1094 32.668 11.1094 34.6367C11.1094 36.6055 11.4102 38.5469 12.0117 40.4609C12.668 42.3203 13.6797 43.9883 15.0469 45.4648C16.4141 46.9414 18.1367 47.7344 20.2148 47.8438H49.0898C50.6211 47.8984 51.8789 48.4727 52.8633 49.5664C53.9023 50.6602 54.4219 51.9727 54.4219 53.5039C54.3672 54.9805 53.8203 56.2383 52.7812 57.2773C51.7969 58.2617 50.5664 58.7812 49.0898 58.8359H18.9844H17.4258C13.5977 58.6172 10.4258 57.168 7.91016 54.4883C5.44922 51.7539 3.67188 48.6641 2.57812 45.2188C1.53906 41.7734 1.01953 38.2461 1.01953 34.6367C1.01953 31.0273 1.56641 27.5 2.66016 24.0547C3.75391 20.6094 5.53125 17.5469 7.99219 14.8672C10.4531 12.1328 13.5977 10.6562 17.4258 10.4375ZM54.2578 34.3086C54.2578 35.8398 53.7109 37.125 52.6172 38.1641C51.5781 39.2578 50.293 39.8047 48.7617 39.8047H23.9883C22.457 39.8047 21.1445 39.2852 20.0508 38.2461C19.0117 37.1523 18.4922 35.8398 18.4922 34.3086C18.4922 32.7773 19.0117 31.4648 20.0508 30.3711C21.1445 29.332 22.457 28.8125 23.9883 28.8125H48.7617C50.293 28.8125 51.5781 29.3594 52.6172 30.4531C53.7109 31.4922 54.2578 32.7773 54.2578 34.3086ZM114.019 15.9336C114.019 17.4648 113.472 18.75 112.379 19.7891C111.34 20.8828 110.054 21.4297 108.523 21.4297H75.7106C74.6716 21.4844 73.7966 21.7305 73.0856 22.168C72.4294 22.5508 71.9372 23.0156 71.6091 23.5625C71.2809 24.0547 71.1169 24.5742 71.1169 25.1211C71.1169 25.668 71.2809 26.2148 71.6091 26.7617C71.9372 27.2539 72.4294 27.7188 73.0856 28.1562C73.7966 28.5391 74.6716 28.7578 75.7106 28.8125H99.0075C102.836 28.9219 105.98 29.8242 108.441 31.5195C110.957 33.1602 112.734 35.0742 113.773 37.2617C114.867 39.3945 115.414 41.582 115.414 43.8242C115.414 46.0117 114.867 48.1992 113.773 50.3867C112.679 52.5195 110.902 54.4336 108.441 56.1289C105.98 57.7695 102.836 58.5898 99.0075 58.5898H98.5153C98.1872 58.6445 97.8591 58.6719 97.5309 58.6719H66.5231C64.9919 58.6719 63.6794 58.1523 62.5856 57.1133C61.5466 56.0195 61.027 54.707 61.027 53.1758C61.027 51.6445 61.5739 50.3594 62.6677 49.3203C63.7067 48.2266 64.9919 47.6797 66.5231 47.6797H99.4997C100.539 47.7344 101.386 47.543 102.043 47.1055C102.754 46.668 103.273 46.1758 103.601 45.6289C103.929 45.0273 104.093 44.4258 104.093 43.8242C104.093 43.4414 103.929 42.9219 103.601 42.2656C103.273 41.5547 102.754 40.9805 102.043 40.543C101.386 40.1055 100.539 39.8594 99.4997 39.8047H76.2028C72.3747 39.6953 69.2028 38.8203 66.6872 37.1797C64.2262 35.5391 62.4489 33.6797 61.3552 31.6016C60.3161 29.4688 59.7966 27.3086 59.7966 25.1211C59.7966 22.9883 60.3434 20.8828 61.4372 18.8047C62.5309 16.6719 64.3083 14.7852 66.7692 13.1445C69.2302 11.5039 72.3747 10.6289 76.2028 10.5195H76.695C77.0231 10.4648 77.3512 10.4375 77.6794 10.4375H108.523C110.054 10.4375 111.34 10.9844 112.379 12.0781C113.472 13.1172 114.019 14.4023 114.019 15.9336ZM158.523 10.4375C162.351 10.6562 165.495 12.1328 167.956 14.8672C170.417 17.5469 172.195 20.6094 173.288 24.0547C174.382 27.5 174.929 31.0273 174.929 34.6367C174.929 38.2461 174.382 41.7734 173.288 45.2188C172.249 48.6641 170.472 51.7539 167.956 54.4883C165.495 57.168 162.351 58.6172 158.523 58.8359H128.335C126.859 58.7812 125.601 58.2617 124.562 57.2773C123.577 56.2383 123.058 54.9805 123.003 53.5039V33.1602C123.058 31.6289 123.632 30.3711 124.726 29.3867C125.82 28.3477 127.132 27.8281 128.663 27.8281C130.14 27.8828 131.398 28.4297 132.437 29.4688C133.476 30.4531 134.023 31.6836 134.077 33.1602V45.6289C134.077 47.1055 134.843 47.8438 136.374 47.8438H155.734C157.812 47.7344 159.535 46.9414 160.902 45.4648C162.269 43.9883 163.253 42.3203 163.855 40.4609C164.511 38.5469 164.839 36.6055 164.839 34.6367C164.839 32.668 164.511 30.7539 163.855 28.8945C163.253 26.9805 162.269 25.2852 160.902 23.8086C159.535 22.332 157.812 21.5391 155.734 21.4297H128.335C125.054 21.1562 123.277 19.3789 123.003 16.0977C123.003 14.5664 123.495 13.2539 124.48 12.1602C125.519 11.0664 126.804 10.4922 128.335 10.4375H158.523ZM226.241 10.4375C229.03 10.4922 231.519 11.3672 233.706 13.0625C235.894 14.7578 237.644 16.7813 238.956 19.1328C240.323 21.4844 241.335 23.9727 241.991 26.5977C242.648 29.2227 242.976 31.9023 242.976 34.6367C242.976 38.2461 242.401 41.8008 241.253 45.3008C240.159 48.7461 238.327 51.8086 235.757 54.4883C233.241 57.168 230.069 58.6172 226.241 58.8359H197.612C193.784 58.6719 190.585 57.25 188.015 54.5703C185.444 51.8906 183.612 48.8008 182.519 45.3008C181.48 41.8008 180.96 38.2461 180.96 34.6367C180.96 31.0273 181.507 27.5 182.601 24.0547C183.694 20.5547 185.499 17.4648 188.015 14.7852C190.585 12.0508 193.784 10.6016 197.612 10.4375H199.171H224.683H226.241ZM223.452 47.8438C225.53 47.7344 227.253 46.9688 228.62 45.5469C230.042 44.0703 231.054 42.375 231.655 40.4609C232.257 38.5469 232.558 36.6055 232.558 34.6367C232.558 32.668 232.23 30.7539 231.573 28.8945C230.972 26.9805 229.987 25.2852 228.62 23.8086C227.253 22.332 225.53 21.5391 223.452 21.4297H200.155C198.077 21.5391 196.355 22.332 194.987 23.8086C193.62 25.2852 192.608 26.9805 191.952 28.8945C191.351 30.7539 191.05 32.668 191.05 34.6367C191.05 36.6055 191.351 38.5469 191.952 40.4609C192.554 42.375 193.538 44.0703 194.905 45.5469C196.327 46.9688 198.077 47.7344 200.155 47.8438H223.452ZM268.94 21.4297C266.862 21.5391 265.112 22.332 263.69 23.8086C262.323 25.2852 261.339 26.9805 260.737 28.8945C260.135 30.7539 259.835 32.668 259.835 34.6367C259.835 36.6055 260.108 38.5469 260.655 40.4609C261.257 42.375 262.268 44.0703 263.69 45.5469C265.112 46.9688 266.862 47.7344 268.94 47.8438H296.01C299.456 48.1719 301.342 50.0586 301.671 53.5039C301.616 55.0352 301.042 56.3203 299.948 57.3594C298.854 58.3438 297.542 58.8359 296.01 58.8359H269.842H266.069C262.241 58.6172 259.096 57.168 256.635 54.4883C254.175 51.7539 252.397 48.6641 251.303 45.2188C250.264 41.7734 249.745 38.2461 249.745 34.6367C249.745 31.957 250.046 29.3047 250.647 26.6797C251.249 24.0547 252.178 21.5664 253.436 19.2148C254.749 16.8086 256.471 14.7578 258.604 13.0625C260.792 11.3672 263.28 10.4922 266.069 10.4375H267.628H296.01C299.456 10.7656 301.342 12.6523 301.671 16.0977C301.671 17.6289 301.096 18.9141 299.948 19.9531C298.854 20.9375 297.542 21.4297 296.01 21.4297H268.94ZM333.705 60.7227C330.862 60.7227 328.045 60.3945 325.256 59.7383C322.522 59.082 319.897 58.125 317.381 56.8672C314.866 55.5547 312.651 53.832 310.737 51.6992C308.823 49.5664 307.784 47.0234 307.62 44.0703V40.625V14.457C307.62 12.9258 308.166 11.668 309.26 10.6836C310.409 9.64453 311.748 9.125 313.28 9.125C316.561 9.39844 318.338 11.1758 318.612 14.457V41.5273C318.721 43.2227 319.35 44.6445 320.498 45.793C321.702 46.8867 323.014 47.7617 324.436 48.418C325.913 49.0742 327.416 49.5664 328.948 49.8945C330.534 50.2227 332.12 50.3867 333.705 50.3867C335.291 50.3867 336.85 50.2227 338.381 49.8945C339.967 49.5664 341.471 49.0742 342.893 48.418C344.37 47.7617 345.682 46.8867 346.83 45.793C348.034 44.6445 348.69 43.2227 348.799 41.5273V14.457C348.799 12.9258 349.346 11.668 350.44 10.6836C351.588 9.64453 352.928 9.125 354.459 9.125C357.741 9.39844 359.545 11.1758 359.873 14.457V40.625V44.0703C359.709 47.0234 358.643 49.5664 356.674 51.6992C354.76 53.832 352.545 55.5547 350.03 56.8672C347.514 58.125 344.862 59.082 342.073 59.7383C339.338 60.3945 336.549 60.7227 333.705 60.7227Z" />
        </g>
        <defs>
          <clipPath id="clip0_543_351">
            <rect width="361" height="70" fill="white" />
          </clipPath>
        </defs>
      </svg>
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
  </Link>
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
  logoLink: false,
  project: {
    link: 'https://github.com/fabiankaraben/esdocu-dev',
  },
  // chat: {
  //   link: 'https://discord.com',
  // },
  docsRepositoryBase: 'https://github.com/fabiankaraben/esdocu-dev',
  useNextSeoProps() {
    const { route } = useRouter()
    const { frontMatter } = useConfig()

    let props = {}

    props['titleTemplate'] = route !== '/' ? '%s – Esdocu Cursos y Tutoriales' : frontMatter.title

    props['description'] = frontMatter.description ?? null
    props['noindex'] = frontMatter.noindex ?? false

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

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={socialCard} />
        <meta name="twitter:site:domain" content="esdocu.dev" />
        <meta name="twitter:url" content="https://esdocu.dev" />
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
