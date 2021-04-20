import Link from 'next/link'
// React component

export default function Index() {

  return <h1>
    Hello Next.JS!
    <p><Link href={'/about'}><a>About</a></Link></p>
    <p><Link href={'/posts'}><a>Posts</a></Link></p>
  </h1>
}