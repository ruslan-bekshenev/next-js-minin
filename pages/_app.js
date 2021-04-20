import '../styles/main.css'
// используется для инициализации страниц
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  )
}