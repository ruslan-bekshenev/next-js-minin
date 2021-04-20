import Link from 'next/link'
import Head from "next/head";

export default function MainLayout({ children, title = 'Next App' }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="keywords" content={"nextjs,js,react"} />
        <meta name="description" content={"learn nextjs"} />
        <meta charSet={'utf-8'} />
      </Head>
      <nav>
        <Link href={'/'}>
          <a>Home</a>
        </Link>
        <Link href={'/about'}>
          <a>About</a>
        </Link>
        <Link href={'/posts'}>
          <a>Posts</a>
        </Link>
      </nav>
      <main>
        {children}
      </main>
      <style jsx global>
        {`
          main {
            padding: 100px 0;
          }
          nav {
            position: fixed;
            height:  60px;
            left: 0;
            top: 0;
            right: 0;
            background: darkblue;
            display: flex;
            justify-content: space-around;
            align-items: center;
          }
          
          nav a {
            color: #fff;
            text-decoration: none;
          }
        `}
      </style>
    </>
  )
}