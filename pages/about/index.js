import Router from 'next/router'
import Head from "next/head";
import {MainLayout} from "../../components/MainLayout";
export default function Index() {

  const linkClickHandler = (e, url = '/') => {
    console.log(url)
    Router.push(url)
  }

  return (
    <MainLayout title={'About'}>
      <h1>About page</h1>
    </MainLayout>
  )
}