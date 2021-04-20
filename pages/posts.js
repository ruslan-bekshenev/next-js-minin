import {useEffect, useState} from "react";
import Head from "next/head";
import MainLayout from "../components/MainLayout";
import Link from 'next/link'

export default function Posts({ posts }) {
  // const [posts, setPosts] = useState([])

  // useEffect(() => {
  //   async function load() {
  //     const response = await fetch('http://localhost:4200/posts')
  //     const json = await response.json()
  //     setPosts(json)
  //   }
  //
  //   load()
  // }, [])

  return (
    <MainLayout title={'Posts'}>
      <h1>Posts page</h1>
      <ul>
        {
          // в версии 10.1.3 можно не использовать as
          posts.map( item => (
            <li key={item.id}><Link href={`/post/${item.id}`} as={`/post/${item.id}`}><a>{item.title}</a></Link></li>
          ) )
        }
      </ul>
    </MainLayout>
  )
}

Posts.getInitialProps = async (ctx) => {
  const response = await fetch('http://localhost:4200/posts')
  const posts = await response.json()

  return {
    posts
  }
}