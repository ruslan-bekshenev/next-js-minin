import Link from 'next/link'
import Head from 'next/head'
// React component

export default function Index() {

  return <>
    <Head>
      <title>Главная</title>
      <meta name="keywords" content={"nextjs,js,react"} />
      <meta name="description" content={"learn nextjs"} />
      <meta charSet={'utf-8'} />
    </Head>
    <h1>Hello Next.JS!</h1>
    <p><Link href={'/about'}><a>About</a></Link></p>
    <p><Link href={'/posts'}><a>Posts</a></Link></p>
  </>
}