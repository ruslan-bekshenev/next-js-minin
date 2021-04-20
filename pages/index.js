import Link from 'next/link'
import MainLayout from "../components/MainLayout";
// React component

export default function Index() {

  return <MainLayout title={'Main'}>
    <h1>Hello Next.JS!</h1>
    <p><Link href={'/about'}><a>About</a></Link></p>
    <p><Link href={'/posts'}><a>Posts</a></Link></p>
  </MainLayout>
}